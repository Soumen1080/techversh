import React from 'react';
import Icon from '../../../components/AppIcon';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const AboutSection = () => {
  const statistics = [
    {
      icon: "Users",
      value: "2000+",
      label: "Registrations Expected",
      color: "text-primary"
    },
    {
      icon: "Code",
      value: "300+",
      label: "On-Ground Hackers",
      color: "text-accent"
    },
    {
      icon: "Trophy",
      value: "₹12L+",
      label: "Total Prize Pool",
      color: "text-warning"
    },
    {
      icon: "Clock",
      value: "36",
      label: "Hours of Innovation",
      color: "text-success"
    }
  ];

  const features = [
    {
      icon: "Lightbulb",
      title: "Innovation Focus",
      description: "Build solutions that address real-world problems across multiple domains"
    },
    {
      icon: "Users",
      title: "Team Collaboration",
      description: "Work with like-minded individuals and form lasting professional connections"
    },
    {
      icon: "Award",
      title: "Industry Recognition",
      description: "Get noticed by top tech companies and startup founders"
    },
    {
      icon: "BookOpen",
      title: "Learning Experience",
      description: "Access mentorship from industry experts and expand your technical skills"
    }
  ];

  return (
    <SectionAnchor id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Info" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">About TechVersh</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where Innovation Meets
            <span className="text-gradient block">Opportunity</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            TechVersh-2.0 is India's premier student hackathon designed to empower the next generation of 
            technology leaders. Our mission is to create a platform where brilliant minds collaborate, 
            innovate, and build solutions that can change the world.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 glass-morphism rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={stat.icon} size={24} color="var(--color-primary)" />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <p className="text-sm text-text-secondary font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 mb-16 border border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Target" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              To foster innovation, creativity, and collaboration among India's brightest student minds. 
              We believe that the future of technology lies in the hands of passionate students who dare 
              to think differently and build solutions that matter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Innovation
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Collaboration
              </span>
              <span className="px-4 py-2 bg-warning/20 text-warning rounded-full text-sm font-medium">
                Learning
              </span>
              <span className="px-4 py-2 bg-success/20 text-success rounded-full text-sm font-medium">
                Growth
              </span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={feature.icon} size={28} color="var(--color-primary)" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6">
            Ready to be part of something extraordinary?
          </p>
          <button 
            onClick={() => document.getElementById('tracks').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 px-6 py-3 text-primary hover:text-accent transition-colors duration-200 group"
          >
            <span className="font-medium">Explore Tracks</span>
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

export default AboutSection;