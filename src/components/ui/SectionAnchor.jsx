import React from 'react';

const SectionAnchor = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`scroll-mt-20 ${className}`}
      style={{ scrollMarginTop: '80px' }}
    >
      {children}
    </section>
  );
};

export default SectionAnchor;