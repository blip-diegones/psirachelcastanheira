import React from 'react';
import { motion } from 'framer-motion';
import { User, Video, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "01",
      icon: User,
      title: "Psicoterapia Individual para Adultos",
      subtitle: "Autoconhecimento & Cuidado Emocional",
      description:
        "Espaço para investigar padrões, acolher angústias, compreender a ansiedade e construir formas mais autênticas e gentis de se relacionar consigo mesmo.",
      tags: ["Ansiedade", "Autocrítica", "Relações", "Transições"],
    },
    {
      id: "02",
      icon: Video,
      title: "Atendimento Psicológico Online",
      subtitle: "Conforto & Flexibilidade Global",
      description:
        "Sessões virtuais com o mesmo rigor ético, sigilo e profundidade do presencial. Atendimento para pacientes em todo o Brasil e brasileiros no exterior.",
      tags: ["Plataforma Segura", "Sem Deslocamento", "Nacional & Internacional"],
    },
    {
      id: "03",
      icon: MapPin,
      title: "Atendimento Presencial em BH",
      subtitle: "Consultório em Belo Horizonte",
      description:
        "Uma experiência de presença em um consultório preparado para proporcionar calma, privacidade e conforto no coração de Belo Horizonte.",
      tags: ["Ambiente Reservado", "Luz Natural", "Acolhimento"],
    },
    {
      id: "04",
      icon: Sparkles,
      title: "Acolhimento ao Sentir & Lutos",
      subtitle: "Espaço Seguro para Atravessar Dores",
      description:
        "Processo dedicado a acolher perdas, términos, crises existenciais e a sensação de solidão que tantas vezes acompanha a busca pela autenticidade.",
      tags: ["Elaboração", "Sensibilidade", "Escuta Paciente"],
    },
  ];

  return (
    <section
      id="psicoterapia"
      className="section-spacer"
      style={{
        backgroundColor: 'var(--beige-light)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container">
        {/* Cabeçalho */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '650px',
            marginBottom: 'clamp(40px, 6vw, 70px)',
          }}
        >
          <span className="label-sub" style={{ marginBottom: '12px' }}>
            Modalidades & Cuidado
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
              color: 'var(--brown)',
              marginBottom: '16px',
            }}
          >
            Como podemos caminhar juntos
          </h2>
          <p style={{ color: 'var(--brown-light)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Cada percurso terapêutico é único. A psicoterapia é desenhada para respeitar a sua história e seu tempo singular.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                className="card-editorial"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--white)',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Número / ID no topo */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '22px',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--beige-tint)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--olive)',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        color: 'var(--brown-muted)',
                        fontStyle: 'italic',
                      }}
                    >
                      {srv.id}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--olive)',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    {srv.subtitle}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      color: 'var(--brown)',
                      lineHeight: 1.25,
                      marginBottom: '14px',
                    }}
                  >
                    {srv.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      lineHeight: 1.7,
                      color: 'var(--brown-light)',
                      marginBottom: '22px',
                    }}
                  >
                    {srv.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.74rem',
                          color: 'var(--brown)',
                          backgroundColor: 'var(--beige)',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-xs)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botão sutil de ação */}
                <a
                  href="https://www.doctoralia.com.br/z/sn6C4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial"
                  style={{ fontSize: '0.8rem' }}
                >
                  <span>Agendar Atendimento</span>
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
