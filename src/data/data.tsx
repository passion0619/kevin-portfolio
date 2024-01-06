import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kevin Edwards',
  description: "Kevin Edwards Portfolio template.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: profilepic,
  name: `Kevin Edwards`,
  description: (
    <>
      <p className="text-2xl text-stone-200">
          👋 Hello there! 👋 
      </p>
      <p className="prose-md text-stone-200 sm:prose-base lg:prose-lg">
      I'm Kevin, a passionate <strong className="text-stone-100">Full-stack Developer</strong> with a focus on blockchain and MERN stack technologies.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Kevin Edwards, a passionate full-stack developer with a focus on blockchain and MERN stack technologies. My journey in the world of coding has been nothing short of thrilling. From diving into the intricacies of blockchain to creating seamless applications using the MERN stack, I've found my true calling in the ever-evolving realm of web development.

  In the exciting universe of blockchain, I bring a wealth of knowledge and expertise, navigating the decentralized landscape with precision. I thrive on the challenges it presents, always seeking innovative solutions to push the boundaries of what's possible.
  
  On the MERN stack front, I'm in my element, seamlessly blending MongoDB, Express.js, React, and Node.js to craft robust and dynamic applications. It's not just about writing code for me; it's about creating experiences that resonate with users and make a meaningful impact.
  
  Join me on this journey of innovation and exploration as I continue to push the boundaries of what technology can achieve. Let's build something extraordinary together!`,
  aboutItems: [
    {label: 'Location', text: 'Kyiv, Ukraine', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'English / Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Teakwondo, Guitar', Icon: SparklesIcon},
    {label: 'Study', text: 'Taras Shevchenko National University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 5,
      },
      {
        name: 'Japanese',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Next',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Mongo',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Angry Birds',
    description: 'Wordpress theme by created elementor.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Argon Native',
    description: 'React Native Argon Template.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Season October',
    description: 'Laravel Socail template.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Restaurant',
    description: 'Top famous wordpress theme.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'React Admin Template.',
    description: 'React Admin Template, Tailwind, TypeScript.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'AENFT',
    description: 'Discover & Collect NFT Artwork.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2016',
    location: 'Taras Shevchenko National University',
    title: 'Bachelor of computer science',
    content: <p>Proudly, I hold a Bacheor in Computer Science from Taras Shevchenko National University, an institution known for its rich history and academic excellence.

    My educational journey at Taras Shevchenko National University equipped me with a solid foundation in computer science, providing not just theoretical knowledge but also fostering a hands-on approach to problem-solving. It was within these esteemed walls that my fascination with coding blossomed, leading me to specialize in blockchain and the MERN stack.
    
    As a graduate of this renowned university, I carry forward its legacy of academic rigor and innovative thinking. My time here has not only shaped my technical skills but has instilled in me a commitment to pushing boundaries and embracing the dynamic nature of the tech world.
    
    Join me on this exciting adventure as I leverage my educational background and real-world experiences to create impactful solutions in the realm of full-stack development. Together, let's embark on a journey where education meets innovation!</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Joaq Peralta',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Roman Khamdrak',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Tim Barker',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'kevin.bigdream@gmail.com',
      href: 'kevin.bigdream@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kyiv, Ukraine',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@kevinedwards',
      href: 'https://www.instagram.com/kevinedwards/',
    },
    {
      type: ContactType.Github,
      text: 'Kevin Edwards',
      href: 'https://github.com/passion0619',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/passion0619'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/passion0619'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kevinedwards/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/passion/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/kevinedwards'},
];
