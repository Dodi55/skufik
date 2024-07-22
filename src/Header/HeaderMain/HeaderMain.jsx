import './HeaderMain.sass'
import { Link, NavLink } from 'react-router-dom'
import { FiAlignJustify, FiChevronDown, FiPhoneCall, FiBarChart2, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import HeaderBasketItem from './HeaderBasketItem';
import { useData, useData2 } from '../../App';
import { useContext, useState } from 'react';
import Catalog from './Catalog/Catalog';



export function HeaderMain(params) {
    const {data, activeBasket, setActiveBasket, setValue, catalog, setCatalog, heart} = useData();

    const priceArray = data.map(el => (el.price));
    let price;
    ((priceArray.length) ? price = priceArray.reduce((el,el2) => el + el2): false)

    return(
        <>
        <div className='header-main'>
            <div className="container">
                <div className='header-main-flex'>
                    
                    {catalog && <Catalog />}
                    <div className='header-main-logo'>
                        <NavLink to="/">
                            <img src="https://maxmobiles.ru/images/logos/73/logo__.svg" width={195} alt="" />
                        </NavLink>
                    </div>
                    
                    <div className='header-main-catalog' onClick={() => setCatalog(!catalog)}>
                        <FiAlignJustify  className='header-main-catalog-icon'/>
                        <button className=''>Каталог</button>
                        <FiChevronDown  className='header-main-catalog-icon2'/>

                    </div>
                    
                    <div className='header-main-search'>
                        <input type="text" />
                        <SlMagnifier className='header-main-search-icon'/>
                    </div>


                    <div className='header-main-info'>
                        <div className='header-main-info-phone'>
                            <FiPhoneCall style={{color: 'black', fontSize: '26px'}}/>
                            <a href="tel:+79783462144" >8 (978) 346-21-44</a>
                        </div>

                        <div className='header-main-info-icons'>
                            <a href="/error"><FiBarChart2 className='header-main-info-icon'/></a>

                            <Link to='/heart'  style={{position: 'relative'}} onClick={(e) => {if (!heart.length) e.preventDefault()}}>
                                <FiHeart className='header-main-info-icon' />
                            </Link>
                            
                            <a href=""><FiUser className='header-main-info-icon'/></a>

                            <a href="" style={{position: 'relative'}} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (data.length) {
                                    setActiveBasket(!activeBasket)
                                }
                            }}>
                                <FiShoppingCart className={data.length != 0 ? 'header-main-info-icon': 'header-main-info-icon basket-hidden'}/>
                                <div className='shopBasket-count'>{data.length != 0 && data.length}</div>
                            </a>
                            <div className={activeBasket ?'header-main-info-basket' : 'header-main-info-basket hidden'}>
                                
                                {data.map(el => <HeaderBasketItem key={el.id} id={el.id} price={el.price} src={el.src} name={el.name}/>)}
                                <div className='header-main-info-basket-price-block'>
                                    <p className='header-main-info-basket-price'>Итог: <span style={{color: '#FFD700'}}>{price && price.toLocaleString('es-ES')}</span> ₽</p>
                                    <button onClick={() => setValue()} className='header-main-info-basket-price-reset'>Удалить все</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )  
}