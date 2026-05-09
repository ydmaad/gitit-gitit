// 프로필 타입
export interface Profile {
  title: string;
  description: string;
  keywords: string[];
}

// 프로젝트 타입
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
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

// 프로젝트 데이터
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: '별책부록(Booklet)',
    description:
      '사용자가 책의 바코드를 스캔하거나 ISBN으로 검색하여 책 정보를 가져오고, 독후감을 작성해 개인 서랍에 저장할 수 있는 웹앱',
    tags: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    link: 'https://booklet-v2.vercel.app/',
    image: '/booklet.png',
  },
  {
    id: 2,
    title: '메디헬프(MediHelp)',
    description:
      '복용 중인 약을 효과적으로 관리하고 건강 정보를 공유할 수 있는 종합 디지털 헬스케어 플랫폼',
    tags: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    link: 'https://medi-help-seven.vercel.app/',
    image: '/medihelp.png',
  },
];
