import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { useRef, useState } from "react";
import { PuffLoader } from "react-spinners";
import { object, string } from "yup";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"; // ✅ Added
import { X } from "react-feather";

interface IDialog {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Dialog({ setOpen }: IDialog) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const [status, setStatus] = useState({
    status: "",
    loading: false,
  });
  const formikRef = useRef<FormikProps<typeof initialValues>>(null);

  const validationSchema = object().shape({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    email: string().email("Invalid email").required("Email is required"),
    phone: string().matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  });

  const onSubmit = async (values: any) => {
    try {
      setStatus((status) => ({ ...status, loading: true }));
      await submitMailchimp(values);
      setStatus({ status: "success", loading: false });
    } catch (e: any) {
      setStatus({ status: "error", loading: false });
      console.error("Error:", e.response?.data || e);
    }
  };

  const handleDialogClose = () => {
    setOpen(false);
    if (formikRef.current) formikRef.current.resetForm();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleDialogClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-lg fade-in z-10"
        onClick={handleOverlayClick}
        style={{ backgroundColor: "rgb(0 0 0 / 50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // ✅ Fade out on close
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden h-[80vh] w-[70vw]"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <X className="fill-black md:fill-white absolute top-1 right-1 z-10 cursor-pointer" height={30} onClick={() => setOpen(false)}/>
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/assets/images/png/newsletter.png"
              alt="Newsletter"
              fill
              className="object-cover"
            />
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(e) => onSubmit(e)}
            validationSchema={validationSchema}
            innerRef={formikRef}
          >
            <Form className="flex flex-col gap-5 w-full md:w-1/2 p-8">
              <h2 className="text-xl font-bold text-center md:text-left leading-tight">
                CLAIM YOUR -10% MEMBER&apos;S DISCOUNT.
                <br /> JOIN THE CULT.
              </h2>

              <div className="text-left w-full">
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className="w-full p-2 rounded border border-gray-300"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div className="text-left w-full">
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full p-2 rounded border border-gray-300"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div className="text-left w-full">
                <Field
                  name="email"
                  placeholder="E-Mail"
                  className="w-full p-2 rounded border border-gray-300"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div className="text-left w-full">
                <Field
                  name="phone"
                  placeholder="Phone Number (optional)"
                  className="w-full p-2 rounded border border-gray-300"
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="text-red-500"
                />
              </div>

              {status.status === "success" ? (
                "You've been added to the mailing list"
              ) : (
                <button
                  type="submit"
                  className="w-full text-white py-2 px-4 rounded flex justify-center"
                  disabled={status.loading}
                  style={{
                    background: status.status === "error" ? "red" : "black",
                  }}
                >
                  {status.loading ? (
                    <PuffLoader size={24} color="white" />
                  ) : status.status === "error" ? (
                    "Try Again"
                  ) : (
                    "Submit"
                  )}
                </button>
              )}
            </Form>
          </Formik>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Dialog;

// unchanged submitMailchimp function
export const submitMailchimp = async (values: {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}) => {
  const requestBody = {
    email_address: "",
    email_type: "html",
    status: "subscribed",
    merge_fields: { FNAME: "", LNAME: "", PHONE: "" },
    interests: {},
    language: "",
    vip: false,
    location: { latitude: 0, longitude: 0 },
    marketing_permissions: [],
    ip_signup: "",
    timestamp_signup: "",
    ip_opt: "",
    timestamp_opt: "",
    tags: [],
  };

  await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/mailchimp`,
    {
      ...requestBody,
      email_address: values.email,
      merge_fields: {
        FNAME: values.firstName,
        LNAME: values.lastName,
        PHONE: values.phone,
      },
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
