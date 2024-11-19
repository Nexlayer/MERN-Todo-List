# MERN-Todo-List
MERN Todo app from the GeeksForGeeks MERN Todo app tutorial: https://www.geeksforgeeks.org/todo-list-application-using-mern/ 

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker: Required for containerizing the application

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KatieHarris2397/MERN-Todo-List.git
   cd MERN-Todo-List
   ```
2. **Navigate to react/mern-todo-app and install dependencies**:
   ```bash
   cd react/mern-todo-app
   npm install
   ```
3. **Create a React build**:
   ```bash
   npm run build
   ```
4. **Build Docker container for frontend**:
   ```bash
   docker build -t mern-react-todo:latest .
   ```
5. **Navigate to express folder and install dependencies**:
   ```bash
   cd ../../express
   npm install
   ```
6. **Build Docker container for backend**:
   ```bash
   docker build -t mern-express-todo:latest .
   ```
7. **Navigate to mongoDB folder**:
   ```bash
   cd ../mongoDB
   ```
8. **Build Docker container for mongoDB**:
   ```bash
   docker build -t mongodb-with-admin-access-to-db-created:latest .
   ```
9. **Run each of the containers in a Docker network**:
   ```bash
   docker network create mern-todo
   docker run -d --network mern-todo --name mongo -e MONGO_INITDB_ROOT_USERNAME="mongo" -e MONGO_INITDB_ROOT_PASSWORD="passw0rd" -e MONGO_INITDB_DATABASE="todo" mongodb-with-admin-access-to-db-created:latest
   docker run -d --network mern-todo --name express -e MONGODB_URL="mongodb://mongo:passw0rd@mongo/todo" mern-express-todo:latest
   docker run -d --network mern-todo --name react -e EXPRESS_URL="http://express" -p 80:80 mern-react-todo:latest
   ```
10. **Open your browser to http://localhost:80 and enjoy!**:
