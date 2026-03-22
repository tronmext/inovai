"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Building,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
} from "lucide-react";

type UserType = "investor" | "company" | null;

export default function LoginPage() {
  const [selectedType, setSelectedType] = useState<UserType>(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-bl from-surface-high to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-secondary-container/20 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#002045] relative flex-col justify-between p-12 overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/logo.png"
            alt="CredAgil"
            width={200}
            height={56}
            className="h-14 w-auto brightness-0 invert"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl xl:text-5xl font-headline font-extrabold text-white leading-tight">
            O Cofre Digital
            <br />
            para a{" "}
            <span className="text-secondary-container">Economia Real.</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-md">
            Conectamos investidores a ativos reais de PMEs com segurança
            institucional, rendimentos superiores e total transparência.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-headline font-bold text-secondary-container">
                R$ 2M+
              </p>
              <p className="text-white/50 text-sm">Ativos Operados</p>
            </div>
            <div>
              <p className="text-3xl font-headline font-bold text-secondary-container">
                15.2%
              </p>
              <p className="text-white/50 text-sm">Rendimento Médio</p>
            </div>
            <div>
              <p className="text-3xl font-headline font-bold text-secondary-container">
                100%
              </p>
              <p className="text-white/50 text-sm">Segurado</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="relative z-10 text-white/30 text-sm">
          © 2026 CredAgil. Todos os direitos reservados.
        </p>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative z-10">
        <div className="w-full max-w-lg">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-10 text-center">
            <Image
              src="/logo.png"
              alt="CredAgil"
              width={200}
              height={56}
              className="h-14 w-auto mx-auto"
              priority
            />
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: Choose User Type */}
            {selectedType === null && (
              <motion.div
                key="choose"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-primary tracking-tight">
                    Bem-vindo à CredAgil
                  </h1>
                  <p className="text-on-surface-variant mt-2 text-lg">
                    Selecione como deseja acessar a plataforma.
                  </p>
                </div>

                {/* User Type Cards */}
                <div className="grid gap-4">
                  {/* Investor Card */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedType("investor")}
                    className="w-full bg-white rounded-2xl p-6 ambient-shadow border-2 border-transparent hover:border-primary/20 transition-all group text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-headline font-bold text-primary mb-1">
                          Sou Investidor
                        </h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          Acesse ativos reais, acompanhe rendimentos e gerencie
                          sua carteira de investimentos.
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </motion.button>

                  {/* Company Card */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedType("company")}
                    className="w-full bg-white rounded-2xl p-6 ambient-shadow border-2 border-transparent hover:border-secondary/20 transition-all group text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-headline font-bold text-primary mb-1">
                          Sou Empresa
                        </h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          Antecipe recebíveis, capte recursos e gerencie suas
                          operações financeiras.
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </motion.button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-surface-high"></div>
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    ou
                  </span>
                  <div className="flex-1 h-px bg-surface-high"></div>
                </div>

                {/* WhatsApp CTA */}
                <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20">
                  <Phone className="w-5 h-5" />
                  Entrar pelo WhatsApp
                </button>

                <p className="text-center text-sm text-on-surface-variant">
                  Não tem conta?{" "}
                  <Link
                    href="/"
                    className="text-secondary font-bold hover:underline"
                  >
                    Conheça a CredAgil
                  </Link>
                </p>
              </motion.div>
            )}

            {/* STEP 2: Login Form */}
            {selectedType !== null && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Back Button + Title */}
                <div>
                  <button
                    onClick={() => setSelectedType(null)}
                    className="text-sm text-on-surface-variant hover:text-primary font-semibold mb-4 flex items-center gap-1 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" /> Voltar
                  </button>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                        selectedType === "investor"
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                    >
                      {selectedType === "investor" ? (
                        <TrendingUp className="w-7 h-7 text-white" />
                      ) : (
                        <Building className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-headline font-extrabold text-primary tracking-tight">
                        {selectedType === "investor"
                          ? "Área do Investidor"
                          : "Área da Empresa"}
                      </h1>
                      <p className="text-on-surface-variant text-sm">
                        {selectedType === "investor"
                          ? "Acesse sua carteira e investimentos"
                          : "Gerencie suas captações e documentos"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Login Form */}
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href =
                      selectedType === "investor"
                        ? "/dashboard"
                        : "/company-dashboard";
                  }}
                >
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      {selectedType === "investor"
                        ? "CPF ou E-mail"
                        : "CNPJ ou E-mail"}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-surface-high focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-primary"
                        placeholder={
                          selectedType === "investor"
                            ? "000.000.000-00 ou email@exemplo.com"
                            : "00.000.000/0001-00 ou email@empresa.com"
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-semibold text-primary">
                        Senha
                      </label>
                      <Link
                        href="#"
                        className="text-xs font-semibold text-secondary hover:underline"
                      >
                        Esqueci minha senha
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full pl-12 pr-12 py-4 rounded-xl bg-white border border-surface-high focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-primary"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 rounded border-surface-high accent-secondary"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-on-surface-variant"
                    >
                      Manter-me conectado
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg text-white ${
                      selectedType === "investor"
                        ? "bg-primary hover:bg-primary-container shadow-primary/20"
                        : "bg-secondary hover:bg-secondary/90 shadow-secondary/20"
                    }`}
                  >
                    Entrar{" "}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-surface-high"></div>
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    ou entre com
                  </span>
                  <div className="flex-1 h-px bg-surface-high"></div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white border border-surface-high hover:bg-surface-low py-3 rounded-xl font-semibold text-sm text-primary transition-colors flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </button>
                  <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>

                <p className="text-center text-sm text-on-surface-variant">
                  Não tem conta?{" "}
                  <Link
                    href="/"
                    className="text-secondary font-bold hover:underline"
                  >
                    Cadastre-se agora
                  </Link>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
