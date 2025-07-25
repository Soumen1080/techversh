import React from 'react';
import SmoothScrollNav from '../../components/ui/SmoothScrollNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';

const TechVershLandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <SmoothScrollNav />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Tracks Section */}
        <TracksSection />
        
        {/* Prizes Section */}
        <PrizesSection />
        
        {/* Sponsors Section */}
        <SponsorsSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Contact/Footer Section */}
        <ContactSection />
      </main>
    </div>
  );
};

export default TechVershLandingPage;