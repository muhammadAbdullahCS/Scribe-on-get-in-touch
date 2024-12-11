import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes
const myTopDown = keyframes`
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(20px) rotate(180deg) scale(1.02);
  }
  100% {
    transform: translateY(0) rotate(360deg) scale(1);
  }
`;

const myDownTop = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(-180deg);
  }
  100% {
    transform: translateY(0) rotate(-360deg);
  }
`;

const bubbleFloat = keyframes`
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, -20px);
  }
  50% {
    transform: translate(-20px, 20px);
  }
  75% {
    transform: translate(-15px, -15px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

// Styled Components
const Blob = styled.div`
  position: absolute;
  background: ${(props) => props.color || "white"};
  width: ${(props) => props.size || "100px"};
  height: ${(props) => props.size || "100px"};
  top: ${(props) => props.position?.top || "50%"};
  left: ${(props) => props.position?.left || "50%"};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(60px); /* Only a soft blur effect, no glow */
  animation: ${(props) =>
      props.animation === "down" ? myDownTop : myTopDown}
    linear ${(props) => props.speed || 10}s infinite,
    ${bubbleFloat} ease-in-out ${(props) => props.speed || 10}s infinite;
`;

// Component
const BlobAnimation = ({ blobs = [] }) => {
  return (
    <>
      {blobs.map((blob, i) => (
        <Blob
          key={i}
          color={blob.color}
          size={blob.size}
          position={blob.position}
          animation={blob.animation}
          speed={blob.speed}
        />
      ))}
    </>
  );
};

export default BlobAnimation;
