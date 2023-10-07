import React from "react";
import Banner from "../../Components/Header/BannerSection/Banner";
import FirstExtraSection from "../../Components/ExtraSection/FirstExtraSection";
import CardSection from "../../Components/CardSectionComponent/Cardsection";
import GallerySection from "../../Components/GallerySection/GallerySection";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
     return (
          <div>
                    <Banner></Banner>
               <div className="container mx-auto">
                    <CardSection></CardSection>
                    <GallerySection></GallerySection>
                    <FirstExtraSection></FirstExtraSection>
               </div>
                    <Footer></Footer>
          </div>
     );
};

export default Home;
