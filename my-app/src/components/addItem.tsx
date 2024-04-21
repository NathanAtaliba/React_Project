import React, { useState} from 'react';
import axios from 'axios';

interface AddNewItemProps {
  onAdd: () => void;  
}

export const AddNewItem: React.FC<AddNewItemProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (inputValue.trim()) {
      try {
        const idUser = '1'
        const response = await axios.post('http://localhost:3000/chat/create', { name: inputValue , idUser});
        console.log(response)
        if (response.status === 201) { 
          console.log('Novo chat adicionado com sucesso!');
          setInputValue('');
          onAdd(); 
        }
      } catch (error) {
        console.error('Erro ao adicionar novo chat:', error);
      }
    }
  };

  return (


    <div className="bg-slate-700 flex items-center justify-between p-3 m-2 rounded">

      <input
        className=" bg-slate-700 w-10/12 p-3 m-2 text-xs text-white bg-transparent outline-none text-center"
        placeholder="New chat"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-green-400 hover:bg-green-800 text-white font-bold p-2 rounded w-2/12 "
        onClick={handleSubmit}
      >
        +
      </button>
      
    </div>
  );
}