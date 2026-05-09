import Image from 'next/image';
import { PROJECTS } from '../data';

const ProjectSection = () => {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* 배경 애니메이션 블롭 (globals.css의 keyframes 활용) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob1" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-blob2" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-tertiary/20 rounded-full blur-[80px] animate-blob3" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col w-fit mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Projects<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-secondary to-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-neutral/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:-translate-y-2"
            >
              {/* 이미지 컨테이너 */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold tracking-widest uppercase rounded-lg flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                    Production
                  </span>
                </div>
              </div>

              {/* 콘텐츠 영역 */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-[11px] font-medium rounded-full border border-white/10 transition-colors group-hover:border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 액션 버튼 */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-sm font-bold text-white transition-all"
                >
                  <span className="relative">
                    View Case Study
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/btn:w-full" />
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
