import { Moon } from "lucide-react";

export default function Navbar() {
  const links = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <h1 className="text-[20px] font-bold text-zinc-900">
          Riwas
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <nav>
            <ul className="flex items-center gap-8">
              {links.map((link, index) => (
                <li
                  key={link}
                  className={`cursor-pointer text-[16px] font-medium transition ${
                    index === 0
                      ? "text-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </nav>

          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 hover:bg-zinc-100">
            <Moon size={18} />
          </button>

        </div>

      </div>
    </header>
  );
}