import React, { Component } from "react";
import Header from "../components/Header/header";//ok
import HeroSection from "../components/HeroSection/HeroSection4";//ok
import PromoSection from "../components/PromoSection";//ok
import AboutSection from "../components/AboutUs/AboutUs4";//ok
import PricingSection from "../components/Pricing";//ok
import Screenshots from "../components/Screenshots";//ok
import TeamMember from "../components/TeamMember";//ok
import ContactSection from "../components/Contact";//ok
import FooterSection from "../components/Footer";

/*abaixo de <AboutSection /> add <FeatureSection /> add <VideoSection showDownloadBtn={true} />
add <Testimonial /> add <TrustedCompany />*/ /*depois do fechamento da div add <SubscribeSection /> <FooterSection />
add <PricingSection hideFaq={true} faq="four" bgColor="gray" /><Screenshots /> <TeamMember />*/

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <PromoSection />
          <AboutSection />  
          <PricingSection />
          <ContactSection /> 
          <FooterSection /> 
        </div>    
      </React.Fragment>
    );
  }
}

export default Theme;
