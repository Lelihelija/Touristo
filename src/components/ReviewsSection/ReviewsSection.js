import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';

// function MyNextArrow() {
//     // const { className, style, onClick } = props;
//     return (
//       <div
//         // className={slider-arrow}
//         style={{ 
//             // ...style, 
//             // display: "block", 
//             background: "#22C3CA", }}
//         // onClick={onClick}
//       />
//     );
//   }
  
//   function MyPrevArrow() {
//     // const { className, style, onClick } = props;
//     return (
//       <div
//         // className={slider-arrow}
//         style={{ 
//             // ...style, 
//             // display: "block",
//             background: "#22C3CA", }}
//         // onClick={onClick}
//       />
//     );
//   }

function Reviews () {
    const settings = {
        dots: false,
        arrows: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // prevArrow: <button className="slick-prev:before"style={{color: "#22C3CA"}}></button>,
        // nextArrow: <button className="slick-next:before"style={{color: "#22C3CA"}}></button>,
    }

    return (
        <>
            <div className="reviews">
                <Container>
                    <div className="reviews__inner">
                        <h3 className="reviews__title">Відгуки туристів</h3>
                        <Slider {...settings}>
                            <div className="reviews__wrapper">
                                <div className="reviews__card">
                                    <h4 className="reviews__name">Наталія (25)</h4>
                                    <p className="reviews__text">Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования. Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования.</p>
                                </div>
                            </div>
                            <div className="reviews__wrapper">
                                <div className="reviews__card">
                                    <h4 className="reviews__name">Олег (15)</h4>
                                    <p className="reviews__text">Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования. Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования.</p>
                                </div>
                            </div>
                            <div className="reviews__wrapper">
                                <div className="reviews__card">
                                    <h4 className="reviews__name">Василь (65)</h4>
                                    <p className="reviews__text">Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования. Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования.</p>
                                </div>
                            </div>
                            <div className="reviews__wrapper">
                                <div className="reviews__card">
                                    <h4 className="reviews__name">Іра (28)</h4>
                                    <p className="reviews__text">Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования. Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования.</p>
                                </div>
                            </div>
                            <div className="reviews__wrapper">
                                <div className="reviews__card">
                                    <h4 className="reviews__name">Іван (25)</h4>
                                    <p className="reviews__text">Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования. Хороший отдых начинается с планирования. А планирование требует времени, знаний и опыта. Мы гарантируем вам удовольствие не только от отдыха, но еще до того, от процесса его планирования.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Reviews;
