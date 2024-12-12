import Image from "next/image"

export default function Company() {
  return (
    <section className="relative px-[150px]">
      <div className="flex w-full justify-between border-b-[1px] pb-5 mb-5 mt-3 border-neutral-200">
        <div className="flex items-end">
          <div className="text-3xl font-bold mr-6">회사소개</div>
          <div className="text-neutral-500">The relenfless pursuit of perfection</div>
        </div>
        <div className="font-semibold text-2xl">제품상담 : 010-9210-6187</div>
      </div>

      <div className="flex justify-between mt-14 mb-10 text-sm text-neutral-700 leading-7">
        <div>
          <p className="text-2xl font-semibold">
            안녕하십니까?<br/>
            저희 효성ENG에 많은 관심과 성원을 보내주신 모든 분들께<br/>
            진심으로 감사드립니다.
          </p><br/>
          <p>
          당사는 모터, 감속기, 펌프, 기어드모터, 전동윈치, 기어박스 등을 비롯한 각종 동력전달장치 제품을<br/> 
          판매하고 있으며, 산업중고모터 판매 및 수리, 신품 중고펌프 판매 및 수리를 전문으로 하고 있습니다.<br/><br/>
          그동안 경험을 바탕으로 최고의 기술과 서비스로 귀사의 생산력을 높여 드릴 것을 약속드립니다.<br/><br/>
          귀사의 무궁한 발전을 기원하며 고객에 대한 진정한 보답으로 최선을 다하는 기업으로 노력하겠습니다.
          </p>
        </div>

        <div className="">
          <div className="relative border-[1px] border-neutral-200 rounded w-[360px] h-[210px] p-1">
            <div className="relative border-[1px] w-[350px] h-[200px] ">
              <Image 
                src="/images/company_image.png"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="회사 설명 이미지"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex flex-col items-end mt-4">
            <div>- 고객과 처음부터 끝까지 함께하는 회사 -</div>
            <div className="font-semibold">효성ENG 임직원일동</div>
            <div className="flex">
              <div className="text-blue-900 mr-2">효성ENG 대표</div>
              <Image src="/images/name.png" width={80} height={20} alt="대표 이름 이미지"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
