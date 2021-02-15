import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import onClickOutside from "react-onclickoutside";
import ReactTags from 'react-tag-autocomplete';
import DatePicker from 'react-datepicker';
import { Range } from 'rc-slider';
import axios from 'axios';

//components
import Icon from '../Icon/Icon';

// const api = axios.create({
//   baseURL: `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries?limit=200&page=1&offset=0&sort=asc&order_by=country`
// })


class MainSearch extends Component {

  state = {
    extendedSearchActive: true,
    choosePassengersActive: true,
    startDate: new Date(),
    endDate: null,
    adultsQuantity: 2,
    childrenQuantity: 0,
    suggestions: [],
    tags: [],
  }

  componentDidMount() {
    axios.get('https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries?limit=200&page=1&offset=0&sort=asc&order_by=country')
      .then(res => {
        res.data.results.map((elem, index) => {
          return this.setState(prevState => ({
            suggestions: [...prevState.suggestions, {id: index, name: elem.name}]
          }))
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  reactTags = React.createRef()

  onDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  onAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }


  passengersQuantity = (event) => {
    const adults = +this.state.adultsQuantity;
    const children = +this.state.childrenQuantity;

      switch (event.target.id) {
        case 'adultsIncrease':
          if (adults < 20) {
          // this.setState({adultsQuantity: adults + 1});
          console.log(this.state.suggestions);
          };
          break;
        case 'adultsDecrease':
          if (adults > 1) {
          this.setState({adultsQuantity: adults - 1});
          };
          break;
        case 'childrenIncrease':
          if (children < 20) {
            this.setState({childrenQuantity: children + 1});
          };
          break;
        case 'childrenDecrease':
          if (children > 0) {
            this.setState({childrenQuantity: children - 1});
          };
          break;
        case 'adultsOnChange':
          // if ((adults > 1) && (adults < 20)) {
          this.setState({adultsQuantity: event.target.value});
          // };
          console.log('quantity change in input');
          break;
        case 'childrenOnChange':
          // if ((children > 0) && (children < 20)) {
          this.setState({childrenQuantity: event.target.value});
          // };
          console.log('quantity change in input');
          break;
        default:
          break;
      }
    
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

  choosePassengersToggle = () => {
    this.setState(prevState => {
      return {choosePassengersActive: !prevState.choosePassengersActive,}
    });
  }

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
                <ReactTags
                  ref={this.reactTags}
                  tags={this.state.tags}
                  placeholderText="Country, city. In english"
                  suggestions={this.state.suggestions}
                  onDelete={this.onDelete.bind(this)}
                  onAddition={this.onAddition.bind(this)} />
              </label>
              {extendedSearchActive ?
                  <Row className="mainsearch__extendedSearch">
                    <Col className="mainsearch__extendedSearch-calendar" xs="12" md="5" xl="4">
                      <Icon name="icon-calendar" customClass="icon-extendedSearch"/>
                      <div className="mainsearch__extendedSearch-calendar-wrapper">
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
                      </div>
                      <label className="mainsearch__extendedSearch-calendar-checkbox checkbox__label">
                        <input className="checkbox__input" type="checkbox"/>
                        <span className="checkbox__icon"></span>
                        <span className="checkbox__text">гнучкі дати</span>
                      </label>
                    </Col>
                    <Col className="mainsearch__extendedSearch-duration" xl="4" lg="12">
                      <span className="mainsearch__extendedSearch-duration-title">Тривалість</span>
                      <div className="mainsearch__extendedSearch-duration-slider">
                        <Range
                          min={2}
                          max={120}
                          allowCross={false}
                          railStyle={{ backgroundColor: '#22C3CA', height: 8 }}
                          trackStyle={[{ backgroundColor: '#22C3CA', height: 8 }, { backgroundColor: '#22C3CA', height: 8 }]}
                          handleStyle={[{
                              backgroundColor: '#22C3CA',
                              border: '8px solid white',
                              boxShadow: 'none',
                              marginTop: -13,
                              height: 32,
                              width: 32,
                            },
                            {
                              backgroundColor: '#22C3CA',
                              border: '8px solid white',
                              boxShadow: 'none',
                              marginTop: -13,
                              height: 32,
                              width: 32,
                            }
                          ]}
                        />
                      </div>
                      <div className="mainsearch__extendedSearch-duration-text">
                        <span>від 2 днів</span>
                        <span>до 120 днів</span>
                      </div>
                    </Col>
                    <Col className="mainsearch__extendedSearch-passengers" xs="12" md="5" xl="4">
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
                              <div className="quantity"><input type="number" id="adultsOnChange" onChange={this.passengersQuantity} min="1" max="20" value={this.state.adultsQuantity}></input></div>
                              <button type="button" className="btn-increase" id="adultsIncrease" onClick={this.passengersQuantity}>
                                <div className="minus"></div>
                                <div className="plus"></div>
                              </button>
                              <button type="button" id="adultsDecrease" className="btn-decrease" onClick={this.passengersQuantity}>
                                <div className="minus"></div>
                              </button>
                            </div>
                            <div className="passengers__quantity-item">
                              <span className="passengers__quantity-title">Дітей</span>
                              <div className="quantity"><input type="number" min="0" max="20" id="childrenOnChange" onChange={this.passengersQuantity} value={this.state.childrenQuantity}></input></div>
                              <button type="button" id="childrenIncrease" className="btn-increase" onClick={this.passengersQuantity}>
                                <div className="minus"></div>
                                <div className="plus"></div>
                              </button>
                              <button type="button" id="childrenDecrease" className="btn-decrease" onClick={this.passengersQuantity}>
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
                  className={extendedSearchActive ? 'mainsearch__extendedsearchBtn' : 'mainsearch__extendedsearchBtn inactive'}
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