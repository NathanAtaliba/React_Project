import { useState } from "react";
import { NewQuestion } from "./components/question";
import { NewResponse } from "./components/response";

export function App() {

  interface Title{
    id: number,
    name: string,
    responses:[],
    questions:[],
  }
/*
const [search, setSearch ] = useState('')

const [chat, setChat] = useState<Chat[]>(() => {

  const notesOnStorage = 

  if (notesOnStorage){

    return JSON.parse(notesOnStorage)

  }
    return []
})
function addResponde(){

}

function searchTitle(){

}*/

return ( 
<>
<div className="h-screen w-full relative overflow-y-scroll">

  <div className="bg-slate-900 flex flex-col w-1/12 h-screen left-0 relative">
    TELA DA ESQUERDA
  </div>

  <div className= "bg-slate-900 text-left flex flex-row items-stretch gap-2 top-0 right-0 w-11/12 relative">    
    <div className="basis-1/4 text-white p-5">
      <img src="atendente.png" className="bg-white rounded-full w-20"></img>
    </div> 
    <div className="p-10 basis-1/2 text-white font-bold text-left size-10 text-3xl">Atendente Virtual</div> 
  </div>

  <div className="w-11/12 overflow-y-scroll right-0 relative h-screen">
    TELA DO MEIO
  </div>

  <div className="rounded-lg flex flex-row w-11/12 items-stretch gap-2 bg-transparent right-0 bottom-0 h-20 relative">
    <input type="text" className= "p-5 text-3xl rounded-full bg-slate-900 flex flex-row items-stretch text-white font-medium h-15 w-11/12" placeholder="Mensagem" />
    <button className="relative bg-green-400 rounded-full h-18 w-1/12 h-20 right-0 placeholder:bg-green-800">Enviar</button>
  </div>

</div>
</>  
)
}