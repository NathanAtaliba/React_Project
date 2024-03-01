import { NewQuestion } from "./components/question";
import { NewResponse } from "./components/response";

export function App() {

  interface Title{
    id: number,
    name: string,
    responses:[],
    questions:[],
  }

  return ( 
  <>
  <div className= "bg-slate-900 text-left flex flex-row items-stretch gap-2 relative">    
    <div className="basis-1/4 text-white p-5">
      <img src="atendente.png" className="bg-white rounded-full w-20"></img>
    </div> 
    <div className="p-10 basis-1/2 text-white font-bold text-left size-10 text-3xl">Atendente Virtual</div> 
  </div>
<div className="w-full overflow-y-scroll relative h-screen">
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>
    <NewQuestion/>
    <NewResponse/>

</div>
  <div className="rounded-lg flex flex-row w-full items-stretch gap-2 bg-transparent bottom-0 h-20 relative">
    <input type="text" 
    className= "p-5 text-3xl rounded-full bg-slate-900 flex flex-row items-stretch text-white font-medium h-15 w-11/12" placeholder="Mensagem" />
    <button className="relative bg-green-400 rounded-full h-18 w-1/12 h-20 right-0 placeholder:bg-green-800">Enviar</button>
  </div>
  </>  
)
}