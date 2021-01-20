import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

//components
import Icon from '../Icon/Icon';

class Subscription extends Component {
  state = {
    isDesktop: true,
    isMobile: false,
    valueMail: '',
    valueSms: '',
    activeEmail: true,
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
    this.setState({ isMobile: window.innerWidth < 768 })
    this.setState({ isDesktop: window.innerWidth > 1364 });
  }

  handleChangeMail(event) {
    this.setState({valueMail: event.target.value});
  }
  handleChangeSms(event) {
    this.setState({valueSms: event.target.value});
  }
  handleSubmitMail(event) {
    console.log('A data was submitted:' + this.state.valueMail);
    event.preventDefault();
  }
  handleSubmitSms(event) {
    console.log('A data was submitted:' + this.state.valueSms);
    event.preventDefault();
  }

  handleClick (event) {
    let id = event.target.id;
    switch (id) {
      case 'email':
        this.setState({
          activeEmail: true,
          valueMail: '',
          valueSms: '',
        });
        console.log(`a tyts' was submitted on email, this.state.activeEmail - ${this.state.activeEmail}`);
        break;
      case 'sms':
        this.setState({
          activeEmail: false,
          valueMail: '',
          valueSms: '',
        });
        console.log(`a tyts' was submitted on sms, this.state.activeEmail - ${this.state.activeEmail}`);
        break;
      default:
        return false;
    }
    event.preventDefault();
  }

  render () {
    const isDesktop = this.state.isDesktop;
    const isMobile = this.state.isMobile;

    return (
      <>
        <div className="subscription">
          <Container>
            <div className="subscription__inner">
              <h3 className="subscription__title">
                Отримуйте найвигідніші пропозиції першими — підпишіться на нашу розсилку
              </h3>
              {isDesktop ? (
                <Row>
                  <Col xs="7">
                    <form onSubmit={this.handleSubmitMail.bind(this)}>
                      <label className="subscription__input">
                        <span>По email:</span>
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
                      <button className="subscription__submit" type="submit">Підписатись</button>
                    </form>
                  </Col>
                  <Col xs="4">
                    <form onSubmit={this.handleSubmitSms.bind(this)}>
                      <label className="subscription__input">По смс:
                        <span id="sms" className="subscription__input-wrapper sms">
                          <Icon name="icon-mobile"/>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Ваш номер телефону"
                            value={this.state.valueSms}
                            onChange={this.handleChangeSms.bind(this)}/>
                        </span>
                      </label>
                      <button className="subscription__submit" type="submit">Підписатись</button>
                    </form>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs="12">
                    <form onSubmit={this.handleSubmitMail.bind(this)}>
                      <label className="subscription__input">
                        <div className="subscription__input-choise">
                          <span className="subscription__input-choise-option" id="email" onClick={this.handleClick.bind(this)}>По email:</span>
                          <span className="subscription__input-choise-option" id="sms" onClick={this.handleClick.bind(this)}>По смс:</span>
                        </div>
                        {this.state.activeEmail === true ?
                          <span className="subscription__input-wrapper email">
                            <Icon name="icon-mail" width="1em" height="1em" />
                            <input
                              type="email"
                              name="email"
                              placeholder="Ваша email адреса"
                              value={this.state.valueMail}
                              onChange={this.handleChangeMail.bind(this)}/>
                          </span>
                        :
                          <span id="sms" className="subscription__input-wrapper sms">
                            <Icon name="icon-mobile"/>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Ваш номер телефону"
                              value={this.state.valueSms}
                              onChange={this.handleChangeSms.bind(this)}/>
                          </span>
                        }
                      </label>
                      <span className="subscription__info">Не більше 1 повідомлення в тиждень. Ніякого спаму. Ви зможете відписатись будь-коли забажаєте.</span>
                      {isMobile ? (
                          <button className="button button_white button_xl" type="submit">Підписатись</button>
                        ) : (
                          <button className="subscription__submit" type="submit">Підписатись</button>
                      )}
                    </form>
                  </Col>
                </Row>
              )}
            </div>
          </Container>
        </div>
      </>
    )
  }
}

export default Subscription;
