import React, { useState, useEffect } from 'react';
import './CustomChatbox.css';

const WEBHOOK_URL = 'https://hog-full-bison.ngrok-free.app/webhook/fbc84f93-c26e-49b4-bc91-27bf4f0a05d9/chat';

interface Message {
  text: string;
  sender: 'bot' | 'user';
}

const CustomChatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: 'Hello! My name is Kiera. How can I help you today?', sender: 'bot' }]);
    }
  }, [isOpen]);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue }),
    })
      .then(response => response.json())
      .then(data => {
        const botMessage: Message = { text: data.reply, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      })
      .catch(error => {
        console.error('Error sending message to n8n:', error);
        const errorMessage: Message = { text: 'Hmmm🤔, something didn't go as planned, try again.', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      });
  };

  return (
    <div className="chatbox-container">
      {isOpen ? (
        <div className="chatbox-window">
          <div className="chatbox-header">
            <img src="https://7ab97e58dc0749490380ced80f43695d.cdn.bubble.io/f1756990397699x246260610744600600/chatbot%20%283%29.png" alt="Chatbot Avatar" />
            <div className="title">Kacodego 24/7 Assistant</div>
          </div>
          <div className="chatbox-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}-message`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type your query"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbox-button" onClick={toggleChatbox}>
          <img src="https://7ab97e58dc0749490380ced80f43695d.cdn.bubble.io/f1756990404657x661277623800810500/happy.png" alt="Chat Icon" />
        </button>
      )}
    </div>
  );
};

export default CustomChatbox;
