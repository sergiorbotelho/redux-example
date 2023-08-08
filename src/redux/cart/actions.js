import cartActionTypes from "./action-types";

export const AddProduct = (payload) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload,
});
export const incrementProduct = (payload) => ({
  type: cartActionTypes.INCREMENT_PRODUCT,
  payload,
});
export const decrementProduct = (payload) => ({
  type: cartActionTypes.DECREMENT_PRODUCT,
  payload,
});
