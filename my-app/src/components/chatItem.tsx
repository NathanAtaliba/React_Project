import React, { useState } from "react";
import axios from "axios";

interface ChatItemProps {
  chat: {
    _id: string;
    name: string;
  };
  onRemove: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, onRemove }) => {
  const [name, setName] = useState(chat.name);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName); // Atualiza o estado local com o novo nome

    try {
      // Envia uma requisição para atualizar o nome do chat no servidor
      await axios.put(`http://localhost:3000/chat/update/${chat._id}`, { name: newName });
      // Opcional: Poderíamos tratar o retorno da requisição aqui, se necessário
    } catch (error) {
      console.error('Erro ao atualizar chat:', error);
    }
  };

  const handleRemove = async () => {
    try {
      // Envia uma requisição para remover o chat no servidor
      await axios.delete(`http://localhost:3000/chat/delete/${chat._id}`);
      // Após remover com sucesso, chama a função para atualizar a lista de chats no componente pai
      onRemove();
    } catch (error) {
      console.error('Erro ao remover chat:', error);
    }
  };

  return (
    <div className="flex items-center justify-between bg-slate-700 p-3 m-2 rounded">
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