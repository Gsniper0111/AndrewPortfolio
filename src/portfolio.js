/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Andrew",
  logo_name: "Andrew",
  nickname: "Andrew",
  full_name: "Andrew Dyer",
  subTitle: "Full Stack Developer 🔥. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/1Ex5S3-tEiA6faXzL-P1Cm1DJ6qLnC-e-oiM9XX1dnVo/edit?usp=sharing",
  mail: "AndrewGranvilleDyer@outlook.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/kryptify",
  gmail: "AndrewGranvilleDyer@outlook.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Web Frontend: ReactJS, VueJS, AngularJS, and more",
        "⚡ Web Backend: Node.js, PHP, Java(Spring), Python(Django)",
        "⚡ Database: MySQL, PostgreSQL, NoSQL(MongoDB, Redis, etc)",
        "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean",
        "⚡ Git, Bitbucket, Slack, Jira, Asana, Trello",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#41b82e",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#c7893d",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Web3 projects",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: " Technical University of Munich",
      subtitle: "Bachelor's Degree in Computer Science",
      logo_path: "ntu.png",
      alt_name: "TUM",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ I have completed various online blockchain courses like Certified Blockchain Developer, MSc in Digital Fintech, etc.",
        "⚡ I have learnt smart contracts & best-practices for blockchain and front-end interfaces.",
        "⚡ I have implemented several Web3 projects based on what I've learnt under my blockchain course.",
      ],
      website_link: "https://www.tum.de/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      // title: "Bachelor of Engineering",
      // subtitle: " Kyiv International University",
      // logo_path: "nus.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/16KGXV3mhhDYvwSjSIde3-VI_VjSlUl4d/view?usp=sharing",
      // alt_name: "Bachelor of Engineering",
      // // color_code: "#2AAFED",
      // color_code: "#47A048",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for new job opportunities. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Infinite Computer Solutions",
          company_url: "https://infinite.com/",
          logo_path: "infinite_logo.png", //have to be correct
          duration: "June 2024 - Present",
          location: "Remote",
          description:
            "Developed a comprehensive inventory management system leveraging barcode and RFID technology, enhancing tracking accuracy and operational efficiency for retail and warehouse environments.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Lead Developer (Full-time)",
          company: "ReLOG3P SRL",
          company_url: "https://relog3p.com/",
          logo_path: "relog3p.jpg",
          duration: "Sep 2023 - Mar 2024",
          location: "Remote",
          description: `•Contributed to convert the existing web platforms built with CMS(Wordpress, Drupal) into MERN stack based ones.
                        •Devoted to UI/UX designing with MUI.
                        •Achieved remarkable performance in reorganizing big MySQL database.
          `,
          color: "#0071C5",
        },
        {
          title: "Software Engineer (Full-time)",
          company: "Fable Consortium",
          company_url: "https://fableconsortium.org/",
          logo_path: "Fable Consortium.png",
          duration: "Feb 2022 - Mar 2023",
          location: "Remote",
          description: `•Developed a web-based tool for analyzing and visualizing Green House Gas Emission and AFOLU data using Next.js, React.js, and Tailwind CSS.
          •Utilized the Fusion charts library to create interactive graphs that displayed emissions reduction potential and implications of mitigation options.
          •Designed the graphical user interface of the website with a focus on user experience and data visualization.
          •The tool provided valuable insights into GHG emissions and helped organizations make informed decisions about mitigation strategies.
        `,
          color: "#0071C5",
        },
        {
          title: "Senior Java Engineer (Full-time)",
          company: "Membersy",
          company_url: "https://membersy.com/",
          logo_path: "Membersy.png",
          duration: "Nov 2019 - Dec 2021",
          location: "Hybrid",
          description: `•Enhanced the functionality and error handling capabilities of existing Golang and Java RESTful APIs using Spring Framework.
          •Developed Restful APIs and multi-server applications using Golang to meet product requirements.
          •Designed and implemented highly scalable solutions by utilizing concurrency primitives such as multi-threading, mutexes, semaphores, etc., and following best practices like TDD (Test Driven Development).
          •Implemented unit and integration tests on multiple Java web applications' back end using JUnit and Mockito.
          •Proficient in using build/deploy tools such as Jenkins, Docker, and Kubernetes for Continuous Integration & Deployment of Microservices.
          `,
          color: "#0071C5",
        },

        {
          title: "Full Stack Engineer (Full-time)",
          company: "Mythical Games",
          company_url: "https://mythicalgames.com/",
          logo_path: "Mythical Games.jpg",
          duration: "Aug 2018 - Sep 2019",
          location: "Remote",
          description: `•Worked in a highly collaborative Agile team environment to develop web-based applications using JavaScript frameworks like React.js, Angular.js, and Backbone.js.
          •Built reusable, responsive pages on frontend frameworks like Angular and React.js with Tailwind CSS, Headless UI, and other tools to create visually appealing and user-friendly interfaces.
          •Developed DApps using HTML, JavaScript, and Node.js, and interacted with Ethereum Blockchain using Web3.js APIs and Metamask.
          •Created web-based applications in React.js and stored transactions in Ethereum Network using Solidity language.
          •Experienced in building NFT marketplaces and DeFi/DApp development with token protocols such as ERC20, ERC21, ERC721, ERC-1155, and Opensea.
          `,
          color: "#0071C5",
        },

        {
          title: "Java Engineer (Full-time)",
          company: "Dedicated Developers",
          company_url: "https://dedicateddevelopers.com/",
          logo_path: "Dedicated Developers.png",
          duration: "Jul 2016 - Jul 2018",
          location: "Remote",
          description: `•Extensive expertise in developing intricate web user interfaces, deeply understanding user interaction, design principles, and standards.
          •Revamped and modernized company website, incorporating sleek and responsive components using React on a Java Backend (Spring Boot).
          •Proficient in creating and utilizing RESTful APIs with Swagger, and well-versed in CI/CD practices.
          •Implemented all components using Test-Driven Development (TDD) methodology with JUnit, ensuring high-quality code and efficient development.
          •Skilled in utilizing Golang drivers to execute operations such as CRUD and complex queries with PostgreSQL, MySQL, MongoDB, and Redis.
          •Boosted data quality and system uptime by generating statistics for data pipelines using Golang.
          `,
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest blockchain and Web technology. My best experience is to create Solidity Smart contracts, NodeJS Backend, Web3.js integration, and React/Vue Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tetiana.png",
    description:
      "You can contact me at any time. I will try to get back to you as fast as I can.",
  },
  blogSection: {
    title: "Resume",
    subtitle:
      "You can contact me at any time. I will try to get back to you as fast as I can.",
    link:
      "https://docs.google.com/document/d/1Ex5S3-tEiA6faXzL-P1Cm1DJ6qLnC-e-oiM9XX1dnVo/edit?usp=sharing",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "AutomateInstaPyBot",
      url: "https://github.com/harikanani/AutomateInstaPyBot",
      description:
        "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "node_express_crud_api_starter",
      url: "https://github.com/harikanani/node_express_crud_api_starter",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "6",
      name: "node-web-scrapper",
      url: "https://github.com/harikanani/node-web-scrapper",
      description:
        "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
