import { FaLinkedin, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { images } from '../constants/index';


export const links = [
    {
        name: 'About Us',
        link: 'aboutUs',
    },
    {
        name: 'Support Us',
        link: 'support',
    },
    {
        name: 'Our Team',
        link: 'team',
    },
    {
        name: 'Contact',
        link: 'contact',
    },
];

export const socials = [
    {
        icon: <FaXTwitter />,
        link: 'https://x.com/IGPI4ALL?s=09',
    },
    {
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/profile.php?id=61565726552235&mibextid=ZbWKwL',
    },
    {
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/inclusive-growth-prosperity-initiative-a3315132b',
    },
    {
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/igpi4all',
    },
    {
        icon: <FaTiktok />,
        link: 'https://www.tiktok.com/@igpi4all?_t=8penjOB9fDK&_r=1',
    },
    {
        icon: <FaYoutube />,
        link: 'https://youtube.com/@inclusivegrowthandprosperityin?si=wJa53eMA3_gdIrPZ',
    },
];

export const objectives = [
    {
        title: 'Empowerment',
        text: 'To implement efficient and effective advocacy and high – impact Empowerment programs and services that improves the quality of lives of the youth and working populace of Nigeria all over the world   in collaboration with strategic partners',
    },
    {
        title: 'Potential',
        text: 'To create a society where vulnerable individuals (women, youths, children, people living with disabilities) achieve their full potentials and actively contribute to national growth and sustainable development.',
    },
    {
        title: 'Compliance',
        text: 'Working tirelessly to be the most financially compliant NGO in Nigeria and Africa at large.  ',
    },
    {
        title: 'Advocacy',
        text: 'Improve the lives of the youth, children, women, working populace, physically challenged and other vulnerable population in Nigeria and Africa at large via; advocacy, counselling training, empowerment and follow up for effective implementation of process. ',
    },
    {
        title: 'Education',
        text: 'Provision of health education and facilities, promotion of girl child education, promotion of poverty alleviation/eradication programmes among Nigerians and Africans at large including those living in diaspora. ',
    },
    {
        title: 'Integration',
        text: 'Providing support in implementing and consolidating all existing machineries of social and cultural integration.',
    },
    {
        title: 'Sanitation',
        text: 'Sanitizing of Nigeria and Africans’ social media space through promotion of healthy social media interaction. ',
    },
    {
        title: 'Peace',
        text: 'Creation of high impact forum to foster peaceful coexistence through organisation of inter - state and international workshops, seminars, conferences and symposium.',
    },
    {
        title: 'Environment',
        text: 'Advocacy, support, and promotion of sustainable environment.',
    },
    {
        title: 'Governance',
        text: 'Advocacy and support and promotion of good governance, for sustainable democracy in Nigeria and African at large.',
    },
];

export const aboutData = [
    {
      title: 'Our Mission',
      text: 'Our mission is to ensure all people of Nigeria and Africans at large have access to the care and resources they need to make informed decisions about their lives, and become responsible citizens, who contributes to national development and unity.',
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.photoTwelve,
      id: 'missionSection'
    },
    {
      title: 'Our Vision',
      text: 'Helping us make Nigeria and Africa at large a better place. Whether it’s feeding children, empowering women, training farmers, responding to disasters, or serving a community in need, provision of health education / facilities, promoting cross cultural heritage, taking vulnerable children and youths off the street, provision of skills and leadership training and reliefs where necessary and promoting peaceful existence among member states, the goal is to bring help and hope where they are needed most',
      className: 'flex flex-col-reverse md:flex-row-reverse mb-10',
      imgUrl: images.photoOne,
      id: 'visionSection'
    }
];


export const teamData = [
    {
      name: 'Engr. Professor Irtwange Simon',
      role: 'Chairman Governing Board',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco
    },
    {
      name: 'Nnadi Chinelo Nnenna',
      role: 'Secretary Governing Board/Director Programmes and Social Welfare',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco2
    },
    {
      name: 'Ashiekaa Terese Amos',
      role: 'National Director',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco3
    },
    {
      name: 'Osemeke Benedicta',
      role: 'Deputy National Director',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco4
    },
    {
      name: 'Oluchukwu Daniel Ezenwa',
      role: 'National Secretary',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco5
    },
    {
      name: 'Chukwuemeka George Ogbonna',
      role: 'Director Finance',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco6
    },
    {
      name: 'Isioma Owere',
      role: 'Director Women Affairs',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco7
    },
    {
      name: 'Innocent Amadikwa',
      role: 'Director Youth Affairs',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco8
    },
    {
      name: 'Comrade Chieso Aninwagwa',
      role: 'Director Public Image',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco9
    },
    {
      name: 'Austine Maduka (phD)',
      role: 'Director Contact and Mobilisation',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco10
    },
    {
       name: 'Emeka James Mmadu',
       role: 'Director Diaspora (USA)',
       text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
       number: '123-456-7890',
       email: 'info@gmail.com',
       facebook: <FaFacebookF />,
       twitter: <FaXTwitter />,
       linkedin: <FaLinkedin />,
       className: 'flex flex-col-reverse md:flex-row-reverse',
       imgUrl: images.exco11
    } 
];