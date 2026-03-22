"use client";

import { motion } from "framer-motion";
import {
  Building,
  TrendingUp,
  Calendar,
  ArrowRight,
  MoreVertical,
  CheckCircle2,
  Wallet,
  Clock,
  PlusCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function CompanyDashboardPage() {
  const metrics = [
    {
      title: "Total Captado",
      value: "R$ 150.000",
      change: "Limite: R$ 250.000",
      icon: Wallet,
      color: "text-primary",
    },
    {
      title: "Taxa Média",
      value: "1,6% a.m.",
      change: "Competitivo",
      icon: TrendingUp,
      color: "text-secondary",
    },
    {
      title: "Próximo Vencimento",
      value: "R$ 15.450",
      date: "20 Maio, 2026",
      icon: Calendar,
      color: "text-blue-600",
    },
  ];

  const projects = [
    {
      id: "PRJ-26-01",
      name: "Antecipação de Recebíveis - Loja X",
      type: "Recebíveis",
      amount: "R$ 50.000",
      rate: "1,8% a.m.",
      status: "Em Captação",
      progress: 50,
    },
    {
      id: "PRJ-25-04",
      name: "Capital de Giro - Fim de Ano",
      type: "Capital de Giro",
      amount: "R$ 100.000",
      rate: "1,5% a.m.",
      status: "Liquidado",
      progress: 100,
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
            Painel da Empresa
          </h1>
          <p className="text-on-surface-variant mt-1">
            Acompanhe suas captações e gerencie seus pagamentos.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/raise-capital"
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            Nova Captação
          </Link>
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
                  <span className="text-xs font-bold text-on-surface-variant bg-surface-low px-2 py-1 rounded-lg">
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

      {/* Projects Section */}
      <div className="bg-white rounded-3xl p-6 ambient-shadow overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-headline font-bold text-primary">
            Meus Projetos
          </h2>
          <button className="text-sm font-semibold text-secondary hover:underline flex items-center gap-1">
            Ver Todos <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-surface-low text-on-surface-variant text-sm">
                <th className="pb-3 font-medium">Projeto</th>
                <th className="pb-3 font-medium">Valor Solicitado</th>
                <th className="pb-3 font-medium">Taxa</th>
                <th className="pb-3 font-medium">Progresso</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <tr
                  key={project.id}
                  className="border-b border-surface-low/50 hover:bg-surface-low/30 transition-colors"
                >
                  <td className="py-4">
                    <div className="font-semibold text-primary">
                      {project.name}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {project.id} • {project.type}
                    </div>
                  </td>
                  <td className="py-4 font-mono font-medium text-primary">
                    {project.amount}
                  </td>
                  <td className="py-4 font-mono font-medium text-secondary">
                    {project.rate}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-surface-low rounded-full overflow-hidden">
                        <div
                          className={`h-full ${project.progress === 100 ? "bg-emerald-500" : "bg-secondary"}`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono font-bold text-on-surface-variant">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold
                      ${project.status === "Liquidado" ? "bg-green-50 text-emerald-700" : "bg-blue-50 text-blue-700"}
                    `}
                    >
                      {project.status === "Liquidado" ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {project.status}
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
        {/* Alerts Panel */}
        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 relative overflow-hidden">
          <AlertCircle className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-xl font-headline font-bold text-orange-900 mb-2">
            Atenção aos Vencimentos
          </h3>
          <p className="text-orange-800/80 text-sm leading-relaxed mb-6 max-w-md">
            Você tem um pagamento de R$ 15.450 programado para o dia 20 de Maio.
            Certifique-se de ter saldo disponível na sua conta garantia para
            evitar multas por atraso.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            Adicionar Saldo
          </button>
        </div>

        {/* Info Panel */}
        <div className="bg-white rounded-3xl p-8 ambient-shadow flex flex-col justify-center">
          <div className="w-12 h-12 bg-surface-low rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-headline font-bold text-primary mb-2">
            Melhore sua Taxa
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Empresas que mantêm um histórico de pagamentos impecável por mais de
            6 meses recebem um desconto de até 0,3% a.m. nas próximas captações.
          </p>
          <Link
            href="/raise-capital"
            className="text-secondary font-bold hover:underline flex items-center gap-2"
          >
            Simular Nova Captação <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
