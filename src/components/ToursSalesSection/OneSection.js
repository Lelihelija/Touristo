import React from 'react';
import { Col } from 'react-bootstrap';

const OneSection = (props) => {

    return (
        <Col xl={3} >
            <div className="toursSales__list-card tourCard" id={props.active}>
                <span className="tourCard__sale">Розпродаж</span>
                <div className="tourCard__wrapper-cover"><img className="tourCard__cover" src={props.coverImg} alt="tour destination"/></div>
                <div className="tourCard__info-wrapper">
                    <span className="tourCard__id">id: {props.id}</span>
                    <h4 className="tourCard__title">{props.title}</h4>
                    <h5 className="tourCard__destination">{props.destination}</h5>
                    <div className="tourCard__dates">
                        <img className="tourCard__dates-img" src={props.calendarImg} alt="dates info"/>
                        <span className="tourCard__dates-text">{props.dates}</span>
                    </div>
                    <div className="tourCard__general-info">
                        <div className="tourCard__general-info-left left">
                            <div className="left__visa">
                                <img className="left__visa-img" src={props.visaImg} alt="visa info"/>
                                <span className="left__visa-text">{props.needVisa}</span>
                            </div>
                            <div className="left__hotel">
                                <span className="left__hotel-title">Готель</span>
                                <div className="left__hotel-wrapper-stars">
                                    <img className="left__hotel-img" src={props.star} alt="star"/>
                                    <img className="left__hotel-img" src={props.star} alt="star"/>
                                    <img className="left__hotel-img" src={props.star} alt="star"/>
                                    <img className="left__hotel-img" src={props.star} alt="star"/>
                                    <img className="left__hotel-img" src={props.star} alt="star"/>
                                </div>    
                            </div>
                        </div> 
                        <div className="card__general-info-right right">
                            <div className="right__transport">
                                <img className="right__transport-img" src={props.transportImg} alt="flight"/>
                                <span className="right__transport-text">{props.transportText}</span>
                            </div>
                            <div className="right__meals">
                                <span className="right__meals-title">Харчування</span>
                                <span className="right__meals-type">{props.mealsType}</span>
                            </div>
                        </div>
                    </div>
                    <div className="tourCard__price-wrapper">
                        <span className="tourCard__price-uah"><span className="tourCard__price-uah-bold">{props.priceUah}</span>₴ / особу</span>
                        <span className="tourCard__price-eur">{props.priceEur} €</span>
                    </div>
                    <div className="tourCard__compare">
                        <img src={props.compareImg} alt="compare" className="tourCard__compare-img"/>
                        <button type="button" className="tourCard__compare-btn">Додати до порівняння</button>
                    </div> 
                </div>
            </div>
        </Col>
    )
}

export default OneSection;