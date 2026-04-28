'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { PROFILE_DATA } from '../data';

const playfair = Playfair_Display({ subsets: ['latin'] });

const MainSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F172A] relative overflow-hidden px-6">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        {/* 왼쪽: 프로필 비주얼 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="w-full aspect-square bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] rounded-[40%_60%_70%_30%/40%_50%_60%_40%] animate-[morph_8s_ease-in-out_infinite] opacity-20 absolute inset-0" />
          <div className="relative z-10 w-full aspect-square rounded-2xl bg-slate-800/40 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden">
            <span className="text-slate-500">Photo or Memoji</span>
          </div>
        </motion.div>

        {/* 오른쪽: 텍스트 콘텐츠 */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span
              className={`text-[#06B6D4] font-medium tracking-[0.2em] uppercase text-sm ${playfair.className}`}
            >
              About Me
            </span>

            {/* 프로필 타이틀 */}
            <h2 className="text-4xl md:text-3xl font-bold text-white mt-4 leading-tight">
              {PROFILE_DATA.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </motion.div>

          {/* 프로필 설명 */}
          <motion.p className="text-slate-400 text-lg leading-relaxed">
            {PROFILE_DATA.description}
          </motion.p>

          {/* 프로필 태그 */}
          <div className="flex flex-wrap gap-2">
            {PROFILE_DATA.keywords.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 bg-white/5 hover:bg-[#06B6D4]/20 border border-white/10 rounded-full text-white/80 text-sm transition-colors pointer-events-none"
              >
                # {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
