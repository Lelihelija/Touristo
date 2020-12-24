import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import firstPropositionImg from '../../img/firstProposition.png';
import secondPropositionImg from '../../img/secondProposition.png';

class SpecialProposition extends Component {
    render() {
        return (
            <>
                <div className="special-proposition">
                    <Container>
                        <div className="special-proposition__inner">
                            <h3 className="special-proposition__title">Спеціальні пропозиції</h3>
                            <div className="special-proposition__wrapper">
                                <div className="special-proposition__first">
                                    <img src={firstPropositionImg} alt="wedding abroad"/>
                                    <div className="special-proposition__first-wrapper">
                                        <h4 className="special-proposition__first-title">Весілля за кордоном</h4>
                                        <span className="special-proposition__first-text">Перетворіть своє весілля на незабутню казку, неповторне дійство в одному з найчарівніших куточків світу.</span>
                                        <a href="/" className="special-proposition__first-link">Дізнатися більше</a>
                                    </div>
                                </div>
                                <div className="special-proposition__second">
                                    <img src={secondPropositionImg} alt="Dubai shopping"/>
                                    <div className="special-proposition__second-wrapper">
                                        <h4 className="special-proposition__second-title">Shopping тури в Дубаї</h4>
                                        <span className="special-proposition__second-text">Просадіть всі ваші заощадження в одному з найчарівніших куточків світу. Но касіво і з піснею.</span>
                                        <a href="/" className="special-proposition__second-link">Дізнатися більше</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}

export default SpecialProposition;
