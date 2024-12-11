import Link from "next/link"
export default function Footer() {
    return (
        <footer className="w-screen h-[200px] text-xs text-neutral-400">
            <nav className="w-full flex space-x-4 px-[80px] py-[20px] bg-zinc-800">
                <Link href="/">
                    처음으로
                </Link>
                <Link href="/">
                    회사소개
                </Link>
                <Link href="/">
                    견적문의
                </Link>
                <Link href="/">
                    관리자
                </Link>
            </nav>
            <div className="bg-zinc-800">
                <div>효성ENG 본사 및 공장 : 경기도 화성시 팔탄면 푸른들판로 928-3 (창곡리325)</div>
                <div>
                    <span>전화</span>
                    <div>031)354-2286</div>
                </div>
            </div>
        </footer>
    )
}