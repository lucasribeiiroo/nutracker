"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  StarOutlined,
  LineChartOutlined,
  SnippetsOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { useUser } from "@clerk/nextjs";

const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LineChartOutlined,
  },
  { href: "/favoritos", label: "Favoritos", icon: StarOutlined },
  { href: "/planos", label: "Planos", icon: SnippetsOutlined },
  { href: "/organizacao", label: "Organizar", icon: CalendarOutlined },
];

export default function AppLayout({ children }: any) {
  const pathname = usePathname();
  const { isLoaded } = useUser();

  return (
    <>
      <div className="flex flex-col h-screen bg-white md:flex-row">
        {/* Sidebar for medium screens and up */}
        <aside className="hidden md:block w-64 bg-gradient-to-b from-green-800  to-white ">
          <nav className="mt-10">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-4  hover:bg-green-800 ${
                      pathname === item.href ? "bg-black" : ""
                    }`}
                  >
                    <item.icon className="mr-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-mono md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full text-slate-600">
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h2>
          </header>
          {children}
        </main>

        {/* Bottom tabs for small screens */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
          <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center py-2 px-4 ${
                    pathname === item.href ? "text-green-600" : "text-white"
                  }`}
                >
                  <item.icon className="mr-2" />
                  <span className="text-xs mt-1 ">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
