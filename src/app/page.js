import Hero from '../components/Hero';
    import Stats from '../components/Stats';
    import Services from '../components/Services';
    import LeadMagnet from '../components/LeadMagnet';
    import WhyChoose from '../components/WhyChoose';
    import CaseStudies from '../components/CaseStudies';
    import Contact from '../components/Contact';
    import StickyCTA from '../components/StickyCTA';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    export default function Home() {
      return (
        <div className="bg-gray-50">
          <Navbar />
          <Hero />
          <Stats />
          <Services />
          <LeadMagnet />
          <WhyChoose />
          <CaseStudies />
          <Contact />
          <StickyCTA />
          <Footer />
        </div>
      );
    }
