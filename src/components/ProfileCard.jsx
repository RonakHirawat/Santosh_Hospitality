import React, { useState, useRef, useEffect } from 'react';
import './ProfileCard.css';

export default function ProfileCard({
  name,
  title,
  avatarUrl,
  enableTilt = true,
  enableMobileTilt = false,
  behindGlowEnabled = true,
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!enableTilt || (isMobile && !enableMobileTilt)) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position relative to card boundaries
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert coordinates to degrees of rotation (-15 to 15 deg)
    const maxRotation = 15;
    const rotX = -((y - height / 2) / (height / 2)) * maxRotation;
    const rotY = ((x - width / 2) / (width / 2)) * maxRotation;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare position in percent
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleTouchStart = () => {
    if (!enableTilt || !isMobile || !enableMobileTilt) return;
    setIsHovered(true);
  };

  const handleTouchMove = (e) => {
    if (!enableTilt || !isMobile || !enableMobileTilt) return;
    const card = cardRef.current;
    if (!card) return;

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    if (x < 0 || x > width || y < 0 || y > height) {
      handleTouchEnd();
      return;
    }

    const maxRotation = 15;
    const rotX = -((y - height / 2) / (height / 2)) * maxRotation;
    const rotY = ((x - width / 2) / (width / 2)) * maxRotation;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const shouldTilt = enableTilt && (!isMobile || enableMobileTilt);

  const cardStyle = shouldTilt
    ? {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: isHovered ? 'transform 0.05s linear, box-shadow 0.2s ease' : 'transform 0.5s ease, box-shadow 0.5s ease',
      }
    : {
        transform: 'none',
        transition: 'transform 0.5s ease, box-shadow 0.5s ease',
      };

  const glareStyle = (shouldTilt && isHovered)
    ? {
        background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 80%)`,
        opacity: 1,
      }
    : {
        opacity: 0,
      };

  const shineStyle = (shouldTilt && isHovered)
    ? {
        backgroundPosition: `${50 - rotateY * 2}% ${50 - rotateX * 2}%`,
        opacity: 0.45,
      }
    : {
        opacity: 0,
      };

  return (
    <div className="profile-card-container">
      {/* Background glow element */}
      {behindGlowEnabled && <div className="profile-card-glow" />}

      {/* The 3D tilting card body */}
      <div
        ref={cardRef}
        className="profile-card"
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Full-bleed background avatar image */}
        <img
          src={avatarUrl}
          alt={name}
          className="profile-card-avatar"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />

        <div className="profile-card-inner">
          {/* Dynamic reflection & sheen overlays */}
          <div className="profile-card-glare" style={glareStyle} />
          <div className="profile-card-shine" style={shineStyle} />

          {/* User profile content */}
          <div className="profile-card-content">
            <div className="profile-card-details">
              <h3 className="profile-card-name">{name}</h3>
              <span className="profile-card-title">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
