import React from 'react';
import { useData } from "../App"
import { ItemTovar } from '../Menu/Categori/ItemTovar';
import './Heart.sass'
import { MenuName } from '../Menu/Categori/MenuName';
import {Navigate} from 'react-router-dom'


function Heart() {
    const {data, setValue, deleteBasket, heart, setHeart, addHeart, deleteHeart} = useData();

    return (
        <>
            <div className="container" style={{maxWidth: '1250px'}}>
                <MenuName name={'Избранные товары'}/>
                <div className="heart-flexbox">
                    { heart.map(el => <ItemTovar src={el.src} name={el.name} price={el.price} key={el.id} id={el.id} />)}
                </div>
            </div>
        </>
    );
}

export default Heart;