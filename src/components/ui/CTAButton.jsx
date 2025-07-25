import React from 'react';
import Button from './Button';


const CTAButton = ({ 
  variant = 'primary', 
  size = 'default', 
  className = '',
  children = 'Register Now',
  href = 'https://forms.google.com/techversh-hackathon-registration',
  iconName = null,
  iconPosition = 'right',
  ...props 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevation hover:shadow-elevation-hover animate-glow';
      case 'accent':
        return 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevation hover:shadow-elevation-hover';
      case 'outline':
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground';
      case 'ghost':
        return 'text-primary hover:bg-primary/10';
      default:
        return 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevation hover:shadow-elevation-hover';
    }
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`
        ${getVariantStyles()}
        transition-all duration-200 font-semibold
        ${className}
      `}
      iconName={iconName}
      iconPosition={iconPosition}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;