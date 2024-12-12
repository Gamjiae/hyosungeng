import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-screen h-[150px] text-xs text-neutral-400 bg-zinc-900">
      <nav className="w-full flex space-x-4 px-[150px] py-[20px] bg-zinc-800">
        <Link href="/">처음으로</Link>
        <Link href="/">회사소개</Link>
        <Link href="/">견적문의</Link>
        <Link href="/">관리자</Link>
      </nav>
      <div className="w-full flex justify-between px-[150px] py-[20px] bg-zinc-900 leading-5">
        <div>
          <div>
            효성ENG 본사 및 공장 : 경기도 화성시 팔탄면 푸른들판로 928-3
            (창곡리325)
          </div>
          <div>
            <span>전화 : </span>
            <span className="font-light">031)354-2286</span>
            <span>팩스 : </span>
            <span className="font-light">031)354-2286</span>
            <span>이메일 : </span>
            <span className="font-light">kjb4315@naver.com</span>
          </div>
          <div className="text-zinc-300 text-base">
            copyright ⓒ 2018 (주)효성이앤지 www.hyosungeng.co.kr all rights reserved.
          </div>
        </div>
        <Image 
          src="/images/logo.png" 
          width={25} 
          height={25} 
          alt="로고" 
        />
        <div className="text-lg">효성 ENG</div>
      </div>
    </footer>
  );
}
