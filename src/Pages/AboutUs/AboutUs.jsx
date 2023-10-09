import React from "react";

import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
     return (
          <div>
               <h1 className="w-[300px] mx-auto mb-5 text-center text-2xl border-b-4 border-[#fcb900] md:text-4xl lg:text-5xl font-bold text-[#fcb900] mt-8 md:mt-16">
                    About Us
               </h1>
               {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-center my-10"></div> */}
               <div className="container mx-auto mb-10">
                    <div>
                         <h2 className="text-2xl font-medium text-center underline">
                              Welcome to RJ Agency, Where Dreams Become
                              Unforgettable Events!
                         </h2>
                         <p className="w-[80%] mx-auto mt-5 text-justify my-3">
                              At RJ Agency, we're not just event planners; we're
                              memory-makers, dream-weavers, and storytellers. We
                              understand that life's most precious moments are
                              meant to be celebrated in style, and that's where
                              we come in. Our journey began with a simple idea:
                              to craft events that are as unique as the people
                              we serve. We are driven by the belief that every
                              occasion, whether it's a wedding, a birthday
                              party, an anniversary, or a baby shower, deserves
                              to be extraordinary. With years of experience and
                              a passionate team of event enthusiasts, we've
                              turned that belief into a reality.
                         </p>
                    </div>
                    <div className="w-[80%] mx-auto">
                         <h2 className="text-2xl font-bold">Our Mission</h2>
                         <p className="w-[80%] my-3">
                              Our mission is clear: to create exceptional
                              experiences that leave an indelible mark on your
                              heart and soul. We believe that your event should
                              reflect your personality, your style, and your
                              dreams. That's why we work tirelessly to bring
                              your vision to life. From the initial concept to
                              the final applause, we're there every step of the
                              way, ensuring that your event is nothing short of
                              perfection.
                         </p>
                    </div>
                    <div className="space-y-3 w-[80%] mx-auto">
                         <p className="text-2xl font-bold">Our Values</p>
                         <p>
                              Creativity: We thrive on creativity and
                              innovation, constantly seeking fresh ideas to make
                              your event stand out.
                         </p>

                         <p>
                              Attention to Detail: From the smallest detail to
                              the grandest gesture, we take care of it all to
                              ensure a flawless event.
                         </p>
                         <p>
                              Customer-Centric: Your satisfaction is our top
                              priority. We listen, we understand, and we deliver
                         </p>
                         <p>
                              Community Involvement: We're committed to giving
                              back to our community, and we're proud to be a
                              socially responsible business.
                         </p>
                    </div>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default AboutUs;
