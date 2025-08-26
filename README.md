# Task Manager

This is a Task Manager project built at **WriteTech Hub**. The goal of the project is simple: provide an easy way to create, manage, and track tasks.

The project is split into two main parts:

- **Backend** – built with Node.js, Express, and MongoDB, along with a few supporting packages.
- **Frontend** – built with Vite and React for a fast and modern user interface.


## Project Structure

Here’s how the project is organised:
```
task-manager/
│
├── backend/                 # server-side code and APIs
│   ├── config/              # configuration files like database connection
│   ├── controllers/         # request logic handlers
│   ├── models/              # MongoDB schemas and models
│   ├── routes/              # API routes
│   ├── utils/               # helper functions and utilities
│   └── server.js            # backend entry point
│
└── frontend/                # client side code
    ├── public/              # static assets
    ├── src/                 # main React app code
    │   ├── components/      # reusable UI components
    │   ├── pages/           # application pages
    │   ├── hooks/           # custom React hooks
    │   ├── services/        # API calls to the backend
    │   ├── App.jsx          # root component
    │   └── main.jsx         # app entry point
    └── vite.config.js       # Vite configuration
```

## Backend

The backend provides a REST API that handles:
- Creating, reading, updating, and deleting tasks
- Managing users and authentication
- Storing data in MongoDB

### Tech Stack
- **Node.js** for the runtime  
- **Express.js** for building the API  
- **MongoDB** as the database  
- **Mongoose** for working with MongoDB  
- Other helpful packages for logging, error handling, and environment setup  


## Frontend

The frontend is a React application created with Vite for faster builds and development. It connects to the backend API to display and manage tasks.

### Features
- Authentication and Authorization
- Add new tasks  
- Edit existing tasks  
- Mark tasks as complete or delete them  
- Simple and responsive UI  

### Tech Stack
- **React** for building the UI  
- **Vite** for project setup and tooling  
- **Axios** (or Fetch) for API calls  
- **React Router** for navigation  


## How to Run the Project

### Prerequisites
- Node.js installed  
- MongoDB running locally or on a cloud provider (like MongoDB Atlas)  

### Steps

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd task-manager
   ```

2. Install dependencies for both backend and frontend:
   ```
    cd backend
    npm install
   
    cd frontend
    cd wth-task-tracker
    npm install
   ```

3. Start the backend server:
    ```
    cd backend
    npm run dev
    ```

4. Start the frontend app:
    ```
    cd frontend
    cd wth-task-tracker
    npm run dev
    ```
The frontend will typically run on http://localhost:5173 and the backend on http://localhost:8000 (or whichever ports you configure).


## Contributing

If you want to contribute, feel free to fork the project and submit a pull request. Please make sure your code follows good practices and is well-documented.



## License

This project is for learning and demonstration purposes at WriteTech Hub.
