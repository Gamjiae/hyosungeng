import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-[calc(100vh - 200px)]">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
