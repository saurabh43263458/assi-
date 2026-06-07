



https://github.com/user-attachments/assets/14e3a4f6-b51a-4fd6-a01e-58899225491a





# Task Management System

A full-stack, secure task management application built using the MERN stack (MongoDB, Express, React, Node.js). Features include secure cookie-based JWT user authentication, protected dashboard routing, and interactive task CRUD (Create, Read, Update, Delete) actions with a polished, modern interface.

---

##  Features

- ** Secure User Authentication**: Sign up, log in, and log out with encrypted passwords (`bcryptjs`) and HTTP-only cookie-stored JSON Web Tokens (JWT).
- ** Task CRUD Operations**: Create new tasks with titles and descriptions, view existing tasks, edit titles and descriptions, and delete tasks dynamically.
- ** Protected Routes**: Automatically routes unauthenticated users back to the Login page and prevents access to the dashboard.
- ** Modern Design**: Custom styled with fluid responsive CSS layouts, transitions, and hover micro-animations.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (Vite)
- **Routing**: React Router (`react-router`)
- **API Client**: Axios with credentials (cookie/session sharing)
- **Styling**: Vanilla CSS

### Backend
- **Server Environment**: Node.js & Express
- **Database**: MongoDB & Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT) & HTTP-only Cookies
- **Security**: Password hashing via BcryptJS, CORS configuration

---

## Project Structure

```text
Assi/
├── backend/
│   ├── controller/          # Route controller logic (auth, tasks)
│   ├── middleware/          # JWT authentication middleware
│   ├── model/               # Mongoose schemas (User, Task)
│   ├── route/               # Express routing (auth, task)
│   ├── db.js                # MongoDB connection helper
│   ├── server.js            # Express server entry point
│   ├── .env                 # Environment variables config
│   └── package.json
└── frontend/
    ├── src/
    │   ├── ContextApi/      # React context state management
    │   ├── component/       # Reusable components (Navbar, TaskCard, TaskForm)
    │   ├── pages/           # Pages (Login, Register, Dashboard)
    │   ├── App.jsx          # Root component
    │   ├── app.route.jsx    # React Router routes setup
    │   └── main.jsx         # App entry point
    └── package.json
```

---

## ⚡ Setup & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (running locally or a remote MongoDB Atlas URI)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Assi
```

### 2. Configure Backend
Navigate to the `backend` directory, install dependencies, and create a `.env` file:
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:
```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/assi
JWT_SECERT=your_jwt_secret_key_here
```

Start the backend server in development mode:
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### 3. Configure Frontend
Navigate to the `frontend` directory and install dependencies:
```bash
cd ../frontend
npm install
```

Start the Vite development server:
```bash
npm run dev
```
The frontend application will start at `http://localhost:5173`.

---

## 🔌 API Reference

### Authentication Routes (`/auth`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| **POST** | `/auth/register` | Register a new user | `{ "username": "...", "email": "...", "password": "..." }` |
| **POST** | `/auth/login` | Log in user and receive cookie JWT | `{ "email": "...", "password": "..." }` |
| **POST** | `/auth/logout` | Log out user and clear auth cookies | None |

### Task Routes (`/task`)
All task routes require a valid JWT cookie token.

| Method | Endpoint | Query Params | Description | Request Body / Response |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/task/getalltask` | None | Fetch all tasks for the logged-in user | Returns `{ tasks: [...] }` |
| **POST** | `/task/create` | None | Create a new task | `{ "title": "...", "description": "..." }` |
| **PUT** | `/task/updatetask` | `?id=<task_id>` | Edit an existing task | `{ "title": "...", "description": "..." }` |
| **DELETE** | `/task/deletetask` | `?id=<task_id>` | Delete a task | Returns success message |
