import React from 'react';
import styled from 'styled-components';
import jo1 from '../assets/jo1.jpg'
import jo11 from '../assets/jo11.jpg'
import me from '../assets/me (2).jpg'

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(to bottom, #fff0f5, #ffe4ec);
  min-height: 100vh;
  font-family: 'Segoe UI', 'Cursive', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #d63384;
  margin-bottom: 1rem;

  &::before {
    content: '🎀 ';
  }

  span {
    color: #ff69b4;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  width: 300px;
  border-radius: 20px;
  padding: 1.2rem;
  background: #fff;
  box-shadow: 0 6px 12px rgba(255, 182, 193, 0.4);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(255, 105, 180, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #5a2a50;
`;

export default function Messages() {
  return (
    <Container>
      <Title>Hi <span>Joanne J. Juanane</span></Title>
      <CardContainer>
        <Card>
          <Image src={jo1} />
          <Description>
     Hi! I'm Joanne Juanane, a passionate and creative individual currently pursuing a degree in Information Technology at Dalubhasaan ng Lungsod ng Lucena.
          </Description>
        </Card>

        <Card>
          <Image src={jo11} />
          <Description>
            One of my favorite ways to recharge and get inspired is through music. I love listening to a wide range of genres, but I especially connect with meaningful lyrics—yes, I’m definitely a big Taylor Swift fan. 🎶 Music helps me focus, sparks ideas, and sometimes even shapes the mood of my projects.
          </Description>
        </Card>

        <Card>
          <Image src={me} />
          <Description>
           In the future, I dream of working in a space where technology meets creativity—possibly as a front-end developer, a UI/UX designer, or even starting my own digital studio. I want to keep learning, growing, and collaborating with people who share the same passion.
          </Description>
        </Card>

      </CardContainer>
    </Container>
  );
}