import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import phone from '../../img/mobile.svg';
import mail from '../../img/mail.svg';

class Subscription extends Component {
    state = {
        valueMail: '',
        valueSms: '',
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

    render () {
        return (
            <>
                <div className="subscription">
                    <Container>
                        <div className="subscription__inner">
                            <h3 className="subscription__title">
                                Отримуйте найвигідніші пропозиції першими — підпишіться на нашу розсилку
                            </h3>
                            <div className="subscription__subscription-wrapper">
                                <form onSubmit={this.handleSubmitMail.bind(this)}>
                                    <label className="subscription__email">
                                        <span>По email:</span>
                                        <div className="subscription__email-wrapper">
                                            <img src={mail} alt="subscription"/>
                                            <input
                                                type="text"
                                                placeholder="Ваша email адреса"
                                                value={this.state.valueMail}
                                                onChange={this.handleChangeMail.bind(this)}/>
                                            <button type="submit">Підписатись</button>
                                        </div>
                                    </label>
                                </form>
                                <form onSubmit={this.handleSubmitSms.bind(this)}>
                                    <label className="subscription__sms">По смс:
                                        <div id="sms" className="subscription__sms-wrapper">
                                            <img src={phone} alt="subscription"/>
                                            <input
                                                type="text"
                                                placeholder="Ваш номер телефону"
                                                value={this.state.valueSms}
                                                onChange={this.handleChangeSms.bind(this)}/>
                                            <button type="submit">Підписатись</button>
                                        </div>
                                    </label>
                                </form>
                            </div>
                            <span className="subscription__info">Не більше 1 повідомлення в тиждень. Ніякого спаму. Ви зможете відписатись будь-коли забажаєте.</span>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}

export default Subscription;