import React, { useContext } from 'react';
import './Layout.css';
import { electronics, shoes, clothes, watches, makeup } from './Data';
import { cartContext } from '../App';
export const Layout = () => {
    const { cart, setCart } = useContext(cartContext);
    return (
        <div>
            <div className='categoryDivison'>
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746661/Electronics_pk3gdt.jpg" alt='Images of Electronics' className='categoryImage'></img></div>
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
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746321/Clothes_q5cnxg.jpg" alt='Images of Clothes' className='categoryImage'></img></div>
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
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746508/Shoes_r6pxvy.jpg" alt='Images of Shoes' className='categoryImage'></img></div>
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
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746504/Watches_ipvdtd.jpg" alt='Images of Watches' className='categoryImage'></img></div>
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
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746495/Makeup_cm3aby.jpg" alt='Images of Makeup' className='categoryImage'></img></div>
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