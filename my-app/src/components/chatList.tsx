import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css'; // Importe o arquivo de estilos CSS

interface Chat {
    _id: string;
    name: string;
    message: string;
  }
  
const List: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const idUser = '1'; // ID do usuário a ser buscado

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.post('http://localhost:3000/chats/user', { idUser });
        setChats(response.data as Chat[]);
      } catch (error) {
        console.error('Erro ao buscar chats:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="bg-slate-900 flex flex-col w-1/12 h-screen top-0 left-0 rounded-lg absolute text-white p-4">
      <h2>Chats: </h2>
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div key={chat._id} className="chat-item-container">
            <strong>{chat.name}</strong>
            {index !== chats.length - 1 && <hr className="chat-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;