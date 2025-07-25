import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Event Director",
      department: "Computer Science",
      year: "Final Year",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about organizing tech events and fostering innovation in the student community.",
      linkedin: "https://linkedin.com/in/arjunsharma",
      twitter: "https://twitter.com/arjunsharma",
      email: "arjun@techversh.com",
      skills: ["Event Management", "Leadership", "Community Building"]
    },
    {
      name: "Priya Patel",
      role: "Technical Lead",
      department: "Information Technology",
      year: "Third Year",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer with expertise in modern web technologies and hackathon mentoring.",
      linkedin: "https://linkedin.com/in/priyapatel",
      github: "https://github.com/priyapatel",
      email: "priya@techversh.com",
      skills: ["Full Stack Development", "Mentoring", "Technical Architecture"]
    },
    {
      name: "Rahul Kumar",
      role: "Sponsorship Head",
      department: "Business Administration",
      year: "Final Year",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Experienced in building corporate partnerships and managing stakeholder relationships.",
      linkedin: "https://linkedin.com/in/rahulkumar",
      twitter: "https://twitter.com/rahulkumar",
      email: "rahul@techversh.com",
      skills: ["Partnership Development", "Business Strategy", "Negotiation"]
    },
    {
      name: "Sneha Gupta",
      role: "Marketing & Outreach",
      department: "Mass Communication",
      year: "Third Year",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative marketer specializing in digital campaigns and community engagement strategies.",
      linkedin: "https://linkedin.com/in/snehagupta",
      instagram: "https://instagram.com/snehagupta",
      email: "sneha@techversh.com",
      skills: ["Digital Marketing", "Content Creation", "Social Media"]
    },
    {
      name: "Vikram Singh",
      role: "Operations Manager",
      department: "Mechanical Engineering",
      year: "Final Year",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Detail-oriented operations specialist ensuring smooth execution of all event logistics.",
      linkedin: "https://linkedin.com/in/vikramsingh",
      email: "vikram@techversh.com",
      skills: ["Operations Management", "Logistics", "Problem Solving"]
    },
    {
      name: "Ananya Reddy",
      role: "Design & Experience",
      department: "Design Studies",
      year: "Third Year",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "UI/UX designer focused on creating engaging and accessible experiences for participants.",
      linkedin: "https://linkedin.com/in/ananyareddy",
      dribbble: "https://dribbble.com/ananyareddy",
      email: "ananya@techversh.com",
      skills: ["UI/UX Design", "Brand Identity", "User Research"]
    }
  ];

  const advisors = [
    {
      name: "Dr. Rajesh Mehta",
      role: "Faculty Advisor",
      department: "Computer Science Department",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Professor with 15+ years of experience in computer science education and research.",
      expertise: ["Machine Learning", "Software Engineering", "Research Methodology"]
    },
    {
      name: "Ms. Kavita Joshi",
      role: "Industry Mentor",
      department: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      bio: "Senior Engineering Manager with expertise in scaling tech products and teams.",
      expertise: ["Product Management", "Team Leadership", "Startup Ecosystem"]
    }
  ];

  const getSocialIcon = (platform) => {
    const iconMap = {
      linkedin: "Linkedin",
      twitter: "Twitter",
      github: "Github",
      instagram: "Instagram",
      dribbble: "Dribbble",
      email: "Mail"
    };
    return iconMap[platform] || "Link";
  };

  const getSocialLinks = (member) => {
    const links = [];
    if (member.linkedin) links.push({ platform: 'linkedin', url: member.linkedin });
    if (member.twitter) links.push({ platform: 'twitter', url: member.twitter });
    if (member.github) links.push({ platform: 'github', url: member.github });
    if (member.instagram) links.push({ platform: 'instagram', url: member.instagram });
    if (member.dribbble) links.push({ platform: 'dribbble', url: member.dribbble });
    if (member.email) links.push({ platform: 'email', url: `mailto:${member.email}` });
    return links;
  };

  return (
    <SectionAnchor id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Our Team</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the Minds Behind
            <span className="text-gradient block">TechVersh</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of passionate students and experienced mentors working together 
            to create an unforgettable hackathon experience.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Core Organizing Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group p-6 glass-morphism rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-elevation-hover"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon name="Star" size={16} color="white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                    {member.name}
                  </h4>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <div className="text-sm text-text-secondary mb-3">
                    <p>{member.department}</p>
                    <p>{member.year}</p>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {getSocialLinks(member).map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => window.open(link.url, '_blank')}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <Icon 
                        name={getSocialIcon(link.platform)} 
                        size={18} 
                        color="var(--color-text-secondary)"
                        className="hover:text-primary transition-colors duration-200"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Faculty Advisors &amp; Mentors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="p-8 glass-morphism rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-102"
              >
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-accent/20">
                    <Image
                      src={advisor.image}
                      alt={`${advisor.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">{advisor.name}</h4>
                    <p className="text-accent font-semibold mb-1">{advisor.role}</p>
                    <p className="text-sm text-text-secondary">{advisor.department}</p>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {advisor.bio}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {advisor.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-white/10">
          <Icon name="UserPlus" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to help us organize amazing tech events. 
            Join our community and make a difference!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => window.open('mailto:team@techversh.com', '_blank')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-200"
            >
              <Icon name="Mail" size={20} />
              <span>Contact Us</span>
            </button>
            <button 
              onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 px-6 py-3 text-primary hover:text-accent transition-colors duration-200 group"
            >
              <span className="font-medium">Have Questions?</span>
              <Icon 
                name="ArrowRight" 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-200" 
              />
            </button>
          </div>
        </div>
      </div>
    </SectionAnchor>
  );
};

export default TeamSection;