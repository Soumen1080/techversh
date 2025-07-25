import React, { useState, useEffect, useRef } from 'react';
import Icon from '../AppIcon';

const MobileNavToggle = ({ 
  isOpen, 
  onToggle, 
  navigationItems = [], 
  activeSection = '',
  onSectionClick,
  className = '' 
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
        onToggle(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onToggle]);

  const handleSectionClick = (sectionId) => {
    onSectionClick(sectionId);
    onToggle(false);
  };

  return (
    <div className={`md:hidden ${className}`} ref={menuRef}>
      {/* Toggle Button */}
      <button
        onClick={() => onToggle(!isOpen)}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <Icon 
          name={isOpen ? "X" : "Menu"} 
          size={24} 
          color="var(--color-foreground)"
          className="transition-transform duration-200"
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-90"
            onClick={() => onToggle(false)}
          />
          
          {/* Menu Content */}
          <div className="fixed top-16 left-0 right-0 z-100 glass-morphism border-t border-white/10 animate-slide-in-left">
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`
                    flex items-center space-x-3 w-full px-3 py-3 rounded-lg text-left 
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary
                    ${activeSection === item.id 
                      ? 'bg-accent/20 text-accent shadow-sm' 
                      : 'text-text-secondary hover:bg-white/10 hover:text-foreground'
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon 
                    name={item.icon} 
                    size={20} 
                    color={activeSection === item.id ? 'var(--color-accent)' : 'currentColor'}
                  />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <Icon 
                      name="ChevronRight" 
                      size={16} 
                      color="var(--color-accent)"
                      className="ml-auto"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNavToggle;