"use client";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Download,
  Filter,
  ArrowDownRight,
  ArrowUpRight,
  RefreshCcw,
} from "lucide-react";

export default function TransactionsPage() {
  const transactions = [
    {
      id: "TRX-9928",
      date: "21 Mar 2026",
      type: "Investimento",
      asset: "Expansão de Franquias",
      amount: "- R$ 15.000,00",
      status: "Concluído",
      icon: ArrowUpRight,
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: "TRX-9927",
      date: "18 Mar 2026",
      type: "Rendimento",
      asset: "Fundo de Recebíveis PME",
      amount: "+ R$ 1.250,00",
      status: "Concluído",
      icon: ArrowDownRight,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "TRX-9926",
      date: "15 Mar 2026",
      type: "Depósito",
      asset: "Transferência PIX",
      amount: "+ R$ 20.000,00",
      status: "Concluído",
      icon: ArrowDownRight,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "TRX-9925",
      date: "10 Mar 2026",
      type: "Saque",
      asset: "Conta Corrente Final 3042",
      amount: "- R$ 5.000,00",
      status: "Processando",
      icon: RefreshCcw,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: "TRX-9924",
      date: "05 Mar 2026",
      type: "Investimento",
      asset: "Antecipação de Fornecedores",
      amount: "- R$ 10.000,00",
      status: "Concluído",
      icon: ArrowUpRight,
      color: "text-blue-600 bg-blue-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
            Transações
          </h1>
          <p className="text-on-surface-variant mt-1">
            Histórico completo de movimentações da sua conta.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl ambient-shadow text-sm font-semibold text-primary hover:bg-surface-low transition-colors">
            <Filter className="w-4 h-4" /> Filtrar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl ambient-shadow text-sm font-semibold hover:bg-primary-container transition-colors">
            <Download className="w-4 h-4" /> Exportar
          </button>
        </div>
      </header>

      <div className="bg-white rounded-3xl p-6 ambient-shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-surface-low text-on-surface-variant text-sm">
                <th className="pb-4 font-medium">Data & ID</th>
                <th className="pb-4 font-medium">Tipo de Transação</th>
                <th className="pb-4 font-medium">Detalhes</th>
                <th className="pb-4 font-medium text-right">Valor</th>
                <th className="pb-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx) => {
                const Icon = trx.icon;
                return (
                  <tr
                    key={trx.id}
                    className="border-b border-surface-low/50 hover:bg-surface-low/30 transition-colors"
                  >
                    <td className="py-4">
                      <div className="font-semibold text-primary">
                        {trx.date}
                      </div>
                      <div className="text-xs text-on-surface-variant font-mono">
                        {trx.id}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${trx.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-primary">
                          {trx.type}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-on-surface-variant">
                      {trx.asset}
                    </td>
                    <td
                      className={`py-4 text-right font-mono font-bold ${trx.amount.startsWith("+") ? "text-emerald-600" : "text-primary"}`}
                    >
                      {trx.amount}
                    </td>
                    <td className="py-4 text-right">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold
                        ${trx.status === "Concluído" ? "bg-green-50 text-emerald-700" : "bg-amber-50 text-amber-700"}
                      `}
                      >
                        {trx.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
