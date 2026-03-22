"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Calendar,
  ArrowRight,
  MoreVertical,
  CheckCircle2,
  Wallet,
} from "lucide-react";

export default function DashboardPage() {
  const metrics = [
    {
      title: "Total Investido",
      value: "R$ 145.000",
      change: "+12.5%",
      icon: Wallet,
      color: "text-primary",
    },
    {
      title: "Rendimento Ativo (YTD)",
      value: "14.2% a.a.",
      change: "+1.2%",
      icon: TrendingUp,
      color: "text-secondary",
    },
    {
      title: "Próximo Pagamento",
      value: "R$ 2.450",
      date: "15 Out, 2024",
      icon: Calendar,
      color: "text-blue-600",
    },
  ];

  const assets = [
    {
      id: "REC-24-01",
      name: "Antecipação de Fornecedores",
      type: "Cadeia de Suprimentos",
      amount: "R$ 50.000",
      yield: "15.5% a.a.",
      status: "Ativo",
    },
    {
      id: "VAR-23-04",
      name: "Expansão de Franquias",
      type: "Varejo",
      amount: "R$ 75.000",
      yield: "12.0% a.a.",
      status: "Ativo",
    },
    {
      id: "PME-24-02",
      name: "Fundo de Recebíveis PME",
      type: "Recebíveis",
      amount: "R$ 20.000",
      yield: "18.0% a.a.",
      status: "Pendente",
    },
  ];

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
            Painel do Investidor
          </h1>
          <p className="text-on-surface-variant mt-1">
            Bem-vindo de volta. Aqui está o resumo da sua carteira.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 text-secondary px-4 py-2 rounded-full border border-green-100">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-semibold text-sm">Ativos 100% Segurados</span>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 ambient-shadow hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`p-3 rounded-2xl bg-surface-low ${metric.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                {metric.change && (
                  <span className="text-xs font-bold text-secondary bg-green-50 px-2 py-1 rounded-lg">
                    {metric.change}
                  </span>
                )}
              </div>
              <h3 className="text-on-surface-variant text-sm font-medium mb-1">
                {metric.title}
              </h3>
              <p className="text-3xl font-headline font-bold text-primary">
                {metric.value}
              </p>
              {metric.date && (
                <p className="text-xs text-on-surface-variant mt-2">
                  Vencimento: {metric.date}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl p-6 ambient-shadow overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-headline font-bold text-primary">
            Meus Ativos
          </h2>
          <button className="text-sm font-semibold text-secondary hover:underline flex items-center gap-1">
            Ver Todos <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-surface-low text-on-surface-variant text-sm">
                <th className="pb-3 font-medium">ID do Ativo & Nome</th>
                <th className="pb-3 font-medium">Tipo</th>
                <th className="pb-3 font-medium">Valor Investido</th>
                <th className="pb-3 font-medium">Rendimento Esperado</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <tr
                  key={asset.id}
                  className="border-b border-surface-low/50 hover:bg-surface-low/30 transition-colors"
                >
                  <td className="py-4">
                    <div className="font-semibold text-primary">{asset.id}</div>
                    <div className="text-xs text-on-surface-variant">
                      {asset.name}
                    </div>
                  </td>
                  <td className="py-4 text-sm text-on-surface-variant">
                    {asset.type}
                  </td>
                  <td className="py-4 font-mono font-medium text-primary">
                    {asset.amount}
                  </td>
                  <td className="py-4 font-mono font-medium text-secondary">
                    {asset.yield}
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold
                      ${asset.status === "Ativo" ? "bg-green-50 text-secondary" : "bg-yellow-50 text-yellow-700"}
                    `}
                    >
                      {asset.status === "Ativo" && (
                        <CheckCircle2 className="w-3 h-3" />
                      )}
                      {asset.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button className="p-2 hover:bg-surface-low rounded-full text-on-surface-variant transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Insurance Panel */}
        <div className="bg-[#002045] rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <ShieldCheck className="w-10 h-10 text-secondary mb-4" />
          <h3 className="text-2xl font-headline font-bold mb-2">
            Seguro de Grau Institucional
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">
            Seus investimentos são protegidos por apólices de seguro de primeira
            linha, garantindo a preservação do capital mesmo em condições de
            mercado voláteis. Temos parceria com seguradoras globais para
            proteger cada ativo em nossa plataforma.
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            Ver Detalhes da Apólice
          </button>
        </div>

        {/* Yield Chart Placeholder */}
        <div className="bg-white rounded-3xl p-6 ambient-shadow flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-headline font-bold text-primary">
              Projeção de Rendimento
            </h3>
            <select className="bg-surface-low border-none text-sm font-medium text-primary rounded-lg px-3 py-1 outline-none">
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>
          <div className="flex-1 flex items-end gap-2 h-48 mt-auto">
            {[40, 60, 45, 80, 65, 90, 75, 100, 85, 110, 95, 120].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-surface-low rounded-t-md relative group"
                >
                  <div
                    className="absolute bottom-0 w-full bg-secondary rounded-t-md transition-all duration-500 group-hover:bg-primary"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ),
            )}
          </div>
          <div className="flex justify-between text-xs text-on-surface-variant mt-4 font-mono">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dez</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
