# Build Chat App with React, Socket.io, Node.js, Redux-Toolkit, MongoDB (2024)

This project demonstrates how to build a real-time chat application using React, Socket.io, Node.js, Redux-Toolkit, and MongoDB. The app allows users to send and receive messages in real-time, supports user authentication, and persists chat history in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Messaging**: Instant messaging using WebSockets with Socket.io.
- **User Authentication**: Secure login and registration functionality.
- **Persistent Chat History**: Stores chat history in MongoDB.
- **Responsive Design**: Fully responsive and mobile-friendly.
- **Redux State Management**: Efficient state management with Redux-Toolkit.

## Tech Stack

- **Frontend**: React, Redux-Toolkit
- **Backend**: Node.js, Express
- **WebSocket**: Socket.io
- **Database**: MongoDB
- **Styling**: CSS/SCSS (or any preferred styling library like Material-UI or Bootstrap)
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Docker, Heroku, or any cloud service provider

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js (version 18.x or higher)
- **MongoDB**: Set up a MongoDB instance (local or cloud-based)
- **NPM or Yarn**: Install NPM or Yarn for package management
- **Docker** (Optional): For containerized deployment

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install dependencies**:

   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Environment Variables**:

   Create a `.env` file in the `server` directory and add the following environment variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   SOCKET_PORT=5000
   ```

4. **Start the development servers**:

   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm start
   ```

   By default, the backend server runs on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## Usage

1. **Sign Up / Login**: Create an account or log in with existing credentials.
2. **Start Chatting**: Join a chat room or create a new one and start messaging in real-time.
3. **View Chat History**: Access previous messages stored in the database.

## Project Structure

Here's an overview of the project structure:

```bash
chat-app/
│
├── server/ # Backend code
│ ├── src/
│ │ ├── controllers/ # Controllers for handling requests
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # Express routes
│ │ ├── socket/ # Socket.io setup and events
│ │ └── app.js # Main app setup
│ └── .env # Environment variables
│
└── client/ # Frontend code
├── src/
│ ├── components/ # React components
│ ├── pages/ # React pages
│ ├── redux/ # Redux-Toolkit slices and store
│ ├── App.js # Main App component
│ └── index.js # Entry point
└── .env # Environment variables (if needed)
```

## Contributing

Contributions are always welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
