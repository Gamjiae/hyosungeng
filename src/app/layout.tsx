import Header from '@/components/Header'
import '../styles/globals.css'

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