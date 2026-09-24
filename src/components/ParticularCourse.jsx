import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useEffect, useMemo, useState } from "react";
import {
    CheckCircle, BookOpen, Star, TrendingUp, Briefcase, IndianRupee, Users, Globe,
    Building2,
    Rocket,
    Brain,
    Github, BadgeCheck,
    GraduationCap,
    Layers,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs.jsx";

const ICONS = {
    check: CheckCircle,
    star: Star,
    briefcase: Briefcase,
    globe: Globe,
    rupee: IndianRupee,
    trend: TrendingUp,
    users: Users,
    building: Building2,
    rocket: Rocket,
    brain: Brain,
    github: Github,
    graduation: GraduationCap,
    layers: Layers,
    badge: BadgeCheck,
    book: BookOpen,
};


const courseDetails = {
    "CCC (Course on Computer Concepts)": {
        overview: {
            title: "Course Overview",
            description:
                "The Course on Computer Concepts (CCC) is a foundational computer literacy program designed to equip learners with essential IT skills for personal, academic, and professional use.",
            objectives: [
                {
                    icon: "check",
                    text: "Introduce the basic concepts of computers and information technology.",
                },
                {
                    icon: "check",
                    text: "Develop practical skills in using common computer applications.",
                },
                {
                    icon: "check",
                    text: "Promote digital literacy and awareness of e-Governance services.",
                },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Introduction to Computer",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Identify computers and IT gadgets, explain their evolution and applications, understand hardware and software components including input/output devices, memory, storage, and system software.",
            },
            {
                sno: 2,
                chapter: "Introduction to Operating System",
                duration: 7,
                theory: 3,
                lab: 4,
                outcome:
                    "Understand basics of operating systems for desktop and mobile devices, manage files and folders, modify display and system settings, and use printers and file extensions.",
            },
            {
                sno: 3,
                chapter: "Word Processing",
                duration: 12,
                theory: 4,
                lab: 8,
                outcome:
                    "Create, edit, and format documents, apply styles and layouts, insert tables, headers, and footers, export documents as PDFs, and use mail merge effectively.",
            },
            {
                sno: 4,
                chapter: "Presentation",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Create and design presentations using templates and themes, insert multimedia and tables, apply transitions and animations, and conduct professional slide shows.",
            },
            {
                sno: 5,
                chapter: "Introduction to Internet and WWW",
                duration: 12,
                theory: 3,
                lab: 9,
                outcome:
                    "Understand network concepts (LAN, WAN, topology), connect to the Internet, browse safely, use search engines, and download or print web content.",
            },
            {
                sno: 6,
                chapter: "E-mail, Social Networking and e-Governance Services",
                duration: 9,
                theory: 3,
                lab: 6,
                outcome:
                    "Create and manage email accounts, send attachments, use social media platforms responsibly, access e-Governance and e-Commerce services, and use UMANG and Digital Locker applications.",
            },
            {
                sno: 7,
                chapter: "Digital Financial Tools and Applications",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Understand and use digital financial tools such as UPI, AEPS, USSD, cards, POS, and e-wallets; perform NEFT, RTGS, IMPS transactions, and pay bills securely online.",
            },
            {
                sno: 8,
                chapter: "Overview of Cyber Security",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Learn basic cybersecurity concepts and secure computers, mobile devices, emails, browsers, and social media accounts from common threats.",
            },
            {
                sno: 9,
                chapter: "Future Skills and Artificial Intelligence",
                duration: 9,
                theory: 3,
                lab: 6,
                outcome:
                    "Gain awareness of emerging technologies such as IoT, Big Data, Cloud Computing, Virtual Reality, Blockchain, 3D Printing, and Artificial Intelligence with practical insights into their applications.",
            },
        ],

        benefits: [
            { icon: "star", text: "Build strong computer fundamentals" },
            { icon: "star", text: "Hands-on practice with office tools" },
            { icon: "star", text: "Digital payment & internet safety awareness" },
            { icon: "star", text: "Recognized government certification" },
            { icon: "star", text: "Useful for students, job seekers & professionals" },
        ],

        jobMarket: {
            description: "The demand for full stack developers is rapidly growing across industries. Companies are seeking professionals who can handle both frontend and backend development, making you highly employable in today’s competitive market.",
            points: [
                { icon: "briefcase", text: "Entry-level IT & office roles" },
                { icon: "globe", text: "Applicable across government & private sectors" },
                { icon: "rupee", text: "Improves employability & salary potential" },
                { icon: "trend", text: "Essential skill for digital India initiatives" },
                { icon: "users", text: "Useful for students, clerks, operators" },
            ]
        },

        opportunities: {
            description: "After completing this comprehensive course, you’ll gain access to diverse career paths and exciting opportunities in the tech industry, enabling you to shape a successful and future-ready career.",
            points: [

                { icon: "building", text: "Office Assistant / Computer Operator" },
                { icon: "rocket", text: "Foundation for advanced IT courses" },
                { icon: "brain", text: "Better digital decision-making" },
                { icon: "graduation", text: "Higher studies & certifications" },
            ]
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "No minimum qualification is required for appearing in the Course on Computer Concepts (CCC) examination.",
            },
        ],
    },

    "Java Programming": {
        overview: {
            title: "Course Overview",
            description:
                "The Java Programming course is designed to provide a strong foundation in object-oriented programming concepts and Java language fundamentals, enabling learners to build robust, scalable, and platform-independent applications.",
            objectives: [
                {
                    icon: "check",
                    text: "Understand core programming concepts using Java.",
                },
                {
                    icon: "check",
                    text: "Learn object-oriented principles such as inheritance, polymorphism, and encapsulation.",
                },
                {
                    icon: "check",
                    text: "Develop the ability to build real-world Java applications.",
                },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Introduction to Java & Programming Basics",
                duration: 6,
                theory: 3,
                lab: 3,
                outcome:
                    "Understand programming fundamentals, Java features, JVM, JDK, JRE, writing first Java program, data types, variables, and basic input/output.",
            },
            {
                sno: 2,
                chapter: "Control Statements",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Use conditional statements and loops including if-else, switch, for, while, and do-while to control program flow.",
            },
            {
                sno: 3,
                chapter: "Object-Oriented Programming Concepts",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Apply OOP concepts such as classes, objects, constructors, inheritance, polymorphism, abstraction, and encapsulation.",
            },
            {
                sno: 4,
                chapter: "Arrays and Strings",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Work with arrays and strings, perform operations, and use built-in String methods effectively.",
            },
            {
                sno: 5,
                chapter: "Exception Handling",
                duration: 6,
                theory: 3,
                lab: 3,
                outcome:
                    "Handle runtime errors using try-catch blocks, custom exceptions, and understand exception hierarchy.",
            },
            {
                sno: 6,
                chapter: "Multithreading",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Understand multithreading concepts, thread lifecycle, synchronization, and inter-thread communication.",
            },
            {
                sno: 7,
                chapter: "Java Collections Framework",
                duration: 9,
                theory: 3,
                lab: 6,
                outcome:
                    "Use collections such as List, Set, Map, and Iterator to store and manipulate groups of objects efficiently.",
            },
            {
                sno: 8,
                chapter: "File Handling & I/O Streams",
                duration: 7,
                theory: 3,
                lab: 4,
                outcome:
                    "Read from and write to files using byte and character streams, serialization, and file handling techniques.",
            },
            {
                sno: 9,
                chapter: "Introduction to JDBC",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Connect Java applications to databases using JDBC, execute queries, and perform CRUD operations.",
            },
        ],

        benefits: [
            { icon: "star", text: "Strong foundation in object-oriented programming" },
            { icon: "star", text: "Widely used language in industry and enterprise applications" },
            { icon: "star", text: "Platform-independent and scalable" },
            { icon: "star", text: "Excellent base for backend and Android development" },
            { icon: "star", text: "High demand in software development roles" },
        ],

        jobMarket: {
            description:
                "Java remains one of the most in-demand programming languages in the software industry. It is extensively used in enterprise systems, web applications, mobile apps, and backend development, offering strong career stability and growth.",
            points: [
                { icon: "briefcase", text: "Java Developer / Software Engineer roles" },
                { icon: "globe", text: "Used globally in enterprise and web applications" },
                { icon: "rupee", text: "High salary potential with experience" },
                { icon: "trend", text: "Consistent demand across industries" },
                { icon: "users", text: "Preferred skill for backend development teams" },
            ],
        },

        opportunities: {
            description:
                "After completing the Java Programming course, learners can explore a wide range of career opportunities in software development, enterprise applications, and advanced technologies.",
            points: [
                { icon: "building", text: "Software Developer / Java Engineer" },
                { icon: "rocket", text: "Backend & Full Stack Development" },
                { icon: "brain", text: "Problem-solving & logical thinking improvement" },
                { icon: "graduation", text: "Foundation for Spring, Android & Advanced Java" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Basic knowledge of computers is recommended. No prior programming experience is required.",
            },
        ],
    },

    "Python Programming": {
        overview: {
            title: "Course Overview",
            description:
                "The Python Programming course introduces learners to one of the most versatile and beginner-friendly programming languages, widely used in web development, data science, automation, artificial intelligence, and software development.",
            objectives: [
                {
                    icon: "check",
                    text: "Learn programming fundamentals using Python.",
                },
                {
                    icon: "check",
                    text: "Develop problem-solving skills with Python syntax and logic.",
                },
                {
                    icon: "check",
                    text: "Build real-world applications and scripts using Python.",
                },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Introduction to Python & Setup",
                duration: 5,
                theory: 2,
                lab: 3,
                outcome:
                    "Understand Python features, installation, IDE usage, syntax, variables, and basic input/output operations.",
            },
            {
                sno: 2,
                chapter: "Data Types and Operators",
                duration: 7,
                theory: 3,
                lab: 4,
                outcome:
                    "Work with numeric, string, list, tuple, set, and dictionary data types along with arithmetic, relational, and logical operators.",
            },
            {
                sno: 3,
                chapter: "Control Flow Statements",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Implement decision-making and looping using if-else, for loops, while loops, and control statements.",
            },
            {
                sno: 4,
                chapter: "Functions and Modules",
                duration: 7,
                theory: 3,
                lab: 4,
                outcome:
                    "Create reusable functions, understand arguments and return values, and use built-in and custom modules.",
            },
            {
                sno: 5,
                chapter: "Object-Oriented Programming in Python",
                duration: 9,
                theory: 4,
                lab: 5,
                outcome:
                    "Apply OOP concepts such as classes, objects, inheritance, polymorphism, and encapsulation in Python.",
            },
            {
                sno: 6,
                chapter: "File Handling & Exception Handling",
                duration: 7,
                theory: 3,
                lab: 4,
                outcome:
                    "Read and write files, handle runtime errors using try-except blocks, and manage exceptions effectively.",
            },
            {
                sno: 7,
                chapter: "Python Libraries & Packages",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Work with popular libraries such as NumPy, Pandas, and Matplotlib for basic data handling and visualization.",
            },
            {
                sno: 8,
                chapter: "Introduction to Automation & Scripting",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Automate simple tasks using Python scripts and understand real-world automation use cases.",
            },
            {
                sno: 9,
                chapter: "Basics of Web & Data Applications",
                duration: 5,
                theory: 2,
                lab: 3,
                outcome:
                    "Get an introduction to Python applications in web development, data analysis, and artificial intelligence.",
            },
        ],

        benefits: [
            { icon: "star", text: "Beginner-friendly and easy-to-learn language" },
            { icon: "star", text: "Widely used in data science, AI, and automation" },
            { icon: "star", text: "High productivity and rapid development" },
            { icon: "star", text: "Strong community and library support" },
            { icon: "star", text: "Excellent career opportunities across domains" },
        ],

        jobMarket: {
            description:
                "Python is one of the most in-demand programming languages due to its simplicity and versatility. It is widely used in emerging fields such as data science, artificial intelligence, machine learning, automation, and web development.",
            points: [
                { icon: "briefcase", text: "Python Developer / Software Engineer roles" },
                { icon: "globe", text: "Used globally across multiple industries" },
                { icon: "rupee", text: "Strong salary growth with specialization" },
                { icon: "trend", text: "High demand in AI, ML, and data science" },
                { icon: "users", text: "Preferred by startups and enterprises alike" },
            ],
        },

        opportunities: {
            description:
                "After completing the Python Programming course, learners can explore multiple career paths and advanced domains based on their interests.",
            points: [
                { icon: "building", text: "Python Developer / Automation Engineer" },
                { icon: "rocket", text: "Data Science & Machine Learning foundations" },
                { icon: "brain", text: "Improved analytical and logical thinking" },
                { icon: "graduation", text: "Advanced learning in AI, ML, and Web Development" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "No prior programming knowledge is required. Basic computer skills are sufficient to start learning Python.",
            },
        ],
    },

    "C++ Programming": {
        overview: {
            title: "Course Overview",
            description:
                "The C++ Programming course focuses on building strong programming logic and understanding low-level concepts along with object-oriented programming, making it ideal for performance-critical and system-level development.",
            objectives: [
                {
                    icon: "check",
                    text: "Develop strong programming logic using C++.",
                },
                {
                    icon: "check",
                    text: "Understand memory management and system-level concepts.",
                },
                {
                    icon: "check",
                    text: "Apply object-oriented programming concepts in C++.",
                },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Introduction to C++ & Programming Basics",
                duration: 6,
                theory: 3,
                lab: 3,
                outcome:
                    "Understand C++ features, structure of a program, data types, variables, constants, and basic input/output.",
            },
            {
                sno: 2,
                chapter: "Control Structures",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Implement decision-making and looping using if-else, switch, for, while, and do-while statements.",
            },
            {
                sno: 3,
                chapter: "Functions & Arrays",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Work with functions, arrays, and understand parameter passing and array manipulation.",
            },
            {
                sno: 4,
                chapter: "Pointers & Memory Management",
                duration: 9,
                theory: 4,
                lab: 5,
                outcome:
                    "Understand pointers, dynamic memory allocation, references, and memory management concepts.",
            },
            {
                sno: 5,
                chapter: "Object-Oriented Programming in C++",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Apply OOP concepts such as classes, objects, inheritance, polymorphism, abstraction, and encapsulation.",
            },
            {
                sno: 6,
                chapter: "Templates & Standard Template Library (STL)",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Use templates and STL containers like vector, list, map, and algorithms for efficient programming.",
            },
            {
                sno: 7,
                chapter: "File Handling",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Perform file input/output operations using streams and handle files efficiently.",
            },
            {
                sno: 8,
                chapter: "Exception Handling",
                duration: 5,
                theory: 2,
                lab: 3,
                outcome:
                    "Handle runtime errors using try-catch blocks and understand exception handling mechanisms.",
            },
            {
                sno: 9,
                chapter: "Introduction to Competitive Programming",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Develop problem-solving skills and apply C++ in competitive programming and algorithmic challenges.",
            },
        ],

        benefits: [
            { icon: "star", text: "Strong foundation in programming and logic building" },
            { icon: "star", text: "High-performance and efficient execution" },
            { icon: "star", text: "Widely used in system software and game development" },
            { icon: "star", text: "Essential for competitive programming and DSA" },
            { icon: "star", text: "Excellent base for learning advanced CS concepts" },
        ],

        jobMarket: {
            description:
                "C++ continues to be a powerful language for system-level programming, game development, embedded systems, and performance-critical applications, making it highly valuable in specialized software roles.",
            points: [
                { icon: "briefcase", text: "C++ Developer / Software Engineer roles" },
                { icon: "globe", text: "Used in global tech and gaming industries" },
                { icon: "rupee", text: "High-paying roles in specialized domains" },
                { icon: "trend", text: "Strong demand in system and embedded programming" },
                { icon: "users", text: "Preferred language for competitive programmers" },
            ],
        },

        opportunities: {
            description:
                "After completing the C++ Programming course, learners can pursue careers and advanced learning paths in system-level and performance-oriented domains.",
            points: [
                { icon: "building", text: "System Software / Game Developer" },
                { icon: "rocket", text: "Competitive Programming & DSA mastery" },
                { icon: "brain", text: "Deep understanding of memory & performance" },
                { icon: "graduation", text: "Advanced studies in Computer Science" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Basic computer knowledge is recommended. Prior exposure to programming is helpful but not mandatory.",
            },
        ],
    },

    "Basic Computer Skills": {
        overview: {
            title: "Course Overview",
            description:
                "The Basic Computer Skills course is designed for beginners to gain essential knowledge of computers, enabling them to use digital tools confidently for personal, academic, and professional purposes.",
            objectives: [
                { icon: "check", text: "Understand basic computer concepts and terminology." },
                { icon: "check", text: "Learn to operate a computer independently." },
                { icon: "check", text: "Develop confidence in using digital devices and applications." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Introduction to Computers",
                duration: 6,
                theory: 3,
                lab: 3,
                outcome:
                    "Understand what a computer is, its types, components, and basic hardware and software concepts.",
            },
            {
                sno: 2,
                chapter: "Operating System Basics",
                duration: 7,
                theory: 3,
                lab: 4,
                outcome:
                    "Learn how to use the operating system, manage files and folders, and customize system settings.",
            },
            {
                sno: 3,
                chapter: "Keyboard and Mouse Skills",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Develop typing, mouse control, shortcuts, and basic computer navigation skills.",
            },
            {
                sno: 4,
                chapter: "Introduction to MS Word",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Create, edit, format documents and use basic word processing features.",
            },
            {
                sno: 5,
                chapter: "Introduction to MS Excel",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Understand spreadsheets, perform basic calculations, and create simple charts.",
            },
            {
                sno: 6,
                chapter: "Internet & Email Basics",
                duration: 7,
                theory: 3,
                lab: 4,
                outcome:
                    "Browse the internet safely, use search engines, and send/receive emails.",
            },
            {
                sno: 7,
                chapter: "Introduction to Digital Payments",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Learn to use digital payment methods like UPI, cards, and net banking safely.",
            },
        ],

        benefits: [
            { icon: "star", text: "Perfect for beginners with no prior computer knowledge" },
            { icon: "star", text: "Builds strong digital confidence" },
            { icon: "star", text: "Useful for students, homemakers, and professionals" },
            { icon: "star", text: "Improves employability in entry-level jobs" },
            { icon: "star", text: "Essential skill for daily digital tasks" },
        ],

        jobMarket: {
            description:
                "Basic computer skills are essential for almost every job role today. Employers expect candidates to have fundamental knowledge of computers and digital tools.",
            points: [
                { icon: "briefcase", text: "Office assistant and data entry roles" },
                { icon: "globe", text: "Required across all industries" },
                { icon: "rupee", text: "Improves job eligibility and income potential" },
                { icon: "trend", text: "Mandatory skill in the digital era" },
                { icon: "users", text: "Beneficial for students and job seekers" },
            ],
        },

        opportunities: {
            description:
                "After completing this course, learners can confidently use computers and pursue further advanced computer courses.",
            points: [
                { icon: "building", text: "Office and administrative support roles" },
                { icon: "rocket", text: "Foundation for advanced computer courses" },
                { icon: "brain", text: "Improved digital literacy" },
                { icon: "graduation", text: "Eligibility for higher-level IT training" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "No educational qualification is required. Suitable for absolute beginners.",
            },
        ],
    },

    "Advanced MS Office": {
        overview: {
            title: "Course Overview",
            description:
                "The Advanced MS Office course focuses on mastering professional tools such as MS Word, Excel, PowerPoint, and Outlook to enhance productivity and workplace efficiency.",
            objectives: [
                { icon: "check", text: "Master advanced MS Word, Excel, and PowerPoint features." },
                { icon: "check", text: "Improve office productivity and data management skills." },
                { icon: "check", text: "Prepare professional reports, presentations, and dashboards." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Advanced MS Word",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Create professional documents using styles, templates, mail merge, and advanced formatting.",
            },
            {
                sno: 2,
                chapter: "Advanced MS Excel",
                duration: 14,
                theory: 5,
                lab: 9,
                outcome:
                    "Use formulas, functions, pivot tables, charts, and data analysis tools effectively.",
            },
            {
                sno: 3,
                chapter: "Advanced MS PowerPoint",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Design impactful presentations with animations, transitions, and multimedia.",
            },
            {
                sno: 4,
                chapter: "MS Outlook & Email Management",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Manage professional emails, calendars, tasks, and meetings efficiently.",
            },
            {
                sno: 5,
                chapter: "Data Security & Productivity Tools",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Protect documents, manage permissions, and use shortcuts to improve efficiency.",
            },
        ],

        benefits: [
            { icon: "star", text: "Boosts office productivity and efficiency" },
            { icon: "star", text: "Highly valued in corporate and government jobs" },
            { icon: "star", text: "Improves data handling and reporting skills" },
            { icon: "star", text: "Essential for administrative and managerial roles" },
            { icon: "star", text: "Enhances professional presentation skills" },
        ],

        jobMarket: {
            description:
                "Advanced MS Office skills are in high demand across organizations for handling data, reports, presentations, and communication efficiently.",
            points: [
                { icon: "briefcase", text: "Office executive and administrative roles" },
                { icon: "globe", text: "Required in corporate and government sectors" },
                { icon: "rupee", text: "Increases salary and promotion opportunities" },
                { icon: "trend", text: "Essential skill for modern offices" },
                { icon: "users", text: "Useful for professionals at all levels" },
            ],
        },

        opportunities: {
            description:
                "This course opens doors to various office and administrative positions and improves career growth opportunities.",
            points: [
                { icon: "building", text: "Office Executive / Data Analyst roles" },
                { icon: "rocket", text: "Career growth and promotions" },
                { icon: "brain", text: "Improved analytical and organizational skills" },
                { icon: "graduation", text: "Advanced business and IT training" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Basic knowledge of computers and MS Office is recommended.",
            },
        ],
    },

    "Typing (English)": {
        overview: {
            title: "Course Overview",
            description:
                "The English Typing course helps learners improve typing speed and accuracy using proper keyboard techniques, essential for office and data entry jobs.",
            objectives: [
                { icon: "check", text: "Learn correct finger placement and typing posture." },
                { icon: "check", text: "Increase typing speed and accuracy." },
                { icon: "check", text: "Prepare for typing tests and office work." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Keyboard Layout & Finger Placement",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Understand keyboard layout and develop proper finger positioning techniques.",
            },
            {
                sno: 2,
                chapter: "Basic Typing Practice",
                duration: 10,
                theory: 2,
                lab: 8,
                outcome:
                    "Practice typing alphabets, words, and simple sentences accurately.",
            },
            {
                sno: 3,
                chapter: "Speed Building Techniques",
                duration: 12,
                theory: 2,
                lab: 10,
                outcome:
                    "Increase typing speed through structured exercises and drills.",
            },
            {
                sno: 4,
                chapter: "Accuracy & Error Correction",
                duration: 8,
                theory: 2,
                lab: 6,
                outcome:
                    "Reduce typing errors and improve overall accuracy.",
            },
            {
                sno: 5,
                chapter: "Typing Tests & Exam Preparation",
                duration: 8,
                theory: 2,
                lab: 6,
                outcome:
                    "Prepare for competitive exams and professional typing tests.",
            },
        ],

        benefits: [
            { icon: "star", text: "Improves typing speed and accuracy" },
            { icon: "star", text: "Essential for clerical and data entry jobs" },
            { icon: "star", text: "Enhances office productivity" },
            { icon: "star", text: "Helpful for competitive examinations" },
            { icon: "star", text: "Builds confidence in computer usage" },
        ],

        jobMarket: {
            description:
                "English typing skills are mandatory for many clerical, data entry, and government job roles.",
            points: [
                { icon: "briefcase", text: "Data entry and clerical positions" },
                { icon: "globe", text: "Required across government and private sectors" },
                { icon: "rupee", text: "Improves job eligibility and pay scale" },
                { icon: "trend", text: "Key requirement in competitive exams" },
                { icon: "users", text: "Useful for students and job aspirants" },
            ],
        },

        opportunities: {
            description:
                "After completing the course, learners can confidently appear for typing tests and office-based job roles.",
            points: [
                { icon: "building", text: "Clerk / Data Entry Operator" },
                { icon: "rocket", text: "Eligibility for government exams" },
                { icon: "brain", text: "Faster and more accurate typing skills" },
                { icon: "graduation", text: "Foundation for office administration roles" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Basic knowledge of English alphabets and computer usage is sufficient.",
            },
        ],
    },

    "Spoken English": {
        overview: {
            title: "Course Overview",
            description:
                "The Spoken English course is designed to improve communication skills, focusing on speaking fluently and confidently in English for everyday, academic, and professional situations.",
            objectives: [
                { icon: "check", text: "Improve English speaking fluency and confidence." },
                { icon: "check", text: "Enhance pronunciation, vocabulary, and grammar." },
                { icon: "check", text: "Develop communication skills for professional environments." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Basics of English Grammar",
                duration: 8,
                theory: 4,
                lab: 4,
                outcome:
                    "Understand sentence structure, tenses, and basic grammar rules.",
            },
            {
                sno: 2,
                chapter: "Vocabulary Building",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Expand vocabulary for daily conversations and professional usage.",
            },
            {
                sno: 3,
                chapter: "Pronunciation & Accent Training",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Improve pronunciation, clarity, and speaking confidence.",
            },
            {
                sno: 4,
                chapter: "Daily & Professional Conversations",
                duration: 10,
                theory: 3,
                lab: 7,
                outcome:
                    "Practice real-life conversations, interviews, and presentations.",
            },
            {
                sno: 5,
                chapter: "Public Speaking & Confidence Building",
                duration: 8,
                theory: 2,
                lab: 6,
                outcome:
                    "Develop confidence while speaking in public and group discussions.",
            },
        ],

        benefits: [
            { icon: "star", text: "Improves communication and confidence" },
            { icon: "star", text: "Helpful for interviews and presentations" },
            { icon: "star", text: "Enhances personality and soft skills" },
            { icon: "star", text: "Useful for academic and professional growth" },
            { icon: "star", text: "Boosts career opportunities" },
        ],

        jobMarket: {
            description:
                "Effective English communication is a critical skill in today’s global job market and is valued across all professions.",
            points: [
                { icon: "briefcase", text: "Customer support and corporate roles" },
                { icon: "globe", text: "Essential for global communication" },
                { icon: "rupee", text: "Improves employability and salary prospects" },
                { icon: "trend", text: "Highly valued soft skill" },
                { icon: "users", text: "Useful for students and professionals alike" },
            ],
        },

        opportunities: {
            description:
                "This course empowers learners to communicate effectively and confidently in personal and professional settings.",
            points: [
                { icon: "building", text: "Corporate and customer-facing roles" },
                { icon: "rocket", text: "Career growth and confidence boost" },
                { icon: "brain", text: "Clear communication and expression" },
                { icon: "graduation", text: "Preparation for interviews and higher studies" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "No formal qualification required. Suitable for beginners and intermediate learners.",
            },
        ],
    },

    "Tally with GST": {
        overview: {
            title: "Course Overview",
            description:
                "The Tally with GST course is designed to provide practical knowledge of accounting, taxation, and GST compliance using Tally software, making learners job-ready for accounting roles.",
            objectives: [
                { icon: "check", text: "Understand accounting fundamentals and business transactions." },
                { icon: "check", text: "Learn practical Tally ERP usage." },
                { icon: "check", text: "Master GST concepts, returns, and compliance." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Basics of Accounting",
                duration: 8,
                theory: 4,
                lab: 4,
                outcome:
                    "Understand accounting principles, journal entries, and financial transactions.",
            },
            {
                sno: 2,
                chapter: "Introduction to Tally",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Create company, ledgers, groups, and vouchers in Tally.",
            },
            {
                sno: 3,
                chapter: "Inventory Management",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Manage stock, units, godowns, and inventory reports.",
            },
            {
                sno: 4,
                chapter: "GST Concepts & Registration",
                duration: 8,
                theory: 4,
                lab: 4,
                outcome:
                    "Understand GST structure, registration, and tax types.",
            },
            {
                sno: 5,
                chapter: "GST in Tally & Returns",
                duration: 12,
                theory: 4,
                lab: 8,
                outcome:
                    "Perform GST billing, generate GSTR-1, GSTR-3B, and compliance reports.",
            },
        ],

        benefits: [
            { icon: "star", text: "Industry-relevant accounting skills" },
            { icon: "star", text: "Practical GST filing experience" },
            { icon: "star", text: "High demand in SMEs and corporates" },
            { icon: "star", text: "Improves employability in finance roles" },
            { icon: "star", text: "Hands-on Tally practice" },
        ],

        jobMarket: {
            description:
                "Tally with GST professionals are highly demanded across businesses for accounting, compliance, and taxation work.",
            points: [
                { icon: "briefcase", text: "Accountant and junior accountant roles" },
                { icon: "globe", text: "Required across private firms and CA offices" },
                { icon: "rupee", text: "Stable income and career growth" },
                { icon: "trend", text: "Mandatory GST compliance skill" },
                { icon: "users", text: "Suitable for commerce students and professionals" },
            ],
        },

        opportunities: {
            description:
                "This course opens doors to accounting, taxation, and finance-related roles.",
            points: [
                { icon: "building", text: "Accounts Executive / Tally Operator" },
                { icon: "rocket", text: "Freelance GST filing services" },
                { icon: "brain", text: "Strong financial understanding" },
                { icon: "graduation", text: "Advanced accounting certifications" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Basic knowledge of commerce or accounts is helpful but not mandatory.",
            },
        ],
    },

    "GST Practitioner Course": {
        overview: {
            title: "Course Overview",
            description:
                "The GST Practitioner course provides in-depth knowledge of GST laws, procedures, returns, and compliance, preparing learners to assist businesses in GST-related work.",
            objectives: [
                { icon: "check", text: "Understand GST laws and framework." },
                { icon: "check", text: "Learn GST registration, returns, and compliance." },
                { icon: "check", text: "Prepare for GST Practitioner responsibilities." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "GST Fundamentals",
                duration: 10,
                theory: 5,
                lab: 5,
                outcome:
                    "Understand GST structure, supply concepts, and tax mechanisms.",
            },
            {
                sno: 2,
                chapter: "GST Registration & Amendments",
                duration: 8,
                theory: 4,
                lab: 4,
                outcome:
                    "Perform GST registration, amendments, and cancellations.",
            },
            {
                sno: 3,
                chapter: "GST Returns Filing",
                duration: 12,
                theory: 4,
                lab: 8,
                outcome:
                    "Prepare and file GSTR-1, GSTR-3B, GSTR-9, and related returns.",
            },
            {
                sno: 4,
                chapter: "Input Tax Credit & Assessments",
                duration: 8,
                theory: 4,
                lab: 4,
                outcome:
                    "Understand ITC rules, reconciliation, and assessments.",
            },
            {
                sno: 5,
                chapter: "GST Compliance & Practice",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Handle notices, compliance issues, and GST audits.",
            },
        ],

        benefits: [
            { icon: "star", text: "Specialized GST expertise" },
            { icon: "star", text: "High demand compliance skill" },
            { icon: "star", text: "Opportunities for independent practice" },
            { icon: "star", text: "Useful for CA firms and tax consultancies" },
            { icon: "star", text: "Strong legal and financial understanding" },
        ],

        jobMarket: {
            description:
                "GST practitioners play a critical role in ensuring tax compliance for businesses across India.",
            points: [
                { icon: "briefcase", text: "GST executive and compliance roles" },
                { icon: "globe", text: "Applicable across all registered businesses" },
                { icon: "rupee", text: "Good earning potential" },
                { icon: "trend", text: "Continuous demand due to GST regulations" },
                { icon: "users", text: "Ideal for commerce and finance professionals" },
            ],
        },

        opportunities: {
            description:
                "This course enables learners to work independently or with tax professionals.",
            points: [
                { icon: "building", text: "GST Practitioner / Consultant" },
                { icon: "rocket", text: "Freelance tax services" },
                { icon: "brain", text: "Advanced taxation knowledge" },
                { icon: "graduation", text: "Professional tax certifications" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Commerce background is preferred. Graduates and professionals benefit most.",
            },
        ],
    },

    "Digital Marketing": {
        overview: {
            title: "Course Overview",
            description:
                "The Digital Marketing course equips learners with skills to promote brands, products, and services using digital platforms and marketing tools.",
            objectives: [
                { icon: "check", text: "Understand digital marketing concepts and strategies." },
                { icon: "check", text: "Learn SEO, social media, and paid advertising." },
                { icon: "check", text: "Develop practical online marketing skills." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Introduction to Digital Marketing",
                duration: 6,
                theory: 3,
                lab: 3,
                outcome:
                    "Understand online marketing ecosystem and strategies.",
            },
            {
                sno: 2,
                chapter: "Search Engine Optimization (SEO)",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Optimize websites for search engines and improve rankings.",
            },
            {
                sno: 3,
                chapter: "Social Media Marketing",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Create and manage campaigns on social media platforms.",
            },
            {
                sno: 4,
                chapter: "Google Ads & Paid Marketing",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Run paid campaigns and analyze performance.",
            },
            {
                sno: 5,
                chapter: "Email & Content Marketing",
                duration: 8,
                theory: 3,
                lab: 5,
                outcome:
                    "Create engaging content and email campaigns.",
            },
        ],

        benefits: [
            { icon: "star", text: "High-demand digital skill" },
            { icon: "star", text: "Opportunities for freelancing" },
            { icon: "star", text: "Suitable for all industries" },
            { icon: "star", text: "Creative and analytical career path" },
            { icon: "star", text: "Work-from-anywhere opportunities" },
        ],

        jobMarket: {
            description:
                "Digital marketers are highly sought after as businesses move online.",
            points: [
                { icon: "briefcase", text: "Digital marketing executive roles" },
                { icon: "globe", text: "Global career opportunities" },
                { icon: "rupee", text: "High earning potential" },
                { icon: "trend", text: "Rapidly growing industry" },
                { icon: "users", text: "Ideal for students and entrepreneurs" },
            ],
        },

        opportunities: {
            description:
                "This course enables multiple career options in marketing and freelancing.",
            points: [
                { icon: "building", text: "Digital Marketer / SEO Executive" },
                { icon: "rocket", text: "Freelancer or entrepreneur" },
                { icon: "brain", text: "Strategic marketing skills" },
                { icon: "graduation", text: "Advanced marketing certifications" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "No specific qualification required. Basic computer knowledge is sufficient.",
            },
        ],
    },

    "Data Entry Operator": {
        overview: {
            title: "Course Overview",
            description:
                "The Data Entry Operator course focuses on accurate data handling, typing skills, and office tools required for data management roles.",
            objectives: [
                { icon: "check", text: "Improve typing speed and accuracy." },
                { icon: "check", text: "Learn data management tools." },
                { icon: "check", text: "Prepare for data entry job roles." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Typing Skills",
                duration: 12,
                theory: 2,
                lab: 10,
                outcome:
                    "Achieve speed and accuracy in typing.",
            },
            {
                sno: 2,
                chapter: "MS Word & Excel Basics",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Create documents and manage spreadsheets.",
            },
            {
                sno: 3,
                chapter: "Data Accuracy & Validation",
                duration: 6,
                theory: 3,
                lab: 3,
                outcome:
                    "Ensure error-free data entry and verification.",
            },
            {
                sno: 4,
                chapter: "Online Data Entry Tools",
                duration: 6,
                theory: 2,
                lab: 4,
                outcome:
                    "Use online forms and portals effectively.",
            },
        ],

        benefits: [
            { icon: "star", text: "Quick job-oriented course" },
            { icon: "star", text: "High demand clerical skill" },
            { icon: "star", text: "Improves accuracy and efficiency" },
            { icon: "star", text: "Suitable for freshers" },
            { icon: "star", text: "Entry-level job opportunities" },
        ],

        jobMarket: {
            description:
                "Data entry operators are required across industries for maintaining digital records.",
            points: [
                { icon: "briefcase", text: "Data entry and clerical roles" },
                { icon: "globe", text: "Required in public and private sectors" },
                { icon: "rupee", text: "Stable entry-level income" },
                { icon: "trend", text: "Consistent demand" },
                { icon: "users", text: "Ideal for beginners" },
            ],
        },

        opportunities: {
            description:
                "This course helps learners enter clerical and office-based roles.",
            points: [
                { icon: "building", text: "Data Entry Operator / Clerk" },
                { icon: "rocket", text: "Work-from-home opportunities" },
                { icon: "brain", text: "Improved data handling skills" },
                { icon: "graduation", text: "Office administration roles" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Basic reading, writing, and computer knowledge required.",
            },
        ],
    },

    "Office Accountant": {
        overview: {
            title: "Course Overview",
            description:
                "The Office Accountant course prepares learners to handle accounting, billing, payroll, and taxation tasks required in offices and businesses.",
            objectives: [
                { icon: "check", text: "Learn office accounting procedures." },
                { icon: "check", text: "Handle billing, payroll, and taxation." },
                { icon: "check", text: "Use accounting software efficiently." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "Accounting Fundamentals",
                duration: 8,
                theory: 4,
                lab: 4,
                outcome:
                    "Understand accounting principles and bookkeeping.",
            },
            {
                sno: 2,
                chapter: "Tally Accounting",
                duration: 12,
                theory: 4,
                lab: 8,
                outcome:
                    "Perform accounting operations using Tally.",
            },
            {
                sno: 3,
                chapter: "GST & Taxation",
                duration: 10,
                theory: 4,
                lab: 6,
                outcome:
                    "Handle GST billing and compliance.",
            },
            {
                sno: 4,
                chapter: "Payroll & Office Compliance",
                duration: 6,
                theory: 3,
                lab: 3,
                outcome:
                    "Manage payroll, PF, and basic compliance tasks.",
            },
        ],

        benefits: [
            { icon: "star", text: "Job-ready accounting skills" },
            { icon: "star", text: "High demand in businesses" },
            { icon: "star", text: "Stable career path" },
            { icon: "star", text: "Practical accounting exposure" },
            { icon: "star", text: "Suitable for commerce students" },
        ],

        jobMarket: {
            description:
                "Office accountants are essential for maintaining financial records and compliance in organizations.",
            points: [
                { icon: "briefcase", text: "Office accountant roles" },
                { icon: "globe", text: "Required across all industries" },
                { icon: "rupee", text: "Good earning stability" },
                { icon: "trend", text: "Consistent demand" },
                { icon: "users", text: "Suitable for commerce graduates" },
            ],
        },

        opportunities: {
            description:
                "This course enables learners to work in accounting and finance departments.",
            points: [
                { icon: "building", text: "Accounts Executive / Accountant" },
                { icon: "rocket", text: "Career growth in finance" },
                { icon: "brain", text: "Strong financial management skills" },
                { icon: "graduation", text: "Advanced accounting certifications" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "Basic commerce or accounting knowledge is preferred.",
            },
        ],
    },

    "O-Level Certification": {
        overview: {
            title: "Course Overview",
            description:
                "The O-Level Certification course is a foundational IT qualification designed by NIELIT, aimed at developing professional-level computer knowledge and skills required for government and private sector jobs.",
            objectives: [
                { icon: "check", text: "Build strong fundamentals in information technology." },
                { icon: "check", text: "Develop practical skills in programming and office tools." },
                { icon: "check", text: "Prepare for NIELIT O-Level certification examinations." },
            ],
        },

        syllabus: [
            {
                sno: 1,
                chapter: "IT Tools and Network Basics (M1-R5)",
                duration: 40,
                theory: 20,
                lab: 20,
                outcome:
                    "Understand computer fundamentals, operating systems, word processing, spreadsheets, presentations, internet usage, and networking basics.",
            },
            {
                sno: 2,
                chapter: "Web Design and Publishing (M2-R5)",
                duration: 40,
                theory: 18,
                lab: 22,
                outcome:
                    "Create static websites using HTML, CSS, and basic JavaScript, and publish websites using web hosting concepts.",
            },
            {
                sno: 3,
                chapter: "Programming and Problem Solving through Python (M3-R5)",
                duration: 40,
                theory: 18,
                lab: 22,
                outcome:
                    "Develop programming logic using Python, write programs, and solve computational problems.",
            },
            {
                sno: 4,
                chapter: "Internet of Things and its Applications (M4-R5)",
                duration: 40,
                theory: 18,
                lab: 22,
                outcome:
                    "Understand IoT concepts, sensors, devices, and real-world IoT applications.",
            },
            {
                sno: 5,
                chapter: "Practical & Project Work",
                duration: 40,
                theory: 0,
                lab: 40,
                outcome:
                    "Apply learned concepts in real-world projects and practical examinations.",
            },
        ],

        benefits: [
            { icon: "star", text: "Government-recognized IT certification" },
            { icon: "star", text: "Eligibility for many government job exams" },
            { icon: "star", text: "Strong foundation in IT and programming" },
            { icon: "star", text: "Improves employability in private sector" },
            { icon: "star", text: "Industry-relevant practical training" },
        ],

        jobMarket: {
            description:
                "O-Level certification holders are preferred for various IT-related roles in government departments, public sector units, and private organizations.",
            points: [
                { icon: "briefcase", text: "Computer Operator / IT Assistant roles" },
                { icon: "globe", text: "Recognized across government and private sectors" },
                { icon: "rupee", text: "Better salary prospects with certification" },
                { icon: "trend", text: "Mandatory or preferred in many govt jobs" },
                { icon: "users", text: "Suitable for students and job aspirants" },
            ],
        },

        opportunities: {
            description:
                "After completing the O-Level Certification, learners can pursue IT careers or higher-level certifications.",
            points: [
                { icon: "building", text: "IT Assistant / Computer Operator" },
                { icon: "rocket", text: "Foundation for A-Level and advanced IT courses" },
                { icon: "brain", text: "Strong logical and technical skills" },
                { icon: "graduation", text: "Eligibility for higher NIELIT certifications" },
            ],
        },

        eligibility: [
            {
                icon: "badge",
                text:
                    "10+2 or equivalent qualification preferred. Basic computer knowledge is recommended.",
            },
        ],
    },

}

function TopCourseImage({ courseImg, courseTitle, courseDesc, duration }) {
    return (
        <div className="relative w-full h-[520px] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
            <img
                src={courseImg}
                alt={courseTitle}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {courseTitle}
                </h1>
                <p className="mt-4 max-w-2xl text-blue-100 text-lg">
                    {courseDesc}
                </p>
                <div className="mt-6 flex gap-4">
                    <span className="bg-white/90 text-blue-700 px-4 py-2 rounded-xl font-medium shadow-md">
                        ⏱ {duration}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg transition-all">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
}

function OverviewData({ courseTitle }) {
    return (
        <div className="space-y-8">

            {/* Description Card */}
            <div className="bg-white rounded-2xl pt-6 pl-6 pr-6" >
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                    Course Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    The <span className="font-medium text-blue-600">{courseTitle}</span>
                    {courseDetails[courseTitle].overview.description}
                </p>
            </div>

            {/* Objectives Card */}
            <div className="bg-white rounded-2xl shadow-lg pl-6 pr-6 pb-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                    🎯 Objectives
                </h3>

                <ul className="space-y-3">
                    {courseDetails[courseTitle].overview.objectives.map((data) => {
                        const Icon = ICONS[data.icon]
                        return (
                            <li className="flex items-start gap-3">
                                <Icon className="text-blue-600 w-5 h-5 mt-1" />
                                <span className="text-gray-600">
                                    {data.text}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

function CourseHandoutsData({ courseTitle }) {
    const syllabus = courseDetails[courseTitle].syllabus;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-blue-600" />
                <h2 className="text-2xl font-semibold text-blue-700">
                    Course Curriculum
                </h2>
            </div>

            {/* ===================== DESKTOP TABLE ===================== */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-3xl shadow-2xl">
                <table className="w-full border-collapse">
                    <thead className="bg-blue-50">
                        <tr className="text-blue-800 text-sm uppercase tracking-wide">
                            <th className="px-6 py-4 text-left">S. No.</th>
                            <th className="px-6 py-4 text-left">Chapter Name</th>
                            <th className="px-6 py-4 text-center">Duration</th>
                            <th className="px-6 py-4 text-center">Theory</th>
                            <th className="px-6 py-4 text-center">Lab</th>
                            <th className="px-6 py-4 text-left">Learning Outcomes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {syllabus.map((item, index) => (
                            <tr
                                key={item.sno}
                                className={`border-t transition-all hover:bg-blue-50 ${
                                    index % 2 === 0 ? "bg-white" : "bg-blue-25"
                                }`}
                            >
                                <td className="px-6 py-6 font-medium text-gray-700">
                                    {item.sno}
                                </td>
                                <td className="px-6 py-6 font-semibold text-blue-700">
                                    {item.chapter}
                                </td>
                                <td className="px-6 py-6 text-center text-gray-600">
                                    {item.duration}
                                </td>
                                <td className="px-6 py-6 text-center text-gray-600">
                                    {item.theory}
                                </td>
                                <td className="px-6 py-6 text-center text-gray-600">
                                    {item.lab}
                                </td>
                                <td className="px-6 py-6 text-gray-600 leading-relaxed">
                                    {item.outcome}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===================== MOBILE CARDS ===================== */}
            <div className="md:hidden space-y-4">
                {syllabus.map((item) => (
                    <div
                        key={item.sno}
                        className="bg-white rounded-2xl shadow-md border p-4"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-semibold text-blue-600">
                                Module {item.sno}
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                {item.duration} hrs
                            </span>
                        </div>

                        <h3 className="font-semibold text-blue-800 mb-3">
                            {item.chapter}
                        </h3>

                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                            <p>
                                <span className="font-medium text-gray-800">
                                    Theory:
                                </span>{" "}
                                {item.theory} hrs
                            </p>
                            <p>
                                <span className="font-medium text-gray-800">
                                    Lab:
                                </span>{" "}
                                {item.lab} hrs
                            </p>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            <span className="font-medium text-gray-800">
                                Learning Outcome:
                            </span>{" "}
                            {item.outcome}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}



function BenefitsData({ courseTitle }) {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                Benefits
            </h2>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <ul className="space-y-4">
                    {courseDetails[courseTitle].benefits.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-start gap-3"
                            >
                                <Star className="text-blue-600 w-5 h-5 mt-1" />
                                <p className="text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

function JobMarketData({ courseTitle }) {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                Job Market
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
                {courseDetails[courseTitle].jobMarket.description}

            </p>

            {/* Opportunities Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <h3 className="text-xl font-semibold text-blue-700 mb-6">
                    Market Opportunities:
                </h3>

                <ul className="space-y-4">
                    {courseDetails[courseTitle].jobMarket.points.map((data) => {
                        const Icon = ICONS[data.icon]
                        return (
                            <li className="flex items-start gap-3">
                                <Icon className="text-blue-600 w-5 h-5 mt-1" />
                                <span className="text-gray-600">
                                    {data.text}
                                </span>
                            </li>

                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

function OpportunitiesData({ courseTitle }) {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                Career Opportunities
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
                {courseDetails[courseTitle].opportunities.description}
            </p>

            {/* Opportunities Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <h3 className="text-xl font-semibold text-blue-700 mb-6">
                    Your Future Paths:
                </h3>

                <ul className="space-y-4">
                    {courseDetails[courseTitle].opportunities.points.map((data) => {
                        const Icon = ICONS[data.icon]
                        return (
                            <li className="flex items-start gap-3">
                                <Icon className="text-blue-600 w-5 h-5 mt-1" />
                                <span className="text-gray-600">
                                    {data.text}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

function EligibilityData({ courseTitle }) {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                Eligibility
            </h2>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all flex items-start gap-4">
                <ul className="space-y-4">
                    {courseDetails[courseTitle].eligibility.map((data) => {
                        const Icon = ICONS[data.icon]
                        return (
                            <li className="flex items-start gap-3">
                                <Icon className="text-blue-600 w-5 h-5 mt-1" />
                                <span className="text-gray-600">
                                    {data.text}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

function CourseData({ courseTitle }) {
    const [active, setActive] = useState("Overview");

    const sections = useMemo(() => [
    { id: "Overview", label: "Overview", component: <OverviewData courseTitle={courseTitle} /> },
    { id: "Course Handouts", label: "Course Handouts", component: <CourseHandoutsData courseTitle={courseTitle} /> },
    { id: "Benefits", label: "Benefits", component: <BenefitsData courseTitle={courseTitle} /> },
    { id: "Job Market", label: "Job Market", component: <JobMarketData courseTitle={courseTitle} /> },
    { id: "Opportunities", label: "Opportunities", component: <OpportunitiesData courseTitle={courseTitle} /> },
    { id: "Eligibility", label: "Eligibility", component: <EligibilityData courseTitle={courseTitle} /> },
], [courseTitle]);
    // Scroll spy
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Sticky Tabs */}
            <div className="sticky top-20 z-20 bg-white rounded-2xl shadow-xl flex flex-wrap gap-2 p-2">
                {sections.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className={`px-5 py-3 rounded-xl text-sm md:text-base font-medium transition-all
              ${active === tab.id
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-blue-700 hover:bg-blue-50 hover:shadow-md"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Scrollable Sections */}
            <div className="mt-10 space-y-20">
                {sections.map((sec) => (
                    <section
                        key={sec.id}
                        id={sec.id}
                        className="scroll-mt-32 bg-white rounded-3xl shadow-2xl p-8"
                    >
                        {sec.component}
                    </section>
                ))}
            </div>
        </div>
    );
}

export default function ParticularCourse() {
    const defaultCourse = {
        title: "CCC (Course on Computer Concepts)",
        desc: "Computer fundamentals, internet usage, and digital literacy.",
        duration: "3 Months",
        img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    }

    const location = useLocation();
    const course = location?.state?.course || defaultCourse
    console.log(course)

    return (
        <div className="bg-blue-50 min-h-screen">
            <Header />
            <BreadCrumbs courseTitle={course.title} />
            <TopCourseImage
                courseImg={course.img}
                courseTitle={course.title}
                courseDesc={course.desc}
                duration={course.duration}
            />
            <CourseData courseTitle={course.title} />
            <Footer />
        </div>
    );
}
