import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './components/question';
import Response from './components/response';
import List from './components/chatList';

export function App() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState<{ question: string; response: string }[]>([]);

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
    // Carregar as mensagens do chat selecionado
    loadChatMessages(chatId);
  };

  const loadChatMessages = async (chatId: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/chat/${chatId}`);
      const messages = response.data[0].messages || [];
      setChatMessages(messages);
      console.log(messages)
    } catch (error) {
      console.error('Erro ao carregar mensagens do chat:', error);
    }
  };

  const sendQuestion = async () => {
    try {
      const questionText = inputText.trim();
      const idUser = 1;
      const idChat = selectedChatId;

      if (!idChat) {
        console.error('Nenhum chat selecionado.');
        return;
      }

      if (!questionText) {
        console.error('Digite uma pergunta.');
        return;
      }

      await axios.post('http://localhost:3000/send/question', {
        message: questionText,
        idUser: idUser,
        idChat: idChat,
      });
      // Recarregar as mensagens após o envio da pergunta
      loadChatMessages(idChat);
      setInputText(''); // Limpar o input após enviar

      console.log('Pergunta enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar pergunta:', error);
    }
  };

  useEffect(() => {
    // Carregar mensagens ao selecionar um chat
    if (selectedChatId) {
      loadChatMessages(selectedChatId);
    }
  }, [selectedChatId]);

  return (
    <>
      <div className="h-screen w-full overflow-y-scroll relative">
        <div className="bg-slate-900 flex flex-col w-2/12 h-screen top-0 left-0 rounded-lg overflow-y-scroll absolute">
          <List onSelectChat={handleChatSelect} />
        </div>

        <div className="h-screen w-10/12 flex flex-col absolute top-0 right-0">
          <div className="bg-slate-900 text-left flex flex-row items-stretch gap-2 top-0 right-0 w-full relative rounded-lg">
            <div className="basis-1/4 text-white p-5">
              <img src="atendente.png" className="bg-white rounded-full w-20" alt="Avatar" />
            </div>
            <div className="p-10 basis-1/2 text-white font-bold text-left size-10 text-3xl">Atendente Virtual</div>
          </div>

          <div className="w-full right-0 h-screen overflow-y-scroll relative">
            {chatMessages.map((messageData, index) => {
              const { question, response } = messageData;

              // Renderiza a pergunta e resposta juntas
              return (
                <div key={`message_${index}`} className="flex flex-col gap-2">
                  <Question questionText={question} />
                  <Response responseText={response} />
                </div>
              );
            })}
          </div>

          <div className="rounded-lg flex flex-row w-full items-stretch gap-2 bg-transparent right-0 bottom-0 h-20 relative">
            <input
              type="text"
              className="p-5 text-3xl rounded-full bg-slate-900 flex flex-row items-stretch text-white font-medium h-15 w-11/12"
              placeholder="Mensagem"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              className="relative bg-green-400 rounded-full h-18 w-1/12 h-20 right-0 hover:bg-green-600"
              onClick={sendQuestion}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}