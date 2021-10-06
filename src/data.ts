import WorkIcon from "@mui/icons-material/Work"
import SchoolIcon from "@mui/icons-material/School"
import AssessmentIcon from "@mui/icons-material/Assessment"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GithubIcon from "@mui/icons-material/Github"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"

import { NavbarMenu } from "./components/common/Navbar"
import { SvgIconComponent } from "@mui/icons-material"

export interface IconLink {
  name: string
  link: string
  icon: SvgIconComponent
}

export const navbarMenu: NavbarMenu = [
  { name: "work", link: "#work", icon: WorkIcon },
  { name: "education", link: "#education", icon: SchoolIcon },
  { name: "skills", link: "#skills", icon: AssessmentIcon },
]

export interface TitleBlock {
  name: string
  jobTitle: string
}

export const titleBlock: TitleBlock = {
  name: "Chris Van Lanen-Wanek",
  jobTitle: "Software Engineer | Web Developer",
}

export type SocialIcon = IconLink

export const socialIcons: SocialIcon[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/crvlwanek/",
    icon: LinkedInIcon,
  },
  {
    name: "Github",
    link: "https://github.com/crvlwanek",
    icon: GithubIcon,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/crvlwanek/",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/crvlwanek/",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/c/ChrisVLWanek",
    icon: YouTubeIcon,
  },
]

export interface Job {
  title: string
  employer: string
  startDate: string
  endDate: string | "current"
  location: string
  logo: string
  responsibilities: string[]
}

export const jobs: Job[] = [
  {
    title: "Software Developer",
    employer: "Epic",
    startDate: "July 2021",
    endDate: "Present",
    location: "Verona, Wisconsin",
    logo: "https://rm-core-production.s3.amazonaws.com/logos/3476/large_Epic.PNG",
    responsibilities: [
      "Contributes to developing a fullstack web-based application for creating and maintaining Electronic Medical Records",
      "Uses modern web technologies such as: C#, TypeScript, React",
    ],
  },
  {
    title: "Digital Music Teacher",
    employer: "Sun Prairie Area School District",
    startDate: "August 2020",
    endDate: "June 2021",
    location: "Sun Prairie, Wisconsin",
    logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQFzBgFUbk2bTA/company-logo_200_200/0/1579978292132?e=2159024400&v=beta&t=YP0cojkI9YIU_BDDRJRAKiouHJDAgKAWm9sKEGQ6I50",
    responsibilities: [
      "Worked with a team to design and develop new and innovative curriculum for distance learning",
      "Automated many daily tasks such as taking attendance and grading assignments with Python",
      "Built a fullstack web application in order to host student music portfolios",
    ],
  },
]

export interface Course {
  courseName: string
  school: string
  link: string
  completed: string
  credential?: string
}

export interface CourseCategory {
  name: string
  courses: Course[]
}

export interface Degree {
  institution: string
  degree: string
  startDate: string
  endDate: string
  location: string
  logo: string
  details: string[]
  additionalDetails?: CourseCategory[]
}

export const education: Degree[] = [
  {
    institution: "Open Source",
    degree: "Self-study - Computer Science",
    startDate: "October 2020",
    endDate: "Present",
    location: "Online",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    details: [
      "A collection of online courses with the goal of fulfilling all requirements of a traditional Computer Science degree",
      "Includes courses in: Computer Science, Programming, and Math, Web Development, Data Science",
    ],
    additionalDetails: [
      {
        name: "Computer Science",
        courses: [
          {
            courseName: "Intro to Computer Science (CS50)",
            school: "Harvard",
            link: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
            completed: "October 2020",
          },
          {
            courseName: "Mathematical Thinking in Computer Science",
            school: "UC San Diego",
            link: "https://www.coursera.org/learn/what-is-a-proof",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/390573ddd885e848273f6068548006ea",
          },
        ],
      },
      {
        name: "Programming",
        courses: [
          {
            courseName: "Programming for Everybody",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python",
            completed: "November 2020",
            credential:
              "https://coursera.org/share/0b4a0b1aff1439f345ceafc49c77a893",
          },
          {
            courseName: "Python Data Structures",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-data",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/f7516ebe8faed46e1ffd9342d72994b5",
          },
          {
            courseName: "Using Python to Access Web Data",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-network-data",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/b22835eadb957ca5777b96b57e1f9124",
          },
          {
            courseName: "Using Databases with Python",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-databases",
            completed: "December 2020",
            credential:
              " https://coursera.org/share/07ee6833f034fe425603ea2b7bd8a416",
          },
          {
            courseName:
              "Capstone: Retrieving, Processing, and Visualizing Data with Python",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-data-visualization",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/03d376ec4da4fbe0026837fa263b1362",
          },
        ],
      },
      {
        name: "Web Development",
        courses: [
          {
            courseName: "Web Application Technologies and Django",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/django-database-web-apps",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/33c934816bd57bf571310f430407da61",
          },
          {
            courseName: "Building Web Applications in Django",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/django-build-web-apps",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/7878dcc65df48bdf1b64d57d400fe5d4",
          },
          {
            courseName: "Django Features and Libraries",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/django-features-libraries",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/415037c5e38b7dfa755da0844f566ba6",
          },
          {
            courseName: "Using JavaScript, JQuery, and JSON in Django",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/django-javascript-jquery-json",
            completed: "December 2020",
            credential:
              "https://coursera.org/share/ec171ae44b22a32ef922b7faef40ad90",
          },
          {
            courseName: "The Complete 2021 Web Development Bootcamp",
            school: "Udemy",
            link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
            completed: "January 2020",
            credential:
              "https://www.udemy.com/certificate/UC-85479198-e06a-4bb3-9052-d88becf54ed1/",
          },
        ],
      },
      {
        name: "Data Science",
        courses: [
          {
            courseName: "Introduction to Data Science in Python",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-data-analysis",
            completed: "January 2020",
            credential:
              "https://coursera.org/share/37435c8e5ae2b9d7ef1a3c77f7efb746",
          },
          {
            courseName:
              "Applied Plotting, Charting & Data Representation in Python",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-plotting",
            completed: "January 2020",
            credential:
              "https://coursera.org/share/294ce6da4aee7e906e62e686289641f4",
          },
          {
            courseName: "Applied Machine Learning in Python",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-machine-learning",
            completed: "January 2020",
            credential:
              "https://coursera.org/share/94c401d264d8d1520a077dcbb604ca4a",
          },
          {
            courseName: "Applied Text Mining in Python",
            school: "University of Michigan",
            link: "ttps://www.coursera.org/learn/python-text-mining",
            completed: "January 2020",
            credential:
              "https://coursera.org/share/5353cc103bd98909a1f27b34d2696fc4",
          },
          {
            courseName: "Applied Social Network Analysis in Python",
            school: "University of Michigan",
            link: "https://www.coursera.org/learn/python-social-network-analysis",
            completed: "January 2020",
            credential:
              "https://coursera.org/share/e3ba84c1bed44f61996bdb9dc2195f1e",
          },
        ],
      },
    ],
  },
  {
    institution: "University of Wisconsin-Milwaukee",
    degree: "Bachelor of Fine Arts - Music Education",
    startDate: "September 2015",
    endDate: "May 2020",
    location: "Milwaukee, Wisconsin",
    logo: "https://uwm.edu/wp-content/uploads/2016/12/uwm-seo-logo.jpg",
    details: [
      "Recieved a degree in Music Education with a focus on Instrumental/General Music and Violin",
      "Graduated with a 3.51 GPA",
    ],
  },
]

export interface Skill {
  name: string
  items: string[]
}

export const skills: Skill[] = [
  {
    name: "Programming Languages",
    items: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL", "JSON"],
  },
  {
    name: "Frontend Tech",
    items: [
      "React",
      "Redux",
      "Bootstrap",
      "Material-UI",
      "Next.js",
      "Chakra UI",
      "Gatsby",
      "Webpack",
      "Babel",
    ],
  },
  {
    name: "Backend Tech",
    items: [
      "Django",
      "Node",
      "Express",
      "REST",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "APIs",
      "ORMs",
    ],
  },
]

export const githubRepo = "https://github.com/crvlwanek/resume"
