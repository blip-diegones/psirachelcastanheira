import React from 'react';
import { Calendar, MessageSquare, ArrowUp, ArrowUpRight, Heart, MapPin, Globe, FileText } from 'lucide-react';
import { MonogramRC, InstagramIcon } from './BotanicalDecor';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--cream)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: 'clamp(50px, 8vw, 80px)',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(30px, 5vw, 60px)',
            marginBottom: '50px',
          }}
        >
          {/* Coluna 1: Monograma e Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <MonogramRC size={36} />
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    color: 'var(--brown)',
                    fontWeight: 600,
                  }}
                >
                  Rachel Castanheira
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--olive)',
                    fontWeight: 600,
                  }}
                >
                  Psicóloga Clínica
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--brown-light)', lineHeight: 1.7, maxWidth: '300px' }}>
              Interessada em tudo aquilo que nos torna mais humanos. Psicoterapia individual em Belo Horizonte e online.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--olive)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#sobre" className="nav-link">Sobre Mim</a></li>
              <li><a href="#psicoterapia" className="nav-link">Psicoterapia</a></li>
              <li><a href="#abordagem" className="nav-link">Abordagem & Setting</a></li>
              <li><a href="#reflexoes" className="nav-link">Reflexões</a></li>
              <li><a href="#faq" className="nav-link">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="nav-link">Agendamentos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento & Ética */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--olive)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Atendimento & Ética
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--brown-light)' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                Belo Horizonte - Minas Gerais
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={14} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                Atendimentos Online (Brasil & Exterior)
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={14} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                Registro Profissional: CRP 04/XXXXX
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--brown-muted)', paddingLeft: '22px' }}>
                Atuação orientada pelo Código de Ética Profissional do Psicólogo (CFP).
              </p>
            </div>
          </div>

          {/* Coluna 4: Redes & Agendamento */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--olive)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Canais & Redes
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://www.doctoralia.com.br/z/sn6C4A"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--brown)' }}
              >
                <Calendar size={16} style={{ color: 'var(--olive)' }} />
                <span>Doctoralia</span>
              </a>

              <a
                href="https://instagram.com/rachelcastanheira"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--brown)' }}
              >
                <InstagramIcon size={16} color="var(--olive)" />
                <span>@rachelcastanheira</span>
              </a>

              <a
                href="https://wa.me/5531984144303?text=Ol%C3%A1%20Rachel%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20psicol%C3%B3gico."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--brown)' }}
              >
                <MessageSquare size={16} style={{ color: 'var(--olive)' }} />
                <span>(31) 98414-4303</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória Inferior */}
        <div style={{ height: '1px', backgroundColor: 'var(--border-color)', marginBottom: '28px' }} />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8rem',
            color: 'var(--brown-muted)',
          }}
        >
          <p>© {new Date().getFullYear()} Rachel Castanheira • Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              color: 'var(--brown)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
            }}
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
