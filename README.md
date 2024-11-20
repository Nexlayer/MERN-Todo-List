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
5. **Navigate to express folder**:
   ```bash
   cd ../../express
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
