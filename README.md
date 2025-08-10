# FebriFlow - Looms Management System

**FebriFlow** is a modern, real-time management system for the textile industry, built with React and Firebase. It provides a clean, data-driven interface to monitor and manage loom operations, production orders, and inventory.

![Dashboard Screenshot](https://i.imgur.com/your-screenshot-url.png) 
*(Replace with a URL to a screenshot of your application's dashboard)*

---

## Features

- **Real-time Dashboard**: Get a high-level overview of your operations with live statistics on looms, production, and inventory.
- **Loom Management**: Track the status of each loom (Running, Stopped, Maintenance) and manage machine details.
- **Production Tracking**: Monitor the progress of active production orders.
- **Inventory Control**: Keep an eye on yarn inventory levels with low-stock alerts.
- **Secure Authentication**: User registration and login system powered by Firebase Authentication.
- **Responsive Design**: A seamless experience on any device, from mobile to desktop, built with Tailwind CSS.
- **Dynamic 3D Background**: An engaging user interface featuring a subtle, animated background built with Three.js.

---

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) (with Hooks and Context API)
- **Backend**: [Firebase](https://firebase.google.com/) (Firestore Database, Authentication)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Development Environment**: [Create React App](https://create-react-app.dev/)

---

## Project Setup and Installation

Follow these steps to get your local development environment set up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A Firebase project set up on the [Firebase Console](https://console.firebase.google.com/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/febriflow.git](https://github.com/your-username/febriflow.git)
    cd febriflow
    ```

2.  **Install dependencies:**
    This command will install all the necessary packages listed in `package.json`.
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3.  **Configure Firebase:**
    - Navigate to your Firebase project's settings in the Firebase Console.
    - Find your web app's configuration object.
    - Copy the configuration values into `src/services/firebase.js`.

    **Important:** For security, it is highly recommended to use environment variables for your Firebase keys. Create a file named `.env.local` in the root of your project and add your keys there:
    ```
    REACT_APP_API_KEY="your-api-key"
    REACT_APP_AUTH_DOMAIN="your-auth-domain"
    REACT_APP_PROJECT_ID="your-project-id"
    REACT_APP_STORAGE_BUCKET="your-storage-bucket"
    REACT_APP_MESSAGING_SENDER_ID="your-messaging-sender-id"
    REACT_APP_APP_ID="your-app-id"
    ```
    Your `firebase.js` file should then be updated to use `process.env.REACT_APP_...` to access these variables.

### Running the Application

1.  **Start the development server:**
    This command runs the app in development mode.
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

2.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see your application running. The page will automatically reload if you make any changes to the source files.

---

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run eject`: Removes the single dependency configuration from your project. **Note: this is a one-way operation!**
