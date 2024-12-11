import Card from '@/components/Card'
import RootLayout from './layout'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <div className="xl:px-[200px] sm:px-[20px] min-[320px]:px-[10px] bg-white">
      <Banner />
      <Card />
    </div>
  )
}
