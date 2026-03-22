"use client";

import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
  Lock,
  CreditCard,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <header>
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Meu Perfil
        </h1>
        <p className="text-on-surface-variant mt-1">
          Gerencie suas informações pessoais e configurações de segurança.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar / Quick Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 ambient-shadow text-center">
            <div className="w-24 h-24 bg-surface-low rounded-full mx-auto flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-xl font-headline font-bold text-primary">
              João Silva
            </h2>
            <p className="text-sm text-on-surface-variant mb-4">
              Investidor Qualificado
            </p>
            <div className="inline-flex items-center gap-1 bg-green-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
              <ShieldCheck className="w-4 h-4" /> KYC Verificado
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 ambient-shadow">
            <h3 className="font-bold text-primary mb-4">Segurança</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Alterar Senha
                </span>
              </button>
              <button className="w-full flex items-center justify-between text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Autenticação 2FA
                </span>
                <span className="text-xs bg-green-50 text-emerald-700 px-2 py-0.5 rounded-md">
                  Ativo
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 ambient-shadow">
          <h2 className="text-xl font-headline font-bold text-primary mb-6">
            Dados Pessoais
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  defaultValue="João Silva"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  defaultValue="***.456.789-**"
                  disabled
                  className="w-full px-4 py-3 rounded-xl bg-surface-low/50 text-on-surface-variant border-none outline-none cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> E-mail
                </label>
                <input
                  type="email"
                  defaultValue="joao.silva@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Telefone
                </label>
                <input
                  type="tel"
                  defaultValue="+55 (11) 98765-4321"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Endereço
                </label>
                <input
                  type="text"
                  defaultValue="Av. Faria Lima, 3000 - São Paulo, SP"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
            </div>

            <hr className="border-surface-low my-8" />

            <h2 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-secondary" /> Dados Bancários
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Banco
                </label>
                <input
                  type="text"
                  defaultValue="Banco Itaú (341)"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Chave PIX
                </label>
                <input
                  type="text"
                  defaultValue="joao.silva@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-6 flex justify-end">
              <button
                type="button"
                className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
