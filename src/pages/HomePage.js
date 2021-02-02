import React from 'react';

//components
import MainSearch from '../components/MainSearch/MainSearch';
import ToursSales from '../components/ToursSalesSection/ToursSalesSection';
import Subscription from '../components/Subscription/Subscription';
import SpecialProposition from '../components/SpecialPropositionsSection/SpecialPropositionsSection';
import Reviews from '../components/ReviewsSection/ReviewsSection';

export default function HomePage() {
  return (
    <>
      <MainSearch/>
      <ToursSales/>
      <Subscription/>
      <SpecialProposition/>
      <Reviews/>
    </>
  );
};
