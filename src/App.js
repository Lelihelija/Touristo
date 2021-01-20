import React from 'react';

//components
import Header from './components/Header/Header';
import MainSearch from './components/MainSearch/MainSearch';
import ToursSales from './components/ToursSalesSection/ToursSalesSection';
import Subscription from './components/Subscription/Subscription';
import SpecialProposition from './components/SpecialPropositionsSection/SpecialPropositionsSection';
import Reviews from './components/ReviewsSection/ReviewsSection';
import Footer from './components/Footer/Footer';
import Icons from './components/Icons/Icons';
// import phoneRegEx from './components/config';

//styles
import './App.scss';

function App() {
  return (
    <div className="page-wrapper">
      <Icons/>
      <Header/>
      <div className="content__wrapper">
        <MainSearch/>
        <ToursSales/>
        <Subscription/>
        <SpecialProposition/>
        <Reviews/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
