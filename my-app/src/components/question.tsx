interface QuestionProps {
    questionText: string;
  }
  
const Question: React.FC<QuestionProps> = ({ questionText }) => {
    return (
        <div className="grid relative justify-items-start">
            <div className="bg-slate-900 text-white rounded-md m-1 p-1.5 h-auto relative left-0 max-w-96 min-w-min" >
                <p>{questionText}</p>
            </div>
        </div>
    )
}
export default Question;