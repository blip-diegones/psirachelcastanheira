import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, ArrowUpRight } from 'lucide-react';
import { MonogramRC, InstagramIcon } from './BotanicalDecor';

export default function Reflections() {
  const reflections = [
    {
      quote: "A autenticidade não dói porque é difícil. Dói porque é solitária.",
      context: "Sobre a coragem de sustentar quem você é em um mundo de expectativas alheias.",
      tag: "Autenticidade",
    },
    {
      quote: "Nunca falamos tanto sobre saúde mental. E nunca fomos tão desencorajados a sentir.",
      context: "Sobre o direito de acolher a tristeza, a pausa e as imperfeições humanas.",
      tag: "Sentir",
    },
    {
      quote: "Nem tudo precisa ser resolvido hoje. O processo de cura tem seu próprio tempo.",
      context: "Sobre desarmar a urgência e respeitar o tempo das suas próprias transformações.",
      tag: "Tempo & Processo",
    },
    {
      quote: "O luto dói também pelo que foi... mas, às vezes, dói ainda mais pelo que não deu tempo de ser.",
      context: "Sobre acolher futuros não vividos e planos interrompidos com gentileza.",
      tag: "Acolhimento",
    },
  ];

  return (
    <section
      id="reflexoes"
      className="section-spacer"
      style={{
        backgroundColor: 'var(--cream)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Cabeçalho */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto clamp(40px, 6vw, 70px)',
          }}
        >
          <span className="label-sub" style={{ marginBottom: '12px' }}>
            Reflexões da Clínica
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
              color: 'var(--brown)',
              marginBottom: '16px',
            }}
          >
            Palavras para respirar
          </h2>
          <p style={{ color: 'var(--brown-light)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Pequenas pausas para desacelerar o pensamento e reconectar com o que realmente importa.
          </p>
        </div>

        {/* Cards de Reflexão em Grid Editorial */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {reflections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: 'var(--beige)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(28px, 4vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
              className="card-editorial"
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--olive)',
                      fontWeight: 600,
                    }}
                  >
                    {item.tag}
                  </span>
                  <span style={{ color: 'var(--brown-muted)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                    RC
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.25rem, 1.6vw, 1.5rem)',
                    color: 'var(--brown)',
                    lineHeight: 1.4,
                    fontStyle: 'italic',
                    marginBottom: '20px',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div>
                <div style={{ height: '1px', backgroundColor: 'var(--border-color)', marginBottom: '14px' }} />
                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--brown-light)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rodapé da seção com convite para o Instagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '50px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <InstagramIcon size={18} color="var(--olive)" />
          <a
            href="https://instagram.com/rachelcastanheira"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial"
            style={{ fontSize: '0.82rem' }}
          >
            <span>Acompanhe mais pensamentos no @rachelcastanheira</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
