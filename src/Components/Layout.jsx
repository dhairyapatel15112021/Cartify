import React, { useContext } from 'react';
import './Layout.css';
import { electronics, shoes, clothes, watches, makeup } from './Data';
import { cartContext } from '../App';
import { useWatch } from '../hooks/useWatch';
import { useShoe } from '../hooks/useShoe';
import { useMakeUp } from '../hooks/useMakeUp';
import { useElectronic } from '../hooks/useElectronic';
import { useCloth } from '../hooks/useCloth';
import { Loader } from './Loader';
export const Layout = () => {
    const { cart, setCart } = useContext(cartContext);
    const makeUp = useMakeUp(makeup);
    const watch = useWatch(watches);
    const shoe = useShoe(shoes);
    const electronic = useElectronic(electronics);
    const cloth = useCloth(clothes);
    
    const handleCart = (item)=>{
        const id = item.id;
        const index = cart.findIndex((item)=>item.id===id);
        if(index===-1){
            setCart([...cart, {...item,quntity:1}]);
        }
        else{
            const oldCart = [...cart];
            oldCart[index].quntity += 1;
            setCart(oldCart);
        }
    }
    return (
        <div className='layout'>
            <div className='categoryDivison'>
                <div className='category'>
                    <img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746321/Clothes_q5cnxg.jpg" alt='Images of Electronics' className='categoryImage'></img>
                </div>
                <div>{electronic.map((item, index) => {
                    return (
                            <div className='products' key={index}>
                                {
                                    item.loading ? <div className='productsImage' style={{ width: "30vw", display: "flex", justifyContent: "center", alignItems: "center" }}><Loader/></div> : <img src={item.image} alt='Images of Electronics' className='productsImage'></img>
                                }
                                <div className='description'>{item.description}</div>
                                <div className='price'> <span className='priceTag'>Price :</span> {item.price}</div>
                                <button className='button' onClick={() => {
                                    handleCart(item)
                                }}>Add To Cart</button>
                            </div>
                    )
                })}
                </div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746321/Clothes_q5cnxg.jpg" alt='Images of Clothes' className='categoryImage'></img></div>
                <div>
                    {cloth.map((item, index) => {
                        return (
                                <div className='products' key={index}>
                                    {
                                        item.loading ? <div className='productsImage' style={{ width: "30vw", display: "flex", justifyContent: "center", alignItems: "center" }}><Loader/></div> : <img src={item.image} alt='Images of Clothes' className='productsImage'></img>
                                    }
                                    <div className='description'> {item.description}</div>
                                    <div className='price'> <span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div>
                        )
                    })}</div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746508/Shoes_r6pxvy.jpg" alt='Images of Shoes' className='categoryImage'></img></div>
                <div>
                    {shoe.map((item, index) => {
                        return (
                                <div className='products' key={index}>
                                    {
                                        item.loading ? <div className='productsImage' style={{ width: "30vw", display: "flex", justifyContent: "center", alignItems: "center" }}><Loader/></div> : <img src={item.image} alt='Images of Shoes' className='productsImage'></img>
                                    }
                                    <div className='description'>{item.description}</div>
                                    <div className='price'><span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div> 
                        )
                    })}
                </div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746504/Watches_ipvdtd.jpg" alt='Images of Watches' className='categoryImage'></img></div>
                <div>
                    {watch.map((item, index) => {
                        return (
                                <div className='products' key={index}>
                                    {
                                        item.loading ? <div className='productsImage' style={{ width: "30vw", display: "flex", justifyContent: "center", alignItems: "center" }}><Loader/></div> : <img src={item.image} alt='Images of Watches' className='productsImage'></img>
                                    }
                                    <div className='description'>{item.description}</div>
                                    <div className='price'><span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div>
                        )
                    })}
                </div>
            </div>
            <div className='categoryDivison'>
                <div className='category'><img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1722746495/Makeup_cm3aby.jpg" alt='Images of Makeup' className='categoryImage'></img></div>
                <div>
                    {makeUp.map((item, index) => {
                        return (
                                <div className='products' key={index}>
                                    {
                                        item.loading ? <div className='productsImage' style={{ width: "30vw", display: "flex", justifyContent: "center", alignItems: "center" }}><Loader/></div> : <img src={item.image} alt='Images of Makeup' className='productsImage'></img>
                                    }

                                    <div className='description'>{item.description}</div>
                                    <div className='price'><span className='priceTag'>Price :</span> {item.price}</div>
                                    <button className='button' onClick={() => {
                                        setCart([...cart, item])
                                    }}>Add To Cart</button>
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}