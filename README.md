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


Set up MongoDB:

Ensure MongoDB is running locally on mongodb://localhost:27017/authdb.


Run the application:
cd ..
npm run dev


Access the app:

Open http://localhost:3000 in your browser.



Project Structure

server/index.js: Node.js backend with Express and MongoDB.
client/src/: React frontend with login, register, and dashboard components.
client/public/index.html: Main HTML file with CDN imports for React and Tailwind CSS.

Features

User registration and login with JWT authentication.
Protected dashboard with a static table.
User data stored in localStorage after login/register.
Simple, responsive UI with Tailwind CSS.

GitHub Submission

Push the code to your GitHub repository:git add .
git commit -m "Initial commit for auth system"
git push origin main



Notes

Ensure MongoDB is installed and running.
The backend runs on http://localhost:5000.
The frontend runs on http://localhost:3000.
Replace the JWT secret ('secret') with a secure key in production.
