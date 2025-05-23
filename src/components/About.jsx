import { useState } from "react";
import styled from "styled-components";
import jo5 from '../assets/jo5.jpg'
import jo6 from '../assets/jo6.jpg'
import jo10 from '../assets/jo10.jpg'
import jo9 from '../assets/jo9.jpg'
import jo11 from '../assets/jo11.jpg'
import jo13 from '../assets/jo13.jpg'
import jo4 from '../assets/jo4.jpg'
import jojo from '../assets/jojo.jpg'
import jojojo from '../assets/jojojo.jpg'

import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";


const characters = [
  {
    image: jo5,
    description: '"If you could see that I’m the one who understands you, been here all along..."-"You Belong With Me"'
  },
 {
    image: jo6,
    description: '"Maybe this is wishful thinkin, probably mindless dreamin..."-"Back to December""'
  },
   {
    image: jo10,
    description: '"When I felt like I was an old cardigan under someone’s bed, you put me on and said I was your favorite."--"Cardigan"'


  },
   {
    image: jo9,
    description: '"Can I go where you go?"--"Lover"'
  },
   {
    image: jo11,
    description: '"It’s me, hi, I’m the problem, it’s me."--Anti-Hero"'
  },
   {
    image: jo4,
    description: '"Cause baby I’m a nightmare dressed like a daydream."--"New Romantics"'
  },
   {
    image: jo13,
    description: '"I once believed love would be burning red, but it’s golden, like daylight."--"Daylight"'
  },
     {
    image: jojo,
    description: '"The story of us looks a lot like a tragedy now."--"The Story of Us"'
  },
     {
    image: jojojo,
    description: '"And I don’t know why but with you I’d dance  In a storm in my best dress..."--"Fearless" '
  },

];

export default function Character() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % characters.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + characters.length) % characters.length);
  };

  return (
    <Wrapper>
      <Frame>
        <NavButton onClick={handlePrevious}>
          <HiOutlineArrowLeftCircle />
        </NavButton>

        <Content>
          <TextSection>
            <Name>{characters[current].name}</Name>
            <Description>{characters[current].description}</Description>
          </TextSection>
          <ImageSection>
            <Image
              src={characters[current].image}
              alt={characters[current].name}
            />
          </ImageSection>
        </Content>

        <NavButton onClick={handleNext}>
          <HiOutlineArrowRightCircle />
        </NavButton>
      </Frame>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #fff0f6; /* Soft pink background */
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 3px solid #ffd6e8;
  border-radius: 24px;
  padding: 2rem;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(255, 182, 193, 0.35);
  max-width: 1000px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavButton = styled.div`
  font-size: 3rem;
  color: #e295b5;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #d63384;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextSection = styled.div`
  max-width: 400px;
  color: #7a4e63;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #d63384;
  font-family: 'Georgia', 'Cursive', serif;
`;

const Description = styled.p`
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  color: #5a3a4d;
  background: #fff5fa;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(255, 105, 180, 0.1);
`;

const ImageSection = styled.div`
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 250px;
  max-width: 90vw;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  border: 2px solid #f8c3d7;
  box-shadow: 0 4px 12px rgba(255, 182, 193, 0.3);
`;