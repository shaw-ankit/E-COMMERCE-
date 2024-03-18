const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_FILTER_PRODUCTS":
      // let priceArr = action.payload.map((each) => each.price);
      // console.log("Price:---", Math.max.apply(null,priceArr));

      let maxPrice = action.payload.reduce((acc, each) => {
        return acc > each.price ? acc : each.price;
      }, -Infinity);
      // console.log(maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value);

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const compareProducts = (a, b) => {
        switch (sorting_value) {
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          default:
            return filter_products;
        }
        // if(sorting_value === "lowest") {
        //     return a.price - b.price;
        // }
        // if(sorting_value === "highest") {
        //     return b.price - a.price;
        // }
        // if(sorting_value === "a-z") {
        //     return a.name.localeCompare(b.name);
        // }
        // if(sorting_value === "z-a") {
        //     return b.name.localeCompare(a.name);
        // }
      };
      newSortData = tempSortProduct.sort(compareProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };


      case "CLEAR_FILTERS":
        return {
          ...state,
          filters: { 
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: 0,
            price: state.filters.maxPrice,
            minPrice: state.filters.maxPrice,
          },
        };
        
      
    default:
      return state;
  }
};

export default filterReducer;
