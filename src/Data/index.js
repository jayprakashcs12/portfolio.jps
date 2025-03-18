import { BsStackOverflow, BsWhatsapp } from "react-icons/bs";
import Experience from '../components/pages/Experience';
import { FiGithub, FiPhone } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import Contact from '../components/pages/Contact';
import Skills from '../components/pages/Skills';
import { BiLogoGmail } from "react-icons/bi";
import Home from '../components/pages/Homes';
import { FaCodepen } from "react-icons/fa6";

export let AboutUs = {
  description: `I'm an energetic web developer with a sharp eye for ReactJS, endeavoring to make effective and outwardly staggering programming arrangements with 
  an IT foundation.`
}

export let BioData = {
  fullName: "Jay Prakash Singh", roles: ["(Front End Developer)", "(ReactJS Developer)", "(UI Developer)"],
  resume: "https://drive.google.com/file/d/10RVRMksYF8BkoBAyzymnicUx5DnA7byH/view",
  description: `As a motivated and adaptable front-end developer, I thrive on embracing new challenges. My passion for learning drives me to consistently deliver 
  high-quality results. With a positive attitude and a growth mindset, I am committed to making a meaningful contribution to every project I undertake, 
  aiming to achieve greatness in the process`
};

export let Contacts = { 
  phoneNumber: "8563001092", personName: 'Mail Me', phoneURL: "tel:8563001092", whatsAppUrl: "https://wa.me/8563001092",
};

export let ContactsItem = [
  { text: Contacts.phoneNumber, url: Contacts.phoneURL, icon: <FiPhone className="social-icon" /> },
  { text: Contacts.phoneNumber, url: Contacts.whatsAppUrl, icon: <BsWhatsapp className="social-icon" /> }
];

export let JobSummary = { 
  title: "Professional Summary", 
  description: [
    "Over 5+ Years of IT experience which includes 3+ Years of Extensive experience as a Front-End / UI Developer, 2 Years as a ReactJS Developer & 1 Year as a PHP Developer",
    "Developed responsive websites for smart devices utilizing responsive design techniques and media queries",
    "Extensive experience in developing web pages using HTML, CSS, Bootstrap, JavaScript, and React JS",
    "Have a working knowledge of API integration, and Cross-Browser (Platform Compatibility Issues)",
    "Knowledgeable in responsive design principles and mobile-first development practices"
  ]
}

export let NavRoutes = [
  { navTo: '/', navText: 'Home' }, { navTo: '/experience', navText: 'Experience' }, { navTo: '/skills', navText: 'Skills' },
  { navTo: '/contact-us', navText: 'Contact Us' },
];

export let RoutesComponents = [
  { path: '/', component: Home }, { path: '/experience', component: Experience }, { path: '/contact-us', component: Contact }, 
  { path: '/skills', component: Skills },
];

export let SocialLinks = [ 
  { name: 'Linkedin', icon: <SlSocialLinkedin className="social-icon" />, url: 'https://www.linkedin.com/in/jay-prakash-singh-028957128/' },
  { name: 'Mail Me', icon: <BiLogoGmail className="social-icon" />, url: 'mailto:jayprakash199221@gmail.com' },
  { name: 'Github', icon: <FiGithub className="social-icon" />, url: 'https://github.com/jayprakashcs12/' },
  { name: 'Stack Overflow', icon: <BsStackOverflow className="social-icon" />, url: 'https://stackoverflow.com/users/18405681/jay-prakash-singh/' },
  { name: 'Codepen', icon: <FaCodepen className="social-icon" />, url: 'https://codepen.io/jayprakashcs12/' },
];

export let TechnicalSkills = [
  { category: 'Web Development', items: ['HTML - 4, 5', 'CSS - 2, 3'], }, { category: 'Database', items: ['MongoDB', 'SQL'], },
  { category: 'Source Code Editor', items: ['Notepad++', 'VS Code'], },  { category: 'Framework', items: ['Bootstrap - 3, 4, 5'], },
  { category: 'Scripting Language', items: ['JavaScript'], }, { category: 'Library', items: ['ReactJS'], },
];

export let theme = 'dark';

export let TimeThemes = {
  dark:  { content: { background: 'var(--color08)', color: 'var(--color14)' }, contentArrow: { borderRight: '7px solid var(--color14)' }},
  light: { content: { background: 'var(--color03)', color: 'var(--color14)' }, contentArrow: { borderRight: '7px solid var(--color03)' }},
};

export let WorkExperience = [
  { id: 1, company: "Lobotus Technology", position: "UI Developer", date: "Jan-2022 - Dec-2023", 
    description: [
      "Involved in micro front-end design and development of the GUI for the EMR platform",
      "Used React-Router to turn an application into a single-page application (SPA)",
      "Module testing, module integration, and testing all other modules together",
      "Building reusable components and front-end libraries for future use", 
      "Reviewing application requirements and interface designs",
      "Design changes as per client requirements",
      "Write clean and well-structured code",
      "Develop responsive web-based UI",
    ]
  },
  { id: 2, company: "Bangalore Softsell Pvt Ltd", position: "Junior Software Developer", date: "Oct-2019 - Mar-2021", 
    description: [
      "Utilized AngularJS to develop a single-page application, implementing data binding and synchronization with the server, along with HTML, CSS, Bootstrap, AngularJS & PHP",
      "Involved in designing the user experience interface UI/UX strategy, UI requirements, and converting findings into UI designs",
      "Have a working knowledge of AngularJS, ES6, and PHP with CodeIgniter",
      "Develop user interfaces with the latest front-end technologies",
      "Maintaining and optimizing mobile/web applications",
    ]
  },
  { id: 3, company: "Cybotrix Technology", position: "Web Developer", date: "Sept-2017 - Oct-2019", 
    description: [
      "Handled cross-browser compatibility issues & features to enhance user experience", 
      "Optimize web pages for maximum speed and boost their scalability",
      "Updated the website from time to time for special requirements", 
      "Developed the pages that are compliant with W3C standards", 
      "Ensuring web design is optimized for smartphones",
    ]
  }
];