import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/app/data';

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 1. 상단 네비게이션 & 제목 (Title First) */}
        <header className="mb-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-all mb-8 group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">목록으로 돌아가기</span>
          </Link>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
              {project.title}
              <span className="text-primary not-italic">.</span>
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* 2. 메인 프로젝트 이미지 */}
        <section className="mb-24">
          <div className="relative w-full aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* 3. 프로젝트 정보 & 내가 맡은 역할 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="p-8 bg-neutral/20 border border-white/5 rounded-[2.5rem] backdrop-blur-md">
                <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6">
                  Project Info
                </h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-[10px] text-primary font-bold uppercase mb-1">
                      Period
                    </dt>
                    <dd className="text-sm text-gray-300 font-medium">
                      2024.03 - 2024.05
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] text-primary font-bold uppercase mb-1">
                      Team
                    </dt>
                    <dd className="text-sm text-gray-300 font-medium">
                      FE 2, BE 1, Design 1
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] text-primary font-bold uppercase mb-1">
                      Links
                    </dt>
                    <dd className="flex flex-col gap-2 mt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-sm font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        Live Demo{' '}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                Overview
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                My Contributions
              </h2>
              <ul className="space-y-8">
                <li className="group">
                  <div className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center text-[10px] text-primary font-bold mt-1 group-hover:bg-primary group-hover:text-black transition-all">
                      01
                    </span>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        프론트엔드 아키텍처 및 공통 컴포넌트 설계
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        디자인 시스템을 기반으로 한 재사용 가능한 아토믹
                        컴포넌트를 설계하여 개발 효율성을 30% 향상시켰습니다.
                      </p>
                    </div>
                  </div>
                </li>
                {/* 더 많은 기여 항목들... */}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. 트러블슈팅 (Troubleshooting) */}
        <section className="pt-24 border-t border-white/5">
          <h2 className="text-5xl font-black mb-16 tracking-tighter uppercase italic">
            Trouble<span className="text-primary not-italic">Shooting.</span>
          </h2>
          <div className="flex flex-col gap-10 md:gap-16">
            {project.troubleshooting.map((issue) => (
              <div key={issue.id} className="group relative">
                <div className="p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:border-primary/20 transition-all group">
                  <div className="max-w-3xl">
                    <span className="inline-block px-3 py-1 bg-red-500/10 text-red-500 text-[10px] font-black rounded-lg mb-6 tracking-widest uppercase">
                      Issue
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                      {issue.title}
                    </h3>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                      {issue.problem}
                    </p>

                    <div className="space-y-4">
                      <p className="text-sm font-bold text-green-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />{' '}
                        Solution
                      </p>
                      <div className="p-6 bg-black/40 rounded-2xl border border-white/5 text-gray-300 leading-relaxed">
                        {issue.process}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
