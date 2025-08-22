import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", shortcut: "h" },
  { name: "Experience", shortcut: "e" },
  { name: "Events", shortcut: "v" },
  { name: "Contact", shortcut: "c" },
  { name: "Guestbook", shortcut: "g" },
];

export default function Navbar({className}) {
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
    <nav className={cn("flex items-center rounded-xl space-x-6 bg-black px-6 py-3 gap-2 text-white relative", className)}>
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActive(item.name)}
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
          className={`relative pb-1 transition-colors cursor-pointer font-medium ${
            active === item.name ? "text-white" : "text-gray-400"
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
