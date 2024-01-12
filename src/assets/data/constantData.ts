
// For the Home Data
export interface HomeLeftData {
    name: string;
    detail: string;
}

export const dataLeft: HomeLeftData[] = [
    { name: 'First', detail: 'Welcome to my developer portfolio! I am passionate about crafting digital experiences and turning ideas into functional, beautiful websites and applications. As a developer, I bring a unique blend of creativity and technical expertise to every project. ' },

    { name: 'Second', detail: 'In this digital showcase, you will find a collection of my work, Each project represents a unique challenge I have tackled, showcasing my skills in front-end and back-end development.' },

    { name: 'Third', detail: 'My goal is to create seamless, user-friendly experiences that not only meet the technical requirements but also leave a lasting impression. I believe in the power of clean code and intuitive design.' },
]

export interface HomeRightData {
    name: string;
    detail: string;
}

export const dataRight: HomeRightData[] = [

    { name: 'Fourth', detail: 'Technologies are my tools, and I am proficient in a wide range of them, including HTML, CSS, JavaScript, TypeScript, Python, and many more. I am also well-versed in using various frameworks and libraries to optimize and accelerate development.' },

    {
        name: 'Fifth', detail: 'Continuous learning is a cornerstone of my approach. I am always exploring new technologies, trends, and best practices to stay at the forefront of the industry and provide the best solutions to my company and clients'
    },

    { name: 'Sixth', detail: 'Whether you are a business in need of a digital presence, a startup with an app idea, or a fellow developer looking to collaborate, I am eager to hear from you and discuss how I can contribute to your success' },
];

export interface WorkData {
    name: string;
    duration: string;
    detail: string;
    skill: string;
}

export const dataWork: WorkData[] = [
    {
        name: 'Musquare Technologies',
        duration: 'Full Stack Developer (MERN) (2023 Jan - 2023)',
        detail: 'As a Full Stack Developer (MERN) , I work for updating the existing component with additional features and also create new one better UI.Better Understanding of requirement and solution which suits perfectly to it.Creating API for the frontend files on GraphQL.',
        skill: 'JavaScript, React Js, Node Js, Material UI, MongoDB, GraphQL.'

    },
];

export interface AcademicData {
    instituationName: string,
    courseName: string,
    detailOne: string,
    detailTwo: string,
    detailThree: string,
    detailFour: string
}

export const educationData: AcademicData[] = [
    {
        instituationName: "Sherwood College of Professional Management",
        courseName: "Bachleor of Computer Application | BCA (2016-2019)",
        detailOne: "I compeleted my Bachelor's of Computer Application from Lucknow (Uttar-Pradesh).",
        detailTwo: " I was studied basic Computer Application Subject's like Database, OOPS, Operating System, Low-level-Design.",
        detailThree: "Apart from this, I Learned Programming Langauges like Java,JavaScript, Python.",
        detailFour: "Core Member of College Fest, Sports & Cultural Activities."
    },

    {
        instituationName: "A R S Public School",
        courseName: "Senior Secondary School | 12th (2014-2016)",
        detailOne: "I Studied from class 11th & 12th in A.R.S Public School, Bokaro Steel City (Jharkhand).",
        detailTwo: "I Passed class 12th with 63.90%, I was good in Chemistry.",
        detailThree: "I Cleared PSA (Problem Solving Assesment) in 2015 Organised by CBSE.",
        detailFour: "I was part of many Sports & Cultural Activities Member."
    },

    {
        instituationName: "Bokaro Public School",
        courseName: "Secondary School | 10th (2011-2014)",
        detailOne: "I Studied from class 7th to 10th in Bokaro Public School, Bokaro Steel City (Jharkhand).",
        detailTwo: "I Passed class 10th with 82.60%, I was good in Science and Social-Science.",
        detailThree: "I participated in many programs and contest during my School Days",
        detailFour: ""
    }
];


export interface CertificationData {
    title: string,
    imageUrl:string,
    description:string
}

export const certificationData: CertificationData[] = [
    {
        title:"ABCD",
        imageUrl:"CNFH",
        description:"JVIRFRFN"
    }
];
