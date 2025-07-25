import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Who can participate in TechVersh-2.0 Hackathon?",
      answer: `The hackathon is open to all undergraduate engineering students from Indian universities, software developers with 0-3 years of experience, UI/UX designers, and technology enthusiasts aged 18-24.\n\nParticipants can form teams of 2-4 members or join as individuals and be matched with other participants. We welcome students from all technical backgrounds including Computer Science, IT, Electronics, Mechanical, and other engineering disciplines.`
    },
    {
      question: "What are the registration requirements and deadlines?",
      answer: `Registration is completely free and open until September 10, 2025, or until we reach our capacity of 2000+ participants.\n\nTo register, you'll need:\n• Valid student ID or proof of enrollment\n• Team details (if participating as a team)\n• Brief description of your technical background\n• Contact information for all team members\n\nEarly registration is recommended as spots are limited for the on-ground event (300 participants).`
    },
    {
      question: "What should I bring to the hackathon?",
      answer: `For the 36-hour hackathon, please bring:\n\n• Your laptop/computer with necessary software installed\n• Chargers and power banks\n• Any hardware components you plan to use\n• Valid ID proof and student identification\n• Comfortable clothes for the overnight stay\n• Personal toiletries and medications\n\nWe'll provide meals, snacks, Wi-Fi, workspace, and basic stationery. Sleeping arrangements and refreshments will be available throughout the event.`
    },
    {
      question: "How does the judging process work?",
      answer: `Projects will be evaluated by a panel of industry experts, faculty members, and sponsor representatives based on:\n\n• Innovation and Creativity (30%)\n• Technical Implementation (25%)\n• Social Impact and Relevance (20%)\n• Presentation and Demo (15%)\n• Business Viability (10%)\n\nJudging happens in multiple rounds: initial screening, semi-finals, and final presentations. Winners will be announced at the closing ceremony on September 13, 2025.`
    },
    {
      question: "Are there any restrictions on technology or programming languages?",
      answer: `No restrictions! You're free to use any programming languages, frameworks, tools, or technologies you're comfortable with.\n\nPopular choices include:\n• Web: React, Angular, Vue.js, Node.js, Python Django/Flask\n• Mobile: React Native, Flutter, Swift, Kotlin\n• AI/ML: Python, TensorFlow, PyTorch, scikit-learn\n• Blockchain: Solidity, Web3.js, Ethereum\n• IoT: Arduino, Raspberry Pi, sensors\n\nOpen source libraries and APIs are encouraged. However, pre-built solutions or existing projects are not allowed.`
    },
    {
      question: "What support and resources will be available during the event?",
      answer: `We provide comprehensive support throughout the 36 hours:\n\n• 24/7 technical mentors from industry and academia\n• Workshops on trending technologies\n• API access and credits from sponsor companies\n• High-speed internet and power backup\n• Dedicated help desk for technical issues\n• Medical assistance and security\n• Regular meals, snacks, and beverages\n• Networking sessions with industry professionals\n\nMentors will be available for one-on-one guidance, code reviews, and strategic advice to help you build the best possible solution.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <SectionAnchor id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-6">
            <Icon name="HelpCircle" size={16} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">FAQ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="text-gradient block">Questions</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers! Find everything you need to know about 
            participating in TechVersh-2.0 Hackathon.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-morphism rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center
                  transition-all duration-300 ${openFAQ === index ? 'rotate-180 bg-primary/30' : ''}
                `}>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    color="var(--color-primary)"
                    className="transition-transform duration-300"
                  />
                </div>
              </button>

              {/* Answer Content */}
              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-6 pb-6 border-t border-white/10">
                  <div className="pt-4">
                    {faq.answer.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-text-secondary leading-relaxed mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-white/10">
          <Icon name="MessageCircle" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help! 
            Reach out to us through any of the channels below.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <button 
              onClick={() => window.open('mailto:contact@techversh.com', '_blank')}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors duration-200">
                <Icon name="Mail" size={24} color="var(--color-primary)" />
              </div>
              <span className="text-sm font-medium text-foreground">Email Us</span>
              <span className="text-xs text-text-secondary">contact@techversh.com</span>
            </button>

            <button 
              onClick={() => window.open('https://discord.gg/techversh', '_blank')}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent/30 transition-colors duration-200">
                <Icon name="MessageSquare" size={24} color="var(--color-accent)" />
              </div>
              <span className="text-sm font-medium text-foreground">Join Discord</span>
              <span className="text-xs text-text-secondary">Live chat support</span>
            </button>

            <button 
              onClick={() => window.open('tel:+919876543210', '_blank')}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center mb-3 group-hover:bg-success/30 transition-colors duration-200">
                <Icon name="Phone" size={24} color="var(--color-success)" />
              </div>
              <span className="text-sm font-medium text-foreground">Call Us</span>
              <span className="text-xs text-text-secondary">+91 98765 43210</span>
            </button>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 glass-morphism rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Clock" size={24} color="var(--color-warning)" />
              <h4 className="text-lg font-semibold text-foreground">Registration Deadline</h4>
            </div>
            <p className="text-text-secondary">
              Register by September 10, 2025, to secure your spot. Early registration is recommended 
              as on-ground spots are limited.
            </p>
          </div>

          <div className="p-6 glass-morphism rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Users" size={24} color="var(--color-accent)" />
              <h4 className="text-lg font-semibold text-foreground">Team Formation</h4>
            </div>
            <p className="text-text-secondary">
              Don't have a team? No problem! Join our Discord server to connect with other 
              participants and form teams before the event.
            </p>
          </div>
        </div>
      </div>
    </SectionAnchor>
  );
};

export default FAQSection;