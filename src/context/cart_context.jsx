import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("Shaw-Cart");
  if (localCartData === null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  //   cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //increment and decrement

  const setDecrease = (id) => {
    dispatch({type:"SET_DECREMENT", payload: id})
  }

  const setIncrease = (id) => {
    dispatch({type:"SET_INCREMENT", payload: id})
  }

  //   delete functionality
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // ADD data in localStorage

  useEffect(() => {
    // dispatch({type:"CART_TOTAL_ITEM"})
    // dispatch({type:"CART_TOTAL_PRICE"})
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("Shaw-Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

//custom hook
export const useCartContext = () => {
  return useContext(CartContext);
};
