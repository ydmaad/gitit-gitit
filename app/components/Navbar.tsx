import Link from 'next/link';

export default function Navbar() {
  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="w-full border-b border-white/10 bg-black/5 backdrop-blur-sm">
      <div className="flex h-16 items-center px-6 lg:px-12">
        <div>
          <span className="text-lg font-light tracking-wider text-white/90">
            Min-ae
          </span>
        </div>

        {/* 메뉴 */}
        <div className="flex items-center gap-10 ml-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-light tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
