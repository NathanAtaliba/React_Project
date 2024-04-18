import React from 'react';

interface Chat {
    _id: string;
    name: string;
    message: string;
  }
  

interface ChatItemProps {
  chat: Chat;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat }) => {
  return (
    <div className="chat-item">
      <strong>{chat.name}:</strong> {chat.message}
    </div>
  );
};

export default ChatItem;