import React from "react";
import { motion } from "framer-motion";

function MessageBubble({ text, sender }) {
  return (
    <motion.div
      className={`message ${sender}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.div>
  );
}

export default MessageBubble;
