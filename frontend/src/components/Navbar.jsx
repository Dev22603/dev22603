import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", shortcut: "h" },
  { name: "Experience", shortcut: "e" },
  { name: "Events", shortcut: "v" },
  { name: "Contact", shortcut: "c" },
  { name: "Guestbook", shortcut: "g" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);

  const current = hovered || active; // underline follows hover, fallback = active

  // ✅ Handle keypress shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase(); // make case-insensitive
      const foundItem = navItems.find((item) => item.shortcut === key);
      if (foundItem) {
        setActive(foundItem.name);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="flex items-center space-x-6 bg-black px-6 py-4 text-white relative">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActive(item.name)}
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
          className={`relative pb-1 transition-colors cursor-pointer ${
            active === item.name ? "text-white font-semibold" : "text-gray-400"
          }`}
        >
          {item.name}{" "}
          <span className="text-sm text-gray-500">({item.shortcut})</span>

          {/* shared underline */}
          {current === item.name && (
            <motion.div
              layoutId="nav-underline"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-white"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
}
