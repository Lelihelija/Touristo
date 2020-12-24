import React from 'react';
import Header from './components/Header/Header';
import MainSearch from './components/MainSearch/MainSearch';
import ToursSales from './components/ToursSalesSection/ToursSalesSection';
import Subscription from './components/Subscription/Subscription';
import SpecialProposition from './components/SpecialPropositionsSection/SpecialPropositionsSection';
import Reviews from './components/ReviewsSection/ReviewsSection';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <MainSearch/> 
      <ToursSales/> {/* Change active id or smth */}
      <Subscription/>
      <SpecialProposition/>
      <Reviews/> {/* Make custom arrows. Change centering of each card in slider */}
      <Footer/>
    </>
  );
}

export default App;
    