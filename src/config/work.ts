import EndeavorIcon from '@/assets/jobs/Endeavor.png';
import ProbonoIcon from '@/assets/jobs/Probono.png';
import TorqiIcon from '@/assets/jobs/Torqi.png';
import ZRPIcon from '@/assets/jobs/ZRP.png';
import type { Job } from '@/types/job';

export default [
  {
    icon: EndeavorIcon,
    company: 'Endeavor (through ZRP)',
    workingPeriod: '2022 - Present',
    description:
      'Endeavor is a global nonprofit organization that supports high-impact entrepreneurs through mentorship, capital, and networking to foster innovation and economic growth.\nI led the frontend development of an internal-use, responsive platform with the goal of integrating and optimizing their working process and tools into a single user-friendly platform. Later, we analyzed user-behavior data and made user interviews to validate many product discover hypotheses.',
    technologies: {
      front: 'React, TypeScript, Remix, Material UI, Storybook.',
      back: 'MongoDB, Express, NestJS',
      cloud:
        'Amazon Web Services (AWS): Front End provisioning (ECS, EC2, Load Balancer) and SQS.',
    },
  },
  {
    icon: TorqiIcon,
    company: 'Torqi (through ZRP)',
    workingPeriod: '2022',
    description:
      'Torqi is a fintech company that offers receivables advance service for transportation companies. In it’s first year of operations (July 2022 - July 2023), Torqi has granted about R$ 45 million in credit. I helped to build the MVP and the initial versions of the platform, which is currently in production.',
    technologies: {
      front: 'React, TypeScript, Redux, Material UI',
      back: 'Python FastAPI, PyTest (TDD), PostgreSQL',
      cloud: 'Amazon Web Services (AWS): S3 + CloudFront, Lambda StepFunctions',
      auth: 'Keycloak',
    },
  },
  {
    icon: ZRPIcon,
    company: 'ZRP',
    workingPeriod: '2022 - Present',
    description:
      'ZRP is a software consulting firm that drives product development from conception to market launch, facilitating business and product discussions with cross-functional teams and stakeholders.',
    technologies: {
      mentorship: 'Mentoring and training about React, CSS and TypeScript',
      lecture:
        'Lectures about “Design & User Experience integration on Software Development” and “Basic Infrastructure & System Design”',
      back: 'Migrating an API from Express to NestJS on internal projects',
    },
  },
  {
    icon: ProbonoIcon,
    company: 'Probono Digital',
    workingPeriod: '2019 - 2022',
    description:
      "Probono Digital is a LegalTech startup that has developed a platform to enhance customer service and reduce employee costs within law firms by providing simplified, accessible information about their customers lawsuits through a user-friendly interface and a translated technical language, which contributes to the modernization and digitization of traditional law office operations.\nIn addition to the development of the desktop and mobile platform, I also helped to build the company's culture and processes, was responsible for the hiring and training of new developers, conducted User Experience interviews and acted as a Product Manager several times.",
    technologies: {
      front: 'React, React Native, Styled Components, Bootstrap',
      back: 'SailsJS API, MySQL, MongoDB, Python Selenium (for Web Scraping)',
      cloud:
        'Amazon Web Services (AWS): AWS ElasticBeanstalk, EC2, AWS Batch, Lambda',
    },
  },
] as Job[];
