import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/Filter_Reducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
};

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    // console.log(products);

    const[state, dispatch] = useReducer(reducer, initialState);

    // setting into grid view
    const setGridView = () => {
      return dispatch({ type: "SET_GRID_VIEW"});
    };
    // setting into list view
    const setListView = () => {
      return dispatch({ type: "SET_LIST_VIEW"});
    };

    //sorting functionality
    const sorting = (e) => {
      let userData = e.target.value;
      dispatch({type:"GET_SORT_VALUE", payload: userData})
    }

    //update the filtered values
    const updateFilterValue = (event) => {
      let name = event.target.name;
      let value = event.target.value;
  
      return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

    //to clear the filters
    const clearFilters = () => {
      dispatch({type:"CLEAR_FILTERS"})
    }
  
    // sort the product
    useEffect(() => {
      dispatch({type:"FILTER_PRODUCTS"})
      dispatch({type:"SORTING_PRODUCTS"})
      // console.log("hiiii...")
    },[products, state.sorting_value, state.filters,]);

    useEffect(() => {
      dispatch({type:"LOADING_FILTER_PRODUCTS", payload: products})
    },[products])

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters,}}>
      {children}
    </FilterContext.Provider>
  );
};

// custom hook
export const useFilterContext = () => {
    return useContext(FilterContext);
};
