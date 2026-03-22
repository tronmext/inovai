"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wallet,
  Info,
} from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [amount, setAmount] = useState<number>(5000);
  const [accepted, setAccepted] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Amount, 2: QR Code, 3: Success

  // Cálculos
  const rendimento = amount * 0.18; // 18% no período para demo
  const taxa = amount * 0.015; // 1.5% taxa CredAgil

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-xl bg-white rounded-3xl ambient-shadow overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#002045] p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/10 rounded-lg">
            <Wallet className="w-6 h-6 text-secondary" />
          </div>
          <h1 className="text-xl font-headline font-bold">
            Checkout de Investimento
          </h1>
        </div>
        <p className="text-white/70 text-sm">
          Projeto: Antecipação de Recebíveis - Loja X
        </p>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {/* STEP 1: AMOUNT & SUMMARY */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div>
                <label className="block text-lg font-headline font-bold text-primary mb-4">
                  Quanto quer investir?
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant font-mono">
                    R$ 1.000
                  </span>
                  <span className="text-3xl font-headline font-bold text-primary">
                    {formatCurrency(amount)}
                  </span>
                  <span className="text-on-surface-variant font-mono">
                    R$ 10.000
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-surface-low rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>

              <div className="bg-surface-low rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-primary border-b border-surface-high/50 pb-2">
                  Resumo da Operação
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">
                    Valor do Investimento
                  </span>
                  <span className="font-mono font-bold text-primary">
                    {formatCurrency(amount)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant flex items-center gap-1">
                    Rendimento esperado (18%){" "}
                    <Info className="w-4 h-4 text-secondary" />
                  </span>
                  <span className="font-mono font-bold text-emerald-600">
                    +{formatCurrency(rendimento)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">
                    Taxa CredAgil (1,5%)
                  </span>
                  <span className="font-mono font-bold text-red-500">
                    -{formatCurrency(taxa)}
                  </span>
                </div>

                <div className="border-t border-surface-high/50 pt-4 flex justify-between items-center">
                  <span className="font-bold text-primary">
                    Retorno Líquido Estimado
                  </span>
                  <span className="text-xl font-mono font-bold text-primary">
                    {formatCurrency(amount + rendimento - taxa)}
                  </span>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-1">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-5 h-5 border-2 border-on-surface-variant rounded-md checked:bg-secondary checked:border-secondary transition-colors"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                  Li e concordo com os{" "}
                  <a href="#" className="text-secondary hover:underline">
                    Termos de Investimento
                  </a>{" "}
                  e a{" "}
                  <a href="#" className="text-secondary hover:underline">
                    Política de Riscos
                  </a>
                  .
                </span>
              </label>

              <button
                disabled={!accepted}
                onClick={() => setStep(2)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-surface-high disabled:text-on-surface-variant disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                Pagar Agora <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: QR CODE */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-center space-y-6"
            >
              <h2 className="text-2xl font-headline font-bold text-primary">
                Escaneie o QR Code
              </h2>
              <p className="text-on-surface-variant">
                Abra o app do seu banco e escaneie o código abaixo para
                transferir{" "}
                <strong className="text-primary">
                  {formatCurrency(amount)}
                </strong>{" "}
                via PIX.
              </p>

              <div className="w-64 h-64 mx-auto bg-surface-low rounded-3xl border-2 border-dashed border-surface-high flex items-center justify-center p-4">
                {/* Mock QR Code */}
                <QrCode className="w-full h-full text-primary opacity-80" />
              </div>

              <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm flex items-start gap-3 text-left">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                  O valor ficará bloqueado em uma conta garantia (escrow) e só
                  será repassado à empresa quando a captação atingir 100%.
                </p>
              </div>

              <button
                onClick={() => setStep(3)}
                className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-bold transition-colors"
              >
                Simular Pagamento Realizado
              </button>
            </motion.div>
          )}

          {/* STEP 3: SUCCESS */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-8"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary">
                Investimento Confirmado!
              </h2>
              <p className="text-on-surface-variant text-lg">
                Você acaba de investir {formatCurrency(amount)} na Loja X.
              </p>

              <div className="pt-8">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 bg-surface-low hover:bg-surface-high text-primary px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Ir para o Painel <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
