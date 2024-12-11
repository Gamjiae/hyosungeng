'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, Autoplay } from "swiper/modules"
import SwiperCore from 'swiper';
import Image from "next/image"
import image1 from '../../public/images/background1.jpg'
import image2 from '../../public/images/background2.jpg'

export default function Banner() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
      <Swiper
        className="w-full h-[300px]"
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        navigation={true} // prev, next button
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
      >
        <SwiperSlide>
          <div className="absolute w-full h-[300px]">
            <Image 
              src="/images/background1.jpg"    
              fill={true}
              style={{ objectFit: 'cover'}}      
              alt="배너이미지1"
              loading="eager"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/images/background2.jpg"   
            fill={true}
            style={{ objectFit: 'cover'}}          
            alt="배너 이미지2"
            loading="eager"
          />
        </SwiperSlide>
      </Swiper>    
    
  )
}
