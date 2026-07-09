import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 50px;
  background-color: #121212; /* Fundo escuro elegante */
  color: #fff;
  overflow: hidden;

  @media (max-width: 950px) {
    padding: 40px 20px;
  }
`;

const MainContainer = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;

  @media (max-width: 950px) {
    display: block;
  }
`;

const ImagesColumn = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 50%;
  text-align: center;

  @media (max-width: 950px) {
    display: block;
    width: 100%;
    margin-bottom: 50px;
  }
`;

const ImageGrid = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 380px;
  margin: 0 auto;

  img {
    position: absolute;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    border: 2px solid #f0a500; 
    transition: transform 0.3s ease;
  }

  .imagem-corte {
    top: 0;
    left: 0;
    width: 55%;
    height: 60%;
    z-index: 2;
  }

  .imagem-maquina {
    top: 10%;
    right: 5%;
    width: 40%;
    height: 45%;
    z-index: 2;
  }

  .imagem-secador {
    bottom: 0;
    right: 20%;
    width: 50%;
    height: 55%;
    z-index: 3;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    height: 250px;

    .imagem-corte { width: 55%; height: 60%; }
    .imagem-maquina { width: 42%; height: 45%; right: 2%; top: 12%; }
    .imagem-secador { width: 52%; height: 55%; right: 15%; }
  }

  @media (max-width: 340px) {
    max-width: 230px;
    height: 210px;
  }
`;

const TextColumn = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 50%;
  padding-left: 40px;

  @media (max-width: 950px) {
    display: block;
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #f0a500; /* Destaque no título */
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  border-left: 4px solid #f0a500;
  padding-left: 15px;

  @media (max-width: 950px) {
    font-size: 2rem;
    border-left: none;
    padding-left: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 15px;
  font-weight: 300;
`;

const WorkingHours = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f0a500;
  margin-top: 25px;
`;

export const About = () => {
  return (
    <AboutSection>
      <MainContainer>
        <ImagesColumn>
          <ImageGrid>
            <img src="/images/Rectangle 12.png" alt="Rapaz cortando cabelo" className="imagem-corte" />
            <img src="/images/Rectangle 10.png" alt="Imagem do rapaz secando o cabelo" className="imagem-secador" />
            <img src="/images/Rectangle 11.png" alt="Imagem de uma máquina de cortar cabelo" className="imagem-maquina" />
          </ImageGrid>
        </ImagesColumn>

        <TextColumn>
          <Title>Sobre</Title>
          <Paragraph>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão, usado desde o século XVI quando um impressor desconhecido misturou os caracteres de uma prensa.
          </Paragraph>
          <Paragraph>
            A nossa barbearia combina o charme do atendimento tradicional com as técnicas mais modernas do mercado, garantindo uma experiência única para cada cliente.
          </Paragraph>
          <WorkingHours>
            Horário de funcionamento das 08:00 às 19:00
          </WorkingHours>
        </TextColumn>
      </MainContainer>
    </AboutSection>
  );
};