"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PieChart,
  Wallet,
  ArrowRightLeft,
  User,
  TrendingUp,
  LayoutGrid,
  Menu,
  Building,
  LogOut,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Painel", href: "/dashboard", icon: PieChart },
    { name: "Mercado", href: "/marketplace", icon: LayoutGrid },
    { name: "Carteira", href: "/portfolio", icon: Wallet },
    { name: "Transações", href: "/transactions", icon: ArrowRightLeft },
    { name: "Captar Recursos", href: "/raise-capital", icon: Building },
    { name: "Perfil", href: "/profile", icon: User },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6 text-primary" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-screen w-64 bg-white border-r border-surface-low z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-4 flex items-center">
          <Image
            src="/logo.png"
            alt="CredAgil"
            width={160}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </div>

        <nav className="mt-6 px-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${
                    isActive
                      ? "bg-surface-low text-primary font-semibold"
                      : "text-on-surface-variant hover:bg-surface-low/50 hover:text-primary"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? "text-secondary" : ""}`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="my-2 border-t border-surface-low"></div>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-red-600 hover:bg-red-50"
            onClick={() => setIsOpen(false)}
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </Link>
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
          <div className="bg-surface-low rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-sm text-primary">
                Atualização de Rendimento
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mb-3">
              Novos recebíveis de alto rendimento disponíveis.
            </p>
            <Link
              href="/marketplace"
              className="text-xs font-semibold text-secondary hover:underline"
            >
              Ver Mercado &rarr;
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
