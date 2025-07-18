# 🚀 Meu Portfólio Pessoal

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
  ![Hygraph](https://img.shields.io/badge/Hygraph-CMS-6366F1?style=for-the-badge&logo=cms&logoColor=white)
  
  <h3>🌟 Portfólio moderno e responsivo criado com as mais recentes tecnologias</h3>
  
  
  
</div>

---

## ✨ Sobre o Projeto

Este é meu portfólio pessoal, desenvolvido para mostrar minhas habilidades como desenvolvedor. O site apresenta uma interface moderna, animações suaves e um design responsivo que proporciona uma excelente experiência do usuário.

### 🎯 Principais Características

- ⚡ **Performance otimizada** com Next.js 15 e React 19
- 🎨 **Design moderno** e responsivo com Tailwind CSS 4
- 📡 **Integração com Hygraph CMS** para gerenciamento de conteúdo
- 🔄 **Loading e Error States** com componentes guard reutilizáveis
- ✍️ **Efeito de digitação** na seção hero
- 📱 **Totalmente responsivo** para todos os dispositivos
- 🔧 **TypeScript** para maior segurança e produtividade
- 🚀 **Otimizado para SEO** e performance
- 📧 **Seção de contato** funcional
- 🌙 **Animações suaves** e transições
- 🛡️ **Guards de validação** para estados de loading e erro

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 15.4.1
- **Biblioteca:** React 19.1.0
- **Linguagem:** TypeScript 5
- **Estilização:** Tailwind CSS 4
- **CMS:** Hygraph (Headless CMS)
- **GraphQL:** GraphQL Request 7.2.0
- **Linting:** ESLint com configuração Next.js
- **Deploy:** Vercel

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   └── favicon.ico      # Ícone do site
├── components/
│   ├── guards/          # Componentes de validação
│   │   ├── error-guard.tsx       # Guard para estados de erro
│   │   ├── loading-guard.tsx     # Guard para estados de loading
│   │   └── hook-validate-guard.tsx # Guard combinado
│   ├── sections/        # Seções principais
│   │   ├── About.tsx            # Seção sobre mim
│   │   ├── Contact.tsx          # Formulário de contato
│   │   ├── Hero.tsx             # Seção hero com efeito de digitação
│   │   ├── Projects.tsx         # Portfólio de projetos
│   │   ├── Skills.tsx           # Habilidades técnicas
│   │   └── SocialSidebar.tsx    # Barra lateral de redes sociais
│   └── structure/       # Componentes de estrutura
│       ├── Footer.tsx           # Rodapé
│       └── Header.tsx           # Cabeçalho/navegação
├── hooks/               # Custom hooks
│   ├── useAboutMeData.ts        # Hook para dados sobre mim
│   └── useHeroData.ts           # Hook para dados do hero
├── lib/                 # Bibliotecas e configurações
│   ├── hygraph.ts               # Cliente GraphQL do Hygraph
│   └── types.ts                 # Tipos TypeScript compartilhados
├── services/            # Serviços de API
│   ├── get-about-me-data.ts     # Serviço para dados sobre mim
│   ├── get-hero-data.ts         # Serviço para dados do hero
│   └── types.ts                 # Tipos dos serviços
└── public/              # Arquivos estáticos
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    └── window.svg
```

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/CrisnaldoSantos/meu-portfolio-next.git
   cd meu-portfolio-next
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env.local` na raiz do projeto:

   ```bash
   NEXT_PUBLIC_HYGRAPH_URL=sua_url_do_hygraph_aqui
   ```

4. **Execute o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

5. **Acesse o projeto**

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🔧 Configuração do CMS

Este projeto utiliza o **Hygraph** (antigo GraphCMS) como headless CMS. Para configurar:

1. **Crie uma conta no [Hygraph](https://hygraph.com)**
2. **Configure seu schema** com os modelos necessários
3. **Obtenha a URL da API** do seu projeto
4. **Configure a variável de ambiente** `NEXT_PUBLIC_HYGRAPH_URL`

### Modelos sugeridos no Hygraph:

- **Hero**: Para dados da seção inicial
- **About**: Para informações pessoais e profissionais
- **Skills**: Para habilidades técnicas
- **Projects**: Para portfólio de projetos

## 📋 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linting do código

## 🎨 Personalização

O projeto é totalmente personalizável. Você pode:

- Modificar as cores no arquivo `tailwind.config.ts`
- Adicionar novos componentes nas pastas organizadas
- Customizar o conteúdo através do Hygraph CMS
- Criar novos guards na pasta `src/components/guards`
- Adicionar novos serviços na pasta `src/services`
- Personalizar hooks na pasta `src/hooks`
- Adicionar novas páginas na pasta `src/app`

## 🏗️ Arquitetura do Projeto

### Padrões Utilizados:

- **Custom Hooks**: Para lógica de estado reutilizável
- **Guard Components**: Para validação de estados (loading, error)
- **Service Layer**: Para separação de responsabilidades de API
- **Headless CMS**: Para gerenciamento dinâmico de conteúdo
- **Type Safety**: TypeScript em toda a aplicação

## 📱 Seções do Portfólio

- **🏠 Hero** - Apresentação inicial com efeito de digitação
- **👤 Sobre** - Informações pessoais e profissionais
- **💻 Habilidades** - Tecnologias e ferramentas
- **🎯 Projetos** - Portfólio de trabalhos realizados
- **📞 Contato** - Formulário e informações de contato
- **🔗 Redes Sociais** - Links para perfis profissionais

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_HYGRAPH_URL`: URL da sua API do Hygraph
4. Deploy automático! ✨

### Outras Plataformas

O projeto também pode ser deployado em:

- Netlify
- AWS Amplify
- Railway
- Render

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email:** crisnaldo.carvalho@outlook.com
- **LinkedIn:** [Meu Perfil](https://www.linkedin.com/in/crisnaldo-carvalho-76741212b/)
- **GitHub:** [CrisnaldoSantos](https://github.com/CrisnaldoSantos)
- **Portfolio:** [Portifolio (antigo)](https://www.crisnaldocarvalho.com.br)

---

<div align="center">
  <p>⭐ Se gostou do projeto, deixe uma estrela!</p>
  <p>Feito com ❤️ por <strong>Crisnaldo Santos</strong></p>
</div>
