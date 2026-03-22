"use client";

import { motion } from "framer-motion";
import {
  Building,
  PlusCircle,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function CompanyProjectsPage() {
  const projects = [
    {
      id: "PRJ-26-01",
      name: "Antecipação de Recebíveis - Loja X",
      type: "Recebíveis",
      amount: "R$ 50.000",
      raised: "R$ 25.000",
      rate: "1,8% a.m.",
      status: "Em Captação",
      progress: 50,
      date: "15 Mar, 2026",
    },
    {
      id: "PRJ-26-02",
      name: "Expansão de Frota Logística",
      type: "Investimento Fixo",
      amount: "R$ 120.000",
      raised: "R$ 0",
      rate: "1,6% a.m.",
      status: "Em Análise",
      progress: 0,
      date: "20 Mar, 2026",
    },
    {
      id: "PRJ-25-04",
      name: "Capital de Giro - Fim de Ano",
      type: "Capital de Giro",
      amount: "R$ 100.000",
      raised: "R$ 100.000",
      rate: "1,5% a.m.",
      status: "Liquidado",
      progress: 100,
      date: "10 Nov, 2025",
    },
    {
      id: "PRJ-25-02",
      name: "Compra de Maquinário Industrial",
      type: "Investimento Fixo",
      amount: "R$ 80.000",
      raised: "R$ 80.000",
      rate: "1,7% a.m.",
      status: "Em Pagamento",
      progress: 100,
      date: "05 Mai, 2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em Captação":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Liquidado":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Em Análise":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Em Pagamento":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-surface-low text-on-surface-variant border-surface-high";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Em Captação":
        return <Clock className="w-3 h-3" />;
      case "Liquidado":
        return <CheckCircle2 className="w-3 h-3" />;
      case "Em Análise":
        return <AlertCircle className="w-3 h-3" />;
      case "Em Pagamento":
        return <ArrowRight className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

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
            Meus Projetos
          </h1>
          <p className="text-on-surface-variant mt-1">
            Gerencie suas captações de recursos e acompanhe o status de cada
            projeto.
          </p>
        </div>
        <Link
          href="/raise-capital"
          className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg flex items-center gap-2 w-fit"
        >
          <PlusCircle className="w-5 h-5" />
          Nova Captação
        </Link>
      </header>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl ambient-shadow">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
          <input
            type="text"
            placeholder="Buscar por nome ou ID..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl whitespace-nowrap">
            Todos
          </button>
          <button className="px-4 py-2 bg-surface-low text-on-surface-variant hover:bg-surface-high text-sm font-semibold rounded-xl transition-colors whitespace-nowrap">
            Em Captação
          </button>
          <button className="px-4 py-2 bg-surface-low text-on-surface-variant hover:bg-surface-high text-sm font-semibold rounded-xl transition-colors whitespace-nowrap">
            Em Pagamento
          </button>
          <button className="px-4 py-2 bg-surface-low text-on-surface-variant hover:bg-surface-high text-sm font-semibold rounded-xl transition-colors whitespace-nowrap flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filtros
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-6 ambient-shadow flex flex-col h-full border border-transparent hover:border-surface-low transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(
                  project.status,
                )}`}
              >
                {getStatusIcon(project.status)}
                {project.status}
              </span>
              <button className="p-2 hover:bg-surface-low rounded-full text-on-surface-variant transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6 flex-1">
              <p className="text-xs text-on-surface-variant font-mono mb-1">
                {project.id} • {project.date}
              </p>
              <h3 className="text-lg font-headline font-bold text-primary leading-tight mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-on-surface-variant">{project.type}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">
                    Valor Solicitado
                  </p>
                  <p className="text-xl font-headline font-bold text-primary">
                    {project.amount}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-on-surface-variant mb-1">Taxa</p>
                  <p className="text-sm font-bold text-secondary">
                    {project.rate}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-on-surface-variant">
                    Captado: {project.raised}
                  </span>
                  <span className="font-bold text-primary">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-surface-low rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      project.progress === 100
                        ? "bg-emerald-500"
                        : "bg-secondary"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-low">
              <button className="w-full py-2.5 bg-surface-low hover:bg-surface-high text-primary font-bold text-sm rounded-xl transition-colors">
                Ver Detalhes do Projeto
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
