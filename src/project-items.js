import Note1 from "./images/projects/notes/note1.png";
import Note2 from './images/projects/notes/note2.png';
import Note3 from './images/projects/notes/note3.png';

import Shop1 from './images/projects/shop/shop1.png';
import Shop2 from './images/projects/shop/shop2.png';
import Shop3 from './images/projects/shop/shop3.png';
import Shop4 from './images/projects/shop/shop4.png';

import Blog1 from './images/projects/blog/blog1.png';
import Blog2 from './images/projects/blog/blog2.png';
import Blog3 from './images/projects/blog/blog3.png';   
import Blog4 from './images/projects/blog/blog4.png';
import Blog5 from './images/projects/blog/blog5.png';

const PROJECT_ITEMS = [{
            title: "Notes App",
            text: `This project is a fully functional notes management web application built using React with a strong emphasis on modern React Hooks, particularly the useState hook, to manage application state efficiently. The application allows users to create, edit, and delete notes in a seamless and intuitive interface, demonstrating a clear understanding of component-based architecture and state-driven UI rendering.

                The project is designed to showcase how dynamic data flows through a React application without relying on class components. Each note is handled as part of the application’s state, enabling real-time updates and ensuring that changes are immediately reflected in the user interface. This approach highlights effective state management, clean data handling, and predictable behavior across components.

                Special attention was given to user experience and code structure. The application is organized into reusable components, making the codebase easy to maintain, extend, and scale. Event handling is implemented thoughtfully to ensure smooth interactions when adding, modifying, or removing notes, while maintaining a responsive and consistent UI.

                Overall, this project demonstrates practical experience with React fundamentals, including hooks, component reusability, state updates, and unidirectional data flow. It serves as a strong example of building a real-world, interactive web application using modern React best practices.`,
            images: [Note1, Note2, Note3],
            link: "https://charming-choux-69225c.netlify.app"
    },
    {
            title: "E-Commerce Website",
            text: `This project is a fully functional clothing e-commerce application built using React, with a strong focus on modern front-end architecture and scalable, serverless design. The application delivers a complete online shopping experience, allowing users to browse products, manage a shopping cart, authenticate securely, and complete payments seamlessly within a single-page application.

                Rather than relying on a traditional backend server, the application uses serverless functions to handle essential operations such as user authentication and Stripe payment processing. Firebase is used as the primary data layer for storing product information and user data, while Firebase Authentication provides secure and reliable sign-in and sign-up functionality.

                State management is implemented using a combination of React Redux, the useState hook, and the Context API to ensure predictable data flow and efficient state updates across components. React Router is used to manage navigation and routing, enabling smooth transitions between pages without full page reloads.

                Overall, this project demonstrates practical experience in building production-ready e-commerce applications using React, integrating third-party services, and implementing secure payment and authentication workflows in a serverless environment.`,
            images: [Shop1, Shop2, Shop3, Shop4],
            link: "https://sunny-elf-5e5b8e.netlify.app/"
    },
    {
            title: "Blog Platform",
            text: `This project is a blog web application developed using Python and Flask, designed to demonstrate full-stack web development concepts with a focus on backend logic, authentication, and data persistence. The application allows users to browse blog posts, read content, and participate in discussions through a commenting system, creating an interactive experience for readers.

                The platform uses MongoDB as its primary database, storing blog posts, user information, and comments in a structured and scalable manner. An authentication system is implemented using sessions and cookies, enabling secure user login and access control throughout the application. This ensures that user state is maintained across requests while protecting restricted functionality.

                Role-based access control is a core feature of the system. While registered users can comment on posts, administrative privileges are required to create new blog entries or edit existing content. This separation of permissions highlights proper authorization handling and reinforces best practices for secure content management systems.

                Overall, this project showcases strong backend development skills with Flask, effective database integration using MongoDB, and a clear understanding of authentication, authorization, and user interaction in a real-world blogging platform.`,
            images: [Blog1, Blog2, Blog3, Blog4, Blog5],
            link: "https://cheerful-charm-production-848c.up.railway.app"
    }
];

export default PROJECT_ITEMS;