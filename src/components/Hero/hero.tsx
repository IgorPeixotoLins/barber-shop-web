import styled from 'styled-components';

const HeroContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 90px);
  padding: 0 15%;
  background: radial-gradient(
      circle, 
      rgba(0, 0, 0, 0.0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
              url('/images/home-background.jpg') no-repeat center 20%/cover;
`;

const InfoContainer = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  font-weight: 400;
`;

const ButtonAgendarHero = styled.button`
  background-color: #f0a500;
  color: #000;
  padding: 15px 35px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #d89400;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <InfoContainer>
        <Title>
          ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.
        </Title>
        <Subtitle>
          Horário de funcionamento das 08:00 às 19:00
        </Subtitle>
        <ButtonAgendarHero onClick={() => console.log('Agendamento pelo Hero!')}>
          Agendar Horário
        </ButtonAgendarHero>
      </InfoContainer>
    </HeroContainer>
  );
};