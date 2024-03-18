import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartAmountToggle = ( { amount, setDec , setInc}) => {
  return (
    <>
    <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={() => setDec()}>
                <FaMinus/>
            </button>
            <div className="amount-style">{amount}</div>
            <button onClick={() => setInc()}>
                <FaPlus/>
            </button>
        </div>
    </div>
    </>
  )
}

export default CartAmountToggle
