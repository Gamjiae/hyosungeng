import Header from '@/components/Header'
import '../styles/globals.css'

import 'swiper/css'
// import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
