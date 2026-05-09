'use client';

import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data';
import Image from 'next/image';

const ProfileSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 py-24 bg-slate-900">
      {/* 배경 장식 (블러 효과) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 메인 래퍼: 세로 정렬(flex-col)로 타이틀과 그리드를 분리 */}
      <div className="w-full max-w-6xl mx-auto flex flex-col z-10 relative">
        {/* 1. 상단 섹션 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col w-fit mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            About Me<span className="text-[#06B6D4]">.</span>
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full" />
        </motion.div>

        {/* 2. 메인 콘텐츠 (좌측 이미지 / 우측 텍스트) */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* 왼쪽: 프로필 비주얼 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* 배경 애니메이션 그래픽 */}
            <div className="w-full aspect-square bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] rounded-[40%_60%_70%_30%/40%_50%_60%_40%] animate-[morph_8s_ease-in-out_infinite] opacity-20 absolute inset-0" />

            {/* 실제 이미지가 들어갈 박스 */}
            <div className="relative z-10 w-full aspect-square rounded-2xl bg-slate-800/40 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden">
              <Image
                src="/profile_image.jpg"
                alt="내 프로필 이미지"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* 오른쪽: 텍스트 콘텐츠 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* 프로필 메인 카피 */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">
                {PROFILE_DATA.title.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </motion.div>

            {/* 프로필 설명 */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              {PROFILE_DATA.description}
            </motion.p>

            {/* 프로필 태그/키워드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {PROFILE_DATA.keywords.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 bg-white/5 hover:border-primary/20 hover:text-primary border border-white/10 rounded-full text-slate-300 text-sm transition-colors cursor-default"
                >
                  # {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
