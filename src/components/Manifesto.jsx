import React from 'react';
import { motion } from 'framer-motion';
import { BotanicalBranch } from './BotanicalDecor';

export default function Manifesto() {
  return (
    <section
      style={{
        backgroundColor: 'var(--beige-tint)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        paddingTop: 'clamp(70px, 9vw, 120px)',
        paddingBottom: 'clamp(70px, 9vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-narrow" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tag sutil */}
          <span className="label-sub" style={{ display: 'block', marginBottom: '20px' }}>
            Manifesto & Olhar Clínico
          </span>

          {/* Frase Editorial em Caixa Alta com Espaçamento */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--brown)',
              lineHeight: 1.35,
              fontWeight: 400,
              marginBottom: '28px',
            }}
          >
            Interessada em tudo aquilo<br />
            que nos torna mais humanos.
          </h2>

          {/* Linha decorativa fina com ramo central */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              maxWidth: '360px',
              margin: '0 auto 28px',
            }}
          >
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }} />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
              <rect x="5" y="0.5" width="6.36" height="6.36" transform="rotate(45 5 5)" fill="none" stroke="var(--olive)" strokeWidth="1"/>
            </svg>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }} />
          </div>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)',
              color: 'var(--brown-light)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
            }}
          >
            "A clínica não é sobre consertar quem você é, mas sobre criar um espaço seguro para que todas as suas partes possam finalmente ser acolhidas."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
