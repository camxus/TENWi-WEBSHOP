import validator from "validator";
import isEmpty from "./isEmpty";

const validateAndSanitizeCheckoutForm = (data, hasStates = true) => {
  const errors = {};
  const sanitizedData = {};

  // Create a copy of the data object to avoid mutation
  const formData = { ...data };

  // Ensure all fields exist in the data copy
  const fields = [
    "firstName",
    "lastName",
    "company",
    "country",
    "address1",
    "address2",
    "city",
    "state",
    "postcode",
    "phone",
    "email",
    "createAccount",
    "orderNotes",
  ];

  fields.forEach((field) => {
    formData[field] = !isEmpty(formData[field]) ? formData[field] : "";
  });

  /**
   * Adds error messages and sanitizes data if valid
   *
   * @param {String} fieldName - The field name in the formData object
   * @param {String} errorContent - The label for error messages
   * @param {Integer} min - Minimum allowed length
   * @param {Integer} max - Maximum allowed length
   * @param {String} type - The type of field ("string", "email", "phone", etc.)
   * @param {boolean} required - Whether the field is required
   */
  const addErrorAndSanitizedData = (
    fieldName,
    errorContent,
    min,
    max,
    type = "string",
    required = false
  ) => {
    let value = formData[fieldName];

    // Remove spaces for phone validation
    if (type === "phone") {
      value = value.replace(/\s+/g, "");
    }

    // Validate length
    if (!validator.isLength(value, { min, max })) {
      errors[fieldName] = `${errorContent} must be ${min} to ${max} characters`;
    }

    // Validate specific types
    if (type === "email" && !validator.isEmail(value)) {
      errors[fieldName] = `${errorContent} is not valid`;
    } else if (type === "phone" && !validator.isMobilePhone(value)) {
      errors[fieldName] = `${errorContent} is not valid`;
    }

    // Validate required fields
    if (required && validator.isEmpty(value)) {
      errors[fieldName] = `${errorContent} is required`;
    }

    // Sanitize data if no errors
    if (!errors[fieldName]) {
      sanitizedData[fieldName] = validator.escape(validator.trim(value));
      if (type === "email") {
        sanitizedData[fieldName] = validator.normalizeEmail(
          sanitizedData[fieldName]
        );
      } else if (type === "phone") {
        sanitizedData[fieldName] = value; // Store sanitized phone without spaces
      }
    }
  };

  // Validate and sanitize each field
  addErrorAndSanitizedData("firstName", "First name", 2, 35, "string", true);
  addErrorAndSanitizedData("lastName", "Last name", 2, 35, "string", true);
  addErrorAndSanitizedData("company", "Company Name", 0, 35, "string", false);
  addErrorAndSanitizedData("country", "Country name", 2, 55, "string", true);
  addErrorAndSanitizedData(
    "address1",
    "Street address line 1",
    3,
    100,
    "string",
    true
  );
  addErrorAndSanitizedData(
    "address2",
    "Street address line 2",
    0,
    254,
    "string",
    false
  );
  addErrorAndSanitizedData("city", "City field", 3, 25, "string", true);
  addErrorAndSanitizedData(
    "state",
    "State/County",
    0,
    254,
    "string",
    hasStates
  );
  addErrorAndSanitizedData("postcode", "Post code", 2, 10, "postcode", true);
  addErrorAndSanitizedData("phone", "Phone number", 10, 15, "phone", true);
  addErrorAndSanitizedData("email", "Email", 11, 254, "email", true);

  // The data.createAccount is a boolean value.
  sanitizedData.createAccount = data.createAccount;
  addErrorAndSanitizedData(
    "orderNotes",
    "Order notes",
    0,
    254,
    "string",
    false
  );
  // @TODO Payment mode error to be handled later.
  // addErrorAndSanitizedData( 'paymentMethod', 'Payment mode field', 2, 50, 'string', false );

  return {
    sanitizedData,
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateAndSanitizeCheckoutForm;
