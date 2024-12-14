"use client"
import NavLink from "@/components/NavLink";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from 'react-modal'

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="relative w-screen h-[70px] lg:h-[70px] flex px-[50px] sm:px-[20px] justify-between items-center bg-white text-black">
      <Link href="/" className="flex items-center text-xl sm:text-2xl font-bold gap-x-1">
        <Image 
          src="/images/logo.png" 
          width={25} 
          height={25} 
          alt="로고" 
        />
        효성 ENG
      </Link>

      <nav className="hidden lg:flex lg:flex-1 lg:justify-evenly lg:items-center">
        <NavLink href="/company">회사소개</NavLink>
        <NavLink href="/products">제품소개</NavLink>
        <NavLink href="/delivery-inventory">납품 및 재고현황</NavLink>
        <NavLink href="/notices">공지사항</NavLink>
        <NavLink href="/quotation-request">견적문의</NavLink>
      </nav>

      <Image 
        src="/images/menu.png" 
        width={25} 
        height={25} 
        alt="메뉴 버튼" 
        className="lg:hidden cursor-pointer"
        onClick={ () => setisOpen(true) }
      />

      {
        isOpen && (
          <Modal
            isOpen={true}
            onRequestClose={ () => setisOpen(false) }
            ariaHideApp={false}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: '40'
              },
              content: {
                position: 'absolute',
                left: '40vw',
                top: '0px',
                right: '0px',
                bottom: '0px',
                background: '#0f172a',
                color: '#e2e8f0',
                overflow: 'auto',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
              }}}
          >
            <Link href="/" className="flex items-center border-b-[0.5px] border-slate-600 mb-3 pb-3 space-x-2" onClick={ () => setisOpen(false) }>
              <Image src="/images/home_icon.png" width={20} height={20} alt="처음으로 아이콘" />
              <div>처음으로</div>
            </Link>
            <Link href="/company" className="flex items-center border-b-[0.5px] border-slate-600 mb-3 pb-3 space-x-2" onClick={ () => setisOpen(false) }>
              <Image src="/images/company_icon.png" width={20} height={20} alt="회사소개 아이콘"/>
              <div>회사소개</div>
            </Link>
            <Link href="/products" className="flex items-center border-b-[0.5px] border-slate-600 mb-3 pb-3 space-x-2" onClick={ () => setisOpen(false) }>
              <Image src="/images/products_icon.png" width={20} height={20} alt="제품소개 아이콘"/>
              <div>제품소개</div>
            </Link>
            <Link href="/delivery-inventory" className="flex items-center border-b-[0.5px] border-slate-600 mb-3 pb-3 space-x-2" onClick={ () => setisOpen(false) }>
              <Image src="/images/inventory_icon.png" width={20} height={20} alt="아이콘"/>
              <div>납품 및 재고현황</div>
            </Link>
            <Link href="/notices" className="flex items-center border-b-[0.5px] border-slate-600 mb-3 pb-3 space-x-2" onClick={ () => setisOpen(false) }>
              <Image src="/images/notice_icon.png" width={20} height={20} alt="공지사항 아이콘"/>
              <div>공지사항</div>
            </Link>
            <Link href="/quotation-request" className="flex items-center border-b-[0.5px] border-slate-600 mb-3 pb-3 space-x-2" onClick={ () => setisOpen(false) }>
              <Image src="/images/request_icon.png" width={20} height={20} alt="견적문의 아이콘"/>
              <div>견적문의</div>
            </Link>
          </Modal>
        )
      }
    </header>
  );
}
