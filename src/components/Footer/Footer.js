import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//components
import Icon from './../Icon/Icon';
// import phoneRegEx from '../config';

class Footer extends Component {
  render() {

    const contactInfo = [
      {
        icon: [
          {
            iconName: 'icon-mail',
          },
        ],
        items: [
          {
            text: 'touristo@gmail.com',
            href:'mailto:touristo@gmail.com',
          }
        ]
      },
      {
        icon: [
          {
            iconName: 'icon-mobile',
            width: `${16/24}em`,
          },
        ],
        items: [
          {
            text: '+38 123 456 56 89',
            href:'tel:+381234565689',
          },
          {
            text: '+38 123 456 56 89',
            href:'tel:+381234565689',
          }
        ]
      },
      {
        icon: [
          {
            iconName: 'icon-location',
          },
        ],
        items: [
          {
            // text: `м. Ужгород`,
            text: `м. Ужгород, <br/> вул. Івана Франка 1в, оф. 1 `,
            href:'https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%B2%D0%B0%D0%BD%D0%B0+%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%B0,+1,+1,+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+88000/@48.6295943,22.271847,17z/data=!3m1!4b1!4m5!3m4!1s0x47391846893df35b:0x71c0fa97ec394fdd!8m2!3d48.6295943!4d22.2740357',
            target: '_blank',
          }
        ]
      },
    ];

    const menu = [
      {
        title: 'Подорожі',
        items: [
          {
            name: 'Пошук турів',
            href: '/',
          },
          {
            name: 'Каталог турів',
            href: '/',
          },
          {
            name: 'Весілля за кордоном',
            href: '/',
          },
        ]
      },
      {
        title: 'Розпродаж',
        items: [
          {
            name: 'Акційні подорожі',
            href: '/',
          },
          {
            name: 'Що таке Бамбарбія',
            href: '/',
          },
        ]
      },
      {
        title: 'Країни',
        items: [
          {
            name: 'Єгипет',
            href: '/',
          },
          {
            name: 'ОАЄ',
            href: '/',
          },
          {
            name: 'Туреччина',
            href: '/',
          },
          {
            name: 'Домінікана',
            href: '/',
          },
          {
            name: 'Шрі Ланка',
            href: '/',
          },
          {
            name: 'Тайланд',
            href: '/',
          },
          {
            name: 'ОАЄ',
            href: '/',
          },
          {
            name: 'Туреччина',
            href: '/',
          },
          {
            name: 'Греція',
            href: '/',
          },
        ]
      },
      {
        title: 'Про нас',
        items: [
          {
            name: 'Про компанію',
            href: '/',
          },
          {
            name: 'Послуги',
            href: '/',
          },
          {
            name: 'Типові запитання',
            href: '/',
          },
          {
            name: 'Доставка та оплата',
            href: '/',
          },
          {
            name: 'Контакти',
            href: '/',
          },
        ]
      },
    ]

    const socials = [
      {
        target: '_blank',
        rel: 'noreferrer',
        href: 'https://www.facebook.com/thegooseishere/',
        icon: [
          {
            name: 'icon-facebook',
          },
        ]
      },
      {
        target: '_blank',
        rel: 'noreferrer',
        href: 'https://uk.wikipedia.org/wiki/%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%96',
        icon: [
          {
            name: 'icon-vkontakte',
          },
        ]
      },
      {
        target: '_blank',
        rel: 'noreferrer',
        href: 'https://www.instagram.com/',
        icon: [
          {
            name: 'icon-instagram',
          },
        ]
      },
    ]

    return (
      <>
        <div className="footer">
          <Container>
            <div className="footer__inner">
              <Row>
                <Col xs="12" xl="3" className="footer__info-wrapper">
                  {
                    contactInfo.map((item, index)=>
                      <li className="footer__info" key={index}>
                        {item.icon.map((subItem, index) =>
                          <div className="footer__info-icon-wrapper" key={index}>
                            <Icon
                              height={subItem.height ? subItem.height : null}
                              width={subItem.width ? subItem.width : null}
                              name={subItem.iconName}/>
                          </div>
                            // <Icon {...subItem}/>
                        )}
                        {item.items.map((subItem, index)=>
                          <div key={index}>
                            <a
                              dangerouslySetInnerHTML={{__html: subItem.text}}
                              target={subItem.target ? subItem.target : null}
                              href={subItem.href}>
                            </a>
                          </div>
                          
                        )}
                      </li>
                    )
                  }
                  <ul className="footer__social-icons">
                    {
                      socials.map((item, index) =>
                        <li key={index}>
                        <a
                          target={item.target}
                          rel={item.rel}
                          href={item.href}>
                            {
                              item.icon.map((subItem, index) =>
                                <Icon
                                  key={index}
                                  name={subItem.name}
                                  width={subItem.width ? subItem.width : null}
                                  height={subItem.height ? subItem.height : null}/>
                              )
                            }
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </Col>
                {
                  menu.map((item, index) => 
                    <Col xs="12" sm="6" xl="2" key={index}>
                      <div className="footer__menu-title">{item.title}</div>
                      <ul className="footer__menu-wrapper">
                        {
                          item.items.map((subItem, index) => 
                            <li key={index}><a href={subItem.href} className="footer__menu-item">{subItem.name}</a></li>
                          )
                        }
                      </ul>
                    </Col>
                  )
                }
              </Row>
            </div>
          </Container>
        </div>
      </>
    )
  }
}

export default Footer;