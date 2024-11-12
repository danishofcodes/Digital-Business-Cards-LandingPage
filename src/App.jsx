import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Steps from "./components/HowItWorksSection/Steps";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ/FAQ";
import ClientSpeaks from "./components/ClientSpeaks/ClientSpeaks";
import NextGenQRCodes from "./components/NextGenQRCodes/NextGenQRCodes";
import CheckOutTheseCustomers from "./components/CheckOutTheseCustomers/CheckOutTheseCustomers";
import FeatureBitsCard from "./components/Feature/FeatureBitsCard";
import KeyFeatures from "./components/KeyFeatures";
import SoManywaysToShare from "./components/SoManyWaysToShare/SoManywaysToShare";
import IntegrateHRTools from "./components/IntegrateHRTools/IntegrateHRTools";
import GoToTop from "./components/goToTop/GoToTop";
function App() {
  return (  

<>
      <Navbar />
      <main> 
      <HeroSection />
      <IntegrateHRTools/>
      <Steps/>
      <CheckOutTheseCustomers/>
      <KeyFeatures/>
      <NextGenQRCodes />
      <SoManywaysToShare/>
      <FAQ />
      <ClientSpeaks />
      </main>

      <footer className="custom-container">
        <Footer />
      </footer> 

      <GoToTop/>
    </>
  );
}

export default App;
