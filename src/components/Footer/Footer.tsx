import styled from 'styled-components';

const FooterContainer = styled.footer`
    backgrond-color: #000000;
    color: #fff;
    padding: 60px 10% 20px 10%;
    border-top: 1px solid #222;
`;

const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
        align-items: center;
        }
`;

const LogoText = styled.h3`
    font-size: 1.5rem;
    color: #f0a500;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const ColumnTitle = styled.h4`
    font-size: 1.1rem;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const FooterText = styled.p`
    font-size: 0.95rem;
    color: #aaa;
    line-height: 1.6;
    font-weight: 300;
`;

const FooterLink = styled.a`
    color: #aaa;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 300;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #f0a500;
    }
`;

const Copyright = styled.div`
    border-top: 1px solid #111;
    padding-top: 20px;
    text-align: center;
    font-size: 0.85rem;
    color: #666;
`;

export const Footer = () => {
    return (
      <FooterContainer>
        <FooterGrid>
          <FooterColumn>
            <LogoText>Barber Shop</LogoText>
            <FooterText>
              Mais que um corte de cabelo, uma experiência de estilo e bem-estar para o seu dia a dia.
            </FooterText>
          </FooterColumn>
  
          <FooterColumn>
            <ColumnTitle>Navegação</ColumnTitle>
            <FooterLink href="#home">Início</FooterLink>
            <FooterLink href="#about">Sobre</FooterLink>
            <FooterLink href="#services">Serviços</FooterLink>
            <FooterLink href="#testimonials">Depoimentos</FooterLink>
          </FooterColumn>
  
            <FooterColumn>
            <ColumnTitle>Contato</ColumnTitle>
            <FooterText>📍 Rua do Catete, Rio de Janeiro - RJ</FooterText>
            <FooterText>📞 (21) 99999-9999</FooterText>
            <FooterText>✉️ contato@barbershop.com</FooterText>
          </FooterColumn>
        </FooterGrid>
  
        <Copyright>
          &copy; {new Date().getFullYear()} Barber Shop. Todos os direitos reservados.
        </Copyright>
      </FooterContainer>
    );
  };