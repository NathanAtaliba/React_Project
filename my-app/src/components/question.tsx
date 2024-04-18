
interface NewQuestionProps {
    id: string;
    text: string; 
}
  

export function NewQuestion(props: NewQuestionProps){
    return (
        <div className="grid relative justify-items-start">
            <div className="bg-slate-900 text-white rounded-md m-1 p-1.5 w-max h-auto relative left-0" >
                {props.text}
            </div>
        </div>
    )
}