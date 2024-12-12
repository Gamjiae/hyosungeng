import ContextHeader from "@/components/ContextHeader";
import ItemBox from "@/components/ItemBox";

export default function Items() {
  return (
    <section className="relative px-[150px] mb-[100px]">
      <ContextHeader text="취급품목"/>

      <div className="mt-14 mb-10 text-sm text-neutral-700 leading-7">
        <ItemBox topic="판매사업부" body="신형 모터, 기어드모터, 인버터, 펌프 판매" details={["고저압motor", "A/C MOTOR", "D/C MOTOR", "V/S MOTOR", "G/E MOTOR", "브레이크 MOTOR", "권선형 MOTOR", "소형 MOTOR"]}/>
        <ItemBox topic="모터사업부" body="산업 중고 모터 판매 및 수리" details={["고저압motor", "A/C MOTOR", "D/C MOTOR", "V/S MOTOR", "G/E MOTOR", "브레이크 MOTOR", "권선형 MOTOR", "소형 MOTOR"]} others={["특수모터 판매 및 수리", "대형 고저압 모터 제고 다량확보", "중고 모타 고가 매입 및 임대상담", "50HZ 재권선 전문"]}/>
        <ItemBox topic="펌프사업부" body="신품 중고 펌프 판매 및 수리" details={["오배수용 PUMP", "내산용 PUMP", "화학용 PUMP", "수중용 PUMP", "루츠브로와", "링브로와", "기어 PUMP"]} others={["특수펌프 판매 및 수리", "중고펌프 고가 매입 및 임대 상담"]} />
      </div>
    </section>
  )
}
