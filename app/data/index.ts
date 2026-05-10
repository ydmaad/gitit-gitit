import { Profile, Project } from './types';

// 프로필 데이터
export const PROFILE_DATA: Profile = {
  title: '더 나은 과정을 고민하며,\n함께 가치를 만들어내는 개발자',
  description: `틀에 얽매이지 않는 유연한 사고로 사용자 중심의 웹 경험을 구현합니다.
  React 생태계(혹은 React, Next.js 등)에 대한 이해를 바탕으로 완성도 높은 UI를 개발하며,
  '어떻게 협업할 것인가'에 대한 고민을 놓지 않습니다.
  팀원들과 시너지를 내며 공동의 목표를 달성하는 과정에서 가장 큰 원동력을 얻습니다.`,
  keywords: ['Flexible', 'React Enthusiast', 'Team Player', 'Problem Solver'],
};

// 프로젝트 데이터
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: '별책부록(Booklet)',
    description: '바코드 스캔으로 시작하는 스마트한 독서 기록 서비스',
    longDescription:
      '단순한 독후감 저장을 넘어, 알라딘 API를 활용한 도서 검색 및 바코드 스캔을 통해 사용자가 읽고 있는 책을 빠르게 등록하고 자신만의 서재를 구축할 수 있는 플랫폼입니다.',
    tags: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    link: 'https://booklet-v2.vercel.app/',
    github: 'https://github.com/your-id/booklet-v', // 실제 주소로 바꿔줘!
    image: '/booklet.png',
    period: '2024.05 - 진행 중',
    team: '1인 개발 (개인 프로젝트)',
    contributions: [
      {
        title: '알라딘 Open API 연동 및 데이터 가공',
        description:
          'ISBN 기반 도서 검색 시스템을 구축하고, 서버 사이드에서 데이터를 가공하여 클라이언트 응답 속도를 최적화했습니다.',
      },
      {
        title: 'Supabase를 활용한 실시간 데이터베이스 설계',
        description:
          'PostgreSQL 기반의 유저 서재 테이블을 설계하고, Row Level Security(RLS)를 적용하여 데이터 보안을 강화했습니다.',
      },
    ],
    troubleshooting: [
      {
        id: 1,
        title: 'Next.js Image 컴포넌트 외부 도메인 에러',
        problem:
          '알라딘 API에서 제공하는 도서 이미지 URL이 Next.js의 보안 정책상 렌더링되지 않는 에러가 발생했습니다.',
        process:
          'next.config.js 설정에서 images.remotePatterns를 확인하고 해당 도메인을 허용 리스트에 추가했습니다.',
        solution:
          '외부 이미지 소스를 안전하게 로드할 수 있게 되었으며, 최적화된 WebP 포맷으로 서빙하여 초기 로딩 속도를 약 20% 개선했습니다.',
      },
      {
        id: 2,
        title: 'Next.js Image 컴포넌트 외부 도메인 에러',
        problem:
          '알라딘 API에서 제공하는 도서 이미지 URL이 Next.js의 보안 정책상 렌더링되지 않는 에러가 발생했습니다.',
        process:
          'next.config.js 설정에서 images.remotePatterns를 확인하고 해당 도메인을 허용 리스트에 추가했습니다.',
        solution:
          '외부 이미지 소스를 안전하게 로드할 수 있게 되었으며, 최적화된 WebP 포맷으로 서빙하여 초기 로딩 속도를 약 20% 개선했습니다.',
      },
      {
        id: 3,
        title: 'Next.js Image 컴포넌트 외부 도메인 에러',
        problem:
          '알라딘 API에서 제공하는 도서 이미지 URL이 Next.js의 보안 정책상 렌더링되지 않는 에러가 발생했습니다.',
        process:
          'next.config.js 설정에서 images.remotePatterns를 확인하고 해당 도메인을 허용 리스트에 추가했습니다.',
        solution:
          '외부 이미지 소스를 안전하게 로드할 수 있게 되었으며, 최적화된 WebP 포맷으로 서빙하여 초기 로딩 속도를 약 20% 개선했습니다.',
      },
    ],
  },
  {
    id: 2,
    title: '메디헬프(MediHelp)',
    description:
      '복용 중인 약 관리와 건강 커뮤니티를 결합한 디지털 헬스케어 플랫폼',
    longDescription:
      '사용자가 복용 중인 약품을 등록하고 알림을 설정하여 복약 순응도를 높이며, 사용자 간의 건강 정보를 안전하게 공유할 수 있는 종합 헬스케어 서비스입니다. Supabase를 활용한 실시간 알림 시스템 구축에 집중했습니다.',
    tags: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    link: 'https://medi-help-seven.vercel.app/',
    github: 'https://github.com/your-id/medi-help', // 실제 레포 주소 넣어줘!
    image: '/medihelp.png',
    period: '2024.03 - 2024.05',
    team: 'FE 2, BE 1, Design 1',
    contributions: [
      {
        title: '의약품 검색 및 복약 등록 로직 구현',
        description:
          '공공데이터 API를 연동하여 1만 개 이상의 의약품 데이터를 검색 가능하게 구현하고, 사용자의 복용 스케줄에 따른 맞춤형 등록 시스템을 개발했습니다.',
      },
      {
        title: '건강 정보 공유 커뮤니티 UI/UX 개발',
        description:
          'Next.js의 Server Components를 활용하여 커뮤니티 게시글의 초기 로딩 속도를 최적화하고, 무한 스크롤 기능을 통해 끊김 없는 정보 탐색 경험을 제공했습니다.',
      },
      {
        title: 'Supabase Realtime을 이용한 복약 알림 시스템',
        description:
          '사용자가 약을 먹을 시간에 맞춰 실시간 푸시 알림이 발송되도록 Supabase의 Realtime 기능을 연동하고 프론트엔드 알림 UI를 구축했습니다.',
      },
    ],
    troubleshooting: [
      {
        id: 1,
        title: '다량의 의약품 데이터 로딩 시 발생하는 렌더링 병목 현상',
        problem:
          '검색 결과로 수백 개의 의약품 리스트가 한꺼번에 렌더링되면서 브라우저 프레임 드랍과 반응 속도 저하가 발생했습니다.',
        process:
          'React Virtualized 라이브러리를 검토했으나, 라이브러리 의존성을 줄이기 위해 Intersection Observer API를 직접 활용한 무한 스크롤 및 지연 로딩(Lazy Loading)을 직접 구현하기로 결정했습니다.',
        solution:
          '한 번에 20개의 아이템만 렌더링하고 스크롤이 끝에 닿을 때 추가 데이터를 로드하는 방식으로 변경하여, 초기 렌더링 메모리 점유율을 60% 이상 절감했습니다.',
      },
      {
        id: 2,
        title: '기기별 시간대(Timezone) 차이로 인한 알림 시간 오류',
        problem:
          '서버에 저장된 시간 데이터와 사용자의 현지 시간이 달라 알림이 잘못된 시간에 발송되는 이슈를 확인했습니다.',
        process:
          '데이터베이스에는 UTC 기준으로 시간을 저장하고, 클라이언트에서 라이브러리(dayjs)를 활용해 사용자의 로컬 타임존으로 변환하는 로직을 추가했습니다.',
        solution:
          '사용자의 지역에 상관없이 정확한 시간에 복약 알림을 받을 수 있게 되었으며, 시간 관련 데이터의 일관성을 확보했습니다.',
      },
    ],
  },
];
