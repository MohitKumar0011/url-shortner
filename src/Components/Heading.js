import React from 'react';

const Heading = () => {
  const gradientStyles = {
    background: 'linear-gradient(45deg, #7557ED, #06D974)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  };

  return (
    <div className="heading-container m-10">
      <h1 className="text-8xl font-inter" style={gradientStyles}>
        LinkTrim
      </h1>
    </div>
  );
};

export default Heading;
