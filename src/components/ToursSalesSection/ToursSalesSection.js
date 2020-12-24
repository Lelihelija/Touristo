import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import OneSection from './OneSection';
import calendar from '../../img/calendar.svg';
import compare from '../../img/compare.svg';
import visa from '../../img/visa.svg';
import plane from '../../img/plane.svg';
import bus from '../../img/bus.svg';
import star from '../../img/star.svg';
import starEmpty from '../../img/starEmpty.svg';
import tourCover1 from '../../img/tourCover1.png';
import tourCover2 from '../../img/tourCover2.png';
// import tourCover3 from '../../img/tourCover3.png';
// import tourCover4 from '../../img/tourCover4.png';
// import tourCover5 from '../../img/tourCover5.png';
// import tourCover6 from '../../img/tourCover6.png';
// import tourCover7 from '../../img/tourCover7.png';
// import tourCover8 from '../../img/tourCover8.png';

class ToursSales extends Component  {
    state = {
        tours : [
            {
                coverImg: tourCover1,
                id: 103980,
                title: 'Sunrise Marina Port Ghalib 5*',
                destination: 'Єгипет, Шарм Ель Шейк',
                calendarImg: calendar,
                dates: '16-26 листопада (20 ночей)',
                visaImg: visa,
                needVisa: 'Без візи',
                starImg: star,
                transportImg: plane,
                transportText: 'Виліт зі Львова',
                mealsType: 'Ultra All-Inclusive',
                priceUah: '2 649',
                priceEur: 89,
                compareImg: compare,
            },
            {
                coverImg: tourCover2,
                id: 103980,
                title: 'Вихідні в Празі',
                destination: 'Чехія, Прага / Угорщина, Будапешт',
                calendarImg: calendar,
                dates: '09-12 лютого (3 ночі)',
                visaImg: visa,
                needVisa: 'Без візи',
                starImg: starEmpty,
                transportImg: bus,
                transportText: 'Виїзд з Києва',
                mealsType: 'Сніданки',
                priceUah: '1 235',
                priceEur: 45,
                compareImg: compare,
            },
        ],
        filter : [
            'Всі країни',
            'Екскурсійні тури',
            'Єгипет',
            'ОАЕ',
            'Шрі Ланка',
            'Домінікана',
            'Тайланд',
            'Греція',
            'Мальдіви',
            'Куба',
        ],
    }
    render() {

        return (
            <>
               <div className="toursSales">
                    <Container>
                        <div className="toursSales__inner">
                            <h3>Розпродаж подорожей</h3>
                            <ul className="toursSales__filter">
                                {this.state.filter.map((item, index) => 
                                    index === 0 ? <li className="toursSales__filter-item" key={index}><button className="active" type="button">{item}</button></li>
                                    : <li className="toursSales__filter-item" key={index}><button type="button">{item}</button></li>
                                )}
                            </ul>
                                <Row>
                                    <OneSection
                                        coverImg={this.state.tours[0].coverImg}
                                        id={this.state.tours[0].id}
                                        title={this.state.tours[0].title}
                                        destination={this.state.tours[0].destination}
                                        calendarImg={this.state.tours[0].calendarImg}
                                        dates={this.state.tours[0].dates}
                                        visaImg={this.state.tours[0].visaImg}
                                        needVisa={this.state.tours[0].needVisa}
                                        star={this.state.tours[0].starImg}
                                        transportImg={this.state.tours[0].transportImg}
                                        transportText={this.state.tours[0].transportText}
                                        mealsType={this.state.tours[0].mealsType}
                                        priceUah={this.state.tours[0].priceUah}
                                        priceEur={this.state.tours[0].priceEur}
                                        compareImg={this.state.tours[0].compareImg}/>
                                    <OneSection
                                        coverImg={this.state.tours[1].coverImg}
                                        id={this.state.tours[1].id}
                                        title={this.state.tours[1].title}
                                        destination={this.state.tours[1].destination}
                                        calendarImg={this.state.tours[1].calendarImg}
                                        dates={this.state.tours[1].dates}
                                        visaImg={this.state.tours[1].visaImg}
                                        needVisa={this.state.tours[1].needVisa}
                                        star={this.state.tours[1].starImg}
                                        transportImg={this.state.tours[1].transportImg}
                                        transportText={this.state.tours[1].transportText}
                                        mealsType={this.state.tours[1].mealsType}
                                        priceUah={this.state.tours[1].priceUah}
                                        priceEur={this.state.tours[1].priceEur}
                                        compareImg={this.state.tours[1].compareImg}/>
                                    <OneSection
                                        coverImg={this.state.tours[0].coverImg}
                                        id={this.state.tours[0].id}
                                        title={this.state.tours[0].title}
                                        destination={this.state.tours[0].destination}
                                        calendarImg={this.state.tours[0].calendarImg}
                                        dates={this.state.tours[0].dates}
                                        visaImg={this.state.tours[0].visaImg}
                                        needVisa={this.state.tours[0].needVisa}
                                        star={this.state.tours[0].starImg}
                                        transportImg={this.state.tours[0].transportImg}
                                        transportText={this.state.tours[0].transportText}
                                        mealsType={this.state.tours[0].mealsType}
                                        priceUah={this.state.tours[0].priceUah}
                                        priceEur={this.state.tours[0].priceEur}
                                        compareImg={this.state.tours[0].compareImg}/>
                                    <OneSection
                                        coverImg={this.state.tours[0].coverImg}
                                        id={this.state.tours[0].id}
                                        title={this.state.tours[0].title}
                                        destination={this.state.tours[0].destination}
                                        calendarImg={this.state.tours[0].calendarImg}
                                        dates={this.state.tours[0].dates}
                                        visaImg={this.state.tours[0].visaImg}
                                        needVisa={this.state.tours[0].needVisa}
                                        star={this.state.tours[0].starImg}
                                        transportImg={this.state.tours[0].transportImg}
                                        transportText={this.state.tours[0].transportText}
                                        mealsType={this.state.tours[0].mealsType}
                                        priceUah={this.state.tours[0].priceUah}
                                        priceEur={this.state.tours[0].priceEur}
                                        compareImg={this.state.tours[0].compareImg}/>
                                </Row>
                                <Row>    
                                    <OneSection
                                        coverImg={this.state.tours[0].coverImg}
                                        id={this.state.tours[0].id}
                                        title={this.state.tours[0].title}
                                        destination={this.state.tours[0].destination}
                                        calendarImg={this.state.tours[0].calendarImg}
                                        dates={this.state.tours[0].dates}
                                        visaImg={this.state.tours[0].visaImg}
                                        needVisa={this.state.tours[0].needVisa}
                                        star={this.state.tours[0].starImg}
                                        transportImg={this.state.tours[0].transportImg}
                                        transportText={this.state.tours[0].transportText}
                                        mealsType={this.state.tours[0].mealsType}
                                        priceUah={this.state.tours[0].priceUah}
                                        priceEur={this.state.tours[0].priceEur}
                                        compareImg={this.state.tours[0].compareImg}/>
                                    <OneSection
                                        active="active"
                                        coverImg={this.state.tours[1].coverImg}
                                        id={this.state.tours[1].id}
                                        title={this.state.tours[1].title}
                                        destination={this.state.tours[1].destination}
                                        calendarImg={this.state.tours[1].calendarImg}
                                        dates={this.state.tours[1].dates}
                                        visaImg={this.state.tours[1].visaImg}
                                        needVisa={this.state.tours[1].needVisa}
                                        star={this.state.tours[1].starImg}
                                        transportImg={this.state.tours[1].transportImg}
                                        transportText={this.state.tours[1].transportText}
                                        mealsType={this.state.tours[1].mealsType}
                                        priceUah={this.state.tours[1].priceUah}
                                        priceEur={this.state.tours[1].priceEur}
                                        compareImg={this.state.tours[1].compareImg}/>
                                    <OneSection
                                        coverImg={this.state.tours[0].coverImg}
                                        id={this.state.tours[0].id}
                                        title={this.state.tours[0].title}
                                        destination={this.state.tours[0].destination}
                                        calendarImg={this.state.tours[0].calendarImg}
                                        dates={this.state.tours[0].dates}
                                        visaImg={this.state.tours[0].visaImg}
                                        needVisa={this.state.tours[0].needVisa}
                                        star={this.state.tours[0].starImg}
                                        transportImg={this.state.tours[0].transportImg}
                                        transportText={this.state.tours[0].transportText}
                                        mealsType={this.state.tours[0].mealsType}
                                        priceUah={this.state.tours[0].priceUah}
                                        priceEur={this.state.tours[0].priceEur}
                                        compareImg={this.state.tours[0].compareImg}/>
                                    <OneSection
                                        coverImg={this.state.tours[0].coverImg}
                                        id={this.state.tours[0].id}
                                        title={this.state.tours[0].title}
                                        destination={this.state.tours[0].destination}
                                        calendarImg={this.state.tours[0].calendarImg}
                                        dates={this.state.tours[0].dates}
                                        visaImg={this.state.tours[0].visaImg}
                                        needVisa={this.state.tours[0].needVisa}
                                        star={this.state.tours[0].starImg}
                                        transportImg={this.state.tours[0].transportImg}
                                        transportText={this.state.tours[0].transportText}
                                        mealsType={this.state.tours[0].mealsType}
                                        priceUah={this.state.tours[0].priceUah}
                                        priceEur={this.state.tours[0].priceEur}
                                        compareImg={this.state.tours[0].compareImg}/>    
                                </Row>
                            <div className="toursSales__all-tours"><a href="/">Всі акційні подорожі</a></div>
                        </div>    
                    </Container>
               </div>
            </>
        )
    }

}

export default ToursSales;