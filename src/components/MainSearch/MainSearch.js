import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Range } from 'rc-slider';

//components
import Icon from '../Icon/Icon';


class MainSearch extends Component {

  state = {
    extendedSearchActive: true,
    choosePassengersActive: true,
    startDate: new Date(),
    endDate: null,
    adultsQuantity: 1,
    childrenQuantity: 0,
  }

  extendedSearchToggle = () => {
    this.setState(prevState => {
      return {extendedSearchActive: !prevState.extendedSearchActive,}
    });
  }

  onDateChange = (dates) => {
    const [start, end] = dates;
    this.setState({startDate: start, endDate: end});
  }

  choosePassengersToggle = (e) => {
    this.setState(prevState => {
      return {choosePassengersActive: !prevState.choosePassengersActive,}
    });
    console.log('woopie!!');
  }

  // onPassengersChange = (passengers) => {
  //   // const [adults, children] = passengers;
  //   // this.setState({adultsQuantity: adults, childrenQuantity: children});
  // }

  // const ExampleCustomInput = ({ value, onClick }) => (
  //   <button className="example-custom-input" onClick={onClick}>
  //     {value}
  //   </button>

  render() {
    const extendedSearchActive = this.state.extendedSearchActive;
    // console.log('start: ', this.state.startDate, 'end: ', this.state.endDate);

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
              {extendedSearchActive ?
                  <Row className="mainsearch__extendedSearch">
                    <Col className="mainsearch__extendedSearch-calendar" xl="4">
                      <Icon name="icon-calendar" customClass="icon-extendedSearch"/>
                      <span className="checkmark">
                        <div className="checkmark_item"></div>
                      </span>
                      <DatePicker
                        closeOnScroll={true}
                        placeholderText="Місяць або дата"
                        // selected={this.state.startDate}
                        shouldCloseOnSelect={false}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.onDateChange}
                        selectsRange
                      />
                      <label className="mainsearch__extendedSearch-calendar-checkbox">
                        <input type="checkbox"/>
                        <span>гнучкі дати</span>
                      </label>
                    </Col>
                    <Col className="mainsearch__extendedSearch-duration" xl="4">
                      <span className="mainsearch__extendedSearch-duration-title">Тривалість</span>
                      <Range
                        railStyle={{ backgroundColor: '#22C3CA', height: '8px' }}
                        trackStyle={{ backgroundColor: '#22C3CA', height: '8px' }}
                        handleStyle={{
                          border: '8px solid white',
                          backgroundColor: '#22C3CA',
                          marginTop: '-13px',
                          height: '32px',
                          width: '32px',
                        }}
                      />
                    </Col>
                    <Col className="mainsearch__extendedSearch-passengers" xl="4">
                    <div
                      className="mainsearch__extendedSearch-passengers-container ">
                        <div className={this.state.choosePassengersActive ? 'mainsearch__extendedSearch-passengers-input active' : 'mainsearch__extendedSearch-passengers-input'} onClick={this.choosePassengersToggle}>
                          <Icon name="icon-passenger" customClass="icon-extendedSearch"/>
                          <span className="checkmark">
                            <div className="checkmark_item"></div>
                          </span>
                          <span className={this.state.choosePassengersActive ? 'text-invisible' : 'text-visible'}>Кількість подорожуючих</span>
                        </div>
                        {this.state.choosePassengersActive ?
                          <div className="mainsearch__extendedSearch-passengers-quantity passengers__quantity-wrapper">
                            <div className="passengers__quantity-item">
                              <span className="passengers__quantity-title">Дорослих</span>
                              <div className="quantity"><span>2</span></div>
                              <button type="button" className="btn-increase">
                                <div className="minus"></div>
                                <div className="plus"></div>
                              </button>
                              <button type="button" className="btn-decrease">
                                <div className="minus"></div>
                              </button>
                            </div>
                            <div className="passengers__quantity-item">
                              <span className="passengers__quantity-title">Дітей</span>
                              <div className="quantity"><span>0</span></div>
                              <button type="button" className="btn-increase">
                                <div className="minus"></div>
                                <div className="plus"></div>
                              </button>
                              <button type="button" className="btn-decrease">
                                <div className="minus"></div>
                              </button>
                            </div>
                          </div>
                        :
                          null
                      }
                    </div>
                    </Col>
                  </Row>
                :
                  null
              }
              <div className="mainsearch__buttons">
                <button
                  className="mainsearch__extendedsearchBtn"
                  type="button"
                  onClick={this.extendedSearchToggle}
                  >{extendedSearchActive ? 'Сховати' : 'Розширений пошук'}
                </button>
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
}

export default MainSearch;