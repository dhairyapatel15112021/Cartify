import React, { useContext } from 'react';
import './Heading.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../App';
export const Heading = () => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className='storeName'>
      <Link to="/" className='link'>
        Cartify
      </Link>
      <div className='cart'>
        <Link to='/cart' className='link' >
          Cart
        </Link>
        <div className='cartNumber'>{cart.length}</div>
      </div>
    </div>
  )
}
