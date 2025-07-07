# MoodCal 🧠 | A Minimal Mood Tracking App

**MoodCal** is a full-stack web application that allows users to record their daily moods through an interactive calendar interface. Users can select an emoji and assign a color to each date, providing a visual representation of their emotional journey.

This project was developed using **React** for the frontend and **Node.js (Express)** for the backend. It is designed to be responsive, user-friendly, and lightweight — ideal for personal use or as a foundational mental wellness tracker.

# Screenshots

![image](https://github.com/user-attachments/assets/53970e5d-930e-489a-af79-ba4deb129232)
![image](https://github.com/user-attachments/assets/0441c03c-8782-46c0-af63-a62804dfec90)


## 🔗 Live Links

- **Frontend (React + Netlify)**: [https://mood-calender.netlify.app/](https://mood-calender.netlify.app/)
- **Backend (Node.js + Render)**: [https://moodcal.onrender.com](https://moodcal.onrender.com)

---

## 🛠 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React, CSS         |
| Backend     | Node.js, Express   |
| HTTP Client | Axios              |
| Deployment  | Netlify (frontend), Render (backend) |
| Data Storage| JSON file (local)  |

---

## 📸 Key Features

- 📅 Interactive calendar UI to log moods per date
- 😄 Emoji-based mood selection
- 🎨 Color customization for visual feedback
- 💾 Local file-based storage using Node.js
- 🗑 Ability to delete or update moods
- 🌐 Mobile-responsive and fully browser-based
- 🎨 Modern, clean pastel-themed UI

---

## 📁 Folder Structure

MoodCal/
├── frontend/ # React app

│ ├── public/

│ └── src/

├── backend/ # Node.js API

│ ├── index.js

│ └── moods.json

## 🚀 Getting Started Locally

### Prerequisites
- Node.js and npm installed
- Basic understanding of React and Express

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MeenakshiiArumugam/MoodCal.git
   cd MoodCal

2. Install dependencies for both frontend and backend:

cd frontend

npm install

cd ../backend

npm install

3. Start the backend server:

node index.js

4. Start the frontend React app:

cd ../frontend

npm start

The app should be running on http://localhost:3000 and the backend on http://localhost:5000
