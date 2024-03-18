
const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    // Checking the existing products
    let existingProduct = state.cart.find((each) => each.id === id + color);
    // console.log(existingProduct);

    if (existingProduct) {
      let updatedProduct = state.cart.map((each) => {
        if (each.id === id + color) {
          let newAmount = each.amount + amount;

          if (newAmount >= each.max) {
            newAmount = each.max;
          }
          return {
            ...each,
            amount: newAmount,
          };
        } else {
          return each;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //   set increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedData = state.cart.map((each) => {
      if (each.id === action.payload) {
        // console.log( each );
        let decAmt = each.amount - 1;

        if (decAmt <= 1) {
          decAmt = 1;
        }

        return {
          ...each,
          amount: decAmt,
        };
      } else {
        return each;
      }
    });
    return {
      ...state,
      cart: updatedData,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedData = state.cart.map((each) => {
      if (each.id === action.payload) {
        let incAmt = each.amount + 1;

        if (incAmt >= each.max) {
          incAmt = each.max;
        }

        return {
          ...each,
          amount: incAmt,
        };
      } else {
        return each;
      }
    });
    return { ...state, cart: updatedData };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((each) => each.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

//   if(action.type === "CART_TOTAL_ITEM" ) {
//     let updatedItemInCart = state.cart.reduce((acc,each) => {
//         let {amount} = each;

//         acc += amount;
//         return acc;
//     },0)

//     return {
//         ...state,
//         total_item: updatedItemInCart,
//     } 
//   }

//    if (action.type === "CART_TOTAL_PRICE") {
//     let total_price = state.cart.reduce((initialVal, curElem) => {
//       let { price, amount } = curElem;

//       initialVal = initialVal + price * amount;

//       return initialVal;
//     }, 0);

//     return {
//       ...state,
//       total_price,
//     };
//   }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }


  return state;
}

export default CartReducer
