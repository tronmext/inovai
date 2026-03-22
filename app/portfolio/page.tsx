"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  Activity,
  PieChart as PieChartIcon,
  ArrowUpRight,
} from "lucide-react";

export default function PortfolioPage() {
  const allocations = [
    {
      type: "Varejo",
      percentage: 45,
      amount: "R$ 65.250",
      color: "bg-blue-500",
    },
    {
      type: "Indústria",
      percentage: 35,
      amount: "R$ 50.750",
      color: "bg-indigo-500",
    },
    {
      type: "Recebíveis",
      percentage: 20,
      amount: "R$ 29.000",
      color: "bg-emerald-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto space-y-8"
    >
      <header>
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Minha Carteira
        </h1>
        <p className="text-on-surface-variant mt-1">
          Acompanhe a alocação e o desempenho dos seus ativos.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resumo */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 ambient-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-surface-low rounded-2xl text-primary">
              <Activity className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-headline font-bold text-primary">
              Evolução Patrimonial
            </h2>
          </div>
          <div className="flex items-end gap-4 mb-8">
            <h3 className="text-4xl font-headline font-bold text-primary">
              R$ 145.000,00
            </h3>
            <span className="flex items-center text-sm font-bold text-secondary bg-green-50 px-2 py-1 rounded-lg mb-1">
              <ArrowUpRight className="w-4 h-4 mr-1" /> +12.5% (12m)
            </span>
          </div>

          {/* Gráfico Simulado */}
          <div className="h-64 flex items-end gap-2">
            {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100, 95, 110].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-surface-low rounded-t-lg relative group hover:bg-surface-high transition-colors"
              >
                <div
                  className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-300 group-hover:bg-secondary"
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-on-surface-variant mt-4 font-mono">
            <span>Jan</span>
            <span>Abr</span>
            <span>Jul</span>
            <span>Out</span>
            <span>Dez</span>
          </div>
        </div>

        {/* Alocação */}
        <div className="bg-white rounded-3xl p-8 ambient-shadow flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-surface-low rounded-2xl text-primary">
              <PieChartIcon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-headline font-bold text-primary">
              Alocação
            </h2>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-6">
            {/* Gráfico de Rosca Simulado */}
            <div className="relative w-48 h-48 mx-auto rounded-full border-[16px] border-surface-low flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border-[16px] border-blue-500"
                style={{
                  clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-[16px] border-indigo-500"
                style={{ clipPath: "polygon(50% 50%, 0 100%, 0 0, 50% 0)" }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-[16px] border-emerald-500"
                style={{ clipPath: "polygon(50% 50%, 50% 100%, 0 100%)" }}
              ></div>
              <div className="text-center">
                <p className="text-xs text-on-surface-variant">Total</p>
                <p className="font-bold text-primary">100%</p>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              {allocations.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-on-surface-variant">
                      {item.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">
                      {item.percentage}%
                    </p>
                    <p className="text-xs text-on-surface-variant font-mono">
                      {item.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
