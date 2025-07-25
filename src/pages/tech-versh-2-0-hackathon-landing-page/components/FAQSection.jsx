import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import SectionAnchor from '../../../components/ui/SectionAnchor';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const newLocal = [
    {
      question: "Can I get tech career counseling online?",
      answer: `Yes! Our web app is designed to provide online counseling for your tech journey.\n\nYou can connect with experienced mentors, schedule virtual sessions, and get personalized advice from anywhere.`
    },
    {
      question: "How do I interact with counselors on this platform?",
      answer: `You can chat with counselors directly through our web app, book video calls, or join group discussions.\n\nAll communication is secure and tailored to your needs, ensuring you get the support you require.`
    },
    {
      question: "What topics can I discuss during counseling?",
      answer: `You can discuss a wide range of topics including career guidance, skill development, interview preparation, resume building, and choosing the right tech path.\n\nOur counselors are equipped to help you at every stage of your tech journey.`
    },
    {
      question: "Are counseling sessions confidential?",
      answer: `Absolutely! All sessions are private and confidential.\n\nYour information and conversations are protected, and only accessible to you and your assigned counselor.`
    },
    {
      question: "Is there a fee for using this counseling web app?",
      answer: `We offer both free and paid counseling options.\n\nYou can access basic resources at no cost, and opt for premium sessions with expert counselors for a fee. Details are available on our pricing page.`
    }
  ];
  const faqs = newLocal;

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
            participating in TechVerse-2.0.
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
              onClick={() => window.open('https://discord.gg/techverse', '_blank')}
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