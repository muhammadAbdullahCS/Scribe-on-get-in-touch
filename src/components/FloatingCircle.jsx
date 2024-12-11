import React, { useEffect, useRef, useState } from "react"; 
import PropTypes from "prop-types"; 

const FloatingCircle = ({  
  position = "left",  
  height = 450, 
  width = "250px", 
  leftOffset = "",  
  topOffset, 
  size = 250, 
  borderThickness = 8, 
  borderColor = "black", 
  ballSize = 40, 
  blurValue = 4, 
  className = ""  
}) => { 
  const [rotation, setRotation] = useState(0); 
  const containerRef = useRef(null);

  // Responsive sizing calculation
  const getResponsiveSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 3840) return 750 ; 
    if (screenWidth >= 1920) return 450 ;
     
    return size; 
  };
  const getResponsiveTopOffset = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 3840) return topOffset * 0.9 ; 
     
    return topOffset; 
  };
  const getResponsiveBorderThickness = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 3840) return borderThickness * 1.9 ; 
     
    return borderThickness; 
  };
  const getResponsiveContainerHeight = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 3840)
      { 
        return height*3;
      }  
    if (screenWidth >= 1920)
      { 
        return height*1.7;
      }
      
    return height;
  };

  const getResponsiveBallSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 3840) return ballSize * 2.5;
    if (screenWidth >= 1920) return ballSize * 1.5;
    return ballSize;
  };

  // State to track responsive sizes
  const [responsiveSize, setResponsiveSize] = useState(getResponsiveSize());
  const [responsiveBallSize, setResponsiveBallSize] = useState(getResponsiveBallSize());
  const [responsiveContainerHeight, setResponsiveContainerHeight] = useState(getResponsiveContainerHeight());
  const [responsiveTopOffset, setResponsiveTopOffset] = useState(getResponsiveTopOffset());
  const [responsiveBorderThickness, setResponsiveBorderThickness] = useState(getResponsiveBorderThickness());
  useEffect(() => {
    // Handle resize
    const handleResize = () => {
      setResponsiveSize(getResponsiveSize());
      setResponsiveBallSize(getResponsiveBallSize());
      setResponsiveContainerHeight(getResponsiveContainerHeight());
      setResponsiveTopOffset(getResponsiveTopOffset());
      setResponsiveBorderThickness(getResponsiveBorderThickness());
    };
    

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Initial calculation
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size, ballSize]); 

  useEffect(() => { 
    const container = containerRef.current; 
    if (!container) return; 

    const handleScroll = () => { 
      const rect = container.getBoundingClientRect(); 
      const windowHeight = window.innerHeight; 

      const visiblePercentage =  
        (windowHeight - Math.max(0, rect.top)) / rect.height; 

      if (position === "left") { 
        if (visiblePercentage >= 0.75) { 
          setRotation(90); 
        }  
        if (visiblePercentage >= 0.98) { 
          setRotation(180); 
        } 
        if (visiblePercentage <= 0.50) { 
          setRotation(0); 
        } 
      } else { 
        if (visiblePercentage >= 0.75) { 
          setRotation(-90); 
        }  
        if (visiblePercentage >= 0.98) { 
          setRotation(-180); 
        } 
        if (visiblePercentage <= 0.50) { 
          setRotation(0); 
        } 
      } 
    }; 

    window.addEventListener('scroll', handleScroll); 
    handleScroll(); 

    return () => { 
      window.removeEventListener('scroll', handleScroll); 
    }; 
  }, [position]); 

  const containerStyle = {
    position: 'absolute', 
    top: `${responsiveTopOffset}vh`, 
    width:  `${responsiveSize}px`, 
    height: `${responsiveContainerHeight}px`, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 1000, 
    overflow: 'visible', 
    [position]: `${position === 'left' ? `-${responsiveSize / 2}px` : `-${responsiveSize / 2}px`}`, // Half hidden on left or right
    [position === 'right' ? 'right' : 'left']: `${position === 'right' ? `-${responsiveSize / 2}px` : `-${responsiveSize / 2}px`}`,
  };

  return ( 
    <div ref={containerRef} style={containerStyle} className={className}> 
      <div  
        style={{  
          width: `${responsiveSize}px`, 
          height: `${responsiveSize}px`, 
          borderRadius: '50%', 
          border: `${responsiveBorderThickness}px solid ${borderColor}`, 
          position: 'relative', 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 1s ease-in-out', 
        }} 
      > 
        <div  
          style={{  
            width: `${responsiveBallSize}px`,  
            height: `${responsiveBallSize}px`, 
            backgroundColor: '#5857F6', 
            borderRadius: '50%', 
            position: 'absolute', 
            top: '-8%', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            filter: `blur(${blurValue}px)`, 
          }}  
        /> 
      </div> 
    </div> 
  ); 
}; 

FloatingCircle.propTypes = { 
  position: PropTypes.oneOf(["left", "right"]), 
  height: PropTypes.string, 
  width: PropTypes.string, 
  leftOffset: PropTypes.string, 
  topOffset: PropTypes.string, 
  size: PropTypes.number, 
  borderThickness: PropTypes.number, 
  borderColor: PropTypes.string, 
  ballSize: PropTypes.number, 
  blurValue: PropTypes.number, 
  className: PropTypes.string, 
}; 

export default FloatingCircle;