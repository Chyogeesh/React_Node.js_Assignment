# React_Node.js_Assignment
It is an Internship Assignment
React-Node Auth System
Setup Instructions

Clone the repository:
git clone <your-repo-url>
cd react-node-auth


Install backend dependencies:
npm install


Install frontend dependencies:
cd client
npm install


Set up Tailwind CSS:
npx tailwindcss init

Ensure tailwind.config.js includes content: ['./src/**/*.{js,jsx,ts,tsx}'].

Set up MongoDB:

Install MongoDB and start it:mongod


Ensure it runs on mongodb://localhost:27017/authdb.


Run the application:
cd ..
npm run dev


Access the app:

Open http://localhost:3000 in your browser.



Project Structure

server/index.js: Node.js backend with Express and MongoDB.
client/src/: React frontend with login, register, and dashboard components.
client/public/index.html: Main HTML file for Create React App.

Features

User registration and login with JWT authentication.
Protected dashboard with a static table.
User data stored in localStorage after login/register.
Responsive UI with Tailwind CSS.

Notes

Backend runs on http://localhost:5000.
Frontend runs on http://localhost:3000.
Replace the JWT secret ('secret') with a secure key in production.
