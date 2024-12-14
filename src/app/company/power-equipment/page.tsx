"use client";
import styles from '@/styles/company.module.css';

export default function PowerEquipment () {
    return (
        <div>
            <div className={styles.ac}>1단계 : 분해 및 입고 검사</div>
            <div className={styles.ac}>2단계: 고정자 및 회전자 권선 제거 작업</div>
            <div className={styles.ac}>3단계: 고정자 권선 제작 및 삽입</div>
            <div className={styles.ac}>4단계: 회전자 Bar-End Ring 작업</div>
            <div className={styles.ac}>5단계: 축 교체 작업</div>
            <div className={styles.ac}>6단계: 축 가공 작업</div>
            <div className={styles.ac}>7단계: Store Core Restacking 작업</div>
            <div className={styles.ac}>8단계: Bracket의 Bearing Housing에 Bushing 제작 삽입</div>
            <div className={styles.ac}>9단계: Slip-ring 연마 작업 및 제작</div>
            <div className={styles.ac}>10단계: 세척 및 건조</div>
            <div className={styles.ac}>11단계: 회전자 Run-out Check 및 Balancing</div>
            <div className={styles.ac}>12단계 : 진공함침</div>
            <div className={styles.ac}>13단계: 조립</div>
            <div className={styles.ac}>14단계: 고정자 및 회전자 권선 / Surge Comparision test</div>
            <div className={styles.ac}>15단계: 유부하 시험</div>
            <div className={styles.ac}>16단계 : P.I test 내전압 test</div>
        </div>
    )
}