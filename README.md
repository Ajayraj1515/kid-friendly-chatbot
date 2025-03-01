# Math Chatbot for Kids 🧘‍🏻🎉
A fun, interactive chatbot designed for kids to learn basic math concepts in an engaging way! The chatbot provides real-world examples to explain addition, subtraction, and other basic math operations.

## 📌 Features

✅ Kid-friendly UI with cute animations 🎨  
✅ Math explanations with real-world examples (e.g., pigeons flying away for subtraction 🗯️)  
✅ Simple and fun chatbot interface 🤖  
✅ Interactive animations with Framer Motion ✨  
✅ Fast and lightweight with React.js & Node.js ⚡  
✅ Expandable to include more subjects (e.g., science, language) 📚  

---

## 🛠️ Tech Stack

### Frontend (React.js)
- React.js (UI)
- Framer Motion (Animations)
- Axios (API requests)

### Backend (Node.js & Express)
- Express.js (API handling)
- CORS (Cross-Origin Requests)

### Database (Optional)
- MongoDB (To store user questions, future enhancement)

---

## 👤 Folder Structure

```bash
math-chatbot/
│── backend/                 # Backend (Node.js + Express)
│   ├── controllers/
│   │   ├── chatController.js
│   ├── routes/
│   │   ├── chatRoutes.js
│   ├── models/              # (Optional for DB)
│   ├── server.js
│   ├── package.json
│
│── frontend/                # Frontend (React.js)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot.js
│   │   │   ├── MessageBubble.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   ├── assets/          # Cute animations
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
│
│── README.md
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Ajayraj1515/kid-friendly-chatbot.git
cd math-chatbot
```

### 2️⃣ Setup Backend (Node.js + Express)
```sh
cd backend
npm install
node server.js
```
👉 **Runs on:** `http://localhost:5000`

### 3️⃣ Setup Frontend (React.js)
```sh
cd frontend
npm install
npm start
```
👉 **Runs on:** `http://localhost:3000`

---

## 📌 API Endpoints

### 1️⃣ Process Chat Message
**POST** `/api/chat`

- **Request:**
  ```json
  { "message": "7-4" }
  ```
- **Response:**
  ```json
  { "response": "Subtracting means some things go away! Imagine there are 7 pigeons 🐧 sitting, and 4 fly away. Now, only 3 pigeons are left! 🗯️" }
  ```

---

## 🎨 Future Enhancements

✅ Store chat history in MongoDB  
✅ Add more subjects (science, general knowledge)  
✅ Support voice interaction  

---

## 💡 Contributing
Feel free to contribute! Fork the repo, make changes, and submit a pull request. 🎉  

---

## 📝 License
This project is open-source under the **MIT License**.  

---

🎉 **Enjoy Learning Math with Fun!** 🧩🚀
