import React from 'react';
import './Footer.sass'
import { NavLink } from 'react-router-dom'

function Footer(props) {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='footer-block'>
                        <div className='footer-item'>
                            <p className='footer-item-name'>Покупательский сервис</p>
                            <ul className='footer-item-ul'>
                                <li><a href="">О нас</a></li>
                                <li><a href="">Акции и скидки</a></li>
                                <li><a href="">Блог Maxmobiles</a></li>
                                <li><a href="">Бонусная программа</a></li>
                                <li><a href="">Оплата и доставка</a></li>
                                <li><a href="">Гарантия</a></li>
                                <li><a href="">Возврат</a></li>
                                <li><a href="">Политика конфиденциальности</a></li>
                                <li><a href="">Контакты</a></li>
                            </ul>
                        </div>
                        <div className='footer-item'>
                            <p className='footer-item-name'>Интернет-магазин</p>
                            <ul className='footer-item-ul'>
                                <li><a href="">Идеальное БУ</a></li>
                                <li><a href="">iPhone</a></li>
                                <li><a href="">Watch</a></li>
                                <li><a href="">AirPods</a></li>
                                <li><a href="">MacBook</a></li>
                                <li><a href="">Игровые приставки</a></li>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                        <div className='footer-item'>
                            <p className='footer-item-name'>Сервис</p>
                            <ul className='footer-item-ul'>
                            <li><a href="">Ремонт Apple</a></li>
                            <li><a href="">Ремонт iPhone</a></li> 
                            <li><a href="">Ремонт MacBook</a></li>
                            <li><a href="">Ремонт iPad</a></li>
                            <li><a href="">Ремонт Apple Watch</a></li>
                            </ul>
                        </div>
                        <div className='footer-item'>
                            <p className='footer-item-name'>Для покупателя</p>
                            <ul className='footer-item-ul'>
                            <li><a href="">Ваши заказы</a></li>
                            <li><a href="">Ваши бонусы</a></li>
                            <li><a href="">Отложенные</a></li>
                            <li><a href="">Список сравнения</a></li>
                            <li><a href="">Подарочные сертификаты</a></li>
                            <li><a href="">Магазины и пункты выдачи</a></li>
                            </ul>
                            <div style={{marginTop: '10px'}}>
                                <a href="/home"><img width={186} src="https://maxmobiles.ru/images/logos/73/logo__.svg" alt="" /></a>
                            </div>
                        </div>
                        <div className='footer-item'>
                            <p className='footer-item-name'>Контакты</p>
                            <ul className='footer-item-ul'>
                            <li ><a href="">г. Севастополь, пр-т Нахимова 19</a></li>
                            <li><a href="" style={{ textDecoration: 'underline'}}>Посмотреть на карте</a></li>
                            <li><a href="">7 978 222-01-23 (Магазин)</a></li>
                            <li className='footer-item-ul-hidden'><a href="">8 800 250-81-58 (звонок бесплатный)</a></li>
                            <li><a href="">7 978 820-30-01 (Сервис)</a></li>
                            <li><a href="">Пн-Вс 10.00 - 20.00</a></li>
                            </ul>
                            <div style={{marginTop: '10px'}}>
                                <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-vk-40.png" alt="" /></a>
                                <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-instagram-40.png" alt="" /></a>
                                <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-телеграм-40.png" alt="" /></a>
                                <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-yandex-zen-40.png" alt="" /></a>
                                <a href=""><img src="https://maxmobiles.ru/images/companies/1/Icon/icons8-facebook-40.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;