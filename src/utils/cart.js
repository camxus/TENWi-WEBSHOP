import { v4 as uuidv4 } from "uuid";
/**
 * Clear the cart.
 *
 * @param {function} clearCartMutation clearCartMutation function
 * @param {string} previousRequestError Error from previous request.
 *
 * @returns {Promise<{cartCleared: boolean, error: string}>}
 */
export const clearTheCart = async (clearCartMutation) => {
  let response = {
    cartCleared: false,
    error: "",
  };

  try {
    await clearCartMutation({
      variables: {
        input: {
          clientMutationId: uuidv4(),
          all: true,
        },
      },
    });
  } catch (err) {
    throw err;
  }

  return response;
};
