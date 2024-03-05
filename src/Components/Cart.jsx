import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../App'
import './Cart.css';

const calculateTotal = (cart) => {
  var Total = 0;
  for (var i = 0; i < cart.length; i++) {
    Total += cart[i].price;
  }
  return Total;
}
export const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(() => calculateTotal(cart));
  useEffect(() => {
    setTotal(calculateTotal(cart));
  }, [cart]);
  const cartUpdate = (index) => {
    const Cart = [...cart];
    Cart.splice(index, 1);
    setCart(Cart);
  }
  return (
    <div className='cartPage'>
      <div className='cartList'>
        <div className='cartHeader'>
          <div className='shoppingCart'>Shopping Cart</div>
          <div className='itemsAndPrice'>
            <div>items</div>
            <div>price</div>
          </div>
          <hr></hr>
        </div>
        {cart.length === 0 ?
          <div className='emptyCart'>Empty Cart</div> :
          <>{
            cart.map((item, index) => {
              return (
                <>
                  <div className='cartProduct'>
                    <img className='cartProductImage' src={item.image} alt='productsImage'></img>
                    <div className='cartProductDescription'>{item.description}</div>
                    <button className='cartProductRemove' onClick={() => cartUpdate(index)}>remove</button>
                    <div className='cartProductPrice'>{item.price}</div>

                  </div>
                  <hr className='horizontalLine'></hr>
                </>
              )
            })}
            <div className='subtotal'>
              Subtotal ({cart.length} items) : {total}
            </div>
          </>
        }

      </div>
      {
        cart.length === 0 ? "" :
          <div className="paymentToBuy">
            <div className='delivery'>Add <span className='productPricePayment'>₹120.00 </span>of eligible items to your order to qualify for FREE Delivery</div>
            <div className='subtotalPayment'>Subtotal ({cart.length} items) : {total}</div>
            <button className='buy'>Proceed to Buy</button>
          </div>
      }


    </div>
  )
}
