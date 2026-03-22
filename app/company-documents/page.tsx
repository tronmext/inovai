"use client";

import { motion } from "framer-motion";
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  Eye,
  Trash2,
  Search,
  File,
} from "lucide-react";

export default function CompanyDocumentsPage() {
  const documents = [
    {
      id: "DOC-001",
      name: "Contrato Social Consolidado.pdf",
      category: "Societário",
      size: "2.4 MB",
      date: "10 Jan, 2026",
      status: "Verificado",
    },
    {
      id: "DOC-002",
      name: "Balanço_Patrimonial_2025.pdf",
      category: "Financeiro",
      size: "4.1 MB",
      date: "15 Fev, 2026",
      status: "Verificado",
    },
    {
      id: "DOC-003",
      name: "DRE_Ultimos_12_Meses.xlsx",
      category: "Financeiro",
      size: "1.2 MB",
      date: "20 Mar, 2026",
      status: "Em Análise",
    },
    {
      id: "DOC-004",
      name: "NF_001234_LojaX.xml",
      category: "Recebíveis",
      size: "156 KB",
      date: "21 Mar, 2026",
      status: "Pendente",
    },
    {
      id: "DOC-005",
      name: "CCB_CapitalGiro_Assinado.pdf",
      category: "Contratos",
      size: "3.8 MB",
      date: "10 Nov, 2025",
      status: "Verificado",
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
            Central de Documentos
          </h1>
          <p className="text-on-surface-variant mt-1">
            Gerencie seus documentos societários, financeiros e notas fiscais.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Area */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 ambient-shadow">
            <h2 className="text-lg font-headline font-bold text-primary mb-4 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-secondary" /> Enviar Novo
              Documento
            </h2>

            <div className="border-2 border-dashed border-surface-high rounded-2xl p-8 text-center hover:bg-surface-low/50 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-surface-low rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <UploadCloud className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-primary font-semibold mb-2">
                Clique ou arraste arquivos aqui
              </p>
              <p className="text-xs text-on-surface-variant mb-4">
                PDF, XML, JPG, PNG ou XLSX (Máx. 10MB)
              </p>
              <button className="bg-surface-low text-primary px-4 py-2 rounded-xl text-sm font-bold w-full group-hover:bg-primary group-hover:text-white transition-colors">
                Selecionar Arquivo
              </button>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Categoria do Documento
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all appearance-none text-sm">
                <option>Selecione uma categoria...</option>
                <option>Societário (Contrato Social, etc)</option>
                <option>Financeiro (DRE, Balanço)</option>
                <option>Recebíveis (Notas Fiscais, Contratos)</option>
                <option>Outros</option>
              </select>
            </div>
          </div>

          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-blue-900 mb-1">
                  Dica de Agilidade
                </h3>
                <p className="text-xs text-blue-800/80 leading-relaxed">
                  Mantenha seu Balanço Patrimonial e DRE atualizados para
                  acelerar a análise de crédito em novas captações. Documentos
                  verificados reduzem o tempo de aprovação em até 70%.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 ambient-shadow flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-headline font-bold text-primary">
              Meus Arquivos
            </h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-surface-low border-none focus:ring-2 focus:ring-secondary outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-surface-low text-on-surface-variant text-xs uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Nome do Arquivo</th>
                  <th className="pb-3 font-semibold">Categoria</th>
                  <th className="pb-3 font-semibold">Data</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-b border-surface-low/50 hover:bg-surface-low/30 transition-colors group"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-low flex items-center justify-center shrink-0">
                          <File className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p
                            className="font-semibold text-primary text-sm truncate max-w-[200px]"
                            title={doc.name}
                          >
                            {doc.name}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {doc.size}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="text-xs font-medium text-on-surface-variant bg-surface-low px-2.5 py-1 rounded-md">
                        {doc.category}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-on-surface-variant">
                      {doc.date}
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                        ${
                          doc.status === "Verificado"
                            ? "bg-emerald-50 text-emerald-700"
                            : doc.status === "Em Análise"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-orange-50 text-orange-700"
                        }
                      `}
                      >
                        {doc.status === "Verificado" && (
                          <CheckCircle2 className="w-3 h-3" />
                        )}
                        {doc.status === "Em Análise" && (
                          <Clock className="w-3 h-3" />
                        )}
                        {doc.status === "Pendente" && (
                          <AlertCircle className="w-3 h-3" />
                        )}
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="p-2 hover:bg-surface-low rounded-lg text-on-surface-variant hover:text-primary transition-colors"
                          title="Visualizar"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 hover:bg-surface-low rounded-lg text-on-surface-variant hover:text-primary transition-colors"
                          title="Baixar"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 hover:bg-red-50 rounded-lg text-on-surface-variant hover:text-red-600 transition-colors"
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t border-surface-low flex justify-between items-center text-sm text-on-surface-variant">
            <span>Mostrando 5 de 12 documentos</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-surface-high rounded-lg hover:bg-surface-low transition-colors disabled:opacity-50">
                Anterior
              </button>
              <button className="px-3 py-1 border border-surface-high rounded-lg hover:bg-surface-low transition-colors">
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
