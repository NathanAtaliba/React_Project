import { NewQuestion } from "./components/question";
import { NewResponse } from "./components/response";

export function App() {
  return (
  //painel de tras
  //linha de cima(foto da atendente e nome da atendente)  
  //campo de troca de mensagens (conversa entre o chat e o cliente)
  //campo para digitação das mensagens (campo para digitação do usuario)
  <>
  <div className= "bg-slate-500 text-left flex flex-row items-stretch gap-2">    
    <div className="basis-1/4 text-white p-5">
      <img src="atendente.png" className="bg-white rounded-full w-20"></img>
    </div> 
    <div className="p-10 basis-1/2 text-white font-bold text-left size-10 text-3xl">Atendente Virtual</div> 
  </div>
  <div className="bg-slate-300 text-left text-black">
    <NewQuestion></NewQuestion>
  </div>
  <div className="rounded-lg absolute flex flex-row w-full items-stretch gap-2 bg-transparent h-20 bottom-0 ">
    <input type="text" 
    className= "text-3xl rounded-lg bg-white text-left flex flex-row items-stretch text-black font-medium h-15 w-11/12" />
    <button className="absolute bg-green-400 rounded-full h-18 w-1/12 right-0 top-0 h-20  placeholder:bg-green-800">Enviar</button>
  </div>
  </>  
)
}