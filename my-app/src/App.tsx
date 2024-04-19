import Question from "./components/question";
import Response from "./components/response";
import List from './components/chatList';

export function App() {

return ( 
<>
<div className="h-screen w-full overflow-y-scroll relative">

  <div className="bg-slate-900 flex flex-col w-2/12 h-screen top-0 left-0 rounded-lg overflow-y-scroll absolute">
    <List/>
  </div>

<div className="h-screen w-10/12 flex flex-col absolute top-0 right-0">
  <div className= "bg-slate-900 text-left flex flex-row items-stretch gap-2 top-0 right-0 w-full relative rounded-lg">    
    <div className="basis-1/4 text-white p-5">
      <img src="atendente.png" className="bg-white rounded-full w-20"></img>
    </div> 
    <div className="p-10 basis-1/2 text-white font-bold text-left size-10 text-3xl">Atendente Virtual</div> 
  </div>

  <div className="w-full right-0 h-screen overflow-y-scroll relative">
    <Question questionText="123"/>
    <Response responseText="123"/>
  </div>

  <div className="rounded-lg flex flex-row w-full items-stretch gap-2 bg-transparent right-0 bottom-0 h-20 relative">
    <input type="text" className= "p-5 text-3xl rounded-full bg-slate-900 flex flex-row items-stretch text-white font-medium h-15 w-11/12" placeholder="Mensagem" />
    <button className="relative bg-green-400 rounded-full h-18 w-1/12 h-20 right-0 placeholder:bg-green-800">Enviar</button>
  </div>

  </div>
</div>

</>  
)
}