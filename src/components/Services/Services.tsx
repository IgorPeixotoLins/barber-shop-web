import styled from 'styled-components';

interface ServiceItem {
    id: number;
    title: string;
    price: string;
    image: string;
}

const SERVICES_DATA: ServiceItem[] = [
    {
        id: 1,
        title: 'Corte Tradicional',
        price: 'R$ 55,00',
        image: '/images/corte-cabelo.jpg',
    },
    {
        id: 2,
        title: 'Corte & Barba Terápica',
        price: 'R$ 70,00',
        image: '/images/corte-cabelo2.jpg',
    },
    {
        id: 3,
        title: 'Combo Premium',
        price: 'R$ 80,00',
        image: '/images/corte-cabelo3.jpg',
    },
];

const ServicesSection = styled.section`
    padding: 80px 10%;
    background-color: #000000;
    color: #fff;
    text-align: center;
    overflow: hidden;
    `;

const Title = styled.h2`
    font-size: 2.5rem;
    color: #f0a500;
    margin - bottom: 15px;
    text - translation: uppercase;
    font - weight: 700;
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: #ccc;
    max-width: 600px;
    margin: 0 auto 50px auto;
    line-height: 1.6;
    font-weight: 300;
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    width: 100%;
`;

const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #121212;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #222;
    transition: transform 0.3s ease, box-shadow 0.3s ease;


    &:hover {
        transform: translateY(-5px);
        border-color: #f0a500;
    }
`;

const CardImage = styled.img`
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: center 20%;
    border-bottom: 1px solid #222;
    height auto;
`;

const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    flex-grow: 1;
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        height: auto;
        min-height: 40px;
    }
`;

const ServiceTitle = styled.h3`
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    text-align: center;
    line-height: 1.3;
    margin: 0;

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

const PriceButton = styled.button`
    background-color: #f0a500;
    color: #000;
    border: none;
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #d89400;
    }

    @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9rem;
    }
`;

export const Services = () => {
    return (
        <ServicesSection>
            <Title>Serviços</Title>
            <Description>
                A nossa barbearia combina o charme do atendimento tradicional com as técnicas mais modernas do mercado..
            </Description>

            <ServicesGrid>
                {SERVICES_DATA.map((service) => (
                    <ServiceCard key={service.id}>
                        <CardImage src={service.image} alt={service.title} />
                        <CardContent>
                            <TitleContainer>
                                <ServiceTitle>{service.title}</ServiceTitle>
                            </TitleContainer>
                            <PriceButton>{service.price}</PriceButton>
                        </CardContent>
                    </ServiceCard>
                ))}
            </ServicesGrid>
        </ServicesSection>
    )
};