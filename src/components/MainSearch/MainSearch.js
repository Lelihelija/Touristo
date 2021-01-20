import React from 'react';
import { Container } from 'react-bootstrap';

//components
import Icon from '../Icon/Icon';

const MainSearch = () => {

  return (
    <>
      <div className="mainsearch">
        <Container>
          <div className="mainsearch__inner">
            <h3 className="mainsearch__title">Куди відправимось?</h3>
            <p className="mainsearch__info">Ви можете здійснити пошук за декількома напрямками одночасно</p>
            <label className="mainsearch__input">
              <Icon name="icon-search" width="1em" height="1em"/>
              <input type="text" placeholder="Країна, місто, регіон, готель"/>
            </label>
            <div className="mainsearch__buttons">
              <button className="mainsearch__extendedsearchBtn" type="button">Розширений пошук</button>
              <button type="submit" className="button button_white">Знайти подорожі</button>
            </div>
            <div className="mainsearch__callbackbtn">
              <button><Icon name="icon-phone2" width="1em" height="1em"/></button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default MainSearch;