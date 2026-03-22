"use client";

import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import {
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  Building2,
  Store,
  Coins,
  Phone,
  Lock,
  Network,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-low text-primary font-semibold text-sm mb-6 border border-surface-high">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>O Cofre Digital para PMEs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tight mb-6">
              Invista na <span className="text-secondary">Economia Real</span>{" "}
              com Velocidade Digital.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed max-w-xl">
              Acesse recebíveis e ativos reais de pequenas e médias empresas
              diretamente pelo WhatsApp ou nossa plataforma segura. Altos
              rendimentos, totalmente segurado, sem atrito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/marketplace"
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Explorar Ativos <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="bg-white hover:bg-surface-low text-primary border border-surface-high px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-green-500" /> Começar no WhatsApp
              </button>
            </div>
          </motion.div>

          {/* WhatsApp Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]"
          >
            {/* Phone Frame */}
            <div className="relative z-10 bg-white rounded-[3rem] p-4 shadow-2xl border-8 border-surface-low aspect-[9/19] flex flex-col overflow-hidden">
              {/* Top Bar */}
              <div className="bg-[#075E54] text-white p-4 rounded-t-2xl flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Concierge CredAgil</h3>
                  <p className="text-[10px] text-white/80">
                    Empresa Verificada
                  </p>
                </div>
              </div>
              {/* Chat Area */}
              <div className="flex-1 bg-[#E5DDD5] p-4 flex flex-col gap-4 overflow-y-auto">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-on-surface-variant shadow-sm self-start max-w-[85%]">
                  Olá! Sou seu assistente CredAgil. Buscando investir ou
                  levantar capital hoje?
                </div>
                <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-none text-sm text-on-surface-variant shadow-sm self-end max-w-[85%]">
                  Quero ver as novas oportunidades de recebíveis.
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-on-surface-variant shadow-sm self-start max-w-[85%]">
                  <p className="mb-2">Aqui está a oferta mais recente:</p>
                  <div className="bg-surface-low p-2 rounded-xl border border-surface-high">
                    <p className="font-bold text-primary text-xs mb-1">
                      Fundo de Recebíveis de Varejo
                    </p>
                    <p className="text-[10px] text-secondary font-mono font-bold mb-2">
                      Rendimento: 16.5% a.a.
                    </p>
                    <button className="w-full bg-primary text-white text-[10px] font-bold py-1.5 rounded-lg">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
              {/* Input Area */}
              <div className="bg-[#f0f0f0] p-2 rounded-b-2xl flex items-center gap-2 shrink-0">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-on-surface-variant/50">
                  Digite uma mensagem...
                </div>
                <div className="w-8 h-8 bg-[#00A884] rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary-container/30 to-surface-highest/50 rounded-full blur-3xl -z-10"></div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-20 bg-white p-4 rounded-2xl ambient-shadow z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">
                    Rend. Médio
                  </p>
                  <p className="text-lg font-headline font-bold text-primary">
                    15.2%
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-surface-low bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-on-surface-variant mb-8 uppercase tracking-widest">
            Confiado por líderes do setor
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8" />
              <span className="font-headline font-bold text-xl">BankCorp</span>
            </div>
            <div className="flex items-center gap-2">
              <Store className="w-8 h-8" />
              <span className="font-headline font-bold text-xl">
                VarejoInvest
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8" />
              <span className="font-headline font-bold text-xl">SafeGuard</span>
            </div>
            <div className="flex items-center gap-2">
              <Network className="w-8 h-8" />
              <span className="font-headline font-bold text-xl">GlobalNet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="solutions"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6">
            Por que escolher a CredAgil?
          </h2>
          <p className="text-lg text-on-surface-variant">
            Conectamos o mercado financeiro tradicional à eficiência digital,
            oferecendo acesso inigualável a ativos reais de PMEs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Segurança Institucional",
              desc: "Todos os ativos passam por rigorosa due diligence e são garantidos por apólices de seguro de primeira linha.",
            },
            {
              icon: Zap,
              title: "Experiência Sem Atrito",
              desc: "Invista, acompanhe e resgate fundos diretamente pela nossa plataforma intuitiva ou WhatsApp.",
            },
            {
              icon: TrendingUp,
              title: "Rendimentos Superiores",
              desc: "Acesse ativos reais exclusivos que historicamente superam produtos tradicionais de renda fixa.",
            },
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-[2rem] ambient-shadow text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-surface-low rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Split Section (PMEs) */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[140%] bg-gradient-to-bl from-primary-container to-transparent rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">
                Capital para o seu Negócio. <br />
                <span className="text-secondary">Rápido e Simples.</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Transforme seus recebíveis em fluxo de caixa imediato. Nossa
                plataforma conecta sua empresa diretamente a investidores,
                contornando a burocracia bancária tradicional.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Aprovação em menos de 24 horas",
                  "Taxas competitivas baseadas em dados reais",
                  "Processo 100% digital via WhatsApp",
                  "Sem taxas ocultas ou contratos complexos",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/company-dashboard"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg"
              >
                Antecipar Recebíveis
              </Link>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="https://picsum.photos/seed/business/800/1000"
                alt="Business Owner"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-2xl font-headline font-bold mb-1">
                  &quot;A CredAgil mudou a forma como gerenciamos nosso fluxo de
                  caixa.&quot;
                </p>
                <p className="text-sm text-white/70">
                  — Maria S., CEO de Logística
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary mb-8 tracking-tight">
          Pronto para construir seu cofre digital?
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Junte-se a milhares de investidores e empresas que já aproveitam o
          poder dos ativos reais na CredAgil.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/login"
            className="bg-primary hover:bg-primary-container text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Quero Investir
          </Link>
          <Link
            href="/login"
            className="bg-secondary hover:bg-secondary/90 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Quero Captar Recursos
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-surface-low py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="CredAgil"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm text-on-surface-variant">
            © 2024 CredAgil. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-on-surface-variant hover:text-primary font-medium"
            >
              Termos
            </Link>
            <Link
              href="#"
              className="text-sm text-on-surface-variant hover:text-primary font-medium"
            >
              Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-on-surface-variant hover:text-primary font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
