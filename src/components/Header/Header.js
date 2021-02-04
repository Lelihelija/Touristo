import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

//components
import Icon from './../Icon/Icon';
import {phoneRegEx} from '../config';

const Header = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive);
    console.log(hamburgerActive);
  }

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
            <div className="header__info-wrapper">
              <div className="header__navbar">
                <button
                  className={hamburgerActive ? 'header__navbar-mobile-menu active' : 'header__navbar-mobile-menu'}
                  onClick={toggleHamburger}>
                  <span></span>
                </button>
                <div className={hamburgerActive ? 'header__navbar-wrapper' : 'header__navbar-wrapper hidden'}>
                  {menu.map((item, index) =>
                    <ul key={index}
                      className={hamburgerActive ?`${item.className}` : `${item.className} mobile`}>
                      {item.items.map((subItem, index) =>
                        <li key={index}><NavLink to={subItem.href}>{subItem.name}</NavLink></li>
                      )}
                    </ul>
                  )}
                </div>
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
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header;