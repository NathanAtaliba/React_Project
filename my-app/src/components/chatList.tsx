import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatItem from './chatItem';
import { AddNewItem } from './addItem';

interface Chat {
    _id: string,
    name: string,
    questions: [],
    responses: []
  }
  
  const List: React.FC = () => {
    const [chats, setChats] = useState<Chat[]>([]);
  
    useEffect(() => {
      fetchChats();  
    }, []);
  
    const fetchChats = async () => {
      try {
        const response = await axios.post('http://localhost:3000/chats/user', { idUser: 1 });
        setChats(response.data as Chat[]);
      } catch (error) {
        console.error('Erro ao buscar chats:', error);
      }
    };

    const handleAddChat = async () => {

        await fetchChats();
    };
    
    const handleRemoveChat = async () => {
      await fetchChats();
    };

  return (
    <div className="bg-slate-900 flex flex-col p-1 m-1">
      <AddNewItem onAdd={handleAddChat} />

      {chats.map(chat => (
        <ChatItem key={chat._id} chat={chat} onRemove={handleRemoveChat} />
      ))}
    </div>
  );
};

export default List;