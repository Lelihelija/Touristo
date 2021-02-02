import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import firstPropositionImg from '../../img/firstProposition.png';
import secondPropositionImg from '../../img/secondProposition.png';

class SpecialProposition extends Component {
  render() {
    const data = [
      {
        title: 'Весілля за кордоном',
        text: 'Перетворіть своє весілля на незабутню казку, неповторне дійство в одному з найчарівніших куточків світу.',
        imageSrc: firstPropositionImg,
        alt: 'wedding abroad',
        href: '#',
        id: 1,
      },
      {
        title: 'Shopping тури в Дубаї',
        text: 'Просадіть всі ваші заощадження в одному з найчарівніших куточків світу. Но касіво, з піснею і під гітарку.',
        imageSrc: secondPropositionImg,
        alt: 'Dubai shopping',
        href: '#',
        id: 2,
      },
    ];
    
    var settings = {
      dots: true,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dotsClass: "slick-dots custom-dots",
      adaptiveHeight: false,
      // beforeChange: (current, next) => this.setState({ activeSlide: next }),
      arrows:false,
      responsive: [
      {
          breakpoint: 1030,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          }
      },
      ],
    };
    return (
      <>
        <div className="special-proposition">
          <Container>
            <div className="special-proposition__inner">
              <h3 className="special-proposition__title">Спеціальні пропозиції</h3>
              <Row>
                <Slider {...settings}>
                  {data.map((item) =>
                    <Col key={item.id}>
                      <div className="special-proposition__article">
                        <div className="special-proposition__article-image">
                          <img src={item.imageSrc} alt={item.alt}/>
                        </div>
                        <div className="special-proposition__article-wrapper">
                          <div className="special-proposition__article-title">{item.title}</div>
                          <span className="special-proposition__article-text">{item.text}</span>
                          <div  className="link-wrapper">
                            <a href={item.href} className="special-proposition__article-link">Дізнатися більше</a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )}
                </Slider>
              </Row>
            </div>
          </Container>
        </div>
      </>
    )
  }
}

export default SpecialProposition;
