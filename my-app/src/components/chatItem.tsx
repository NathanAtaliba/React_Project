import React, { useState } from "react";
import axios from "axios";

interface ChatItemProps {
  chat: {
    _id: string;
    name: string;
    questions: [],
    responses: []
  };
  onRemove: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, onRemove }) => {
  const [name, setName] = useState(chat.name);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);

    try {
      await axios.put(`http://localhost:3000/chat/update/${chat._id}`, { name: newName });
    } catch (error) {
      console.error('Erro ao atualizar chat:', error);
    }
  };

  const handleRemove = async () => {
    try {
      await axios.delete(`http://localhost:3000/chat/delete/${chat._id}`);
      onRemove();
    } catch (error) {
      console.error('Erro ao remover chat:', error);
    }
  };

  return (
    <div className="flex items-center bg-slate-700 p-3 m-2 rounded justify-between">
      <input
        className="text-xs text-center text-white bg-transparent outline-none border-none w-10/12"
        value={name}
        onChange={handleChange}
      />
      <button
        className="bg-red-600 hover:bg-red-800 text-white font-bold p-2 rounded w-2/12"
        onClick={handleRemove}
      >
        -
      </button>
    </div>
  );
};

export default ChatItem;