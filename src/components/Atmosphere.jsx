import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sun, BookOpen, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BotanicalBranch } from './BotanicalDecor';

export default function Atmosphere() {
  const values = [
    {
      icon: Clock,
      title: "Tempo sem Pressa",
      desc: "50 minutos dedicados inteiramente a você, sem interrupções e com presença plena.",
    },
    {
      icon: Sun,
      title: "Luz & Conforto",
      desc: "Um consultório acolhedor em Belo Horizonte e um setting virtual igualmente sereno.",
    },
    {
      icon: ShieldCheck,
      title: "Privacidade Absoluta",
      desc: "Total confidencialidade de acordo com o Código de Ética Profissional do Psicólogo.",
    },
    {
      icon: HeartHandshake,
      title: "Vínculo Humano",
      desc: "Uma relação terapêutica fundamentada na empatia, sem julgamentos ou imposições.",
    },
  ];

  return (
    <section
      id="abordagem"
      className="section-spacer"
      style={{
        backgroundColor: 'var(--beige-tint)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 70px)',
            alignItems: 'center',
          }}
        >
          {/* Lado Esquerdo: Texto de ambientação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-sub" style={{ display: 'block', marginBottom: '12px' }}>
              Setting & Cuidado
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                color: 'var(--brown)',
                marginBottom: '20px',
              }}
            >
              Um refúgio para o pensamento e para o sentir
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--brown)',
                marginBottom: '18px',
              }}
            >
              A psicoterapia começa antes mesmo da primeira fala: ela começa na escolha de um ambiente protegido, onde o mundo exterior fica do lado de fora e você pode finalmente respirar.
            </p>
            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: 'var(--brown-light)',
                marginBottom: '32px',
              }}
            >
              Seja presencialmente em Belo Horizonte ou através da tela em qualquer lugar do mundo, o compromisso é sempre o mesmo: oferecer um espaço seguro, ético e caloroso para as suas verdades.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    style={{
                      padding: '16px',
                      backgroundColor: 'var(--white)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--olive)', marginBottom: '8px' }} />
                    <h4
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--brown)',
                        marginBottom: '4px',
                      }}
                    >
                      {v.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--brown-light)', lineHeight: 1.5 }}>
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Lado Direito: Composição visual com citação */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: 'var(--white)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(32px, 5vw, 50px)',
              boxShadow: 'var(--shadow-float)',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '80px', height: '100px' }}>
              <BotanicalBranch />
            </div>

            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.5rem',
                color: 'var(--olive)',
                lineHeight: 0.8,
                display: 'block',
                marginBottom: '10px',
                opacity: 0.6,
              }}
            >
              “
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)',
                color: 'var(--brown)',
                lineHeight: 1.3,
                fontWeight: 400,
                marginBottom: '20px',
              }}
            >
              Não se trata de ter todas as respostas, mas de ter a coragem de fazer perguntas sinceras.
            </h3>

            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--olive)', marginBottom: '18px' }} />

            <p style={{ fontSize: '0.94rem', color: 'var(--brown-light)', lineHeight: 1.7, marginBottom: '24px' }}>
              A clínica é um convite para você olhar para o que sente sem o peso da autocrítica constante.
            </p>

            <a
              href="https://www.doctoralia.com.br/z/sn6C4A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <span>Ver Horários Disponíveis no Doctoralia</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
