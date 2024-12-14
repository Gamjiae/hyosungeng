type Props = {
    topic?: string;
    body?: string;
    details?: string[];
    others?: string[];
}

export default function ItemBox({ topic, body, details, others }: Props) {
    return (
        <div className="w-full border-[1px] border-neutral-200 rounded-lg mb-5">
            <div className="flex items-center w-full h-[50px] px-4 bg-neutral-200 font-bold rounded-t-md">
                {topic}
            </div>
            <div className="p-4">
                <div className="font-bold border-b-[1px] border-b-neutral-200 pb-[10px] mb-[10px]">
                    ▶ {body}
                </div>
                <div className={`${ others ? "border-b-[1px] border-b-neutral-200 pb-[10px] mb-[10px]" : ""}`}>
                    {details?.map((detail, index) => (
                       <span className="mr-2" key={index}>· {detail}</span> 
                    ))}
                </div>
                <div>
                    {others?.map((other, index) => (
                        <div className="mr-2" key={index}>✔ {other}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}