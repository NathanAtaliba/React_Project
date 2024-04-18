interface NewResponseProps {
    id: string;
    text: string; 
}

export function NewResponse(props: NewResponseProps ){
    return (
        <div className="grid relative justify-items-end">
            <div className="bg-green-600 text-white rounded-md m-1 p-1.5 w-max h-auto relative text-right right-0">
                {props.text}
            </div>
        </div>
    )
}