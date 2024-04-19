interface ResponseProps {
    responseText: string;
  }
const Response: React.FC<ResponseProps> = ({ responseText }) => {
    return (
        <div className="grid relative justify-items-end">
            <div className="bg-green-600 text-white rounded-md m-1 p-1.5  max-w-96 min-w-min h-auto relative text-right right-0">
                <p>{responseText}</p>
            </div>
        </div>
    )
}

export default Response;