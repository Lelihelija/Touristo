import React from 'react';
import { Container } from 'react-bootstrap';

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
          href: '#',
        },
        {
          name: 'Послуги',
          href: '/',
        },
        {
          name: 'Типові запитання',
          href: '#',
        },
        {
          name: 'Оплата і доставка',
          href: '#',
        },
        {
        name: 'Контакти',
        href: '#',
        },
      ]
    },
    {
      className: 'bottom',
      items: [
        {
          name: 'Подорожі',
          href: '/',
        },
        {
          name: 'Розпродаж',
          href: '/',
        },
        {
          name: 'Країни',
          href: '/',
        },
        {
          name: 'Мої подорожі',
          href: '/',
        },
      ]
    },
  ];

  return (
    <>
      <div className="header">
        <Container>
          <div className="header__inner">
            <div className="header__rectangle"><span>Touristo</span></div>
            <div className="header__navbar">
              {menu.map((item, index) => 
                <ul key={index} className={item.className}>
                  {item.items.map((subItem, index) => 
                    <li key={index}><a href={subItem.href}>{subItem.name}</a></li>
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
                <button type="button" >Замовити дзвінок</button>
              </div>
            </div>
            <div className="header__searchBtn">
              <a href="/" className="button button_md button_blue">Знайти подорожі</a>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header;