import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { BotanicalBranch, BotanicalCorner } from './BotanicalDecor';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section
      style={{
        paddingTop: 'clamp(120px, 14vw, 180px)',
        paddingBottom: 'clamp(60px, 8vw, 110px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Elementos botânicos de fundo */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '2%',
          width: '140px',
          height: '200px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <BotanicalBranch />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-20px',
          width: '120px',
          height: '120px',
          pointerEvents: 'none',
          zIndex: 0,
          transform: 'rotate(-45deg)',
        }}
      >
        <BotanicalCorner />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Coluna de Conteúdo Editorial */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* Tag / Localização */}
            <motion.div variants={fadeInUp} style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="label-sub" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} style={{ color: 'var(--olive)' }} />
                Belo Horizonte & Atendimento Online
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                lineHeight: 1.12,
                color: 'var(--brown)',
                fontWeight: 400,
                marginBottom: '26px',
              }}
            >
              Talvez compreender seja mais importante do que apenas seguir em frente.
            </motion.h1>

            {/* Texto de Apoio */}
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(1.05rem, 1.15vw, 1.2rem)',
                lineHeight: 1.75,
                color: 'var(--brown-light)',
                maxWidth: '520px',
                marginBottom: '38px',
              }}
            >
              Um espaço de psicoterapia individual para adultos, construído na escuta cuidadosa, no acolhimento do que dói e na redescoberta da sua própria autenticidade.
            </motion.p>

            {/* Ações */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <a
                href="https://www.doctoralia.com.br/z/sn6C4A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Agendar Atendimento</span>
                <ArrowRight size={16} />
              </a>

              <a href="#sobre" className="btn-editorial">
                <span>Conhecer Meu Trabalho</span>
                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Selos de Confiança Sutis */}
            <motion.div
              variants={fadeInUp}
              style={{
                marginTop: '44px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--brown)', fontWeight: 600 }}>
                  100%
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--olive)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Sigilo Ético
                </span>
              </div>
              <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border-color)' }} />
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--brown)', fontWeight: 600 }}>
                  Presencial & Online
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--olive)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Brasil & Exterior
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna da Imagem Editorial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Fundo decorativo tipo moldura de papel */}
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                right: '-14px',
                width: '100%',
                height: '100%',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--beige)',
                zIndex: 0,
              }}
            />

            {/* Container Principal da Foto */}
            <div
              className="photo-frame"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-sm)',
                aspectRatio: '4/5',
                maxHeight: '580px',
                boxShadow: 'var(--shadow-float)',
              }}
            >
              <img
                src="/images/rachel-portrait.jpg"
                alt="Rachel Castanheira - Psicóloga Clínica"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                }}
              />

              {/* Tag Flutuante Delicada na Foto */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(255, 253, 248, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    color: 'var(--brown)',
                    fontStyle: 'italic',
                    lineHeight: 1.2,
                    marginBottom: '2px',
                  }}
                >
                  Rachel Castanheira
                </p>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--olive)',
                    fontWeight: 600,
                  }}
                >
                  Psicologia Clínica • BH & Online
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
