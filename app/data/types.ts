// 프로필 타입
export interface Profile {
  title: string;
  description: string;
  keywords: string[];
}

// 트러블슈팅을 위한 상세 타입
export interface Troubleshooting {
  id: number;
  title: string;
  problem: string;
  process: string;
  solution: string;
}

// 프로젝트 상세 기여 내용
export interface Contribution {
  title: string;
  description: string;
}

// 업데이트된 프로젝트 타입
export interface Project {
  id: number;
  title: string;
  description: string; // 메인 카드용 짧은 설명
  longDescription?: string; // 상세 페이지용 긴 설명
  tags: string[];
  link: string;
  github?: string; // 깃허브 링크도 있으면 좋겠지?
  image: string;
  period: string; // 개발 기간
  team: string; // 팀 구성 (예: FE 2, BE 1)
  contributions: Contribution[]; // 내 역할
  troubleshooting: Troubleshooting[]; // 트러블슈팅 경험
}
