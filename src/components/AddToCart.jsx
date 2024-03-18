import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink} from "react-router-dom";
import { Button } from "../Button";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1)
  
  const setDecrease = () => {
    amount > 1 ? setAmount(amount-1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount+1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((eachCol, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: eachCol }}
                className={color === eachCol ? "btn-style active" : "btn-style"}
                onClick={() => setColor(eachCol)}
              >
                {color === eachCol ? <FaCheck className="check-style" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart functionality */}
      <CartAmountToggle
        amount={amount}
        setDec={setDecrease}
        setInc={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btn-style {
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

  .check-style {
    font-size: 1rem;
    color: #fff;
    position: relative;
    top: -0.2rem;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
