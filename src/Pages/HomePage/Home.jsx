import React from 'react';
import Banner from '../../Components/Header/BannerSection/Banner';
import FirstExtraSection from '../../Components/ExtraSection/FirstExtraSection';
import Cards from '../../Components/CardSectionComponent/Cards';
import CardSection from '../../Components/CardSectionComponent/Cardsection';

const Home = () => {
     return (
          <div className='container mx-auto'>
               <Banner></Banner>
               <CardSection></CardSection>
               <FirstExtraSection></FirstExtraSection>
          </div>
     );
};

export default Home;