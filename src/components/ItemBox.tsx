import Image from "next/image";

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
                <div className="flex items-center font-bold border-b-[1px] border-b-neutral-200 pb-[10px] mb-[10px] space-x-2">
                    <Image src="/images/down_arrow.png" width={15} height={15} alt="화살표 이미지" />
                    {body}
                </div>
                <div>
                    {details?.map((detail, index) => (
                       <span className="mr-2" key={index}>· {detail}</span> 
                    ))}
                </div>
                <div>
                    {others?.map((other, index) => (
                        <span className="mr-2" key={index}>·{other}</span> 
                    ))}
                </div>
            </div>
        </div>
    )
}