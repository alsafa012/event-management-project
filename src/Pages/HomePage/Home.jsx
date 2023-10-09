import React from "react";
import Banner from "../../Components/Header/BannerSection/Banner";
import FirstExtraSection from "../../Components/ExtraSection/FirstExtraSection";
import CardSection from "../../Components/CardSectionComponent/Cardsection";
import GallerySection from "../../Components/GallerySection/GallerySection";
import Footer from "../../Components/Footer/Footer";
import SecondExtraSection from "../../Components/ExtraSection/SecondExtraSection";

const Home = () => {
     return (
          <div>
                    <Banner></Banner>
               <div className="container mx-auto">
                    <FirstExtraSection></FirstExtraSection>
                    <CardSection></CardSection>
                    <GallerySection></GallerySection>
                    <SecondExtraSection></SecondExtraSection>
               </div>
                    <Footer></Footer>
          </div>
     );
};

export default Home;
