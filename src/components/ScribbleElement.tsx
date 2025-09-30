import React from 'react';
type ScribbleProps = {
  type: 'arrow' | 'underline' | 'circle' | 'note';
  text?: string;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  color?: string;
  rotation?: number;
  className?: string;
};
export const ScribbleElement: React.FC<ScribbleProps> = ({
  type,
  text,
  position,
  color = '#3B82F6',
  // Default blue color
  rotation = 0,
  className = ''
}) => {
  // Position classes
  const positionClasses = {
    'top-right': 'top-0 right-0 transform translate-x-1/4 -translate-y-1/2',
    'top-left': 'top-0 left-0 transform -translate-x-1/4 -translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 transform translate-x-1/4 translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 transform -translate-x-1/4 translate-y-1/2'
  };
  // SVG paths for different scribble types
  const getScribblePath = () => {
    switch (type) {
      case 'arrow':
        return <path d="M5,20 C30,15 50,25 70,5 L65,15 L75,12" fill="none" strokeWidth="2" strokeLinecap="round" stroke={color} />;
      case 'underline':
        return <path d="M5,10 C15,20 35,5 45,10 C55,15 65,5 75,10" fill="none" strokeWidth="2" strokeLinecap="round" stroke={color} />;
      case 'circle':
        return <path d="M40,20 C60,0 80,20 60,40 C40,60 20,40 40,20" fill="none" strokeWidth="2" strokeLinecap="round" stroke={color} />;
      case 'note':
        return text ? null : <path d="M5,20 C15,15 25,25 35,15 C45,5 55,15 65,10" fill="none" strokeWidth="2" strokeLinecap="round" stroke={color} />;
      default:
        return null;
    }
  };
  return <div className={`absolute ${positionClasses[position]} z-10 pointer-events-none ${className}`} style={{
    transform: `${rotation ? `rotate(${rotation}deg)` : ''}`
  }}>
      {text ? <div className="whitespace-nowrap text-sm font-original-handwriting" style={{
      color
    }}>
          {text}
          {type === 'arrow' && <svg width="30" height="20" viewBox="0 0 30 20" className="inline-block ml-1">
              <path d="M1,10 C10,5 20,15 28,1 L24,5 L29,4" fill="none" strokeWidth="2" strokeLinecap="round" stroke={color} />
            </svg>}
        </div> : <svg width="80" height="40" viewBox="0 0 80 40">
          {getScribblePath()}
        </svg>}
    </div>;
};