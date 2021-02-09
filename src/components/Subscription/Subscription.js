import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

//components
import Icon from '../Icon/Icon';
import {phoneRegEx, emailRegEx, PopupError} from '../config';


class Subscription extends Component {
  state = {
    valueMail: '',
    valueSms: '',
    activeEmail: true,
    showErrorMail: false,
    showErrorSms: false,
  }

  handleChangeMail(event) {
    this.setState({valueMail: event.target.value});
  }

  handleChangeSms(event) {
    this.setState({valueSms: event.target.value});
  }

  handleSubmitMail(event) {
    event.preventDefault();
    let mail = this.state.valueMail.toLocaleLowerCase();
    return emailRegEx.test(mail) ?
      this.setState({showErrorMail: false})
    :
      this.setState({showErrorMail: true})
  }

  handleSubmitSms(event) {
    event.preventDefault();
    this.state.valueSms.replace(phoneRegEx, '');
    this.state.valueSms ?
      // console.log('A data was submitted:' + this.state.valueSms.replace(phoneRegEx, ''))
      this.setState({showErrorSms: false})
    :
      this.setState({showErrorSms: true})
  }

  handleClick = (event) => {
    let id = event.target.id;
    switch (id) {
      case 'email':
        this.setState((prevState) => {
          return {
            activeEmail: prevState.activeEmail = true,
            valueMail: '',
            valueSms: '',
          }
        });
        break;

      case 'sms':
        this.setState((prevState) => {
          return {
            activeEmail: prevState.activeEmail = false,
            valueMail: '',
            valueSms: '',
          }
        });
        break;

      default:
        return false;
    }
  }

  render () {
    return (
      <>
        <div className="subscription">
          <Container>
            <div className={`subscription__inner ${this.state.activeEmail ? 'subscription__email-mode' : 'subscription__sms-mode'}`}>
              <h3 className="subscription__title">
                Отримуйте найвигідніші пропозиції першими — підпишіться на нашу розсилку
              </h3>
                <Row>
                  <Col  xs="12" className="subscription__navigation d-lg-none">
                    <span className={`subscription__navigation-option-email ${this.state.activeEmail ? 'email-mode' : 'sms-mode'}`} id="email" onClick={this.handleClick.bind(this)}>По email:</span>
                    <span className={`subscription__navigation-option-sms ${this.state.activeEmail ? 'email-mode' : 'sms-mode'}`} id="sms" onClick={this.handleClick.bind(this)}>По смс:</span>
                  </Col>
                  <Col xs="12" lg="7" className="subscription__email-col col">
                    <form onSubmit={this.handleSubmitMail.bind(this)}>
                      <label className="subscription__input">
                        <span className="d-none d-lg-inline">По email:</span>
                        <span className="subscription__input-wrapper email">
                          <Icon name="icon-mail" width="1em" height="1em" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Ваша email адреса"
                            value={this.state.valueMail}
                            onChange={this.handleChangeMail.bind(this)}/>
                        </span>
                      </label>
                      <button className="subscription__submit-lg d-none d-lg-block" type="submit">Підписатись</button>
                      <button className="subscription__submit button button_white button_xl d-lg-none" type="submit">Підписатись</button>
                      <PopupError error={this.state.showErrorMail}/>
                    </form>
                  </Col>
                  <Col xs="12" lg="5" className="subscription__sms-col col">
                    <form onSubmit={this.handleSubmitSms.bind(this)}>
                      <label className="subscription__input">
                        <span className="d-none d-lg-inline">По смс:</span>
                        <span className="subscription__input-wrapper sms">
                          <Icon name="icon-mobile"/>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Ваш номер телефону"
                            value={this.state.valueSms}
                            onChange={this.handleChangeSms.bind(this)}/>
                        </span>
                      </label>
                      <button className="subscription__submit-lg d-none d-lg-block" type="submit">Підписатись</button>
                      <button className="subscription__submit button button_white button_xl d-lg-none" type="submit">Підписатись</button>
                      <PopupError error={this.state.showErrorSms}/>
                    </form>
                  </Col>
                </Row>
                <span className="subscription__info">Не більше 1 повідомлення в тиждень. Ніякого спаму. Ви зможете відписатись будь-коли забажаєте.</span>
            </div>
          </Container>
        </div>
      </>
    )
  }
}

export default Subscription;
