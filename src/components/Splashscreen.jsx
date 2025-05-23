import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FiMail } from 'react-icons/fi'; 

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const SplashWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #ffe6f0, #ffcce5);
  color: #d63384;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Cursive', 'Segoe UI', sans-serif;
`;

const EnvelopeIcon = styled(FiMail)`
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: ${bounce} 2s infinite;
  color: #ff69b4;
  text-shadow: 0 0 10px #ffb6c1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: ${bounce} 2s infinite;
  color: #c2185b;
  text-shadow: 0 1px 4px #ffb6c1;
  max-width: 90%;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #ff99cc;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.6);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff80bf;
    transform: scale(1.05);
  }
`;

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/mainlayout', { replace: true }); 
  };

  return (
    <SplashWrapper>
      <EnvelopeIcon />
      <Title>🎀 La Vie En Jo! 🎀</Title>
      <Button onClick={handleStartClick}>OPEN IT 💌</Button>
    </SplashWrapper>
  );
};

export default SplashScreen;