import React from 'react';
import Icon from '../../../components/AppIcon';
import CTAButton from '../../../components/ui/CTAButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Event Badge */}
        <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-6 py-2 mb-8 glass-morphism">
          <Icon name="Calendar" size={16} color="var(--color-primary)" />
          <span className="text-sm font-medium text-primary">September 12-13, 2025</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-gradient mb-2">TechVersh</span>
          <span className="block text-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold">2.0 Hackathon</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-4">
          Code, Create, Conquer:
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-accent font-medium mb-8">
          24 Hours of Innovation
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Join India's premier student hackathon where brilliant minds collaborate to build revolutionary solutions. 
          Experience 36 hours of intense coding, mentorship from industry experts, and compete for exciting prizes.
        </p>

        {/* Location & Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="MapPin" size={20} color="var(--color-accent)" />
            <span className="font-medium">Virtual & On-Ground Event</span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="Users" size={20} color="var(--color-accent)" />
            <span className="font-medium">2000+ Expected Participants</span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="Trophy" size={20} color="var(--color-accent)" />
            <span className="font-medium">₹2 Lakhs Prize Pool</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <CTAButton 
            variant="primary" 
            size="lg"
            iconName="ExternalLink"
            iconPosition="right"
            className="px-8 py-4 text-lg font-semibold"
          >
            Register Now
          </CTAButton>
          
          <button 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center space-x-2 px-6 py-3 text-text-secondary hover:text-foreground transition-colors duration-200 group"
          >
            <span className="font-medium">Learn More</span>
            <Icon 
              name="ChevronDown" 
              size={20} 
              className="group-hover:translate-y-1 transition-transform duration-200" 
            />
          </button>
        </div>

        {/* Countdown Timer Placeholder */}
        <div className="mt-16 p-6 glass-morphism rounded-2xl border border-white/10 max-w-md mx-auto">
          <p className="text-sm text-text-secondary mb-3 font-medium">Event Starts In</p>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">245</div>
              <div className="text-xs text-text-secondary">Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-xs text-text-secondary">Hours</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">34</div>
              <div className="text-xs text-text-secondary">Minutes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">56</div>
              <div className="text-xs text-text-secondary">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;