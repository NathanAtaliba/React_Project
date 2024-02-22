export function App() {
  return (
  //painel de tras
  //linha de cima(foto da atendente e nome da atendente)  
  //campo de troca de mensagens (conversa entre o chat e o cliente)
  //campo para digitação das mensagens (campo para digitação do usuario)
  <div className= 'bg-slate-500 text-left flex flex-row items-stretch space-x-0'>    
    <div className='basis-1/4 text-white'>
      <img src="atendente.png" className="bg-white rounded-full w-10 "></img>
    </div> 
    <div className="basis-1/2 text-white font-bold text-left">Atendente Virtual</div> 

  </div>
  )
}