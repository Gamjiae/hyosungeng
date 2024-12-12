import CompanyTop from "@/components/CompanyTop";
import Header from "@/components/Header";
export default function NoticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CompanyTop />
      <div>{children}</div>
    </div>  
  )
}
