import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Feather, ShieldCheck, ArrowRight } from 'lucide-react';
import { BotanicalCorner } from './BotanicalDecor';

export default function About() {
  const pillars = [
    {
      icon: Heart,
      title: "Escuta Acolhedora",
      desc: "Um espaço onde sua história é ouvida com respeito genuíno, sem pressa e sem fórmulas prontas.",
    },
    {
      icon: ShieldCheck,
      title: "Sigilo & Ética",
      desc: "Garantia absoluta de privacidade e conduta ética orientada pelo Conselho Federal de Psicologia.",
    },
    {
      icon: Feather,
      title: "Autenticidade",
      desc: "Ajudar você a desarmar cobranças externas e reencontrar seu próprio ritmo e verdade interior.",
    },
    {
      icon: Compass,
      title: "Belo Horizonte & Online",
      desc: "Atendimento presencial em consultório acolhedor ou online no conforto da sua casa.",
    },
  ];

  return (
    <section
      id="sobre"
      className="section-spacer"
      style={{
        position: 'relative',
        backgroundColor: 'var(--cream)',
      }}
    >
      <div className="container">
        {/* Cabeçalho de Seção */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 70px)' }}>
          <span className="label-sub" style={{ display: 'block', marginBottom: '10px' }}>
            Sobre Mim
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: 'var(--brown)',
              fontWeight: 400,
            }}
          >
            Rachel Castanheira
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Foto Editorial Acolhedora */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div
              className="photo-frame"
              style={{
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-float)',
                aspectRatio: '1/1',
                maxHeight: '520px',
              }}
            >
              <img
                src="/images/rachel-coffee.jpg"
                alt="Rachel Castanheira em momento de acolhimento"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Cartão de Citação Sobreposta */}
            <div
              style={{
                marginTop: '-30px',
                marginLeft: 'clamp(10px, 4vw, 30px)',
                marginRight: 'clamp(10px, 4vw, 30px)',
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'var(--beige)',
                border: '1px solid var(--border-color)',
                padding: '20px 26px',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--brown)',
                  lineHeight: 1.4,
                }}
              >
                "A faculdade me ensinou psicologia. A clínica continua me ensinando sobre pessoas."
              </p>
              <span
                style={{
                  display: 'block',
                  marginTop: '6px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--olive)',
                  fontWeight: 600,
                }}
              >
                Rachel Castanheira
              </span>
            </div>
          </motion.div>

          {/* Texto Biográfico e Abordagem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.15vw, 1.2rem)',
                lineHeight: 1.8,
                color: 'var(--brown)',
                marginBottom: '20px',
              }}
            >
              Olá, sou a <strong>Rachel Castanheira</strong>, psicóloga clínica com atuação presencial em Belo Horizonte e atendimentos online para pacientes de todo o Brasil e do exterior.
            </p>

            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: 'var(--brown-light)',
                marginBottom: '20px',
              }}
            >
              Meu trabalho é guiado pela convicção de que não precisamos dar conta de tudo sozinhos. Em um cotidiano acelerado e repleto de expectativas, a psicoterapia se torna uma pausa necessária — um espaço onde você pode falar abertamente sobre suas dúvidas, dores, angústias e desejos.
            </p>

            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: 'var(--brown-light)',
                marginBottom: '36px',
              }}
            >
              Acredito em uma psicologia viva, humana e próxima. Menos jargões distantes e mais presença atenta, para construirmos juntos novos caminhos de autocompreensão e alívio emocional.
            </p>

            {/* Grid de Pilares */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '36px',
              }}
            >
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--beige-tint)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '16px 18px',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--olive)', marginBottom: '8px' }} />
                    <h4
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--brown)',
                        marginBottom: '4px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--brown-light)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="https://www.doctoralia.com.br/z/sn6C4A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Agendar no Doctoralia</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
