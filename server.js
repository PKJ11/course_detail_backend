const express = require("express");
const cors = require("cors"); // Install cors using npm install cors

const app = express();
const port = 5000;

app.use(cors());

const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    likes:32,
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://crowdbotics.ghost.io/content/images/2021/11/React-Native.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",progress:49
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",progress:72
      },
      {
        id: 802,
        name: "Quinn Harris",
        email: "quinn@example.com",progress:63
      },
      {
        id: 901,
        name: "Rachel Turner",
        email: "rachel@example.com",progress:72
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "Advanced React Concepts",
    likes:32,
    instructor: "Jane Smith",
    description:
      "Deepen your understanding of React and explore advanced concepts.",
    enrollmentStatus: "Open",
    thumbnail: "https://techsathi.com/wp-content/uploads/2021/05/ReactJS.png",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate React knowledge",
      "Experience with state management",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "David Wilson",
        email: "david@example.com",progress:33
      },
      {
        id: 202,
        name: "Ella Davis",
        email: "ella@example.com",progress:38
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",progress:100
      },
      {
        id: 802,
        name: "Quinn Harris",
        email: "quinn@example.com",progress:92
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    likes:32,
    instructor: "Alex Johnson",
    description:
      "Master both front-end and back-end web development technologies.",
    enrollmentStatus: "Inprogress",
    thumbnail:
      "https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png",
    duration: "12 weeks",
    schedule: "Saturdays, 10:00 AM - 2:00 PM",
    location: "Online",
    prerequisites: ["HTML", "CSS", "JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 301,
        name: "Frank Miller",
        email: "frank@example.com",progress:39
      },
      {
        id: 302,
        name: "Grace Turner",
        email: "grace@example.com",progress:42
      },
      {
        id: 202,
        name: "Ella Davis",
        email: "ella@example.com",progress:72
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",progress:92
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    likes:32,
    instructor: "Sophie Brown",
    description: "Explore the basics of data science and statistical analysis.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://th.bing.com/th/id/OIP.sgfANV04uRrGZbJHdtVynwHaFQ?rs=1&pid=ImgDetMain",
    duration: "10 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of Python", "Understanding of statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
    ],
    students: [
      {
        id: 401,
        name: "Harry Turner",
        email: "harry@example.com",progress:87
      },
      {
        id: 402,
        name: "Ivy Harris",
        email: "ivy@example.com",progress:32
      },
      {
        id: 502,
        name: "Kevin White",
        email: "kevin@example.com",progress:32
      },
      {
        id: 602,
        name: "Michael Clark",
        email: "michael@example.com",progress:56
      },
      {
        id: 701,
        name: "Nathan Davis",
        email: "nathan@example.com",
        progress: 82,
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 5,
    name: "Mobile App Design",
    likes:32,
    instructor: "Michael Taylor",
    description:
      "Learn the principles of mobile app design and user experience.",
    enrollmentStatus: "Inprogress",
    thumbnail:
      "https://th.bing.com/th/id/OIP.8bcTAwENtnaduykCZD5tMAHaEj?rs=1&pid=ImgDetMain",
    duration: "6 weeks",
    schedule: "Thursdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Understanding of UI/UX principles"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
    ],
    students: [
      {
        id: 501,
        name: "Jackie Moore",
        email: "jackie@example.com",progress:74
      },
      {
        id: 502,
        name: "Kevin White",
        email: "kevin@example.com",progress:69
      },
      {
        id: 602,
        name: "Michael Clark",
        email: "michael@example.com",progress:82
      },
      {
        id: 701,
        name: "Nathan Davis",
        email: "nathan@example.com",progress:32
      },
      // Additional enrolled students...
    ],
  },
  // Additional courses...
  {
    id: 6,
    name: "Machine Learning Foundations",
    instructor: "Samuel Turner",
    description:
      "Explore the basics of machine learning algorithms and applications.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://theconstructor.org/wp-content/uploads/2021/05/ML1-scaled.jpg",
    duration: "10 weeks",
    schedule: "Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Understanding of Python",
      "Basic knowledge of statistics",
      "Understanding of Maths",
      "Understanding of Alzebra",
      "Understanding of Programming",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
    ],
    students: [
      {
        id: 601,
        name: "Linda Harris",
        email: "linda@example.com",progress:39
      },
      {
        id: 602,
        name: "Michael Clark",
        email: "michael@example.com",progress:51
      },
      {
        id: 701,
        name: "Nathan Davis",
        email: "nathan@example.com",progress:63
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 7,
    name: "Front-end Web Development",
    likes:32,
    instructor: "Emily Miller",
    description:
      "Master the art of building responsive and interactive websites.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://th.bing.com/th/id/OIP.Wmgz6BNgNbQRAF897hWrGwHaEK?rs=1&pid=ImgDetMain",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["HTML", "CSS", "Basic JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
    ],
    students: [
      {
        id: 701,
        name: "Nathan Davis",
        email: "nathan@example.com",progress:23
      },
      {
        id: 702,
        name: "Olivia White",
        email: "olivia@example.com",progress:31
      },
      {
        id: 1001,
        name: "Tina Carter",
        email: "tina@example.com",progress:56
      },
      {
        id: 1002,
        name: "Ulysses Turner",
        email: "ulysses@example.com",progress:84
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 8,
    name: "Backend Development with Node.js",
    likes:32,
    instructor: "Daniel Turner",
    description: "Learn server-side development using Node.js and Express.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://i1.wp.com/subrutin.com/wp-content/uploads/2019/01/2400%D1%851260-rw-blog-node-js.png?fit=2400%2C1260&ssl=1",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript", "Understanding of web servers"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 801,
        name: "Peter Turner",
        email: "peter@example.com",progress:53
      },
      {
        id: 802,
        name: "Quinn Harris",
        email: "quinn@example.com",progress:39
      },
      {
        id: 901,
        name: "Rachel Turner",
        email: "rachel@example.com",progress:32
      },
      {
        id: 902,
        name: "Samuel Harris",
        email: "samuel@example.com",progress:72
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 9,
    name: "Python Programming Basics",
    likes:32,
    instructor: "Sophia Wilson",
    description: "Learn the fundamentals of programming using Python.",
    enrollmentStatus: "Close",
    thumbnail:
      "https://res.cloudinary.com/dyd911kmh/image/upload/v1646560927/shutterstock_1329434768_bf9003ea47.jpg",
    duration: "8 weeks",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["No prior programming experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 901,
        name: "Rachel Turner",
        email: "rachel@example.com",progress:32,
      },
      {
        id: 902,
        name: "Samuel Harris",
        email: "samuel@example.com",progress:22,
      },
      {
        id: 1001,
        name: "Tina Carter",
        email: "tina@example.com",progress:82,
      },
      {
        id: 1002,
        name: "Ulysses Turner",
        email: "ulysses@example.com",progress:82,
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 10,
    name: "JavaScript Frameworks: Angular",
    likes:32,
    instructor: "Jack Miller",
    description:
      "Explore the Angular framework for building dynamic web applications.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://th.bing.com/th/id/OIP.dP9_bM5z5naqpXpm3vO_ngHaEK?rs=1&pid=ImgDetMain",
    duration: "10 weeks",
    schedule: "Saturdays, 2:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of HTML, CSS, and JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Working with Components",
        content: "Understanding and using various React Native components.",
      },
      {
        week: 4,
        topic: "State and Props",
        content: "Managing state and props in React Native applications.",
      },
      {
        week: 5,
        topic: "Navigation in React Native",
        content: "Implementing navigation and routing in your mobile app.",
      },
      {
        week: 6,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
      {
        week: 7,
        topic: "Styling and Theming",
        content: "Applying styles and themes to enhance the visual appeal.",
      },
      {
        week: 8,
        topic: "Deployment and Publishing",
        content: "Preparing your app for deployment and publishing it.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1001,
        name: "Tina Carter",
        email: "tina@example.com",progress:89,
      },
      {
        id: 1002,
        name: "Ulysses Turner",
        email: "ulysses@example.com",progress:52,
      },
      {
        id: 901,
        name: "Rachel Turner",
        email: "rachel@example.com",progress:32,
      },
      {
        id: 902,
        name: "Samuel Harris",
        email: "samuel@example.com",progress:82,
      },
      // Additional enrolled students...
    ],
  },
  // Additional courses...
];

app.get("/courses", (req, res) => {
  res.json(courseModel);
});

app.get("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courseModel.find((course) => course.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

app.put("/courses/:id/like", (req, res) => {
  const courseId = parseInt(req.params.id);
  const courseIndex = courseModel.findIndex((course) => course.id === courseId);

  if (courseIndex !== -1) {
    // Update the likes for the course
    courseModel[courseIndex].likes += 1;

    res.json({ success: true, likes: courseModel[courseIndex].likes });
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
