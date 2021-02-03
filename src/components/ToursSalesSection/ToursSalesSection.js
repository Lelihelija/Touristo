import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

//components
import OneSection from './OneSection';

//imgs or icons
import plane from '../../img/plane.png';
import bus from '../../img/bus.png';
import tourCover1 from '../../img/tourCover1.png';
import tourCover2 from '../../img/tourCover2.png';
import tourCover3 from '../../img/tourCover3.png';
import tourCover4 from '../../img/tourCover4.png';
import tourCover5 from '../../img/tourCover5.png';
import tourCover6 from '../../img/tourCover6.png';
import tourCover7 from '../../img/tourCover7.png';
import tourCover8 from '../../img/tourCover8.png';

class ToursSales extends Component  {
  state = {
    activeSlide: 0,
    isDesktop: true,
    tours : [
      {
        coverImg: tourCover1,
        id: 1103980,
        title: 'Sunrise Marina Port Ghalib 5*',
        destination: 'Єгипет, Шарм Ель Шейк',
        calendarImg: 'icon-calendar',
        dates: '16-26 листопада (20 ночей)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: plane,
        transportText: 'Виліт зі Львова',
        mealsType: 'Ultra All-Inclusive',
        priceUah: '2 649',
        priceEur: 89,
        rating: 3,
        compareImg: 'icon-compare',
      },
      {
        coverImg: tourCover2,
        id: 2103980,
        title: 'Вихідні в Празі',
        destination: 'Чехія, Прага / Угорщина, Будапешт',
        calendarImg: 'icon-calendar',
        dates: '09-12 лютого (3 ночі)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: bus,
        transportText: 'Виїзд з Києва',
        mealsType: 'Сніданки',
        priceUah: '1 235',
        priceEur: 45,
        rating: 4,
        compareImg: 'icon-compare',
      },
      {
        coverImg: tourCover3,
        id: 3103980,
        title: 'Sunrise Marina Port Ghalib 5*',
        destination: 'Єгипет, Шарм Ель Шейк',
        calendarImg: 'icon-calendar',
        dates: '16-26 листопада (20 ночей)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: plane,
        transportText: 'Виліт зі Львова',
        mealsType: 'Ultra All-Inclusive',
        priceUah: '2 649',
        priceEur: 89,
        rating: 2,
        compareImg: 'icon-compare',
      },
      {
        coverImg: tourCover4,
        id: 4103980,
        title: 'Sunrise Marina Port Ghalib 5*',
        destination: 'Єгипет, Шарм Ель Шейк',
        calendarImg: 'icon-calendar',
        dates: '16-26 листопада (20 ночей)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: plane,
        transportText: 'Виліт зі Львова',
        mealsType: 'Ultra All-Inclusive',
        priceUah: '2 649',
        priceEur: 89,
        rating: 1,
        compareImg: 'icon-compare',
      },
      {
        coverImg: tourCover5,
        id: 5103980,
        title: 'Sunrise Marina Port Ghalib 5*',
        destination: 'Єгипет, Шарм Ель Шейк',
        calendarImg: 'icon-calendar',
        dates: '16-26 листопада (20 ночей)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: plane,
        transportText: 'Виліт зі Львова',
        mealsType: 'Ultra All-Inclusive',
        priceUah: '2 649',
        priceEur: 89,
        rating: 5,
        compareImg: 'icon-compare',
      },
      {
        coverImg: tourCover6,
        id: 6103980,
        title: 'Sunrise Marina Port Ghalib 5*',
        destination: 'Єгипет, Шарм Ель Шейк',
        calendarImg: 'icon-calendar',
        dates: '16-26 листопада (20 ночей)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: plane,
        transportText: 'Виліт зі Львова',
        mealsType: 'Ultra All-Inclusive',
        priceUah: '2 649',
        priceEur: 89,
        rating: 0,
        compareImg: 'icon-compare',
      },
      {
        coverImg: tourCover7,
        id: 7103980,
        title: 'Sunrise Marina Port Ghalib 5*',
        destination: 'Єгипет, Шарм Ель Шейк',
        calendarImg: 'icon-calendar',
        dates: '16-26 листопада (20 ночей)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: plane,
        transportText: 'Виліт зі Львова',
        mealsType: 'Ultra All-Inclusive',
        priceUah: '2 649',
        priceEur: 89,
        rating: 3,
        compareImg: 'icon-compare',
      },
      {
        coverImg: tourCover8,
        id: 8103980,
        title: 'Sunrise Marina Port Ghalib 5*',
        destination: 'Єгипет, Шарм Ель Шейк',
        calendarImg: 'icon-calendar',
        dates: '16-26 листопада (20 ночей)',
        visaImg: 'icon-visa',
        visaText: 'Без візи',
        transportImg: plane,
        transportText: 'Виліт зі Львова',
        mealsType: 'Ultra All-Inclusive',
        priceUah: '2 649',
        priceEur: 89,
        rating: 3,
        compareImg: 'icon-compare',
      },
    ],
    filter : [
      {
        name: 'Всі країни',
        state: true,
      },
      {
        name: 'Екскурсійні тури',
        state: false,
      },
      {
        name: 'Єгипет',
        state: false,
      },
      {
        name: 'ОАЕ',
        state: false,
      },
      {
        name: 'Шрі Ланка',
        state: false,
      },
      {
        name: 'Домінікана',
        state: false,
      },
      {
        name: 'Тайланд',
        state: false,
      },
      {
        name: 'Греція',
        state: false,
      },
      {
        name: 'Мальдіви',
        state: false,
      },
      {
        name: 'Куба',
        state: false,
      },
    ],
  }

  updatePredicate = this.updatePredicate.bind(this);
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1364 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    var settings = {
      dots: false,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: false,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      arrows:false,
      responsive: [
      {
          breakpoint: 992,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          }
      },
      {
          breakpoint: 768,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          }
      },
      {
          breakpoint: 576,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          }
      },
      ],
    };
    return (
      <>
        <div className="toursSales">
          <Container>
            <div className="toursSales__inner">
              <h3>Розпродаж подорожей</h3>
              <ul className="toursSales__filter">
                {this.state.filter.map((item, index) =>
                  (item.state === true) ?
                    <li className="toursSales__filter-item" key={index}><button className="active button button_alabaster button_xs" type="button">{item.name}</button></li>
                    : <li className="toursSales__filter-item" key={index}><button className="button button_alabaster button_xs" type="button">{item.name}</button></li>
                )}
              </ul>
                {isDesktop ? (
                  <Row>
                    {this.state.tours.map(item =>
                      <Col xl={3} key={item.id}>
                        <OneSection {...item}/>
                      </Col>
                    )}
                  </Row>
                ) : (
                  <Row className="toursSales__slider-row">
                    <Slider {...settings}>
                      {this.state.tours.map((item) =>
                        <Col className="toursSales__slider-item" key={item.id}>
                          <OneSection {...item}/>
                        </Col>
                      )}
                    </Slider>
                    <div className="toursSales__slider-counter">
                      <span>
                        {this.state.activeSlide + 1} / {this.state.tours.length}
                      </span>
                    </div>
                  </Row>
                )}
              <div className="toursSales__button-wrapper">
                <Link to="/" className="button button_xl button_blue">Всі акційні подорожі</Link>
              </div>
              {/* <a href="#" className="toursSales__all-tours btn_default btn_blue"><span>Всі акційні подорожі</span></a> */}
            </div>
          </Container>
        </div>
      </>
    )
  }
}

export default ToursSales;
