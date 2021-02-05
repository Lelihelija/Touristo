import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

//components
import Icon from '../Icon/Icon';
import RatingView from '../RatingView/RatingView';

const OneSection = (props) => {
    return (
        <>
            <div className="toursSales__tourCard">
                <span className="toursSales__tourCard-sale">Розпродаж</span>
                <Link to="/" className="toursSales__tourCard-image-wrapper"><img src={props.coverImg} alt="tour destination"/></Link>
                <div className="toursSales__tourCard-data-wrapper">
                    <span className="toursSales__tourCard-id">id: {props.id}</span>
                    <Link to="/" className="toursSales__tourCard-title"><h4>{props.title}</h4></Link>
                    <h5 className="toursSales__tourCard-subtitle">{props.destination}</h5>
                    <Row>
                        <Col xs="12">
                            <div className="toursSales__tourCard-info">
                                <Icon name={props.calendarImg} width="1em" height="1em"/>
                                <span>{props.dates}</span>
                            </div>
                        </Col>
                        <Col xs="6" sm="12" md="6">
                            <div className="toursSales__tourCard-info">
                                <Icon name={props.visaImg} width="1em" height="1em"/>
                                <span>{props.visaText}</span>
                            </div>
                        </Col>
                        <Col xs="6" sm="12" md="6">
                            <div className="toursSales__tourCard-info">
                                <img src={props.transportImg} alt="transport"/>
                                <span>{props.transportText}</span>
                            </div>
                        </Col>
                        <Col xs="6" sm="12" md="6" className="toursSales__tourCard-custom-col">
                            <div className="toursSales__tourCard-info">
                                <span className="toursSales__tourCard-info-subtitle">Готель</span>
                                <div>
                                    <RatingView rating={props.rating}/>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" sm="12" md="6" className="toursSales__tourCard-custom-col">
                            <div className="toursSales__tourCard-info">
                                <span className="toursSales__tourCard-info-subtitle">Харчування</span>
                                <span>{props.mealsType}</span>
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="toursSales__tourCard-info">
                                <p className="toursSales__tourCard-info-price price">
                                    <span className="price__primary">{props.priceUah}</span>
                                    <span className="price__primary-currency">₴</span>
                                    / особу
                                    <span className="price__secondary">{props.priceEur} <span className="price__secondary-currency">€</span></span>
                                </p>
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="toursSales__tourCard-info-compare-checkbox checkbox">
                                <label className="checkbox__label">
                                    <input className="checkbox__input" type='checkbox'/>
                                    <span className="checkbox__icon"></span>
                                    <span className="compare-checkbox__text">Додати до порівняння</span>
                                </label>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default OneSection;