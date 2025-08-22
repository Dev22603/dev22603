import { useState } from "react";

const navItems = [
  { name: "Home", shortcut: "h" },
  { name: "Experience", shortcut: "e" },
  { name: "Events", shortcut: "v" },
  { name: "Blogs", shortcut: "b" },
  { name: "Designs", shortcut: "d" },
  { name: "Contact", shortcut: "c" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="flex items-center space-x-6 bg-black px-6 py-4 text-white">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActive(item.name)}
          className="relative pb-1"
        >
          <span
            className={`${
              active === item.name ? "text-white font-semibold" : "text-gray-400"
            }`}
          >
            {item.name} <span className="text-sm">({item.shortcut})</span>
          </span>
          {/* underline indicator */}
          {active === item.name && (
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transition-all duration-300"></span>
          )}
        </button>
      ))}
    </nav>
  );
}
