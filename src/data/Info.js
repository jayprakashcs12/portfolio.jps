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
import { BiLogoGmail } from "react-icons/bi";

export let BioData = {
  fullName: "Jay Prakash Singh", roles: ["(Front End Developer)", "(ReactJS Developer)", "(UI Developer)"],
  resume: "https://drive.google.com/file/d/19ZKBcu6kLepC_wYcGTMEJculz_3zjFrx/view?usp=sharing",
  description:
    `As a motivated and adaptable front-end developer, I thrive on embracing new challenges. My passion for learning drives me to consistently deliver 
    high-quality results. With a positive attitude and a growth mindset, I am committed to making a meaningful contribution to every project I undertake, 
    aiming to achieve greatness in the process`
};

export let Contacts = { 
  phoneNumber: "8563001092", personName: 'Mail Me', phoneURL: "tel:8563001092", whatsAppUrl: "https://wa.me/8563001092", mailUrl: "mailto:jayprakash199221@gmail.com",
};

export let ContactsItem = [
  { text: Contacts.personName, url: Contacts.mailUrl, icon: <BiLogoGmail className="social-icon" /> }, 
  { text: Contacts.phoneNumber, url: Contacts.phoneURL, icon: <FiPhone className="social-icon" /> },
  { text: Contacts.phoneNumber, url: Contacts.whatsAppUrl, icon: <BsWhatsapp className="social-icon" /> }
];

export let EducationDetails = [
  { id: 1, institution: "Dr. A.P.J. A.K.T.U., Lucknow", degree: "B.Tech", field: "C.S.E.", date: "2012-2016" },
  { id: 2, institution: "U.P. Board, Prayagraj", degree: "Intermediate", specialization: "PCM", date: "2007-2009" },
  { id: 3, institution: "U.P. Board, Prayagraj", degree: "High School", specialization: "Science", date: "2005-2007" }
];

export let JobSummary = { 
  title: "Professional Summary", description: [
    "Over 5+ Years of IT experience which includes 3+ Years of Extensive experience as a Front-End Developer, 1 Year as a PHP Developer & 2+ Year as a ReactJS Developer",
    "Have a working knowledge of API integration, and Cross-Browser (Platform Compatibility Issues)",
    "Worked on creating responsive websites for smart devices using responsive design and Media Queries",
    "Extensive experience in developing web pages using HTML, CSS, Bootstrap, JavaScript, and React JS",
    "Used React-Router to turn an application into a single-page application (SPA)", "Have a working knowledge of AngularJS, ES6, and PHP with CodeIgniter",
    "Working knowledge of web protocols and standards (HTTP & HTTPS)", "Developed the pages that are compliant with W3C standards"
  ]
}

export let NavRoutes = [
  { navTo: '/', navText: 'Home' }, { navTo: '/about-us', navText: 'About Us' }, { navTo: '/skills', navText: 'Skills' },
  { navTo: '/experience', navText: 'Experience' }, { navTo: '/education', navText: 'Education' },
  { navTo: '/personal-info', navText: 'Personal Info' }, { navTo: '/contact-us', navText: 'Contact Us' },
];

export let PersonalDetails = [
  { key: `Father's Name`, value: 'Surendra Singh' }, { key: 'Date of Birth', value: '21/08/1992' }, { key: 'Gender', value: 'Male' }, 
  { key: 'Marital Status', value: 'Single' }, { key: 'Nationality', value: 'Indian' },
];

export let RoutesComponents = [
  { path: '/', component: Home }, { path: '/personal-info', component: Personal }, { path: '/experience', component: Experience },
  { path: '/education', component: Education }, { path: '/contact-us', component: Contact }, { path: '/about-us', component: About },
  { path: '/skills', component: Skills },
];

export let SocialLinks = [
  { name: 'Codepen', icon: <FaCodepen className="social-icon" />, url: 'https://codepen.io/jayprakashcs12/' },
  { name: 'Instagram', icon: <FaInstagram className="social-icon" />, url: 'https://www.instagram.com/jayprakashsingh10031/' },
  { name: 'Github', icon: <FiGithub className="social-icon" />, url: 'https://github.com/jayprakashcs12/' },
  { name: 'Linkedin', icon: <SlSocialLinkedin className="social-icon" />, url: 'https://www.linkedin.com/in/jay-prakash-singh-028957128/' },
  { name: 'Facebook', icon: <FiFacebook className="social-icon" />, url: 'https://www.facebook.com/jayprakash199221/' },
  { name: 'Twitter', icon: <FaXTwitter className="social-icon" />, url: 'https://twitter.com/jayprakash2108/' },
  { name: 'Stack Overflow', icon: <BsStackOverflow className="social-icon" />, url: 'https://stackoverflow.com/users/18405681/jay-prakash-singh/' },
];

export let TechnicalSkills = [
  { category: 'Web Development', items: ['HTML - 4, 5', 'CSS - 2, 3'], }, { category: 'Database', items: ['MongoDB', 'SQL'], },
  { category: 'Source Code Editor', items: ['Notepad++', 'VS Code'], },  { category: 'Framework', items: ['Bootstrap - 3, 4, 5'], },
  { category: 'Scripting Language', items: ['JavaScript'], }, { category: 'Library', items: ['ReactJS'], },
];

export let theme = 'dark';

export let TimeThemes = {
  dark: { content: { background: '#333', color: '#fff' }, contentArrow: { borderRight: '7px solid #fff' } },
  light: { content: { background: '#0d6fed', color: '#fff' }, contentArrow: { borderRight: '7px solid #0d6fed' } },
};

export let TypoStyle = (theme) => ({ color: theme === 'dark' ? '#854ce6' : '#155390' });

export let WorkExperience = [
  { id: 1, company: "Lobotus Technology", position: "UI Developer", date: "Jan-2021 - Dec-2023", description: [
      "Involved in micro front-end design and development of the GUI for the EMR platform", 
      "Module testing, module integration, and testing all the modules together",
      "Building reusable components and front-end libraries for future use", 
      "Use mark-up languages like HTML to create user-friendly web pages",
      "Develop website features that can enhance the user experience", 
      "Reviewing application requirements and interface designs",
      "Extensive experience using React-Bootstrap for layout", 
      "Design changes as per client requirements", 
      "Write clean and well-structured code", 
      "Develop responsive web-based UI", 
      "Playing the role of team helper", 
      "Including API integration"
    ]
  },
  { id: 2, company: "Bangalore Softsell Pvt Ltd", position: "Junior Software Developer", date: "Oct-2019 - Mar-2021", description: [
      "Utilized AngularJS to develop a single-page application, implementing data binding and synchronization with the server, along with HTML, CSS, Bootstrap, AngularJS & PHP",
      "Involved in designing the user experience interface UI/UX strategy, UI requirements, and converting findings into UI designs",
      "Maintaining and optimizing mobile/web applications",
      "Develop UI with the latest front-end technologies",
      "Write clean and well-structured codes"
    ]
  },
  { id: 3, company: "Cybotrix Technology", position: "Web Developer", date: "Sept-2017 - Oct-2019", description: [
      "Designed HTML templates for use on all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table",
      "Handled cross-browser compatibility issues & features to enhance user experience",
      "Optimize web pages for maximum speed and boost their scalability",
      "Updated the website from time to time for special requirements", 
      "Ensuring web design is optimized for smartphones",
      "Extensive experience using Bootstrap for layout",
      "Troubleshooting problems with performance"
    ]
  }
];