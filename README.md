
# Todo App

A full-stack Todo application built with React (frontend), Express (backend), and MongoDB (database). Easily add, update, and delete your todos with a modern UI and persistent storage.

## Features
- Add, update, and delete todos
- Mark todos as complete/incomplete
- Responsive and modern UI
- Persistent storage with MongoDB

## Tech Stack
- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Folder Structure
```
root/
	client/      # React frontend
	server/      # Express backend
```

## Setup Instructions

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### 1. Clone the repository
```
git clone <repo-url>
cd todoApp
```

### 2. Setup Environment Variables
Create a `.env` file in `server/` with:
```
MONGODB_URI=mongodb://localhost:27017/todosdb
PORT=5000
```

### 3. Install Dependencies
```
cd client
npm install
cd ../server
npm install
```

### 4. Run the App
#### Development
- Start backend: `cd server && npm run dev`
- Start frontend: `cd client && npm start`

#### Production
- Build frontend: `cd client && npm run build`
- Start backend: `cd server && npm start`

## API Endpoints
- `GET    /api/todos`         - Get all todos
- `POST   /api/todos`         - Add a new todo
- `PUT    /api/todos/:id`     - Update a todo's status
- `DELETE /api/todos/:id`     - Delete a todo

## License
MIT

