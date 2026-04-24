'use client';

import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
// motion: 애니메이션 가능한 div
// useMotionValue: 실시간 값 저장(마우스 좌표)
// useSpring: 값을 부드럽게 따라가게 만드는 스프링 애니메이션

export default function MultiFollowCursor() {
  // 마우스 위치를 저장할 MotionValue(초기값은 화면 밖)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 각 원의 움직임 느낌을 결정하는 설정값
  // damping: 감속(클수록 빨리 멈춤)
  // stiffness: 탄성(클수록 빠르게 따라감)
  const mainConfig = { damping: 20, stiffness: 300 }; // 가장 빠름
  const trailConfig = { damping: 25, stiffness: 150 }; // 중간
  const slowConfig = { damping: 30, stiffness: 80 }; // 가장 느림

  // 마우스 값을 스프링 애니메이션으로 변환(부드럽게 따라오게)
  const mainX = useSpring(mouseX, mainConfig);
  const mainY = useSpring(mouseY, mainConfig);

  const trailX = useSpring(mouseX, trailConfig);
  const trailY = useSpring(mouseY, trailConfig);

  const slowX = useSpring(mouseX, slowConfig);
  const slowY = useSpring(mouseY, slowConfig);

  // 마우스 움직임 감지
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // 현재 마우스 좌표를 MotionValue에 업데이트
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    // 이벤트 등록
    window.addEventListener('mousemove', moveCursor);

    // 컴포넌트 사라질 때 이벤트 제거(메모리 누수 방지)
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. 제일 느리게 따라오는 큰 외곽 원 (잔상) */}
      <motion.div
        style={{ x: slowX, y: slowY, left: -20, top: -20 }}
        className="fixed w-10 h-10 rounded-full border border-white/20 pointer-events-none z-[9998] mix-blend-difference"
      />

      {/* 2. 중간 속도로 따라오는 원 */}
      <motion.div
        style={{ x: trailX, y: trailY, left: -12, top: -12 }}
        className="fixed w-6 h-6 rounded-full bg-white/10 pointer-events-none z-[9999] mix-blend-difference"
      />

      {/* 3. 실제 마우스 위치에 가장 가까운 메인 점 */}
      <motion.div
        style={{ x: mainX, y: mainY, left: -4, top: -4 }}
        className="fixed w-2 h-2 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference shadow-[0_0_15px_rgba(255,255,255,0.8)]"
      />
    </>
  );
}
