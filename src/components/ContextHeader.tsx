export default function ContextHeader({ text }: { text: string }) {
    return (
        <div className="flex w-full justify-between border-b-[1px] pb-5 mb-5 mt-3 border-neutral-200">
            <div className="flex items-end">
                <div className="text-3xl font-bold mr-6">{text}</div>
                <div className="text-neutral-500">The relenfless pursuit of perfection</div>
            </div>
            <div className="font-semibold text-2xl">
                제품상담 : 010-9210-6187
            </div>
        </div>
    )
}