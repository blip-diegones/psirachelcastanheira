import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Como funciona a primeira sessão?",
      a: "A primeira sessão é um momento de acolhimento mútuo. Nela, você pode compartilhar o que te trouxe à psicoterapia, suas dúvidas, expectativas e como tem se sentido. É também uma oportunidade para você conhecer minha forma de trabalho e sentir se esse espaço ressoa com você."
    },
    {
      q: "Qual a duração e a frequência dos encontros?",
      a: "As sessões têm duração de 50 minutos e ocorrem habitualmente em frequência semanal. Esse intervalo permite a continuidade das reflexões e a construção de um processo consistente e gradual."
    },
    {
      q: "Como funciona o atendimento psicológico online?",
      a: "Os atendimentos online são realizados por videochamada em uma plataforma estável e segura, garantindo total privacidade e sigilo ético. Você só precisa de um local reservado onde se sinta à vontade para falar e uma boa conexão com a internet."
    },
    {
      q: "Você aceita convênios ou planos de saúde?",
      a: "Os atendimentos são particulares. No entanto, forneço recibo detalhado para que você possa solicitar o reembolso junto ao seu plano de saúde, conforme as regras da sua operadora."
    },
    {
      q: "Onde fica o consultório presencial em Belo Horizonte?",
      a: "O consultório está localizado em uma região central e acessível de Belo Horizonte (MG), em um prédio com segurança, tranquilidade e facilidade de acesso. O endereço exato é confirmado no momento do agendamento."
    },
    {
      q: "Como posso agendar minha consulta?",
      a: "Você pode agendar diretamente pelo Doctoralia (escolhendo o melhor dia e horário disponível) ou entrar em contato direto comigo pelo WhatsApp para tirar qualquer dúvida preliminar."
    }
  ];

  return (
    <section
      id="faq"
      className="section-spacer"
      style={{
        backgroundColor: 'var(--cream)',
        position: 'relative',
      }}
    >
      <div className="container-narrow">
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <span className="label-sub" style={{ display: 'block', marginBottom: '12px' }}>
            Dúvidas Frequentes
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: 'var(--brown)',
              marginBottom: '14px',
            }}
          >
            Perguntas & Respostas
          </h2>
          <p style={{ color: 'var(--brown-light)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
            Tudo o que você precisa saber antes de iniciar o seu processo de psicoterapia.
          </p>
        </div>

        {/* Lista de Accordions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                style={{
                  backgroundColor: isOpen ? 'var(--white)' : 'var(--beige-tint)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--brown)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      lineHeight: 1.3,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--beige)' : 'transparent',
                      color: 'var(--brown)',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        style={{
                          padding: '0 24px 22px 24px',
                          color: 'var(--brown-light)',
                          fontSize: '0.96rem',
                          lineHeight: 1.75,
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '14px',
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
