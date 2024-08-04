import React, { useContext } from 'react';
import './Layout.css';
import { electronics, shoes, clothes, watches, makeup } from './Data';
import Makeup from '../Assets/Makeup/Makeup.jpg';
import Watches from '../Assets/Watches/Watches.jpg';
import Shoes from '../Assets/Shoes/Shoes.jpg';
import Clothes from '../Assets/Clothes/Clothes.jpg';
import Electronics from '../Assets/Electronics/Electronics.jpg';
import { cartContext } from '../App';
export const Layout = () => {
    const { cart, setCart } = useContext(cartContext);
    return (
        <div>
            <div className='categoryDivison'>
                <div className='category'><img src={Electronics} alt='Images of Electronics' className='categoryImage'></img></div>
                <div>{electronics.map((item, index) => {
                    return (
                        <>
                            <div className='products' key={index}>
                                <img src={item.image} alt='Images of Electronics' className='productsImage'></img>
                                <div className='description'>{item.description}</div>
                                <div className='price'> <span className='priceTag'>Price :</span> {item.price}</div>
                                <button className='button' onClick={() => {
                                    setCart([...cart, item])
                                }}>Add To Cart</button>
                            </div>
                        </>
                    )
                })}
                </div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src={Clothes} alt='Images of Clothes' className='categoryImage'></img></div>
                <div>
                    {clothes.map((item, index) => {
                        return (
                            <>
                                <div className='products' key={index}>
                                    <img src={item.image} alt='Images of Clothes' className='productsImage'></img>
                                    <div className='description'> {item.description}</div>
                                    <div className='price'> <span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div>
                            </>
                        )
                    })}</div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src={Shoes} alt='Images of Shoes' className='categoryImage'></img></div>
                <div>
                    {shoes.map((item, index) => {
                        return (
                            <>
                                <div className='products' key={index}>
                                    <img src={item.image} alt='Images of Shoes' className='productsImage'></img>
                                    <div className='description'>{item.description}</div>
                                    <div className='price'><span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src={Watches} alt='Images of Watches' className='categoryImage'></img></div>
                <div>
                    {watches.map((item, index) => {
                        return (
                            <>
                                <div className='products' key={index}>
                                    <img src={item.image} alt='Images of Watches' className='productsImage'></img>
                                    <div className='description'>{item.description}</div>
                                    <div className='price'><span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src={Makeup} alt='Images of Makeup' className='categoryImage'></img></div>
                <div>
                    {makeup.map((item, index) => {
                        return (
                            <>
                                <div className='products' key={index}>
                                    <img src={item.image} alt='Images of Makeup' className='productsImage'></img>
                                    <div className='description'>{item.description}</div>
                                    <div className='price'><span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}