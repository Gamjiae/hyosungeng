import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../styles/globals.css'
import 'swiper/css'
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
        <Footer />
      </body>
    </html>
  )
}
