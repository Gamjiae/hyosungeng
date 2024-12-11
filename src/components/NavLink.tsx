import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative group text-black hover:text-orange-400 transition-all duration-300"
    >
      {children}
      <span className="absolute bottom-[-5px] left-1/2 w-0 h-[3px] bg-orange-400 transition-all duration-300 group-hover:w-[120%] group-hover:left-[-10%] group-hover:right-[-10%]" />
    </Link>
  )
}
