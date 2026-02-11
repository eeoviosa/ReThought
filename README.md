# ReThought

> A public chat board where anyone can share their thoughts. Built with modern web technologies to explore Node.js capabilities.

## 🚀 Overview

ReThought is an open-source public note board application where users can freely post and share their thoughts. It's a work-in-progress project designed to explore and demonstrate Node.js development practices, full-stack web development, and modern tech stack integration.

## ✨ Features

- **Public Chat Board**: Anyone can post their thoughts
- **Real-time Updates**: Instant message display and updates
- **Persistent Storage**: All messages stored in MongoDB
- **Responsive Design**: UI built with Tailwind CSS + DaisyUI
- **CRUD Operations**: Full create, read, update, delete functionality with Mongoose
- **Rate Limiting**: Protected against abuse with Redis-based rate limiting
- **Fully Commented Code**: Comprehensive comments throughout the codebase

## 🛠️ Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Rate Limiting**: Upstash Redis
- **Styling**: Tailwind CSS + DaisyUI
- **License**: Open Source

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14+) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud)
- **Upstash Redis** account (for rate limiting) - [Sign up free](https://upstash.com/)

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/eeoviosa/ReThought.git
cd ReThought
```

### 2. Install root dependencies (for concurrent development)
```bash
npm install
```

### 3. Set up environment variables

#### Backend (`backend/.env`)
Create a `.env` file in the `backend` folder:
```env
MONGO_URI=mongodb://localhost:27017/rethought
PORT=5001
NODE_ENV=development
UPSTASH_REDIS_URL=your_upstash_redis_url
UPSTASH_REDIS_TOKEN=your_upstash_redis_token
```

#### Frontend (`frontend/.env`)
Create a `.env` file in the `frontend` folder (optional, already configured for development):
```env
VITE_API_URL=http://localhost:5001/api
```

### 4. Install project dependencies
```bash
npm run build
```

## 🚀 Running in Development

### Option A: Run Both Servers Concurrently (Recommended) ⭐
Run this single command from the root directory:
```bash
npm run dev
```

This will start:
- **Backend** on `http://localhost:5001`
- **Frontend** on `http://localhost:5173`

Both servers run in the same terminal with color-coded output using `concurrently`.

### Option B: Run Servers Separately
If you prefer to run them in separate terminals:

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
```

### Step 5: Access the application
Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Building for Production

```bash
npm run build
```

This will create an optimized production build.

## Deployment

Visit https://rethought.onrender.com for a live demo of the project.

## 🐛 Troubleshooting

### Port Already in Use
If you get an error that port 5001 or 5173 is already in use:

**Windows:**
```bash
netstat -ano | findstr :5001
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -i :5001
kill -9 <PID>
```

### MongoDB Connection Error
- Ensure MongoDB is running locally, or update `MONGO_URI` in `.env` with your MongoDB Atlas connection string
- Test connection: `mongosh` (MongoDB shell)

### CORS Errors
The backend is already configured to allow `http://localhost:5173`. If using a different frontend URL, update `backend/src/server.js`:
```javascript
app.use(cors({
    origin: ['http://localhost:5173', 'YOUR_NEW_URL']
}));
```

### Rate Limiting (429 Error)
The app limits requests to 10 per 60 seconds. If you see 429 errors:
- Verify your Upstash Redis credentials in `.env`
- Wait 60 seconds before making more requests
- For development testing, you can temporarily adjust the limit in `backend/src/config/upstash.js`

## 📝 Project Structure

```
ReThought/
├── backend/
│   ├── models/              # MongoDB schemas
│   ├── src/
│   │   ├── config/          # Database & Redis config
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Express middleware
│   │   ├── routes/          # API routes
│   │   └── server.js        # Express app entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── lib/             # Utilities (axios, helpers)
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # React entry point
│   └── package.json
└── package.json            # Root package.json (dev scripts)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the ISC license.




