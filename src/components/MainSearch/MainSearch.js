import React from 'react';
import { Container } from 'react-bootstrap';
import phone2 from '../../img/phone2.svg';
import search from '../../img/search.svg';

const MainSearch = () => {

    return (
        <>
           <div className="mainsearch">
                <Container>
                    <div className="mainsearch__inner">
                        <h3 className="mainsearch__title">Куди відправимось?</h3>
                        <p className="mainsearch__info">Ви можете здійснити пошук за декількома напрямками одночасно</p>
                        <div className="mainsearch__input">
                            <img src={search} alt="search"/>
                            <input type="text" placeholder="Країна, місто, регіон, готель"/>
                        </div>
                        <div className="mainsearch__buttons">
                                <button className="mainsearch__extendedsearchBtn" type="button">Розширений пошук</button>
                                <button className="mainsearch__normalSearchBtn" type="button">Знайти подорожі</button>
                        </div>
                        <div className="mainsearch__callbackbtn">
                            <button><img src={phone2} alt="callback"/></button>
                        </div>
                    </div>    
                </Container>
           </div>
        </>
    )
}

export default MainSearch;