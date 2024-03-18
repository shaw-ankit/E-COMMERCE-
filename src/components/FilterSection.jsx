import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_context";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";
import { Button } from "../Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice},
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // to get unique data of each field
  const getUniqueData = (data, property) => {
    let newValue = data.map((each) => {
      return each[property];
    });
    if (property === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newValue = newValue.flat();
    }
    // console.log(newValue);
    return (newValue = ["all", ...new Set(newValue)]);
  };

  //code for fetching unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((each, i) => {
            return (
              <button
                key={i}
                type="button"
                name="category"
                value={each}
                className={each === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {each}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((each, i) => {
              return (
                <option key={i} value={each} name="company">
                  {each}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsOnlyData.map((curColor, index) => {
            if (curColor === "all"){
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  // style={{ backgroundColor: curColor }}
                  className="color-all--style"
                  onClick={updateFilterValue}
                >
                  all
                </button>
              );
  
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle"/> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-price">
        <h3>Price</h3>

        <p>
          <FormatPrice props={price}/>
        </p>
        <input 
        type="range" 
        name="price"
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
    position: relative;
    top: -0.3rem;
  }

  .filter-price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;
