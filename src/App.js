import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Icons from './components/Icons/Icons';

//pages
import PayementShippingPage from './pages/PayementShippingPage';
import ContactInfoPage from './pages/ContactInfoPage';
import CountriesPage from './pages/CountriesPage';
import ServicesPage from './pages/ServicesPage';
import NotFoundPage from './pages/NotFoundPage';
import MyTripsPage from './pages/MyTripsPage';
import AboutPage from './pages/AboutPage';
import SalesPage from './pages/SalesPage';
import AllTripsPage from './pages/AllTripsPage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';

// import phoneRegEx from './components/config';

//styles
import './App.scss';

function App() {

  return (
    <div className="page-wrapper">
      <Icons/>
      <Header/>
      <Router basename="/Touristo">
        <div className="content__wrapper">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/payementshipping" component={PayementShippingPage}></Route>
            <Route path="/contactinfo" component={ContactInfoPage}></Route>
            <Route path="/countries" component={CountriesPage}></Route>
            <Route path="/alltrips" component={AllTripsPage}></Route>
            <Route path="/services" component={ServicesPage}></Route>
            <Route path="/mytrips" component={MyTripsPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/sales" component={SalesPage}></Route>
            <Route path="/faq" component={FAQPage}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
