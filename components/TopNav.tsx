"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-surface-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CredAgil"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#solutions"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              Soluções
            </Link>
            <Link
              href="#investors"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              Para Investidores
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              Sobre Nós
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-semibold text-primary hover:text-primary-container transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/login"
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-md"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-surface-low px-4 py-6 space-y-4">
          <Link
            href="#solutions"
            className="block text-base font-semibold text-on-surface-variant"
            onClick={() => setIsOpen(false)}
          >
            Soluções
          </Link>
          <Link
            href="#investors"
            className="block text-base font-semibold text-on-surface-variant"
            onClick={() => setIsOpen(false)}
          >
            Para Investidores
          </Link>
          <Link
            href="#about"
            className="block text-base font-semibold text-on-surface-variant"
            onClick={() => setIsOpen(false)}
          >
            Sobre Nós
          </Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/login"
              className="text-center text-base font-semibold text-primary py-2 border border-primary rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Entrar
            </Link>
            <Link
              href="/login"
              className="text-center bg-secondary text-white py-2 rounded-full text-base font-bold"
              onClick={() => setIsOpen(false)}
            >
              Começar Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
