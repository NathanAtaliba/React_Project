import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatItem from './chatItem';
import { AddNewItem } from './addItem';

interface Chat {
  _id: string;
  name: string;
  idUser: string;
  responses: string[];
  questions: string[];
}
  
  interface ListProps {
    onSelectChat: (chatId: string) => void;
  }

  const List: React.FC<ListProps> = ({ onSelectChat }) => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

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
  
    const handleSelectChat = (chatId: string) => {
      setSelectedChatId(chatId);
      onSelectChat(chatId); 
    };
  
    const handleFocus = () => {
      console.log('ChatItem focado');
    };
  
    const handleBlur = () => {
      console.log('ChatItem perdeu foco');
    };

  return (
    <div className="bg-slate-900 flex flex-col p-1 m-1">
      <AddNewItem onAdd={handleAddChat} />

      {chats.map(chat => (
        <ChatItem key={chat._id} 
        chat={chat} 
        onRemove={handleRemoveChat}
        onSelect={handleSelectChat}
        selected={chat._id === selectedChatId}
        onFocus={handleFocus}
        onBlur={handleBlur} 
         />
      ))}
    </div>
  );
};

export default List;