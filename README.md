# ConVo - Real-Time Chat Application

ConVo is a full-featured real-time chat application designed to facilitate seamless communication between users. Built with a modern tech stack, ConVo provides one-to-one and group chat functionality with real-time notifications and typing indicators for an engaging chat experience.

## Features

- **User Authentication:** Secure sign-up and login functionality using JWT (JSON Web Token) for session management.
- **Real-Time Chatting:** Enables instantaneous messaging with real-time updates across one-to-one and group chats.
- **Typing Indicators:** Visual feedback when users are typing a message, enhancing user interactivity.
- **One-to-One Chat:** Private conversations between individual users.
- **Group Chat:** Create and manage group chats with multiple users, making team communication effortless.
- **Notifications:** Stay updated with real-time notifications for new messages and group invitations.

## Tech Stack

### Client
- **React JS:** A modern JavaScript library for building user interfaces. React enables the creation of fast, responsive, and scalable frontends.

### Server
- **Node JS:** A JavaScript runtime that handles the backend logic, providing a scalable, high-performance environment for real-time communication.
- **Express JS:** A web framework for Node.js that simplifies the creation of API endpoints, middleware, and handling HTTP requests.

### Database
- **MongoDB:** A NoSQL database to store user data, chat history, and group information. MongoDB’s flexibility allows it to handle large amounts of unstructured data efficiently.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v12 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **npm** (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/convo-chat-app.git
    cd convo-chat-app
    ```

2. Install dependencies for both the client and server:

    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. Create a `.env` file in the `server` folder to configure environment variables like MongoDB connection URL, JWT secret, etc.:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the server:

    ```bash
    cd server
    npm start
    ```

5. Start the client:

    ```bash
    cd ../client
    npm start
    ```

6. Access the application in your browser at `http://localhost:3000`.

### Project Structure

```plaintext
ConVo/
│
├── client/                # React Frontend
│   ├── src/
│   └── public/
│
├── server/                # Node.js Backend
│   ├── config/            # Database and environment configurations
│   ├── controllers/       # API request handlers
│   ├── models/            # MongoDB models (User, Chat, Message)
│   ├── routes/            # API routes for authentication, chats, etc.
│   └── utils/             # Helper functions and utilities
│
└── README.md              # Project documentation
