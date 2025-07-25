import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const SponsorsSection = () => {
  const sponsorCategories = [
    {
      title: "Platinum Sponsors",
      subtitle: "Our Premier Partners",
      color: "from-gray-300/20 to-gray-400/20",
      borderColor: "border-gray-300/30",
      sponsors: [
        {
          name: "TechCorp Global",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
          website: "https://techcorp.com",
          description: "Leading technology solutions provider"
        },
        {
          name: "InnovateX Labs",
          logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop",
          website: "https://innovatex.com",
          description: "AI and machine learning specialists"
        }
      ]
    },
    {
      title: "Gold Sponsors",
      subtitle: "Valued Partners",
      color: "from-yellow-400/20 to-amber-500/20",
      borderColor: "border-yellow-400/30",
      sponsors: [
        {
          name: "CloudTech Solutions",
          logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop",
          website: "https://cloudtech.com",
          description: "Cloud infrastructure and services"
        },
        {
          name: "DataFlow Systems",
          logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop",
          website: "https://dataflow.com",
          description: "Big data and analytics platform"
        },
        {
          name: "SecureNet Inc",
          logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop",
          website: "https://securenet.com",
          description: "Cybersecurity solutions"
        },
        {
          name: "MobileFirst Tech",
          logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=100&fit=crop",
          website: "https://mobilefirst.com",
          description: "Mobile app development platform"
        }
      ]
    },
    {
      title: "Community Partners",
      subtitle: "Supporting Innovation",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      sponsors: [
        {
          name: "DevCommunity Hub",
          logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=100&fit=crop",
          website: "https://devcommunity.com",
          description: "Developer community platform"
        },
        {
          name: "StartupAccelerator",
          logo: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=100&fit=crop",
          website: "https://startupaccelerator.com",
          description: "Startup incubation and funding"
        },
        {
          name: "TechEducation Plus",
          logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop",
          website: "https://techeducation.com",
          description: "Online tech education platform"
        },
        {
          name: "OpenSource Foundation",
          logo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=100&fit=crop",
          website: "https://opensource.org",
          description: "Open source software advocacy"
        }
      ]
    },
    {
      title: "Media Partners",
      subtitle: "Spreading the Word",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      sponsors: [
        {
          name: "TechNews Daily",
          logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=100&fit=crop",
          website: "https://technews.com",
          description: "Leading tech news publication"
        },
        {
          name: "Innovation Podcast",
          logo: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&h=100&fit=crop",
          website: "https://innovationpodcast.com",
          description: "Technology and innovation podcast"
        },
        {
          name: "CodeCast Network",
          logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop",
          website: "https://codecast.com",
          description: "Developer-focused media network"
        }
      ]
    }
  ];

  const sponsorshipBenefits = [
    {
      icon: "Users",
      title: "Brand Exposure",
      description: "Reach 2000+ tech enthusiasts and students"
    },
    {
      icon: "Briefcase",
      title: "Talent Acquisition",
      description: "Connect with top engineering talent"
    },
    {
      icon: "Network",
      title: "Industry Networking",
      description: "Build relationships with tech leaders"
    },
    {
      icon: "Lightbulb",
      title: "Innovation Access",
      description: "First look at cutting-edge solutions"
    }
  ];

  return (
    <SectionAnchor id="sponsors" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Building" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Our Partners</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powered by Industry
            <span className="text-gradient block">Leaders</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with innovative companies and organizations that share our vision 
            of empowering the next generation of technology leaders.
          </p>
        </div>

        {/* Sponsor Categories */}
        <div className="space-y-16">
          {sponsorCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              {/* Category Header */}
              <div className="mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-text-secondary">{category.subtitle}</p>
              </div>

              {/* Sponsors Grid */}
              <div className={`
                grid gap-8 mb-8
                ${category.sponsors.length <= 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 
                  category.sponsors.length <= 4 ? 'md:grid-cols-2 lg:grid-cols-4': 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}
              `}>
                {category.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className={`
                      group p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-elevation-hover
                      ${category.borderColor} bg-gradient-to-br ${category.color} glass-morphism
                      cursor-pointer
                    `}
                    onClick={() => window.open(sponsor.website, '_blank')}
                  >
                    {/* Logo Container */}
                    <div className="w-full h-24 mb-6 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>

                    {/* Sponsor Info */}
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                      {sponsor.name}
                    </h4>
                    <p className="text-sm text-text-secondary group-hover:text-foreground transition-colors duration-300">
                      {sponsor.description}
                    </p>

                    {/* External Link Icon */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon name="ExternalLink" size={16} color="var(--color-primary)" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsorship Benefits */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="text-center mb-12">
            <Icon name="Handshake" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Join our mission to foster innovation and connect with the brightest minds in technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-6">
                  <Icon name={benefit.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Become a Sponsor CTA */}
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Interested in Sponsoring?
            </h4>
            <p className="text-text-secondary mb-6">
              Contact us to learn about sponsorship opportunities and packages.
            </p>
            <button 
              onClick={() => window.open('mailto:sponsors@techversh.com', '_blank')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-200"
            >
              <Icon name="Mail" size={20} />
              <span>Contact Sponsorship Team</span>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6">
            Want to meet our amazing organizing team?
          </p>
          <button 
            onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 px-6 py-3 text-primary hover:text-accent transition-colors duration-200 group"
          >
            <span className="font-medium">Meet the Team</span>
            <Icon 
              name="ArrowRight" 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-200" 
            />
          </button>
        </div>
      </div>
    </SectionAnchor>
  );
};

export default SponsorsSection;