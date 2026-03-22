"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Building,
  FileText,
  ArrowRightLeft,
  User,
  ShieldCheck,
  TrendingUp,
  LayoutGrid,
  Menu,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { useState } from "react";

export default function CompanySidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Painel da Empresa", href: "/company-dashboard", icon: LayoutGrid },
    { name: "Meus Projetos", href: "/company-projects", icon: Building },
    { name: "Captar Recursos", href: "/raise-capital", icon: PlusCircle },
    { name: "Extrato", href: "/company-dashboard", icon: ArrowRightLeft },
    { name: "Documentos", href: "/company-documents", icon: FileText },
    { name: "Perfil", href: "/company-dashboard", icon: User },
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
        <div className="p-4 flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CredAgil"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <span className="text-secondary text-sm font-semibold">Empresas</span>
        </div>

        <nav className="mt-6 px-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href &&
              item.name !== "Extrato" &&
              item.name !== "Perfil";
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
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-sm text-blue-800">
                Conta Verificada
              </span>
            </div>
            <p className="text-xs text-blue-700/80 mb-3">
              Seu limite de captação atual é de R$ 250.000.
            </p>
            <Link
              href="/raise-capital"
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              Aumentar Limite &rarr;
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
