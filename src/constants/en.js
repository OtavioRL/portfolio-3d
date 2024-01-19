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
  caio,
  marcelo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: creator,
  },
  {
    title: "UX/UI Designer",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
];

const technologies = [
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

const experiences = [
  {
    title: "Fullstack Web Developer Course",
    company_name: "Trybe",
    icon: trybe,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - July 2023",
    points: [
      "Over 12 months and approximately 1500 hours of study and practice",
      "Big projects where I had to collaborate with my team using GitHub and agile methodologies like Scrum and Kanban.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Technologies like React, Redux, Node.js with Express.js, Docker, TypeScript, SQL, and NoSQL were all used in projects along the course.",
    ],
  },
  {
    title: "Freelancer Work",
    company_name: "Autonomous",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "July 2023 - Today",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "This work significantly enhanced my expertise in React and Next.js, as it involved creating applications from scratch – ranging from design development to coding and deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Otavio on a full-stack project and was impressed by his skill and knowledge in front-end, especially in React, dealing with state management, events, and components. Furthermore, he is a good-humored and relaxed person, and his willingness to help is another strong point, always seeking solutions and contributing positively to the team. I recommend Otavio to any company looking for a quality front-end developer who can also contribute to a light and productive work environment.",
    name: "Marcelo Marques",
    image: marcelo,
    linkedIn: "https://www.linkedin.com/in/marcelo-mls/"
  },
  {
    testimonial:
      "I recommend Otavio without hesitation to any team looking for a dedicated and collaborative full-stack developer. We worked together on a project where he stood out for his teamwork skills and willingness to help whenever needed. Furthermore, Otavio is fun and friendly, making the work environment much more enjoyable. With Otavio on your team, I am confident that you will have a committed and valuable developer for your company.",
    name: "Caio Oliveira de Andrade",
    image: caio,
    linkedIn: "https://www.linkedin.com/in/caio-oliveira-de-andrade/"
  },
  {
    testimonial:
      "One of the best team partners I've ever had! Simply amazing working with Otavio! Very attentive and understanding, he was crucial for us to deliver our project masterfully!",
    name: "Gabriel Tenari",
    image: tenari,
    linkedIn: "https://www.linkedin.com/in/ggtenari/"
  },
];

const projects = [
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

export { services, technologies, experiences, testimonials, projects };