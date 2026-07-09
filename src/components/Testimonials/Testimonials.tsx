import styled from 'styled-components';

interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    text: string;
    avatar: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
{
    id: 1,
    name: 'João Silva',
    role: 'Cliente Satisfeito',
    text: 'Excelente serviço! Recomendo a todos que procuram um corte de cabelo de qualidade.',
    avatar: '',
},
{
    id: 2,
    name: 'Maria Oliveira',
    role: 'Cliente Fiel',
    text: 'Sempre saio feliz do salão. O atendimento é impecável e o ambiente é muito agradável.',
    avatar: '',
},
{
    id: 3,
    name: 'Carlos Souza',
    role: 'Cliente Regular',
    text: 'Profissionais competentes e atenciosos. Adoro o resultado final do meu corte.',
    avatar: '',
},
];

const TestimonialsSection = styled.section`
    padding: 80px 10%;
    background-color: #121212;
    color: #fff;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    color: #f0a500;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 50px;
  font-weight: 300;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
`;

const Card = styled.div`
  background-color: #000000;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #222;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #f0a500;
  }
`;

const QuoteIcon = styled.span`
  font-size: 3rem;
  color: rgba(240, 165, 0, 0.2); /* Aspas grandes e discretas */
  position: absolute;
  top: 10px;
  right: 20px;
  font-family: serif;
  line-height: 1;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 25px;
  font-style: italic;
  z-index: 1;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #f0a500;
  object-fit: cover;
`;

const AvatarPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #f0a500;
  background-color: #1a1a1a;
  color: #f0a500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h4`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
`;

const Role = styled.span`
  font-size: 0.85rem;
  color: #a0a0a0;
`;

export const Testimonials = () => {
    return (
      <TestimonialsSection>
        <Title>Depoimentos</Title>
        <Subtitle>Quem frequenta a nossa casa aprova a experiência</Subtitle>
  
        <Grid>
          {TESTIMONIALS_DATA.map((item) => (
            <Card key={item.id}>
              <QuoteIcon>“</QuoteIcon>
              <Text>"{item.text}"</Text>
              <ProfileContainer>
              {item.avatar ? (
                <Avatar src={item.avatar} alt={item.name} />
            ) : (
                <AvatarPlaceholder>
                  {item.name
                    .split(' ')
                    .map(palavra => palavra[0])
                    .slice(0, 2)
                    .join('')                
                }
                </AvatarPlaceholder>
              )}
                <Info>
                  <Name>{item.name}</Name>
                  <Role>{item.role}</Role>
                </Info>
              </ProfileContainer>
            </Card>
          ))}
        </Grid>
      </TestimonialsSection>
    );
  };