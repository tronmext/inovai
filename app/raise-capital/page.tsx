"use client";

import { motion } from "framer-motion";
import {
  Building,
  UploadCloud,
  CheckCircle2,
  DollarSign,
  Percent,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function RaiseCapitalPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <header>
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Captar Recursos
        </h1>
        <p className="text-on-surface-variant mt-1">
          Envie seu projeto para análise e acesse capital de forma rápida e
          digital.
        </p>
      </header>

      <div className="bg-white rounded-3xl p-8 ambient-shadow">
        <form className="space-y-8">
          {/* Section 1: Business Info */}
          <div>
            <h2 className="text-xl font-headline font-bold text-primary mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-secondary" /> Dados da Empresa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Razão Social
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                  placeholder="Sua Empresa LTDA"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  CNPJ
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                  placeholder="00.000.000/0001-00"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Descrição do Negócio
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all resize-none"
                  placeholder="Descreva brevemente a atuação da sua empresa..."
                ></textarea>
              </div>
            </div>
          </div>

          <hr className="border-surface-low" />

          {/* Section 2: Capital Request */}
          <div>
            <h2 className="text-xl font-headline font-bold text-primary mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-secondary" /> Detalhes da
              Captação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Valor Desejado (R$)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                  <input
                    type="number"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                    placeholder="500.000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Taxa Oferecida (% a.a.)
                </label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                  <input
                    type="number"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all"
                    placeholder="15.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Prazo (Meses)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all appearance-none">
                    <option>6 Meses</option>
                    <option>12 Meses</option>
                    <option>24 Meses</option>
                    <option>36 Meses</option>
                  </select>
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Destinação dos Recursos
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all resize-none"
                  placeholder="Ex: Expansão de frota, compra de maquinário, capital de giro..."
                ></textarea>
              </div>
            </div>
          </div>

          <hr className="border-surface-low" />

          {/* Section 3: Documents */}
          <div>
            <h2 className="text-xl font-headline font-bold text-primary mb-4 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-secondary" /> Documentação
            </h2>
            <div className="border-2 border-dashed border-surface-high rounded-2xl p-8 text-center hover:bg-surface-low/50 transition-colors cursor-pointer">
              <UploadCloud className="w-10 h-10 text-on-surface-variant mx-auto mb-3" />
              <p className="text-primary font-semibold mb-1">
                Clique para fazer upload ou arraste os arquivos
              </p>
              <p className="text-sm text-on-surface-variant">
                Envie DRE, Balanço Patrimonial e Contrato Social (PDF, máx 10MB)
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg flex items-center gap-2"
            >
              Enviar para Análise <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
