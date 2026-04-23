'use client';

import { motion } from 'framer-motion';

// 인적 사항이나 키워드는 데이터로 분리해서 관리하면 나중에 수정하기 편해!
const PROFILE_DATA = {
  title: '정체된 환경을 넘어,\n함께 목표를 향해 달리는 개발자',
  description: `새로운 도전을 두려워하지 않고 고지식한 환경에서 벗어나 유연한 사고를 지향합니다. 
  JavaScript와 React를 기반으로 탄탄한 기본기를 쌓아왔으며, 
  결과물만큼이나 '함께 만들어가는 과정'의 가치를 중요하게 생각합니다. 
  팀과 함께 성장하며 더 큰 목표를 향해 나아가는 과정에서 최고의 몰입을 경험합니다.`,
  keywords: ['Flexible', 'React Enthusiast', 'Team Player', 'Problem Solver'],
};
const MainSection = () => {
  return (
    <section
      id="about"
      className="h-screen py-20 px-6 md:px-12 bg-[#0F172A] dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* 섹션 타이틀 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white dark:text-slate-800"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 이미지 섹션 (Memoji나 사진 넣기) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-square bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden flex items-center justify-center backdrop-blur-sm"
          >
            {/* 임시 텍스트 - 실제 이미지 태그 <img /> 로 교체하면 돼! */}
            <span className="text-slate-500 text-lg font-medium">
              Photo / Memoji
            </span>
          </motion.div>

          {/* 텍스트 섹션 */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold leading-tight text-blue-200 whitespace-pre-line"
            >
              {PROFILE_DATA.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 leading-relaxed text-lg"
            >
              {PROFILE_DATA.description}
            </motion.p>

            {/* 키워드 태그들 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {PROFILE_DATA.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm font-semibold tracking-wide"
                >
                  #{keyword}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
