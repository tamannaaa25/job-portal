import logo from './logo.png'
import microsoft_logo from './microsoft_logo.png'
import search_icon from './search_icon.png'
import company_icon from './company_icon.png'
import location_icon from './location_icon.png'
import accenture_logo from './accenture_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'
import samsung_logo from './samsung_logo.png'
import walmart_logo from './walmart_logo.png'
import cross_icon from './cross_icon.png'
import left_arrow from './left_arrow.png'
import right_arrow from './right_arrow.png'
import playstore from './playstore.png'
import appstore from './appstore.png'
import main_image from './main_image.jpg'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import suitcase_icon from './suitcase_icon.png'
import person_icon from './person_icon.jpg'
import money_icon from './money_icon.png'
import profile_upload_icon from './profile_upload_icon.png'
import email_icon from './email_icon.png'
import lock_icon from './lock_icon.png'
import add_icon from './add_icon.png'
import home_icon from './home_icon.jpg'
import person_tick_icon from './person_tick_icon.png'
import resume_download_icon from './resume_download_icon.jpg'

export const assets = {
    logo,
    microsoft_logo,
    search_icon,
    company_icon,
    location_icon,
    accenture_logo,
    adobe_logo,
    amazon_logo,
    microsoft_logo,
    samsung_logo,
    walmart_logo,
    cross_icon,
    left_arrow,
    right_arrow,
    playstore,
    appstore,
    main_image,
    facebook,
    instagram,
    twitter,
    suitcase_icon,
    person_icon,
    money_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    add_icon,
    home_icon,
    person_tick_icon,
    resume_download_icon
};

export const JobCategories = [
    "Programming",
    "Data Science",
    "Designing",
    "Networking",
    "Management",
    "Marketing",
    "Cybersecurity",
]


export const JobLocations = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Austin",
    "Seattle",
    "Boston"
]

export const ViewApplicationsPageData = [
  {
    name: "Alice Johnson",
    jobTitle: "Frontend Developer",
    location: "Bangalore",
    imgSrc: "/images/alice.png",
    resume: "/resumes/alice.pdf",
  },
  {
    name: "Bob Smith",
    jobTitle: "Backend Engineer",
    location: "Hyderabad",
    imgSrc: "/images/bob.png",
    resume: "/resumes/bob.pdf",
  },
  {
    name: "Charlie Brown",
    jobTitle: "Data Analyst",
    location: "Chennai",
    imgSrc: "/images/charlie.png",
    resume: "/resumes/charlie.pdf",
  },
  {
    name: "David Wilson",
    jobTitle: "Product Manager",
    location: "Austin",
    imgSrc: "/images/david.png",
    resume: "/resumes/david.pdf",
  },
  {
    name: "Emily Davis",
    jobTitle: "Marketing Specialist",
    location: "Seattle",
    imgSrc: "/images/emily.png",
    resume: "/resumes/emily.pdf",
  }, 
  {
    name: "Frank Miller",
    jobTitle: "Sales Executive",
    location: "Chicago",
    imgSrc: "/images/frank.jpg",
    resume: "/resumes/frank.pdf",
  },
  {
    name: "Grace Lee",
    jobTitle: "HR Manager",
    location: "Boston",
    imgSrc: "/images/grace.png",
    resume: "/resumes/grace.pdf",
  }
];

export const manageJobsData = [
  {
    _id: '1',
    title: 'Full-stack Developer',
    date: '2023-10-01',
    location: 'New York',
    applicants: 5,
    visible: true,
  },
  {
    _id: '2',
    title: 'Data Scientist',
    date: '2023-10-02',
    location: 'San Francisco',
    applicants: 3,
    visible: true,
  },
  {
    _id: '3',
    title: 'UI/UX Designer',
    date: '2023-10-03',
    location: 'Los Angeles',
    applicants: 4,
    visible: false,
  },
  {
    _id: '4',
    title: 'Product Manager',
    date: '2023-10-04',
    location: 'Austin',
    applicants: 2,
    visible: true,
  },
  {
    _id: '5',
    title: 'Marketing Specialist',
    date: '2023-10-05',
    location: 'Seattle',
    applicants: 6,
    visible: false,
  },
  {
    _id: '6',
    title: 'Sales Executive',
    date: '2023-10-06',
    location: 'Chicago',
    applicants: 1,
    visible: true,
  },
  {
    _id: '7',
    title: 'HR Manager',
    date: '2023-10-07',
    location: 'Boston',
    applicants: 0,
    visible: true,
  }
];


export const JobData = [
    {
        _id: '1',
        status: 'Pending ',
        title: 'Full-stack Developer',
        location: 'New York',
        level: 'Mid-level',
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Develop and maintain web applications using modern frameworks.</li>
                <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                <li>Write clean, maintainable, and efficient code.</li>
                <li>Troubleshoot and debug applications to optimize performance.</li>
                <li>Stay updated with the latest industry trends and technologies.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Proficiency in JavaScript, HTML, CSS, and modern web frameworks (e.g., React, Angular, Vue).</li>
                <li>Experience with backend technologies such as Node.js, Python, or Ruby on Rails.</li>
                <li>Familiarity with database systems (SQL and NoSQL).</li>
                <li>Strong problem-solving skills and attention to detail.</li>
                <li>Excellent communication and teamwork abilities.</li>
            </ol>
        `,
        salary: 82000,
        date: 2456781232,
        category: "Programming",
    },
    {
        _id: '2',
        status: 'Pending ',
        title: 'Data Scientist',
        location: 'San Francisco',
        level: 'Intermediate-level',
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Analyze large datasets to drive actionable insights.</li>
                <li>Build predictive models using machine learning techniques.</li>
                <li>Collaborate with product teams to enhance data-driven decisions.</li>
                <li>Optimize algorithms for scalability and efficiency.</li>
                <li>Publish and present findings to stakeholders.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Strong knowledge of Python, R, and SQL.</li>
                <li>Hands-on experience with ML libraries (TensorFlow, Scikit-learn).</li>
                <li>Knowledge of cloud platforms (AWS, GCP, Azure).</li>
                <li>Excellent problem-solving and statistical skills.</li>
                <li>Ability to visualize and present data effectively.</li>
            </ol>
        `,
        salary: 95000,
        date: 2456782232,
        category: "Data Science",
    },
    {
        _id: '3',
        status: 'Pending ',
        title: 'UI/UX Designer',
        location: 'Los Angeles',
        level: 'Entry-level',
        companyId: {
            "_id": "870e4d25ca9fda8f1bf359b9",
            "name": "Adobe",
            "email": "adobe@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Designing user-friendly and visually appealing interfaces for digital products.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Create wireframes, prototypes, and high-fidelity mockups.</li>
                <li>Collaborate with developers to implement UI designs.</li>
                <li>Conduct user research and usability testing.</li>
                <li>Ensure accessibility and responsiveness across devices.</li>
                <li>Maintain design consistency and branding guidelines.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Proficiency in Figma, Adobe XD, and Sketch.</li>
                <li>Understanding of UX research methodologies.</li>
                <li>Basic knowledge of HTML, CSS.</li>
                <li>Strong communication and collaboration skills.</li>
                <li>Attention to detail and creativity.</li>
            </ol>
        `,
        salary: 70000,
        date: 2456783232,
        category: "Design",
    },
    {
        _id: '4',
        status: 'Rejected ',
        title: 'DevOps Engineer',
        location: 'Seattle',
        level: 'Senior-level',
        companyId: {
            "_id": "970e4d25ca9fda8f1bf359b9",
            "name": "Amazon",
            "email": "amazon@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Ensure smooth deployment pipelines and efficient system operations.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Automate CI/CD pipelines.</li>
                <li>Maintain cloud infrastructure on AWS.</li>
                <li>Monitor system performance and resolve outages.</li>
                <li>Collaborate with security teams for compliance.</li>
                <li>Optimize system scalability and availability.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Strong knowledge of Docker, Kubernetes.</li>
                <li>Experience with Jenkins, GitHub Actions.</li>
                <li>Cloud expertise (AWS, GCP).</li>
                <li>Scripting (Python, Bash).</li>
                <li>Problem-solving and system design skills.</li>
            </ol>
        `,
        salary: 120000,
        date: 2456784232,
        category: "DevOps",
    },
    {
        _id: '5',
        status: 'Accepted ',
        title: 'Mobile App Developer',
        location: 'Austin',
        level: 'Mid-level',
        companyId: {
            "_id": "1070e4d25ca9fda8f1bf359b9",
            "name": "Spotify",
            "email": "spotify@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Building innovative mobile applications for iOS and Android platforms.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Develop mobile apps using React Native or Flutter.</li>
                <li>Collaborate with designers and backend developers.</li>
                <li>Ensure app performance and responsiveness.</li>
                <li>Integrate APIs and third-party libraries.</li>
                <li>Publish apps to App Store and Google Play.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Experience with React Native/Flutter.</li>
                <li>Strong knowledge of mobile UI/UX patterns.</li>
                <li>Understanding of REST APIs.</li>
                <li>Version control (Git).</li>
                <li>Debugging and performance optimization.</li>
            </ol>
        `,
        salary: 90000,
        date: 2456785232,
        category: "Mobile Development",
    },
    {
        _id: '6',
        status: 'Rejected ',
        title: 'Cybersecurity Analyst',
        location: 'Boston',
        level: 'Intermediate-level',
        companyId: {
            "_id": "2070e4d25ca9fda8f1bf359b9",
            "name": "Microsoft",
            "email": "microsoft@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Protect organizational data and networks against cyber threats.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Monitor networks for suspicious activities.</li>
                <li>Implement security measures and firewalls.</li>
                <li>Respond to and investigate security incidents.</li>
                <li>Conduct vulnerability assessments.</li>
                <li>Develop security awareness training.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Knowledge of SIEM tools.</li>
                <li>Understanding of encryption and security protocols.</li>
                <li>Incident response and forensic skills.</li>
                <li>Familiarity with compliance standards.</li>
                <li>Strong analytical mindset.</li>
            </ol>
        `,
        salary: 110000,
        date: 2456786232,
        category: "Cybersecurity",
    },
    {
        _id: '7',
        status: 'Rejected ',
        title: 'Cloud Architect',
        location: 'Chicago',
        level: 'Senior-level',
        companyId: {
            "_id": "3070e4d25ca9fda8f1bf359b9",
            "name": "IBM",
            "email": "ibm@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Design and implement scalable cloud solutions for enterprises.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Architect cloud infrastructure.</li>
                <li>Work with DevOps teams to optimize cloud usage.</li>
                <li>Ensure compliance and security standards.</li>
                <li>Manage migration projects.</li>
                <li>Provide cloud consulting to clients.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Expertise in AWS, Azure, GCP.</li>
                <li>Knowledge of cloud networking and security.</li>
                <li>Containerization (Docker/Kubernetes).</li>
                <li>System architecture and scalability.</li>
                <li>Leadership and collaboration.</li>
            </ol>
        `,
        salary: 150000,
        date: 2456787232,
        category: "Cloud Computing",
    },
    {
        _id: '8',
        status: 'Rejected ',
        title: 'AI/ML Engineer',
        location: 'Bangalore',
        level: 'Mid-level',
        companyId: {
            "_id": "4070e4d25ca9fda8f1bf359b9",
            "name": "OpenAI",
            "email": "openai@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Build and deploy machine learning models into production.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Train ML/DL models on large datasets.</li>
                <li>Deploy AI solutions to cloud environments.</li>
                <li>Optimize ML pipelines for scalability.</li>
                <li>Work with researchers on new algorithms.</li>
                <li>Document and present results.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Strong in Python, TensorFlow, PyTorch.</li>
                <li>Knowledge of MLOps tools.</li>
                <li>Experience with NLP/CV projects.</li>
                <li>Understanding of model deployment.</li>
                <li>Problem-solving ability.</li>
            </ol>
        `,
        salary: 125000,
        date: 2456788232,
        category: "Artificial Intelligence",
    },
    {
        _id: '9',
        status: 'Accepted ',
        title: 'Backend Developer',
        location: 'Toronto',
        level: 'Entry-level',
        companyId: {
            "_id": "5070e4d25ca9fda8f1bf359b9",
            "name": "Shopify",
            "email": "shopify@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Develop server-side applications and RESTful APIs.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Build scalable backend services.</li>
                <li>Integrate APIs and third-party systems.</li>
                <li>Work with databases (SQL/NoSQL).</li>
                <li>Collaborate with frontend engineers.</li>
                <li>Debug and optimize backend code.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Strong knowledge of Node.js/Python.</li>
                <li>Familiarity with databases.</li>
                <li>Understanding of REST and GraphQL APIs.</li>
                <li>Version control (Git).</li>
                <li>Problem-solving mindset.</li>
            </ol>
        `,
        salary: 85000,
        date: 2456789232,
        category: "Backend Development",
    },
    {
        _id: '10',
        title: 'Frontend Developer',
        location: 'Berlin',
        level: 'Mid-level',
        companyId: {
            "_id": "6070e4d25ca9fda8f1bf359b9",
            "name": "Meta",
            "email": "meta@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Create engaging, responsive, and interactive web interfaces.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Develop SPAs with React/Next.js.</li>
                <li>Ensure cross-browser compatibility.</li>
                <li>Collaborate with designers and backend teams.</li>
                <li>Optimize UI performance.</li>
                <li>Write clean and reusable components.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Expertise in React.js, JavaScript, TypeScript.</li>
                <li>CSS frameworks (Tailwind, Bootstrap).</li>
                <li>Understanding of REST/GraphQL APIs.</li>
                <li>Testing tools (Jest, Cypress).</li>
                <li>Good problem-solving and teamwork.</li>
            </ol>
        `,
        salary: 95000,
        date: 2456790232,
        category: "Frontend Development",
    },
    {
        _id: '11',
        title: 'Product Manager',
        location: 'London',
        level: 'Senior-level',
        companyId: {
            "_id": "7070e4d25ca9fda8f1bf359b9",
            "name": "Tesla",
            "email": "tesla@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Lead product strategy and development lifecycle.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Define product roadmap and vision.</li>
                <li>Collaborate with engineers and designers.</li>
                <li>Conduct market and competitor analysis.</li>
                <li>Monitor KPIs and product performance.</li>
                <li>Communicate strategy with stakeholders.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Strong leadership and communication.</li>
                <li>Knowledge of Agile/Scrum.</li>
                <li>Experience with product lifecycle management.</li>
                <li>Analytical thinking and problem-solving.</li>
                <li>Business and technical knowledge.</li>
            </ol>
        `,
        salary: 130000,
        date: 2456791232,
        category: "Product Management",
    },
    {
        _id: '12',
        title: 'QA Engineer',
        location: 'Sydney',
        level: 'Intermediate-level',
        companyId: {
            "_id": "8070e4d25ca9fda8f1bf359b9",
            "name": "Atlassian",
            "email": "atlassian@demo.com",
            "image": company_icon,
        },
        description: `
            <p>Ensure quality and reliability of software products.</p>
            <h2><strong>Key Responsibilities</strong></h2>
            <ol>
                <li>Write and execute test cases.</li>
                <li>Automate regression and functional tests.</li>
                <li>Identify and track bugs.</li>
                <li>Work with developers to fix issues.</li>
                <li>Ensure product meets acceptance criteria.</li>
            </ol>
            <h2><strong>Skills Required</strong></h2>
            <ol>
                <li>Experience with Selenium, Cypress.</li>
                <li>Knowledge of test automation frameworks.</li>
                <li>Understanding of CI/CD pipelines.</li>
                <li>Strong debugging skills.</li>
                <li>Attention to detail.</li>
            </ol>
        `,
        salary: 78000,
        date: 2456792232,
        category: "Quality Assurance",
    },
   
  {
    _id: '1',
    title: 'Full-stack Developer',
    location: 'New York',
    level: 'Mid-level',
    companyId: {
      "_id": "670e4d25ca9fda8f1bf359b9",
      "name": "Slack",
      "email": "slack@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Build scalable applications and contribute to product design.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Develop and maintain web applications using React and Node.js.</li>
        <li>Collaborate with designers and backend engineers.</li>
        <li>Ensure responsive and accessible UI design.</li>
        <li>Optimize application performance.</li>
        <li>Stay updated with industry trends.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>JavaScript, React, Node.js</li>
        <li>SQL & NoSQL Databases</li>
        <li>Version control (Git)</li>
        <li>Agile methodologies</li>
        <li>Problem-solving & communication</li>
      </ol>
    `,
    salary: 82000,
    date: 2456781232,
    category: "Programming",
  },
  {
    _id: '2',
    title: 'Data Scientist',
    location: 'San Francisco',
    level: 'Intermediate',
    companyId: {
      "_id": "770e4d25ca9fda8f1bf359b9",
      "name": "Google",
      "email": "google@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Analyze large datasets and create predictive ML models.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Build ML models for structured and unstructured data.</li>
        <li>Perform data cleaning and preprocessing.</li>
        <li>Work with large-scale distributed systems.</li>
        <li>Present insights to stakeholders.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Python, R, SQL</li>
        <li>TensorFlow / PyTorch</li>
        <li>Strong math & statistics knowledge</li>
        <li>Big Data tools (Hadoop, Spark)</li>
      </ol>
    `,
    salary: 95000,
    date: 2456782232,
    category: "Data Science",
  },
  {
    _id: '3',
    title: 'UI/UX Designer',
    location: 'Remote',
    level: 'Junior',
    companyId: {
      "_id": "870e4d25ca9fda8f1bf359b9",
      "name": "Figma",
      "email": "figma@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Create user-friendly designs and collaborate with developers.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Design wireframes and prototypes.</li>
        <li>Conduct user research and testing.</li>
        <li>Ensure consistent design language.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Figma, Adobe XD, Sketch</li>
        <li>Good eye for aesthetics</li>
        <li>Team collaboration</li>
      </ol>
    `,
    salary: 65000,
    date: 2456783332,
    category: "Design",
  },
  {
    _id: '4',
    title: 'DevOps Engineer',
    location: 'Austin',
    level: 'Senior',
    companyId: {
      "_id": "970e4d25ca9fda8f1bf359b9",
      "name": "Amazon",
      "email": "amazon@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Automate CI/CD pipelines and manage cloud infrastructure.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Manage Kubernetes clusters.</li>
        <li>Implement CI/CD with Jenkins and GitHub Actions.</li>
        <li>Monitor systems with Prometheus & Grafana.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>AWS / Azure / GCP</li>
        <li>Docker, Kubernetes</li>
        <li>Linux system administration</li>
      </ol>
    `,
    salary: 115000,
    date: 2456784232,
    category: "DevOps",
  },
  {
    _id: '5',
    title: 'Cybersecurity Analyst',
    location: 'London',
    level: 'Mid-level',
    companyId: {
      "_id": "1070e4d25ca9fda8f1bf359b9",
      "name": "Microsoft",
      "email": "microsoft@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Monitor and protect company systems from cyber threats.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Conduct penetration testing.</li>
        <li>Investigate and respond to security incidents.</li>
        <li>Ensure compliance with cybersecurity policies.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Knowledge of SIEM tools</li>
        <li>Network Security</li>
        <li>Incident response</li>
      </ol>
    `,
    salary: 88000,
    date: 2456785232,
    category: "Cybersecurity",
  },
  {
    _id: '6',
    title: 'Mobile App Developer',
    location: 'Berlin',
    level: 'Intermediate',
    companyId: {
      "_id": "1170e4d25ca9fda8f1bf359b9",
      "name": "Spotify",
      "email": "spotify@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Design and build mobile applications for Android and iOS.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Develop apps using Flutter and React Native.</li>
        <li>Collaborate with backend teams for APIs.</li>
        <li>Ensure app security and performance.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Dart, Java, Swift</li>
        <li>UI/UX design knowledge</li>
        <li>Play Store / App Store publishing</li>
      </ol>
    `,
    salary: 78000,
    date: 2456786232,
    category: "Mobile Development",
  },
  {
    _id: '7',
    title: 'AI Engineer',
    location: 'Toronto',
    level: 'Senior',
    companyId: {
      "_id": "1270e4d25ca9fda8f1bf359b9",
      "name": "OpenAI",
      "email": "openai@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Work on cutting-edge AI and NLP solutions.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Train and fine-tune AI models.</li>
        <li>Develop conversational AI applications.</li>
        <li>Deploy AI pipelines at scale.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Python, TensorFlow, PyTorch</li>
        <li>Transformers, NLP</li>
        <li>Cloud computing (AWS/GCP)</li>
      </ol>
    `,
    salary: 140000,
    date: 2456787232,
    category: "AI/ML",
  },
  {
    _id: '8',
    title: 'Product Manager',
    location: 'Chicago',
    level: 'Senior',
    companyId: {
      "_id": "1370e4d25ca9fda8f1bf359b9",
      "name": "Meta",
      "email": "meta@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Lead cross-functional teams and define product strategy.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Define product roadmap.</li>
        <li>Collaborate with engineering and design teams.</li>
        <li>Track KPIs and product success metrics.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Agile/Scrum</li>
        <li>Market research</li>
        <li>Strong communication</li>
      </ol>
    `,
    salary: 120000,
    date: 2456788232,
    category: "Product Management",
  },
  {
    _id: '9',
    title: 'Blockchain Developer',
    location: 'Singapore',
    level: 'Mid-level',
    companyId: {
      "_id": "1470e4d25ca9fda8f1bf359b9",
      "name": "Coinbase",
      "email": "coinbase@demo.com",
      "image": company_icon,
    },
    description: `
      <p>Develop decentralized applications and smart contracts.</p>
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Write Ethereum smart contracts.</li>
        <li>Work with Web3 libraries.</li>
        <li>Maintain secure crypto systems.</li>
      </ol>
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Solidity, Rust</li>
        <li>Blockchain architecture</li>
        <li>Security best practices</li>
      </ol>
    `,
    salary: 110000,
    date: 2456789232,
    category: "Blockchain",
  },
]





