"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import styles from "../styles/company.module.css"

export default function CompanyTop() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="relative w-full h-[300px]">
                <div className="absolute flex flex-col items-center justify-center w-full h-[300px] z-50 text-white text-center px-[15px]">
                    <div className="text-3xl mb-3">The relenfless pursuit of perfection</div>
                    <div>모터, 감속기, 펌프, 전동워치, 기어박스 등 각종 동력전달 제공</div>
                </div>
                <Image 
                    src="/images/background1.jpg"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    alt="배너이미지1"
                />
            </div>
            <div className="relative flex left-1/2 transform -translate-x-1/2 bg-neutral-50 w-[70vw] sm:w-full h-[60px] z-20 top-[-25px] text-black">
                <Link
                    className="flex justify-center items-center w-[60vw] h-full border-[1px] border-zinc-300" 
                    href='/'
                >
                    처음으로
                </Link>

                <div 
                    className="flex justify-center items-center w-[60vw] h-full border-[1px] border-zinc-300 cursor-pointer"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <span>회사소개</span>
                    <div className="absolute top-[60px] left-1/2 w-full overflow-y-auto">
                        {isOpen && (
                            <>
                                <Link href="/company" className={styles.li}>회사소개</Link>
                                <Link href="/company/items" className={styles.li}>취급품목</Link>
                                <Link href="/company/power-equipment" className={styles.li}>중전기 사업부</Link>
                                <Link href="/company/directions" className={styles.li}>찾아오시는 길</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}