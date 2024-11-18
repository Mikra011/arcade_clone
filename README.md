# arcade_clone project

This is a JavaScript challenge site inspired by the Arcade section of CodeSignal. I started this project after receiving an email from CodeSignal indicating that the Arcade section would be discontinued. It presented a great opportunity for me to practice my skills and continue learning.

## Instructions:

### Backend Setup:
- Clone the Backend repository: `git clone https://github.com/Mikra011/arcade_clone.git`  
- Run the following command to install all necessary dependencies: `npm install`  
- Launch the server by executing: `npm run start`  

### Frontend Setup:
- Clone the Frontend repository: `git clone https://github.com/Mikra011/arcade_clone_front.git`  
- Run the following command to install all necessary dependencies: `npm install`  
- Launch the project in a development server by executing: `npm run dev`  
- Visit your app by navigating Chrome to `http://localhost:3000`

## Objectives:

- I aimed to replicate the core functionality as closely as possible, though an exact replica was not my primary goal.
- I sought to include as many challenges and test cases as possible.
- I planned to deploy the app.

## Outcomes:

- While I successfully replicated the core functionality of the original site, I found it challenging to copy all the data within the available timeframe (the scripts I used for copying are included in the project repository). My primary focus was on the JavaScript aspect of the site, which I completed, although the seed files became unexpectedly large.

- Three sections are fully completed, while the remaining two were retained to maintain the feel of the original site.

- User progress tracking is implemented; however, I applied some limitations, and it is less complex than the original. I chose not to invest additional time in this feature.

- Testing proved to be challenging. I learned that simpler functions are often more effective than complicated ones.

- The site is deployed on **Render**.

## Stack:

### Backend:

- **Node.js**: A JavaScript runtime that enables building fast and scalable server-side applications, allowing for a consistent development experience.

- **Express.js**: A minimal and flexible web application framework that simplifies the creation of APIs, facilitating smooth communication between the server and client.

- **SQL**: Utilized **SQLite3** for local development due to its lightweight nature, transitioning to **PostgreSQL** for deployment to ensure reliability and advanced features.

### Frontend:

- **Vite**: A modern build tool that enhances development speed with fast hot module replacement and optimized builds, streamlining the coding process.

- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI design with a modular approach, ensuring responsive and aesthetically pleasing layouts.

- **React**: A powerful library for building dynamic user interfaces, utilizing a component-based architecture for improved reusability and state management.

- **Redux**: A predictable state container that complements React, ensuring a consistent application state and enhancing the user experience.

This stack empowers the development of a robust and user-friendly application that effectively meets project goals.


## Key Features:

- **runCode Function**: This feature enables the secure execution of untrusted user code using **Isolated-VM**. According to the documentation, this is an effective and well-maintained solution for handling potentially unsafe code. While I primarily tested it against infinite loops, it provides a solid foundation for future enhancements.

- **User Progress Tracking**: I implemented an efficient system to monitor user progress across various sections, topics, and challenges. This ensures that users can easily track their learning journey and achievements.

- **Dynamic Frontend**: The user interface is rendered dynamically based on data, allowing for real-time updates that reflect user progress. This approach enhances user engagement and provides a seamless experience.


## Testing:

I utilized **Jest** and **Supertest** for testing my endpoints. Although I haven’t tested every aspect, I believe the coverage is sufficient for the project’s scope.

## Deployment:

The site is deployed on **Render** using the free tier, which may lead to slower response times of up to 50 seconds. While this tier is adequate for development and testing purposes, users might experience delays during peak usage times.

Feel free to check it out: [Arcade Clone](https://arcade-clone-front.onrender.com/)

If you prefer not to register, you can log in with the following credentials:
- **Username**: user
- **Password**: password

## Notes:

- Currently, only JavaScript challenges are available.( python and databeses sections are not containing any challenges currently )
- Time and space constraints do not align with the limits of my current deployment tier. To explore more advanced challenges, please run the project locally, or visit the original site: [codesignal/arcade](https://app.codesignal.com/arcade)
