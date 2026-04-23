import { Playfair_Display } from 'next/font/google';
// Next.js에서 제공하는 구글 폰트 최적화 기능
// 외부 CDN이 아닌 빌드 시 자동으로 최적화된 폰트를 사용
const playfair = Playfair_Display({ subsets: ['latin'], style: 'normal' });

const HeroSection = () => {
  return (
    // 전체 배경색
    <section className="relative w-full h-screen bg-[#0F172A] overflow-hidden flex flex-col items-center justify-center">
      {/*  블러 수치를 160px로 올려서 경계선을 완전히 무너뜨리고 물감처럼 섞이게 함 */}
      <div className="absolute inset-0 z-0 overflow-hidden blur-[160px]">
        {/* animate-blob1 적용 */}
        <div className="absolute top-0 left-0 w-[45rem] h-[45rem] bg-[#06B6D4] rounded-full mix-blend-screen animate-blob1 opacity-80" />

        {/* animate-blob2 적용 */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#8B5CF6] rounded-full mix-blend-screen animate-blob2 opacity-80" />

        {/* animate-blob3 적용 */}
        <div className="absolute bottom-0 left-[20%] w-[55rem] h-[55rem] bg-[#3B82F6] rounded-full mix-blend-screen animate-blob3 opacity-80" />
      </div>

      {/* 전면 콘텐츠 (로고 및 스크롤) */}
      <div className="relative z-30 flex flex-col items-center">
        <span
          className={`text-6xl md:text-2xl text-[#F8FAFC] tracking-wider drop-shadow-md cursor-default select-none ${playfair.className}`}
        >
          Min-ae
        </span>
        {/* <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
          소통으로 몰입을,
          <br />
          협업으로 <span className="text-[#06B6D4]">결과</span>를 만듭니다.
        </h1>
        <p className="max-w-2xl text-[#F8FAFC]/70 text-base md:text-lg font-light leading-relaxed mb-10 break-keep">
          제한된 환경 속에서도 팀원들과 소통하며{' '}
          <br className="hidden md:block" />
          끝내 최선의 결과물을 만들어내는 프론트엔드 개발자입니다.
        </p>
        <button className="px-8 py-3.5 bg-white text-[#0F172A] rounded-full font-semibold hover:bg-[#06B6D4] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl">
          View Projects
        </button> */}
      </div>

      {/* 마우스 */}
      <div className="absolute bottom-12 z-30 flex flex-col items-center text-[#f8f1e7]/70 text-sm">
        <span className="mb-3 tracking-widest uppercase text-xs font-light">
          Scroll down
        </span>
        <div className="w-5 h-8 border border-[#f8f1e7]/70 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#f8f1e7]/70 rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
