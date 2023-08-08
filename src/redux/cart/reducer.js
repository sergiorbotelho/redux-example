import cartActionTypes from "./action-types";

const initialSate = {
  products: [],
};

const cartReducer = (state = initialSate, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (item) => item.id === action.payload.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case cartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id !== action.payload
        ),
      };

    case cartActionTypes.INCREMENT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case cartActionTypes.DECREMENT_PRODUCT:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;
