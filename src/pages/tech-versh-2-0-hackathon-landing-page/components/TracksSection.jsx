import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const TracksSection = () => {
  const [hoveredTrack, setHoveredTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Sustainability",
      icon: "Leaf",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "var(--color-success)",
      description: "Build eco-friendly solutions for environmental challenges. Focus on renewable energy, waste management, carbon footprint reduction, and sustainable living technologies.",
      technologies: ["IoT Sensors", "Data Analytics", "Mobile Apps", "Web Platforms"],
      examples: ["Smart waste management", "Carbon tracking apps", "Renewable energy optimization"]
    },
    {
      id: 2,
      title: "Healthcare",
      icon: "Heart",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      iconColor: "var(--color-error)",
      description: "Revolutionize healthcare with innovative digital solutions. Create tools for patient care, medical diagnosis, health monitoring, and healthcare accessibility.",
      technologies: ["AI/ML", "Telemedicine", "Wearables", "Health APIs"],
      examples: ["Symptom checker apps", "Remote patient monitoring", "Mental health platforms"]
    },
    {
      id: 3,
      title: "AI/ML",
      icon: "Brain",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "var(--color-primary)",
      description: "Harness the power of artificial intelligence and machine learning. Develop intelligent systems for automation, prediction, and decision-making across various domains.",
      technologies: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      examples: ["Predictive analytics", "Image recognition", "Chatbots and virtual assistants"]
    },
    {
      id: 4,
      title: "Web3 + Blockchain",
      icon: "Link",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "var(--color-primary)",
      description: "Build the decentralized future with blockchain technology. Create DApps, smart contracts, NFT platforms, and decentralized finance solutions.",
      technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
      examples: ["DeFi applications", "NFT marketplaces", "Supply chain tracking"]
    },
    {
      id: 5,
      title: "IoT & Smart Cities",
      icon: "Wifi",
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
      iconColor: "var(--color-warning)",
      description: "Connect the physical and digital worlds through IoT. Develop smart city solutions, home automation, industrial IoT, and connected device ecosystems.",
      technologies: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Platforms"],
      examples: ["Smart traffic systems", "Home automation", "Industrial monitoring"]
    }
  ];

  return (
    <SectionAnchor id="tracks" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Code" size={16} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Hackathon Tracks</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="text-gradient block">Innovation Path</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Select from five exciting tracks designed to challenge your creativity and technical skills. 
            Each track offers unique opportunities to make a meaningful impact.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`
                relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer group
                ${hoveredTrack === track.id ? 'scale-105 shadow-elevation-hover' : 'hover:scale-102 shadow-elevation'}
                ${track.borderColor} bg-gradient-to-br ${track.color}
                glass-morphism
              `}
              onMouseEnter={() => setHoveredTrack(track.id)}
              onMouseLeave={() => setHoveredTrack(null)}
            >
              {/* Track Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon 
                  name={track.icon} 
                  size={32} 
                  color={track.iconColor}
                />
              </div>

              {/* Track Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                {track.title}
              </h3>

              {/* Track Description */}
              <p className="text-text-secondary leading-relaxed mb-6">
                {track.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {track.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-text-secondary text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Project Ideas:</h4>
                <ul className="space-y-2">
                  {track.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="ChevronRight" size={14} color="var(--color-accent)" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Track Number */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">{track.id}</span>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`
                absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
              `}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-white/10">
          <Icon name="Info" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Track Guidelines
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <Icon name="Users" size={20} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Team Size</h4>
                <p className="text-sm text-text-secondary">2-4 members per team</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Clock" size={20} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Duration</h4>
                <p className="text-sm text-text-secondary">36 hours of development</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Award" size={20} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Judging</h4>
                <p className="text-sm text-text-secondary">Innovation, impact & execution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionAnchor>
  );
};

export default TracksSection;