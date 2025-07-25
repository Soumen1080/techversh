import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const SmoothScrollNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'about', label: 'About', icon: 'Info' },
    { id: 'tracks', label: 'Tracks', icon: 'Code' },
    { id: 'prizes', label: 'Prizes', icon: 'Trophy' },
    { id: 'sponsors', label: 'Sponsors', icon: 'Building' },
    { id: 'team', label: 'Team', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
    { id: 'contact', label: 'Contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    window.open('https://forms.google.com/techversh-hackathon-registration', '_blank');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 glass-morphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-gradient">TechVersh</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="default"
                onClick={handleRegisterClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevation hover:shadow-elevation-hover transition-all duration-200"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="var(--color-foreground)" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-morphism border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'bg-accent/20 text-accent' :'text-text-secondary hover:bg-white/10 hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <div className="pt-3 border-t border-white/10">
                <Button
                  variant="default"
                  onClick={handleRegisterClick}
                  fullWidth
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-90 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default SmoothScrollNav;