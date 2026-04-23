import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 양민애 포트폴리오',
  description: 'Next.js와 Tailwind CSS로 만든 개발자 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
