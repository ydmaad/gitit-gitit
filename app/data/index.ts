// 프로필 타입
export interface Profile {
  title: string;
  description: string;
  keywords: string[];
}

// 프로젝트 타입
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

// 프로필 데이터
export const PROFILE_DATA: Profile = {
  title: '정체된 환경을 넘어,\n함께 목표를 향해 달리는 개발자',
  description: `새로운 도전을 두려워하지 않고 고지식한 환경에서 벗어나 유연한 사고를 지향합니다. 
    JavaScript와 React를 기반으로 탄탄한 기본기를 쌓아왔으며, 
    결과물만큼이나 '함께 만들어가는 과정'의 가치를 중요하게 생각합니다. 
    팀과 함께 성장하며 더 큰 목표를 향해 나아가는 과정에서 최고의 몰입을 경험합니다.`,
  keywords: ['Flexible', 'React Enthusiast', 'Team Player', 'Problem Solver'],
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Booklet',
    description: 'Next.js 15와 Supabase를 활용한 개인 독서 기록 플랫폼입니다.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Supabase'],
    image: '',
    githubUrl: 'https://github.com/ydmaad/booklet',
    demoUrl: '',
  },
];
