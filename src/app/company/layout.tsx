import CompanyTop from "@/components/CompanyTop";

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
