import React from 'react';
import { Container } from 'react-bootstrap';

import Rudolph from '../../img/rudolph.gif';

export default function NotFound () {
  return (
    <Container>
      <span className="not-found__text">Page not found<br/>404</span>
      <img className="not-found__img" src={Rudolph} alt="page not found"/>
      <button type="button" className="button button_lg button_blue not-found__btn">На головну</button>
    </Container>
  )
}