import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  trybe,
  logo,
  carrent,
  jobit,
  tripguide,
  tenari,
  marcelo,
  caio
} from "../assets";

const navLinksPt = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiência",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const servicesPt = [
  {
    title: "Desenvolvedor Front-end",
    icon: web,
  },
  {
    title: "Desenvolvedor Back-end",
    icon: creator,
  },
  {
    title: "Designer UX/UI",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Mobile",
    icon: backend,
  },
];

const technologiesPt = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiencesPt = [
  {
    title: "Curso de Desenvolvedor Web Fullstack",
    company_name: "Trybe",
    icon: trybe,
    iconBg: "#E6DEDD",
    date: "Fevereiro 2022 - Julho 2023",
    points: [
      "Mais de 12 meses e aproximadamente 1500 horas de estudo e prática",
      "Grandes projetos nos quais colaborei com meu time usando GitHub e metodologias ágeis como Scrum e Kanban.",
      "Participação em code review fornecendo feedback construtivo para outros desenvolvedores.",
      "Tecnologias como React, Redux, Node.js com Express.js, Docker, TypeScript, SQL e NoSQL foram todas utilizadas em projetos ao longo do curso.",
    ],
  },
  {
    title: "Trabalho como Freelancer",
    company_name: "Autônomo",
    icon: logo,
    iconBg: "#FFF",
    date: "Julho 2023 - Hoje",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
      "Implementação de design responsivo garantindo compatibilidade entre diferentes navegadores.",
      "Trabalhar como freelancer aprimorou significativamente minha expertise em React e Next.js, pois envolveu a criação de aplicações do zero – desde o desenvolvimento do design até a implementação e o deployment.",
    ],
  },
];

const testimonialsPt = [
  {
    testimonial:
      "Tive o prazer de trabalhar com Otavio em um projeto full stack e fiquei impressionado com sua habilidade e conhecimento em front-end, em especial em React, lidando com gerenciamento de estado, eventos e componentes. Além disso, é uma pessoa bem-humorada e descontraída e sua disposição em ajudar é outro ponto forte, sempre buscando soluções e contribuindo positivamente para o time. Recomendo Otavio para qualquer empresa que busque um desenvolvedor front-end de qualidade e que também possa contribuir para um ambiente de trabalho leve e produtivo.",
    name: "Marcelo Marques",
    image: marcelo,
    linkedIn: "https://www.linkedin.com/in/marcelo-mls/"
  },
  {
    testimonial:
      "Eu recomendo sem hesitação Otavio para qualquer equipe que busca um desenvolvedor full-stack dedicado e colaborativo. Trabalhamos juntos em um projeto e ele se destacou por sua habilidade em trabalhar em equipe e sua vontade de ajudar sempre que necessário. Além disso, Otavio é divertido e amigável, o que tornou o ambiente de trabalho muito mais agradável. Com Otavio em sua equipe, tenho certeza de que vocês terão um desenvolvedor comprometido e valioso para sua empresa.",
    name: "Caio Oliveira de Andrade",
    image: caio,
    linkedIn: "https://www.linkedin.com/in/caio-oliveira-de-andrade/"
  },
  {
    testimonial:
      "Um dos melhores parceiros de equipe que já tive! Simplesmente incrivel trabalhar com o Otavio! Muito atencioso e compreensivo, foi fundamental para que conseguissemos entregar nosso projeto com maestria!",
    name: "Gabriel Tenari",
    image: tenari,
    linkedIn: "https://www.linkedin.com/in/ggtenari/"
  },
];

const projectsPt = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { navLinksPt, servicesPt, technologiesPt, experiencesPt, testimonialsPt, projectsPt };