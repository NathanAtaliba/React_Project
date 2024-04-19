import React, { useState } from "react";
import axios from "axios";

interface ChatItemProps {
  chat: {
    _id: string;
    name: string;
    questions: any[];
    responses: any[];
  };
  onRemove: () => void;
  onSelect: (chatId: string) => void;
  selected: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, onRemove, onSelect, selected, onFocus, onBlur }) => {
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

  const handleChatClick = () => {
    onSelect(chat._id); // Informa ao List que este chat foi selecionado
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
    <div
      className={`flex items-center bg-slate-700 p-3 m-2 rounded justify-between ${
        selected ? 'border-green-500 border-2 border-solid' : 'border-none'
      }`}
      onClick={handleChatClick}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0} 
    >
      <div className="text-xs text-center text-white bg-transparent outline-none w-10/12">
        {selected ? (
          <input
            type="text"
            className="w-full bg-transparent outline-none border-none"
            value={name}
            onChange={handleChange}
            onFocus={(event) => event.stopPropagation()} 
          />
        ) : (
          name
        )}
      </div>
      <button
        className="bg-slate-600 hover:bg-red-800 text-white font-bold p-2 rounded w-2/12"
        onClick={(event) => {
          event.stopPropagation();
          handleRemove();
        }}
      >
        -
      </button>
    </div>
  );
};

export default ChatItem;