"use client";

import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Filter,
  Store,
  Factory,
  Coins,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketplacePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto space-y-8"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
            Mercado
          </h1>
          <p className="text-on-surface-variant mt-1">
            Descubra e invista em Ativos Reais premium de PMEs.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Buscar ativos..."
              className="pl-10 pr-4 py-2 bg-white rounded-full border-none ambient-shadow focus:ring-2 focus:ring-secondary outline-none w-full md:w-64 transition-all"
            />
          </div>
          <button className="p-2 bg-white rounded-full ambient-shadow text-on-surface-variant hover:text-primary transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl ambient-shadow text-sm font-semibold text-primary hover:bg-surface-low transition-colors">
          <Filter className="w-4 h-4" /> Filtros
        </button>
        <select className="px-4 py-2 bg-white rounded-xl ambient-shadow text-sm font-medium text-on-surface-variant outline-none border-none">
          <option>Tipo de Ativo</option>
          <option>Varejo</option>
          <option>Indústria</option>
          <option>Recebíveis</option>
        </select>
        <select className="px-4 py-2 bg-white rounded-xl ambient-shadow text-sm font-medium text-on-surface-variant outline-none border-none">
          <option>Faixa de Rendimento</option>
          <option>10% - 15%</option>
          <option>15% - 20%</option>
          <option>20%+</option>
        </select>
        <select className="px-4 py-2 bg-white rounded-xl ambient-shadow text-sm font-medium text-on-surface-variant outline-none border-none">
          <option>Perfil de Risco</option>
          <option>Baixo Risco (Segurado)</option>
          <option>Médio Risco</option>
        </select>
        <button className="text-sm font-semibold text-secondary hover:underline ml-auto">
          Limpar Tudo
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured Asset - Large */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-8 bg-white rounded-3xl overflow-hidden ambient-shadow flex flex-col md:flex-row group cursor-pointer"
        >
          <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
            <Image
              src="https://picsum.photos/seed/office/800/600"
              alt="Varejo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
              <Store className="w-3 h-3" /> Varejo
            </div>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-50 text-secondary text-xs font-bold px-2 py-1 rounded-md">
                  Nova Oferta
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  <ShieldCheck className="w-3 h-3" /> Segurado
                </span>
              </div>
              <h2 className="text-2xl font-headline font-bold text-primary mb-2">
                Expansão de Rede de Varejo
              </h2>
              <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
                Invista na expansão de uma das redes de varejo que mais crescem
                no país. Totalmente segurado contra riscos de crédito.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-low p-3 rounded-xl">
                <p className="text-xs text-on-surface-variant mb-1">
                  Rendimento Esperado
                </p>
                <p className="text-lg font-mono font-bold text-secondary">
                  16.5% a.a.
                </p>
              </div>
              <div className="bg-surface-low p-3 rounded-xl">
                <p className="text-xs text-on-surface-variant mb-1">Duração</p>
                <p className="text-lg font-mono font-bold text-primary">
                  12 Meses
                </p>
              </div>
            </div>

            <Link
              href="/asset"
              className="w-full bg-primary hover:bg-primary-container text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Investir Agora <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Small Asset Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-4 bg-white rounded-3xl p-6 ambient-shadow flex flex-col cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <Factory className="w-6 h-6" />
            </div>
            <span className="bg-surface-low text-primary text-xs font-bold px-2 py-1 rounded-md">
              Indústria
            </span>
          </div>
          <h3 className="text-lg font-headline font-bold text-primary mb-2">
            Modernização de Maquinário
          </h3>
          <p className="text-sm text-on-surface-variant mb-6 flex-1">
            Financiamento para atualização de equipamentos de uma indústria de
            ponta em São Paulo.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">
                Rendimento
              </span>
              <span className="font-mono font-bold text-secondary">
                11.2% a.a.
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">
                Investimento Mín.
              </span>
              <span className="font-mono font-bold text-primary">R$ 5.000</span>
            </div>
          </div>

          <Link
            href="/asset"
            className="w-full bg-surface-low hover:bg-surface-high text-primary py-3 rounded-xl font-semibold transition-colors flex items-center justify-center"
          >
            Ver Detalhes
          </Link>
        </motion.div>

        {/* Row Asset Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-12 bg-white rounded-3xl p-6 ambient-shadow flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer"
        >
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <Coins className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-headline font-bold text-primary">
                  Pool de Recebíveis PME
                </h3>
                <span className="bg-surface-low text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Recebíveis
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">
                Pool diversificado de notas fiscais verificadas de PMEs de
                primeira linha.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
            <div className="text-center md:text-right">
              <p className="text-xs text-on-surface-variant mb-1">
                Rendimento Alvo
              </p>
              <p className="text-xl font-mono font-bold text-secondary">
                18.0% a.a.
              </p>
            </div>
            <div className="text-center md:text-right hidden sm:block">
              <p className="text-xs text-on-surface-variant mb-1">Duração</p>
              <p className="text-xl font-mono font-bold text-primary">
                3-6 Meses
              </p>
            </div>
            <Link
              href="/asset"
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-container transition-colors shrink-0"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
