// pages/index.js
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}