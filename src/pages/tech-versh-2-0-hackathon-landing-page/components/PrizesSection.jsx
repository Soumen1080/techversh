import React from 'react';
import Icon from '../../../components/AppIcon';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const PrizesSection = () => {
  const mainPrizes = [
    {
      position: "1st",
      title: "Winner",
      amount: "₹75,000",
      icon: "Trophy",
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/50",
      iconColor: "var(--color-warning)",
      benefits: ["Cash Prize", "Mentorship Program", "Internship Opportunities", "Certificate"]
    },
    {
      position: "2nd",
      title: "Runner Up",
      amount: "₹50,000",
      icon: "Medal",
      color: "from-gray-400/20 to-gray-500/20",
      borderColor: "border-gray-400/50",
      iconColor: "var(--color-text-secondary)",
      benefits: ["Cash Prize", "Industry Recognition", "Networking Access", "Certificate"]
    },
    {
      position: "3rd",
      title: "Second Runner Up",
      amount: "₹25,000",
      icon: "Award",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/50",
      iconColor: "var(--color-error)",
      benefits: ["Cash Prize", "Startup Guidance", "Tech Resources", "Certificate"]
    }
  ];

  const specialPrizes = [
    {
      title: "Best Innovation",
      amount: "₹25,000",
      icon: "Lightbulb",
      description: "Most creative and innovative solution"
    },
    {
      title: "Best UI/UX",
      amount: "₹15,000",
      icon: "Palette",
      description: "Outstanding user interface and experience"
    },
    {
      title: "Best Social Impact",
      amount: "₹20,000",
      icon: "Heart",
      description: "Solution with highest social impact potential"
    },
    {
      title: "People\'s Choice",
      amount: "₹10,000",
      icon: "Users",
      description: "Voted by participants and audience"
    }
  ];

  const sponsorBounties = [
    {
      company: "TechCorp Solutions",
      amount: "₹2,00,000",
      category: "AI/ML Track",
      description: "Best AI-powered solution for business automation"
    },
    {
      company: "GreenTech Innovations",
      amount: "₹1,50,000",
      category: "Sustainability Track",
      description: "Most impactful environmental solution"
    },
    {
      company: "HealthTech Partners",
      amount: "₹1,75,000",
      category: "Healthcare Track",
      description: "Revolutionary healthcare technology"
    },
    {
      company: "BlockChain Ventures",
      amount: "₹2,25,000",
      category: "Web3 Track",
      description: "Best decentralized application"
    },
    {
      company: "Smart City Solutions",
      amount: "₹1,25,000",
      category: "IoT Track",
      description: "Most innovative IoT implementation"
    },
    {
      company: "Future Labs",
      amount: "₹1,00,000",
      category: "Open Innovation",
      description: "Cross-track innovative solution"
    }
  ];

  const additionalBenefits = [
    {
      icon: "Briefcase",
      title: "Job Opportunities",
      description: "Direct recruitment opportunities with partner companies"
    },
    {
      icon: "GraduationCap",
      title: "Mentorship",
      description: "1-on-1 mentorship from industry experts for 6 months"
    },
    {
      icon: "Network",
      title: "Networking",
      description: "Access to exclusive tech community and events"
    },
    {
      icon: "Rocket",
      title: "Startup Support",
      description: "Incubation support and funding connections"
    }
  ];

  return (
    <SectionAnchor id="prizes" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 border border-warning/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Trophy" size={16} color="var(--color-warning)" />
            <span className="text-sm font-medium text-warning">Prizes & Rewards</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Win Big &amp; Get
            <span className="text-gradient block">Recognized</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Compete for exciting cash prizes, exclusive opportunities, and recognition from top industry leaders. 
            Your innovation deserves to be rewarded.
          </p>
        </div>

        {/* Total Prize Pool */}
        <div className="text-center mb-16">
          <div className="inline-block p-8 glass-morphism rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
            <Icon name="DollarSign" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
            <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">₹12+ Lakhs</div>
            <p className="text-lg text-text-secondary font-medium">Total Prize Pool</p>
            <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-text-secondary">
              <span>₹2L Main Prizes</span>
              <span>•</span>
              <span>₹10L+ Sponsor Bounties</span>
            </div>
          </div>
        </div>

        {/* Main Prizes */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Main Competition Prizes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mainPrizes.map((prize, index) => (
              <div
                key={index}
                className={`
                  relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 hover:shadow-elevation-hover
                  ${prize.borderColor} bg-gradient-to-br ${prize.color} glass-morphism
                  ${index === 0 ? 'md:scale-110 md:z-10' : ''}
                `}
              >
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-warning to-amber-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    🏆 GRAND PRIZE
                  </div>
                )}
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-white/20 to-white/10 mb-6">
                    <Icon name={prize.icon} size={40} color={prize.iconColor} />
                  </div>
                  
                  <div className="text-lg font-semibold text-text-secondary mb-2">{prize.position} Place</div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">{prize.title}</h4>
                  <div className="text-3xl font-bold text-gradient mb-6">{prize.amount}</div>
                  
                  <div className="space-y-3">
                    {prize.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={16} color="var(--color-success)" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Category Prizes */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Special Category Awards</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((prize, index) => (
              <div
                key={index}
                className="p-6 glass-morphism rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                  <Icon name={prize.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{prize.title}</h4>
                <div className="text-xl font-bold text-accent mb-3">{prize.amount}</div>
                <p className="text-sm text-text-secondary">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Bounties */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Sponsor Bounties</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorBounties.map((bounty, index) => (
              <div
                key={index}
                className="p-6 glass-morphism rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-102"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-foreground">{bounty.company}</h4>
                  <span className="text-xl font-bold text-primary">{bounty.amount}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full mb-3">
                  {bounty.category}
                </div>
                <p className="text-sm text-text-secondary">{bounty.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-white/10">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Beyond Cash Prizes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-4">
                  <Icon name={benefit.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h4>
                <p className="text-sm text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6">
            Ready to compete for these amazing prizes?
          </p>
          <button 
            onClick={() => document.getElementById('sponsors').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 px-6 py-3 text-primary hover:text-accent transition-colors duration-200 group"
          >
            <span className="font-medium">Meet Our Sponsors</span>
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

export default PrizesSection;