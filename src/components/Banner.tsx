"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";

export default function Banner() {
  SwiperCore.use([Navigation, Autoplay]);

  return (
    <Swiper
      className="w-full h-[500px] text-white mb-[30px]"
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
        <div className="absolute flex flex-col items-center justify-center w-full h-full z-50">
          <div className="font-bold text-3xl">The Relenfless Pursuit</div>
          <div className="font-light text-3xl">Of Perfection</div>
          <br />
          <div>효성ENG는 그동안의 경험을 바탕으로 최고의 기술력과 서비스로</div>
          <div>귀사의 생산력을 높여드릴 것을 약속합니다.</div>
        </div>
        <Image
          src="/images/background1.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
          alt="배너이미지1"
          loading="eager"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute flex flex-col items-center justify-center w-full h-full z-50">
          <div className="font-bold text-3xl">The Relenfless Pursuit</div>
          <div className="font-light text-3xl">Of Perfection</div>
          <br />
          <div>효성ENG는 그동안의 경험을 바탕으로 최고의 기술력과 서비스로</div>
          <div>귀사의 생산력을 높여드릴 것을 약속합니다.</div>
        </div>
        <Image
          src="/images/background2.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
          alt="배너 이미지2"
          loading="eager"
        />
      </SwiperSlide>
    </Swiper>
  );
}
