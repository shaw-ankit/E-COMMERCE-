import React from 'react'
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';


const CartItem = ({id, name,  image, color, price, amount,}) => {

    const {removeItem, setDecrease, setIncrease } = useCartContext();

    // const setDecrease = () => {
    //     // amount > 1 ? setAmount(amount-1) : setAmount(1);
    //   };
    //   const setIncrease = () => {
    //     // amount < stock ? setAmount(amount+1) : setAmount(stock);
    //   };
    

  return (
    <div className="cart_heading grid grid-five-column">
        {/* first column image and color */}
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>color:</p>
                    <div 
                    className="color-style"
                    style={{backgroundColor: color, color: color}}></div>
                </div>
            </div>
        </div>
        {/* second column price */}
        <div className="cart-hide">
            <p> <FormatPrice props={price} /> </p>
        </div>
        {/* third column Quantity */}
        <CartAmountToggle
        amount={amount}
        setDec={() => setDecrease(id)}
        setInc={() => setIncrease(id)}
        />

        {/* fourth column SubTotal */}

        <div className="cart-hide">
            <p>
                <FormatPrice props={price*amount} />
            </p>
        </div>

        {/* fifth column delete item */}
        <div>
            <FaTrash className='remove_icon' onClick={() => removeItem(id)}/>
        </div>
    </div>
  )
}

export default CartItem
