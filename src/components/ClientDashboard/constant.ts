import { string } from 'yup';

const coderRecommendation = {
  first_name: 'Anatony',
  last_name: '',
  coderskillsexperience: {
    skill: [
      {
        technology: {
          name: 'HTML'
        }
      },
      {
        technology: {
          name: 'Bootstrap'
        }
      },
      {
        technology: {
          name: 'CSS'
        }
      },
      {
        technology: {
          name: 'JavaScript'
        }
      },
      {
        technology: {
          name: 'PHP'
        }
      }
    ],
    total_years_of_experience: 10,
    identity: 'HTML Developer',
    profile_picture: 'images/png/coder.png'
  },
  address: {
    city: 'string',
    country: 'string'
  },
  rating: 4.5,
  hourly_rate: 80
};

const skillsTab = [
  'Data Entry',
  'Graphic Design',
  'Logo Design',
  'Ethical Hacking',
  'WordPress',
  'Java Developer',
  'HTML',
  'JavaScript'
];

const searchOptionList = [{ label: 'All', value: 'All' }];

type TJobsLabelObject = {
  [key: string | number]: string;
};

const jobsLabelObject: TJobsLabelObject = {
  1: 'All Jobs',
  2: 'Jobs Offered',
  3: 'Completed Jobs',
  4: 'Proposal Received',
  5: 'My Active Jobs'
};

const clientJobLabelsObject: TJobsLabelObject = {
  1: 'All Jobs',
  2: 'Completed Jobs',
  3: 'Still Hiring',
  4: 'My Active Jobs'
};

const coderData = [
  {
    first_name: 'Brooklyn',
    last_name: 'Simmons',
    email: 'john.doe@gmail.com',
    completed_jobs: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'Java'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'nodeJs'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'HTML'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'CSS'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'Java'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'BACKEND-DEVELOPER',
    linkedin_url: 'https://github.com/your_username',
    github_url: '"https://github.com/your_username"',
    stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
    glassdoor_url: '',
    phone: null,
    country: 'USA',
    city: 'Virginia',
    state: 'CA',
    role: 'CODER',
    is_favorite: true,
    date_joined: ''
  }
];
const profileData = {
  description: `Senior Java Developer, a seasoned architect in the world of
    coding. As a senior member of the development tribe, they wield a
    mastery of Java that goes beyond syntax, transcending into the art
    of building scalable, robust, and innovative solutions. Here's a
    glimpse into the essence of a Senior Java Developer:
    1. Code Artistry: Mastery of core Java concepts, turning code into
  a work of art. Proficiency in object-oriented programming
  principles, weaving elegance into every line. 2. Architectural
  Maestro: Designing and implementing high-performance, scalable
  applications. Crafting the architectural blueprints that stand the
  test of time. 3. Framework Virtuoso: Command over Java frameworks,
  with an emphasis on Spring and Spring Boot. Leveraging frameworks
  to accelerate development and enhance application resilience. 4.
  Database Symphony: Conducting orchestras with relational databases
  like a virtuoso maestro. Expertise in ORM frameworks, especially
  the harmonies of Hibernate. 5. Web Development Virtuosity: Shaping
  user interfaces with the precision of a maestro. Bringing web
  applications to life with seamless integration of front-end
  technologies. 6. Service Symphony: Composing and orchestrating
  RESTful and SOAP web services with finesse. 7. Git Conductor:
  Guiding the development ensemble with mastery over version control
  using Git. 8. Agile Composer: Composing symphonies within Agile
  methodologies, leading teams with grace and agility. 9. Testing
  Maestro: Conducting testing symphonies with mastery over
  frameworks like JUnit. 10. Problem-Solving Symphony: - Solving
  complex coding puzzles with the clarity of a musical score. 11.
  Cloud Conductor: - Leading the orchestra into the clouds with a
  profound understanding of cloud platforms. 12. Mentorship
  Virtuosity: - Nurturing and mentoring junior developers, passing
  on the wisdom of the code symphony. 13. Innovator's Overture: -
  Crafting innovative solutions that resonate with creativity and
  ingenuity. 14. Continuous Learning Sonata: - Staying in tune with
  the latest technologies and industry trends.`
};

// const skills = [
//   'PHP',
//   'HTML',
//   'Web Development',
//   'Bash',
//   'CSS',
//   'Golang',
//   'JavaScript',
//   'PHP',
//   'HTML',
//   'Web Development',
//   'Bash',
//   'CSS',
//   'Golang',
//   'JavaScript',
//   'Java',
//   'DevOps',
//   'CSS',
//   'Golang',
//   'JavaScript',
// ];

const certifications = [
  {
    name: 'Docker & cubenates : The complete solution',
    provider: 'Provide: Udemy',
    issue: '  Issued: Jan 2023'
  },
  {
    name: 'Docker & cubenates : The complete solution',
    provider: 'Provide: Udemy',
    issue: '  Issued: Jan 2023'
  }
];

const education = [
  {
    name: 'National University polytechnic',
    degree: 'Master’s degree | 2018-22'
  },
  {
    name: 'National University polytechnic',
    degree: 'Master’s degree | 2018-22'
  }
];

const employment = [
  {
    experience: 'Experienced Java developer | Workjam',
    duration: 'May 22, 2023 - May 26, 2023',
    roles: 'Planning, developing, and managing java-based software'
  },
  {
    experience: 'Experienced Java developer | Workjam',
    duration: 'May 22, 2023 - May 26, 2023',
    roles: 'Planning, developing, and managing java-based software'
  },
  {
    experience: 'Experienced Java developer | Workjam',
    duration: 'May 22, 2023 - May 26, 2023',
    roles: 'Planning, developing, and managing java-based software'
  }
];

const completedJobs = [
  {
    title: 'Need experienced Java developer',
    feedback: 'Brooklyn Simmons did excellent work.',
    skills: ['HTML', 'PHP', 'JavaScript', 'Web Development'],
    rating: 4.3,
    start_date: 'May 22-2013',
    end_date: 'May 26-2013',
    earnings: '660.52',
    rate: '52/hr',
    time: '55 hours'
  },
  {
    title: 'Need experienced Java developer',
    feedback: 'Brooklyn Simmons did excellent work.',
    skills: ['HTML', 'PHP', 'JavaScript', 'Web Development'],
    rating: 4.3,
    start_date: 'May 22-2013',
    end_date: 'May 26-2013',
    earnings: '660.52',
    rate: '52/hr',
    time: '55 hours'
  },
  {
    title: 'Need experienced Java developer',
    feedback: 'Brooklyn Simmons did excellent work.',
    skills: ['HTML', 'PHP', 'JavaScript', 'Web Development'],
    rating: 4.3,
    start_date: 'May 22-2013',
    end_date: 'May 26-2013',
    earnings: '660.52',
    rate: '52/hr',
    time: '55 hours'
  }
];

export {
  coderData,
  completedJobs,
  certifications,
  profileData,
  employment,
  education,
  coderRecommendation,
  skillsTab,
  searchOptionList,
  jobsLabelObject,
  clientJobLabelsObject
  // skills,
};

// export { coderRecommendation, skillsTab, searchOptionList, jobsLabelObject };
