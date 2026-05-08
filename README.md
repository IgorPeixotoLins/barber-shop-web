BARBER SHOP WEB

Plataforma de agendamento inteligente para barbearias modernas

07 de maio de 2026

---

# ✂️ Barber Shop Web

O **Barber Shop Web** é uma plataforma completa e responsiva projetada para modernizar o fluxo de agendamentos em barbearias. Desenvolvida com as tecnologias mais robustas do ecossistema **JavaScript**, a aplicação permite que clientes visualizem serviços, escolham profissionais e reservem horários de forma intuitiva.

A solução foca na **experiência do usuário (UX)** e na conversão, integrando-se diretamente à **API do WhatsApp** para garantir que cada agendamento seja confirmado instantaneamente, reduzindo faltas e otimizando a agenda do estabelecimento.

---

### 1. Demonstração e Responsividade

A interface foi construída sob a filosofia *Mobile-First*, garantindo uma experiência fluida em:

*   **Dispositivos Mobile:** Navegação otimizada para toque e carregamento rápido.
*   **Tablets:** Layout adaptável que aproveita o espaço lateral para exibição de portfólio.
*   **Desktop:** Visualização completa com painéis de agendamento expandidos.

![Demonstração do Projeto](./src/images/demo.gif)

> **Nota:** Para visualizar o funcionamento da interface, consulte o arquivo `demo.gif` no diretório `./src/images/demo.gif` ou acesse o link de deploy (se disponível).

---

### 2. Tecnologias Utilizadas

O projeto utiliza um stack moderno focado em **performance**, **tipagem estática** e **manutenibilidade**:

*   **React 18+:** Biblioteca principal para construção de interfaces declarativas.
*   **TypeScript:** Adição de tipagem estática para evitar erros em tempo de execução.
*   **Styled-Components:** Estilização baseada em componentes com suporte a temas.
*   **Vite:** Ferramenta de build de próxima geração para um desenvolvimento ultra-rápido.
*   **WhatsApp API:** Integração para envio automático de mensagens de confirmação.
*   **Jest & React Testing Library:** Suíte de testes para garantir a confiabilidade dos componentes.

---

### 3. Funcionalidades Principais

*   **Catálogo de Serviços:** Visualização detalhada de cortes, barbas e tratamentos com preços e durações.
*   **Agendamento Dinâmico:** Seleção de data e hora com bloqueio automático de horários já ocupados.
*   **Confirmação via WhatsApp:** Geração de link direto para o chat do estabelecimento com os dados do agendamento pré-preenchidos.
*   **Validação de Formulários:** Sistema rigoroso de validação para garantir que os dados de contato estejam corretos.
*   **Tratamento de Erros:** Feedback visual amigável para falhas de rede ou indisponibilidade de horários.
*   **Layout Responsivo:** Adaptação total a qualquer tamanho de tela.

---

### 4. Como Executar Localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento em sua máquina:

#### 4.1. Clonar o Repositório
```bash
git clone https://github.com/IgorPeixotoLins/barber-shop-web
cd barber-shop-web
```

#### 4.2. Instalar Dependências
```bash
npm install
```

#### 4.3. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto seguindo o modelo do item 6 deste documento.

#### 4.4. Rodar em Desenvolvimento
```bash
npm run dev
```

#### 4.5. Gerar Build de Produção
```bash
npm run build
```

---

### 5. Estrutura do Projeto

A organização de pastas segue as melhores práticas para projetos **React** escaláveis:

```text
src/
├── assets/          # Imagens, ícones e fontes
├── components/      # Componentes reutilizáveis (Botões, Inputs, Cards)
├── hooks/           # Hooks customizados para lógica de negócio
├── pages/           # Componentes de página (Home, Agendamento, Sucesso)
├── services/        # Integrações com APIs externas
├── styles/          # Temas globais e definições do Styled-Components
├── types/           # Definições de interfaces e tipos TypeScript
├── utils/           # Funções utilitárias e formatadores
└── App.tsx          # Componente raiz
```

---

### 6. Variáveis de Ambiente

Para o funcionamento correto da integração com o **WhatsApp** e outros serviços, configure as seguintes chaves:

```env
# API Key para integração com serviços de mensagem
VITE_WHATSAPP_API_KEY=sua_chave_aqui

# Número de telefone da barbearia (formato internacional)
VITE_STORE_PHONE_NUMBER=5511999999999

# URL base da aplicação
VITE_APP_URL=http://localhost:5173
```

---

### 7. Testes Automatizados

A aplicação conta com testes unitários e de integração para os componentes críticos.

*   **Ferramentas:** **Jest** e **React Testing Library**.
*   **Execução:** Para rodar todos os testes, utilize o comando:

```bash
npm test
```

---

### 8. Contribuições

Contribuições são muito bem-vindas! Para colaborar:

1.  Faça um **Fork** do projeto.
2.  Crie uma **Branch** para sua feature (`git checkout -b feature/NovaFuncionalidade`).
3.  Faça o **Commit** de suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4.  Faça o **Push** para a Branch (`git push origin feature/NovaFuncionalidade`).
5.  Abra um **Pull Request**.

---

### 9. Licença

Este projeto está sob a licença definida pelo proprietário do repositório. Consulte o arquivo `LICENSE` para mais detalhes sobre permissões de uso e distribuição.

---
