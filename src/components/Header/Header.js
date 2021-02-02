import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

//components
import Icon from './../Icon/Icon';
import {phoneRegEx} from '../config';

const Header = () => {

  const phone = '+38 050 914 19 59';

  const menu = [
    {
      className: 'top',
      items: [
        {
          name: 'Про компанію',
          href: '/about',
        },
        {
          name: 'Послуги',
          href: '/services',
        },
        {
          name: 'Типові запитання',
          href: '/faq',
        },
        {
          name: 'Оплата і доставка',
          href: '/payementshipping',
        },
        {
        name: 'Контакти',
        href: '/contactinfo',
        },
      ]
    },
    {
      className: 'bottom',
      items: [
        {
          name: 'Подорожі',
          href: '/alltrips',
        },
        {
          name: 'Розпродаж',
          href: '/sales',
        },
        {
          name: 'Країни',
          href: '/countries',
        },
        {
          name: 'Мої подорожі',
          href: '/mytrips',
        },
      ]
    },
  ];

  return (
    <>
      <div className="header">
        <Container>
          <div className="header__inner">
            <div className="header__rectangle"><a href="#">Touristo</a></div>
            <div className="header__navbar">
              <Router>
                {menu.map((item, index) => 
                  <ul key={index} className={item.className}>
                    {item.items.map((subItem, index) => 
                      <li key={index}><Link to={subItem.href}>{subItem.name}</Link></li>
                    )}
                  </ul>
                )}
              </Router>
            </div>
            <div className="header__callback">
              <div className="header__callback-icon">
                <Icon name="icon-phone" width="1em" height="1em"/>
              </div>
              <div className="header__callback-wrapper">
                <a href={`tel:${phone.replace(phoneRegEx, '')}`} className="header__callback-wrapper-phone">{phone}</a>
                <button type="button" >Замовити дзвінок</button>
              </div>
            </div>
            <div className="header__searchBtn">
              <a href="#" className="button button_md button_blue">Знайти подорожі</a>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header;