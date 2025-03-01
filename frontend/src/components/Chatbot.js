import React, { useState } from "react";
import axios from "axios";
import MessageBubble from "./MessageBubble";
import { motion } from "framer-motion";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/chat", { message: input });
      setMessages([...newMessages, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <motion.input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me something..."
        whileFocus={{ scale: 1.05 }}
      />
      <motion.button 
        onClick={sendMessage} 
        whileTap={{ scale: 0.9 }}
      >
        Send 🚀
      </motion.button>
    </div>
  );
}

export default Chatbot;
