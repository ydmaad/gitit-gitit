import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], style: 'normal' });

const HeroSection = () => {
  return (
    // 전체 배경색
    <main className="relative w-full h-screen bg-[#0F172A] overflow-hidden flex flex-col items-center justify-center">
      {/* ✨ 블러 수치를 160px로 올려서 경계선을 완전히 무너뜨리고 물감처럼 섞이게 합니다. */}
      <div className="absolute inset-0 z-0 overflow-hidden blur-[160px]">
        {/* 오렌지색 블랍 (크기 키움 + animate-blob1 적용) */}
        <div className="absolute top-0 left-0 w-[45rem] h-[45rem] bg-[#06B6D4] rounded-full mix-blend-screen animate-blob1 opacity-80" />

        {/* 붉은색 블랍 (크기 키움 + animate-blob2 적용) */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#8B5CF6] rounded-full mix-blend-screen animate-blob2 opacity-80" />

        {/* 베이지색 블랍 (크기 키움 + animate-blob3 적용) */}
        <div className="absolute bottom-0 left-[20%] w-[55rem] h-[55rem] bg-[#3B82F6] rounded-full mix-blend-screen animate-blob3 opacity-80" />
      </div>

      {/* 전면 콘텐츠 (로고 및 스크롤) */}
      <div className="relative z-30 flex flex-col items-center">
        <h1
          className={`text-6xl md:text-2xl text-[#F8FAFC] tracking-wider drop-shadow-md cursor-default select-none ${playfair.className}`}
        >
          Min-ae
        </h1>
      </div>

      <div className="absolute bottom-12 z-30 flex flex-col items-center text-[#f8f1e7]/70 text-sm">
        <span className="mb-3 tracking-widest uppercase text-xs font-light">
          Scroll down
        </span>
        <div className="w-5 h-8 border border-[#f8f1e7]/70 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#f8f1e7]/70 rounded-full animate-bounce" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
