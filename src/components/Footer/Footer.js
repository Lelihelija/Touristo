import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mail from '../../img/mail.svg';
import phone from '../../img/mobile.svg';
import location from '../../img/location.svg';
import facebook from '../../img/facebook.svg';
import vkontakte from '../../img/vkontakte.svg';
import instagram from '../../img/instagram.svg';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <Container>
                        <div className="footer__inner">
                            <Row>
                                <Col xl="3">
                                    <ul className="footer__contacts">
                                        <li className="footer__contacts-mail ">
                                            <img src={mail} className="footer__contacts-mail-img" alt="mail link"/>
                                            <a href="mailto:touristo@gmail.com" className="footer__contacts-mail-link">touristo@gmail.com</a>
                                        </li>
                                        <li className="footer__contacts-phone">
                                            <img src={phone} className="footer__contacts-phone-img" alt="phone numbers"/>
                                            <div className="footer__contacts-phone-wrapper">
                                                <a href="tel:+381234565689" className="footer__contacts-phone-link">+38 123 456 56 89</a>
                                                <a href="tel:+381234565689" className="footer__contacts-phone-link">+38 123 456 56 89</a>
                                            </div>
                                        </li>
                                        <li className="footer__contacts-adress">
                                            <img src={location} className="footer__contacts-adress-img" alt="adress"/>
                                            <div className="footer__contacts-adress-wrapper">
                                                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%B2%D0%B0%D0%BD%D0%B0+%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%B0,+1,+1,+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+88000/@48.6295943,22.271847,17z/data=!3m1!4b1!4m5!3m4!1s0x47391846893df35b:0x71c0fa97ec394fdd!8m2!3d48.6295943!4d22.2740357" className="footer__contacts-adress-link">м. Ужгород,</a>
                                                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%B2%D0%B0%D0%BD%D0%B0+%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%B0,+1,+1,+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+88000/@48.6295943,22.271847,17z/data=!3m1!4b1!4m5!3m4!1s0x47391846893df35b:0x71c0fa97ec394fdd!8m2!3d48.6295943!4d22.2740357" className="footer__contacts-adress-link">вул. Івана Франка 1в, оф. 1 </a>
                                            </div>
                                        </li>
                                        <ul className="footer__contacts-icons">
                                            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/thegooseishere/"><img src={facebook} alt="facebook"/></a></li>
                                            <li><a target="_blank" rel="noreferrer" href="https://uk.wikipedia.org/wiki/%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%96"><img src={vkontakte} alt="vkontakte"/></a></li>
                                            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={instagram} alt="instagram"/></a></li>
                                        </ul>
                                    </ul>
                                </Col>
                                <Col xl="2">
                                    <div className="footer__tours-title title">Подорожі</div>
                                    <ul className="footer__tours footer__lists-wrapper">
                                        <li><a href="/" className="footer__tours-item item">Пошук турів</a></li>
                                        <li><a href="/" className="footer__tours-item item">Каталог турів</a></li>
                                        <li><a href="/" className="footer__tours-item item">Весілля за кордоном</a></li>
                                    </ul>
                                </Col>
                                <Col xl="2">
                                    <ul className="footer__sale footer__lists-wrapper">
                                        <li className="footer__sale-title title">Розпродаж</li>
                                        <li><a href="/" className="footer__sale-item item">Акційні подорожі</a></li>
                                        <li><a href="/" className="footer__sale-item item">Що таке Бамбарбія</a></li>
                                    </ul>
                                </Col>
                                <Col xl="2">
                                    <ul className="footer__countries footer__lists-wrapper">
                                        <li className="footer__countries-title title">Країни</li>
                                        <li><a href="/" className="footer__countries-item item">Єгипет</a></li>
                                        <li><a href="/" className="footer__countries-item item">ОАЄ</a></li>
                                        <li><a href="/" className="footer__countries-item item">Туреччина</a></li>
                                        <li><a href="/" className="footer__countries-item item">Домінікана</a></li>
                                        <li><a href="/" className="footer__countries-item item">Шрі Ланка</a></li>
                                        <li><a href="/" className="footer__countries-item item">Тайланд</a></li>
                                        <li><a href="/" className="footer__countries-item item">ОАЄ</a></li>
                                        <li><a href="/" className="footer__countries-item item">Туреччина</a></li>
                                        <li><a href="/" className="footer__countries-item item">Греція</a></li>
                                    </ul>
                                </Col>
                                <Col xl="3">
                                    <ul className="footer__about footer__lists-wrapper">
                                        <li className="footer__about-title title">Про нас</li>
                                        <li><a href="/" className="footer__about-item item">Про компанію</a></li>
                                        <li><a href="/" className="footer__about-item item">Послуги</a></li>
                                        <li><a href="/" className="footer__about-item item">Типові запитання</a></li>
                                        <li><a href="/" className="footer__about-item item">Доставка та оплата</a></li>
                                        <li><a href="/" className="footer__about-item item">Контакти</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}

export default Footer;