import React from 'react';
import './Catalog.sass'

function Catalog(props) {
    return (
        <div className='header-main-catalor-list'>
            <div className='catalor-item'>
                <img width={170} src="https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-iphone-nav-202309_GEO_US_png.webp" alt="" />
                <p>iPhone</p>
            </div>
            <div className='catalor-item'>
                <img width={170} src="https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-ipad-nav-202210_png.webp" alt="" />
                <p>iPad</p>
            </div>
            <div className='catalor-item'>
                <img width={170} src="https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/88/store-card-13-watch-nav-202309_png.webp" alt="" />
                <p>Watch</p>
            </div>
            <div className='catalor-item'>
                <img width={170} src="https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/73/store-card-13-mac-nav-202310_png.webp" alt="" />
                <p>Mac</p>
            </div>
            <div className='catalor-item'>
                <img width={170} src="https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/88/store-card-13-airpods-nav-202209_png.webp" alt="" />
                <p>AirPods</p>
            </div>

        </div>
    );
}

export default Catalog;