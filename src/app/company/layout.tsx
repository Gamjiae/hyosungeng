import CompanyTop from "@/components/CompanyTop";

export default function NoticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CompanyTop />
      <div className="mb-14">{children}</div>
    </div>  
  )
}
