import Experience from '../components/pages/Experience';
import Education from '../components/pages/Education';
import Personal from '../components/pages/Personal';
import Contact from '../components/pages/Contact';
import Skills from '../components/pages/Skills';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import { FaCodepen, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiGithub, FiPhone } from "react-icons/fi";
import { BsStackOverflow, BsWhatsapp } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";

let iconFontSize = { fontSize: "20px" }, phoneNumber = '8563001092', personName = 'Github', phoneURL = `tel:${phoneNumber}`,
whatsAppUrl = `https://wa.me/${phoneNumber}`, gitHubUrl = `https://github.com/jayprakashcs12`;

export let ContactItems = [
  { text: personName, url: gitHubUrl, icon: <FiGithub style={iconFontSize} /> },
  { text: phoneNumber, url: phoneURL, icon: <FiPhone style={iconFontSize} /> },
  { text: phoneNumber, url: whatsAppUrl, icon: <BsWhatsapp style={iconFontSize} /> }
];

export let BioData = {
  fullName: "Jay Prakash Singh",
  roles: ["Front End Developer", "ReactJS Developer", "UI Developer"],
  github: "https://github.com/jayprakashcs12/",
  resume: "https://drive.google.com/file/d/19ZKBcu6kLepC_wYcGTMEJculz_3zjFrx/view?usp=sharing",
  description:
    `As a motivated and adaptable front-end developer, I thrive on embracing new challenges. My passion for learning drives me to consistently deliver 
      high-quality results. With a positive attitude and a growth mindset, I am committed to making a meaningful contribution to every project I undertake, 
      aiming to achieve greatness in the process`,

};

export let JobSummary = {
  title: "Professional Summary",
  description: [
    "Over 5+ Years of IT experience which includes 3+ Years of Extensive experience as a Front-End Developer, 1 Year as a PHP Developer & 2+ Year as a ReactJS Developer",
    "Have a working knowledge of API integration, and Cross-Browser (Platform Compatibility Issues)",
    "Worked on creating responsive websites for smart devices using responsive design and Media Queries",
    "Extensive experience in developing web pages using HTML, CSS, Bootstrap, JavaScript, and React JS",
    "Used React-Router to turn an application into a single-page application (SPA)",
    "Have a working knowledge of AngularJS, ES6, and PHP with CodeIgniter",
    "Working knowledge of web protocols and standards (HTTP & HTTPS)",
    "Developed the pages that are compliant with W3C standards"
  ]
}

export let NavRoutes = [{ navTo: '/', navText: 'Home' }, { navTo: '/about-us', navText: 'About Us' }, { navTo: '/skills', navText: 'Skills' },
{ navTo: '/experience', navText: 'Experience' }, { navTo: '/education', navText: 'Education' },
{ navTo: '/personal-info', navText: 'Personal Info' }, { navTo: '/contact-us', navText: 'Contact Us' },
];

export let routesComponents = [
  { path: '/', component: Home }, { path: '/personal-info', component: Personal }, { path: '/experience', component: Experience },
  { path: '/education', component: Education }, { path: '/contact-us', component: Contact }, { path: '/about-us', component: About },
  { path: '/skills', component: Skills },
];

export let SocialLinks = [
  { name: 'Facebook', icon: <FiFacebook style={iconFontSize} />, url: 'https://www.facebook.com/jayprakash199221/' },
  { name: 'Twitter', icon: <FaXTwitter style={iconFontSize} />, url: 'https://twitter.com/jayprakash2108/' },
  { name: 'Linkedin', icon: <SlSocialLinkedin style={iconFontSize} />, url: 'https://www.linkedin.com/in/jay-prakash-singh-028957128/' },
  { name: 'Instagram', icon: <FaInstagram style={iconFontSize} />, url: 'https://www.instagram.com/jayprakashsingh10031/' },
  { name: 'Codepen', icon: <FaCodepen style={iconFontSize} />, url: 'https://codepen.io/jayprakashcs12/' },
  { name: 'Stack Overflow', icon: <BsStackOverflow style={iconFontSize} />, url: 'https://stackoverflow.com/users/18405681/jay-prakash-singh/' }
];