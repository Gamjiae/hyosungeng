import Link from "next/link";
import Image from "next/image";
import "../styles/grid.css";

export default function Card() {
  return (
    <div className="main-parent px-[200px] sm:px-[20px] min-[320px]:px-[10px] flex flex-col sm:space-y-5 text-sm text-black">
      <div className="card1 relative w-full h-[250px] border-[1px] border-neutral-200 bg-neutral-50 p-[30px] text-sm">
        <p className="text-lg mb-[10px]">회사소개</p>
        <p>
          항상 고객님의 요구에 귀 기울여 고객님께 약속 그 이상의 서비스를 제공할
          수 있도록 최선을 다 하겠습니다.
        </p>
        <Link
          href="/company"
          className="absolute flex bottom-[30px] text-neutral-500"
        >
          바로가기
          <Image
            src="/images/arrow.png"
            alt="바로가기"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <div className="card2 relative w-full h-[250px] border-[1px] border-neutral-200 bg-neutral-50 p-[30px]">
        <p className="text-lg mb-[10px]">사업영역</p>
        <p>
          당사는 효성모터, 싸이크로감속기, 유성치차감속기, 효성펌프, 인버터 등
          각종 동력전달장치를 취급 하고 있습니다.
        </p>
        <Link
          href="/products"
          className="absolute flex bottom-[30px] text-neutral-500 text-sm mt-[10px]"
        >
          바로가기
          <Image
            src="/images/arrow.png"
            alt="바로가기"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <div className="card3 w-full h-[250px] border-[1px] border-neutral-200 bg-neutral-50 p-[30px]">
        <p className="text-lg mb-[10px]">고객센터</p>
        <p>연락주시면 빠른 시간안에 답신 드리겠습니다.</p>
      </div>

      <div className="card4 w-full h-[200px] border-[1px] border-neutral-200 bg-neutral-50 p-[30px]">
        <p className="text-lg mb-[10px]">취급품목</p>
        <div className="w-150 h-100" />
        <div className="w-150 h-100" />
        <div className="w-150 h-100" />
      </div>

      <div className="card5 w-full h-[200px] border-[1px] border-neutral-200 bg-neutral-50 p-[30px]">
        <p className="text-lg mb-[10px]">고객센터</p>
        <div className="" />
      </div>
    </div>
  );
}
