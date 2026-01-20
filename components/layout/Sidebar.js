"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "/icons/dashboard/dashboard.svg",
  },
  {
    name: "Tasks",
    path: "/dashboard/tasks",
    icon: "/icons/dashboard/tasks.svg",
  },
  {
    name: "Notes",
    path: "/dashboard/notes",
    icon: "/icons/dashboard/notes.svg",
  },
  {
    name: "Links",
    path: "/dashboard/links",
    icon: "/icons/dashboard/link-alt.svg",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">DevBoard</h1>
        <p className="text-xs text-gray-500">Developer Dashboard</p>
      </div>

      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all
                ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <img
                src={item.icon}
                alt={item.name}
                className={`w-5 h-5 ${
                  isActive ? "invert" : "opacity-70"
                }`}
              />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
