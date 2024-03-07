// job post api mockup.

export interface IProject {
  id: string;
  user: string;
  title: string;
  description: string;
  skills: string[];
  contracts: any[]; // define a type for contracts if needed
  project_size: string;
  budget_type: string;
  maximum_budget: number;
  maximum_hourly_rate: number;
  minimum_hourly_rate: number;
  expertise: string[];
  duration: string;
  timezone: string[];
  attachments: string[];
  preferred_coder_residence: string;
  status: string;
  created: string;
  updated: string;
}

export const data: IProject[] = [
  {
    id: '626459',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Need experienced Java developer',
    description:
      'I am looking for a Full Stack Developer to join my team and help develop a web application. The estimated job duration is 1-3 months. Skills and experience required for this job include: Proficiency in JavaScript. Familiarity with web application development. Experience with front-end frameworks such as React.js. Knowledge of back-end technologies such as Ruby on Rails would be a plus. If you are a talented Full Stack Developer with experience in web application development using JavaScript, I would love to hear from you. This is an exciting opportunity to contribute to the development of a cutting-edge web application.',
    skills: ['HTML', 'PHP', 'WordPress', 'Web Development', 'CSS', 'Website Design'],
    contracts: [
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd34',
        coder_id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        client_id: '9f27ce0c-1692-4b37-889d-a2c0f3a7f6700',
        name: 'test contract',
        job_proposal: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
        start_date: '2023-10-31',
        end_date: null,
        is_active: true,
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    project_size: 'SMALL',
    budget_type: 'HOURLY',
    maximum_budget: 2000,
    maximum_hourly_rate: 100,
    minimum_hourly_rate: 80,
    expertise: ['EXPERT', 'INTERMEDIATE'],
    duration: 'SHORT_TERM',
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    attachments: ['attachment1.pdf', 'attachment2.jpg', 'attachment3.py'],
    preferred_coder_residence: 'USA_ONLY',
    status: 'ACTIVE',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  }
];
