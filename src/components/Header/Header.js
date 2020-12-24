import React from 'react';
import phone from '../../img/phone.svg';

const Header = () => {

    return (
        <>
            <div className="header">
                <div className="myContainer">
                    <div className="header__inner">
                        <div className="header__rectangle"><p>Touristo</p></div>
                        <div className="header__navbar">
                            <div className="header__navbar-top top">
                                <ul className="top-menu">
                                    <li><a href="/" className="top-link">Про компанію</a></li>
                                    <li><a href="/" className="top-link">Послуги</a></li>
                                    <li><a href="/" className="top-link">Типові запитання</a></li>
                                    <li><a href="/" className="top-link">Оплата і доставка</a></li>
                                    <li><a href="/" className="top-link">Контакти</a></li>
                                </ul>
                            </div>
                            <div className="header__navbar-bottom bottom">
                                <ul className="bottom-menu">
                                    <li><a href="/" className="bottom-link">Подорожі</a></li>
                                    <li><a href="/" className="bottom-link">Розпродаж</a></li>
                                    <li><a href="/" className="bottom-link">Країни</a></li>
                                    <li><a href="/" className="bottom-link">Мої подорожі</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__callback">
                            <div className="header__callback-icon">
                                <img src={phone} alt="callback"/>
                            </div>
                            <label className="header__callback-label">
                                <a href="tel:+38509141959">+38 050 914 19 59</a>
                                Замовити дзвінок
                            </label>
                        </div>
                        <div className="header__searchBtn">
                            <button href="/">Знайти подорожі</button>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Header;