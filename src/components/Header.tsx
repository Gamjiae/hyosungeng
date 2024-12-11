import NavLink from '@/components/NavLink'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-screen h-[100px] flex px-[100px] justify-evenly items-center bg-white text-black">
      <Link href="/" className="text-xl">
        효성 ENG
      </Link>

      <NavLink href="/company">회사소개</NavLink>
      <NavLink href="/products">제품소개</NavLink>
      <NavLink href="/delivery-inventory">납품 및 재고현황</NavLink>
      <NavLink href="/notices">공지사항</NavLink>
      <NavLink href="/quotation-request">견적문의</NavLink>
    </header>
  )
}
