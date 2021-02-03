import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

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
            <div className="header__rectangle"><NavLink to="/">Touristo</NavLink></div>
            <div className="header__navbar">
              <div className="header__navbar-mobile-menu">I'm here</div>
              {menu.map((item, index) =>
                <ul key={index} className={item.className}>
                  {item.items.map((subItem, index) =>
                    <li key={index}><NavLink to={subItem.href}>{subItem.name}</NavLink></li>
                  )}
                </ul>
              )}
            </div>
            <div className="header__callback">
              <div className="header__callback-icon">
                <Icon name="icon-phone" width="1em" height="1em"/>
              </div>
              <div className="header__callback-wrapper">
                <a href={`tel:${phone.replace(phoneRegEx, '')}`} className="header__callback-wrapper-phone">{phone}</a>
                <div className="header__callback-wrapper-text">
                  <Link to="/contactinfo">Замовити дзвінок</Link>
                </div>
              </div>
            </div>
            <div className="header__searchBtn">
              <Link to="/countries" className="button button_md button_blue header-search">
                <span>Знайти подорожі</span>
                <Icon name="icon-find"/>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header;