import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/Dacoband",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/nhan-huynh-b8ab67255/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/u/Dacoband/",
        simpleIconName: "leetcode",
        backgroundColor: "#FFA116",
    },
    {
        name: "Gmail",
        link: "mailto:bolicous123@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/volkasses/",
        simpleIconName: "instagram",
        backgroundColor: "#FF0069",
    }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: ".NET",
        link: "https://dotnet.microsoft.com/",
        simpleIconName: "dotnet",
        backgroundColor: "#512BD4",
    },
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "nodedotjs",
        backgroundColor: "#5FA04E",
    },
    {
        name: "React",
        link: "https://react.dev/",
        simpleIconName: "react",
        backgroundColor: "#61DAFB",
    },
    {
        name: "LLVM",
        link: "https://llvm.org/",
        simpleIconName: "llvm",
        backgroundColor: "#262D3A",
    },
    {
        name: "NGINX",
        link: "https://nginx.org/en/",
        simpleIconName: "nginx",
        backgroundColor: "#009639",
    },
    {
        name: "Unity",
        link: "https://brand.unity.com/",
        simpleIconName: "unity",
        backgroundColor: "#262D3A",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Building responsive website front-end using Angular, React-Vite",
        "Developing custom and interactive 3D websites",
        "Creating application backend in Node, NestJS & .NET",
        "Managing data safely with SQL Server, PostgreSQL, MongoDB and OracleDB",
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "GCP",
        link: "https://cloud.google.com/",
        simpleIconName: "googlecloud",
        backgroundColor: "#4285F4",
    },
    {
        name: "AWS",
        link: "https://aws.amazon.com/",
        simpleIconName: "amazonwebservices",
        backgroundColor: "#232F3E",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "postgresql",
        backgroundColor: "#336791",
    },
    {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        simpleIconName: "mongodb",
        backgroundColor: "#47A248",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "MySQL",
        link: "https://www.mysql.com/",
        simpleIconName: "mysql",
        backgroundColor: "#4479A1",
    },
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "Cloud Infra-Architecture",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "Experience working on multiple cloud platforms including GCP, AWS, and FireBase",
        "Hosting and maintaining websites on FireBase hosting",
        "Hosting and maintaining server on VPS Cloud",
        "Setting up email triggers and Googlesheet integration for streamline client inquiry",
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "adobeillustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Canva",
        link: "https://www.canva.com/",
        simpleIconName: "canva",
        backgroundColor: "#00C4CC",
    },
];

// Design section
const DesignSection: SkillSection = {
    sectionTitle: "UI/UX Design",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        "Designing highly attractive and responsive user interface for web applications",
        "Customizing logo designs, creating visiting cards and virtual cards from scratch",
        "Creating the flow of application functionalities to optimize user experience",
    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [

];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Digital Solutions & Consultancy",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "Streamlining business operations with tools like Jira, offering automated workflows, and data-driven insights.",
        "Centralizing business data within secure, interconnected platforms to facilitate informed decision-making",
        "Helping local businesses enable real-time communication and task coordination through MS Teams and Outlook",
    ]
}

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "My Projects",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "Mr.Salon",
            coverImagePath: AssetPaths.PROJECT_MR_SALON,
            liveLink: "https://fe-mr-salon.vercel.app/",
            githubLink: "https://github.com/Dacoband/Mr.Salon",
            description: "🧱 The Hair Salon Booking App was developed to address the challenges customers face when trying to find and book appointments at hair salons.",
            techStack: [".NET", "React-Vite", "MongoDB", "Docker"],
            year: 2024
        },
        
    ]
}

// Freelancing projects
const FreelancingProjects: ProjectSection = {
    sectionTitle: "Freelancing",
    sectionSubtitle: "🚀 Transforming Ideas into Digital Solutions: Tailored Websites, Custom CMS, and More!",
    entities: [
        {
            title: "Eventa",
            coverImagePath: "",
            liveLink: "https://www.eventaa.me/",
            description: "🚀 Website management Event professionals and event organizers, offering a platform for event management and promotion.",
            techStack: ["React Vite", ".NET 8", "Firebase", "AppWrite"],
            year: 2025
        },
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://www.linkedin.com/company/pytheralab/",
            orgLogoPath: AssetPaths.WORK_PYTHERA_LOGO,
            orgName: "Pythera AI",
            positions: [
                {
                    positionName: ".NET Developer",
                    duration: "May 2024 - Sep 2024",
                    location: "Ho Chi Minh City, VN",
                    locationType: "On-Site",
                    jobType: "Internship",
                    workPoints: [
                        "Ensured secure management of sensitive data with top-notch IT support. 🔒",
                        "Streamlined property searches by liaising with government agencies. 🏡",
                        "Prepared legal documents like Cooling Off Forms, Nominations, and Addendums. 📝",
                        "Optimized software workflows with precise data entry and customized templates in CATS and PEXA. ⚙️",
                    ]
                }
            ]
        },
    ]
}

// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing",
    experiences: [
        {
            orgLink: "https://southaustraliatiling.com.au/",
            orgLogoPath: AssetPaths.WORK_SA_TILING_LOGO,
            orgName: "South Australia Tiling",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Adelaide, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed a visually appealing website to highlight the high-quality work of a South Australian tiling and bathroom renovation business, improving their online presence.📊",
                        "Utilized Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance search engine visibility and drive organic traffic to the website. 🚀",
                    ]
                }
            ]
        },
    ]
}

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "https://www.linkedin.com/company/pytheralab/",
            orgLogoPath: AssetPaths.WORK_PYTHERA_LOGO,
            orgName: "Pythera AI",
            positions: [
                {
                    positionName: ".NET Developer Intern",
                    duration: "May 2024 - Sep 2024",
                    location: "Ho Chi Minh City, VietNam",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Ensured secure management of sensitive data with top-notch IT support. 🔒",
                        "Streamlined property searches by liaising with government agencies. 🏡",
                        "Prepared legal documents like Cooling Off Forms, Nominations, and Addendums. 📝",
                        "Optimized software workflows with precise data entry and customized templates in CATS and PEXA. ⚙️",
                    ]
                }
            ]
        },
    ]
}

// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        {
            liveLink: "",
            coverImagePath: "",
            techStack: ["C++"],
            title: "",
            description: "📅 🎯",
            year: 2024,
            githubLink: "",
        },
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        {
            liveLink: "",
            coverImagePath: "",
            techStack: ["C#" ],
            title: "",
            description: "🏆 ",
            year: 2025,
        }
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Information Technology",
    majorName: "Software Engineering",
    duration: "Sep 2021 - Sep 2025",
    universityName: "FPT University",
    campusName: "Ho Chi Minh Campus",
    logoImagePath: AssetPaths.EDUCATION_FPTU_LOGO,
    gpa: "7.14 / 10",
    websiteLink: "https://daihoc.fpt.edu.vn/",
    studyPoints: [
        "Studied foundational subjects like Data Structures, Database Management Systems, Discrete Mathematics, and Operating Systems, building a strong base in computer science. 🧠💻",
        "Explored Object-Oriented Programming, Software Engineering, Computer Networks, and Microprocessor & Interfacing, bridging software development with hardware understanding. ⚙️",
        "Gained insights into Big Data Analytics, Artificial Intelligence, Data Mining, and Data Visualization, equipping skills for modern computing challenges. 🚀📊",
    ]
}

const MastersDegree: EducationSection = {
        degreeName: "etc",
        majorName: "etc",
        duration: "etc",
        universityName: "etc",
        campusName: "etc",
        logoImagePath: AssetPaths.EDUCATION_FPTU_LOGO,
        gpa: "etc",
        websiteLink: "etc",
        studyPoints: [
            "etc"
        ]
}



export const AppConfig = {
    loaderSplashAnimation: false,        // enable or disable splash screen at the initialization of website
    logoName: "Dacoband",         // Signature font logo name in header
    name: "Huynh Nhan",             // your name
    emailId: "bolicious123@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",

    // Home page
    professionalTitle: "Development | Students | Freelancing",
    professionalSummary: "A results-driven software engineer with expertise in full-stack development of high-quality user-centric solutions in agile environments.",
    githubProfile: "https://github.com/Dacoband",              // Your github profile link
    portfolioRepository: "https://github.com/Dacoband/Angular-MyPortfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        CloudSection,
        DesignSection,
        DigitalSolutionSection,
    ],

    // Projects page
    projectsPageTitle: "Projects & Freelancing",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [                  // Define and add a custom section if needed
        FreelancingProjects,
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "My Works, Internships and Freelancing",
    experiencePageDescription: "💼 From Corporate Giants to Creative Freelance Projects: A journey through internships, corporate, and helping local businesses.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        InternshipExperience,
        FreelancingExperience,
    ],

    // Education page
    educationPageTitle: "Degrees and Qualifications",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
}
