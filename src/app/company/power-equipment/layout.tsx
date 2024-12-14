"use client"

import { usePathname } from "next/navigation";
import ContextHeader from "@/components/ContextHeader";
import styles from '@/styles/company.module.css';
import Link from "next/link";

export default function NoticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname(); // 현재 경로를 가져옵니다.

  return (
    <section className="relative px-[150px] sm:px-[15px] mb-[100px]">
      <ContextHeader text="중전기 사업부" />
      <div className="flex w-full h-12 font-bold border-[1px] border-zinc-300 mt-12 mb-14">
        {/* 조건부로 'active' 또는 'inactive' 클래스를 적용 */}
        <Link
          href="/company/power-equipment"
          className={`${styles.menu} ${path === "/company/power-equipment" ? styles.active : styles.inactive}`}
        >
          A.C Motor
        </Link>
        <Link
          href="/company/power-equipment/dc-motor"
          className={`${styles.menu} ${path === "/company/power-equipment/dc-motor" ? styles.active : styles.inactive}`}
        >
          D.C Motor
        </Link>
        <Link
          href="/company/power-equipment/special-equipment"
          className={`${styles.menu} ${path === "/company/power-equipment/special-equipment" ? styles.active : styles.inactive}`}
        >
          정지 및 특수기기
        </Link>
        <Link
          href="/company/power-equipment/field-inspection-repair"
          className={`${styles.menu} ${path === "/company/power-equipment/field-inspection-repair" ? styles.active : styles.inactive}`}
        >
          현장진단 및 보수
        </Link>
      </div>
      <div>{children}</div>
    </section>
  );
}
