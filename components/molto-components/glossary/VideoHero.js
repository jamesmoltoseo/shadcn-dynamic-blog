import React, { useEffect, useState } from 'react';

const VideoHero = ({ glossary }) => {
  
  return (
    
    <h2 className="mb-12 me-3 w-full d-block">
      <span className="hero_text">
        <span className={`fs-60 uppercase`} style={{ textTransform: 'uppercase' }}>
          {glossary}
        </span>
        {/* <span className={`fs-18`}>{title2}</span> */}
      </span>

      <video autoPlay loop playsInline muted poster={'1-bg.jpg'}>
        <source
          src={
            'https://www.shutterstock.com/shutterstock/videos/1052689403/preview/stock-footage-digital-city-seamless-loop-abstract-d-hologram-render-with-futuristic-matrix-flying-through.webm'
          }
          type="video/webm" // Corrected the type attribute to match the video format
        />
      </video>
    </h2>
  );
};

export default VideoHero;
