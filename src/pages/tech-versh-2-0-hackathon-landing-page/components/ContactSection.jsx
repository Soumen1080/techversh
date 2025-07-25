import React from 'react';
import Icon from '../../../components/AppIcon';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      primary: "contact@techversh.com",
      secondary: "For general inquiries",
      action: () => window.open('mailto:contact@techversh.com', '_blank')
    },
    {
      icon: "Phone",
      title: "Phone",
      primary: "+91 98765 43210",
      secondary: "Available 9 AM - 6 PM IST",
      action: () => window.open('tel:+919876543210', '_blank')
    },
    {
      icon: "MapPin",
      title: "Location",
      primary: "Virtual & On-Ground",
      secondary: "India-wide participation",
      action: null
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com/company/techversh",
      color: "hover:text-blue-400",
      followers: "5K+ followers"
    },
    {
      platform: "Twitter",
      icon: "Twitter", 
      url: "https://twitter.com/techversh",
      color: "hover:text-blue-400",
      followers: "3K+ followers"
    },
    {
      platform: "Instagram",
      icon: "Instagram",
      url: "https://instagram.com/techversh",
      color: "hover:text-pink-400",
      followers: "8K+ followers"
    },
    {
      platform: "Discord",
      icon: "MessageSquare",
      url: "https://discord.gg/techversh",
      color: "hover:text-purple-400",
      followers: "2K+ members"
    },
    {
      platform: "GitHub",
      icon: "Github",
      url: "https://github.com/techversh",
      color: "hover:text-gray-400",
      followers: "Open source"
    },
    {
      platform: "YouTube",
      icon: "Youtube",
      url: "https://youtube.com/techversh",
      color: "hover:text-red-400",
      followers: "1K+ subscribers"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Prizes", href: "#prizes" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" }
  ];

  const importantLinks = [
    { label: "Code of Conduct", href: "https://techversh.com/code-of-conduct" },
    { label: "Privacy Policy", href: "https://techversh.com/privacy" },
    { label: "Terms & Conditions", href: "https://techversh.com/terms" },
    { label: "Sponsorship", href: "mailto:sponsors@techversh.com" }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <SectionAnchor id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Mail" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Connect &amp;
            <span className="text-gradient block">Build Together</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or want to get involved? We'd love to hear from you! 
            Reach out through any of our channels below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`
                p-8 glass-morphism rounded-3xl border border-white/10 hover:border-white/20 
                transition-all duration-300 hover:scale-105 text-center group
                ${contact.action ? 'cursor-pointer' : ''}
              `}
              onClick={contact.action}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={contact.icon} size={28} color="var(--color-primary)" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{contact.title}</h3>
              <p className="text-lg font-medium text-primary mb-2">{contact.primary}</p>
              <p className="text-sm text-text-secondary">{contact.secondary}</p>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Follow Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => window.open(social.url, '_blank')}
                className={`
                  group p-6 glass-morphism rounded-2xl border border-white/10 hover:border-white/20 
                  transition-all duration-300 hover:scale-105 text-center
                  ${social.color}
                `}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20 mb-4 transition-colors duration-300">
                  <Icon name={social.icon} size={24} color="var(--color-text-secondary)" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">{social.platform}</h4>
                <p className="text-xs text-text-secondary">{social.followers}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
          <Icon name="Bell" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h3>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Get the latest updates about TechVersh-2.0, including registration deadlines, 
            workshop announcements, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Important</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Event Details</h4>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} color="var(--color-accent)" />
                <span>Sep 12-13, 2025</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="var(--color-accent)" />
                <span>36 Hours</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Users" size={16} color="var(--color-accent)" />
                <span>2000+ Participants</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Trophy" size={16} color="var(--color-accent)" />
                <span>₹12L+ Prizes</span>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <a href="mailto:contact@techversh.com" className="hover:text-foreground transition-colors duration-200">
                  contact@techversh.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-foreground transition-colors duration-200">
                  +91 98765 43210
                </a>
              </li>
              <li>Virtual &amp; On-Ground</li>
              <li>India-wide Event</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} color="white" />
              </div>
              <div>
                <p className="text-foreground font-semibold">TechVersh-2.0</p>
                <p className="text-sm text-text-secondary">
                  © {new Date().getFullYear()} TechVersh. All rights reserved.
                </p>
              </div>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-text-secondary">
              <span className="text-sm">Made with</span>
              <Icon name="Heart" size={16} color="var(--color-error)" />
              <span className="text-sm">by students, for students</span>
            </div>
          </div>
        </div>
      </div>
    </SectionAnchor>
  );
};

export default ContactSection;