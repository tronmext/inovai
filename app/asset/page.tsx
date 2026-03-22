"use client";

import { motion } from "framer-motion";
import {
  Building,
  ShieldCheck,
  FileText,
  History,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Calendar,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function AssetDetailsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
          <Building className="w-8 h-8 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl md:text-3xl font-headline font-bold text-primary tracking-tight">
              Loja X
            </h1>
            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verificado
            </span>
          </div>
          <p className="text-on-surface-variant font-medium">
            PROJETO: Antecipação de Recebíveis
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Section */}
          <div className="bg-white rounded-3xl p-8 ambient-shadow">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-sm font-semibold text-on-surface-variant mb-1">
                  Já captado
                </p>
                <p className="text-3xl font-headline font-bold text-primary">
                  R$ 25.000{" "}
                  <span className="text-lg text-on-surface-variant font-medium">
                    de R$ 50.000
                  </span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-secondary">50%</span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-surface-low rounded-full h-4 mb-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-secondary h-4 rounded-full"
              ></motion.div>
            </div>
            <p className="text-xs text-on-surface-variant text-right">
              Restam 5 dias para o encerramento
            </p>
          </div>

          {/* Garantias */}
          <div className="bg-white rounded-3xl p-8 ambient-shadow">
            <h2 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-secondary" /> Garantias do
              Projeto
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-surface-low rounded-2xl border border-surface-high/50">
                <div className="p-2 bg-white rounded-xl text-primary shadow-sm">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">
                    Notas Fiscais (R$ 65.000)
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Cessão fiduciária de recebíveis performados. O valor em
                    garantia é 130% do valor captado.
                  </p>
                  <button className="text-sm font-semibold text-secondary mt-2 hover:underline">
                    Ver borderô de notas &rarr;
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="p-2 bg-white rounded-xl text-emerald-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-800">
                    Seguro de Crédito
                  </h3>
                  <p className="text-sm text-emerald-700/80 mt-1">
                    Apólice de seguro cobrindo 100% do principal em caso de
                    inadimplência dos sacados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Histórico */}
          <div className="bg-white rounded-3xl p-8 ambient-shadow">
            <h2 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-2">
              <History className="w-6 h-6 text-secondary" /> Histórico da
              Empresa
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-low rounded-2xl">
                <p className="text-3xl font-headline font-bold text-primary mb-1">
                  5 Anos
                </p>
                <p className="text-sm font-medium text-on-surface-variant">
                  Tempo de Mercado
                </p>
              </div>
              <div className="p-4 bg-surface-low rounded-2xl">
                <p className="text-3xl font-headline font-bold text-emerald-600 mb-1">
                  98%
                </p>
                <p className="text-sm font-medium text-on-surface-variant">
                  Pagamentos em Dia
                </p>
              </div>
              <div className="col-span-2 p-4 bg-surface-low rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <p className="text-sm font-medium text-primary">
                  Nenhum protesto ou pendência financeira nos últimos 24 meses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Investment Card */}
        <div className="lg:col-span-1">
          <div className="bg-[#002045] rounded-3xl p-6 text-white sticky top-8 ambient-shadow">
            <h3 className="text-lg font-headline font-bold mb-6 text-white/90">
              Resumo da Oferta
            </h3>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-white/60 text-sm mb-1 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Valor Necessário
                </p>
                <p className="text-2xl font-mono font-bold">R$ 50.000</p>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Taxa Oferecida
                </p>
                <p className="text-2xl font-mono font-bold text-secondary">
                  1,8% a.m.
                </p>
                <p className="text-sm text-white/80">(21,6% a.a.)</p>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Prazo
                </p>
                <p className="text-2xl font-mono font-bold">60 dias</p>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              INVESTIR AGORA <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-center text-xs text-white/50 mt-4">
              Liquidação prevista para 20 de Maio, 2026
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
