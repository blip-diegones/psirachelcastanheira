import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MessageSquare,
  ArrowUpRight,
  MapPin,
  Globe,
  Heart,
} from 'lucide-react';
import { InstagramIcon, BotanicalBranch, MonogramRC } from './BotanicalDecor';

const WA_URL =
  'https://wa.me/5531984144303?text=Ol%C3%A1%20Rachel%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20psicol%C3%B3gico.';

const links = [
  {
    id: 'doctoralia',
    label: 'Agendar Atendimento',
    sublabel: 'Escolha dia e horário no Doctoralia',
    href: 'https://www.doctoralia.com.br/z/sn6C4A',
    Icon: Calendar,
    primary: true,
  },
  {
    id: 'whatsapp',
    label: 'Conversar pelo WhatsApp',
    sublabel: '(31) 98414-4303',
    href: WA_URL,
    Icon: MessageSquare,
    primary: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    sublabel: '@rachelcastanheira',
    href: 'https://instagram.com/rachelcastanheira',
    Icon: null,
    instagram: true,
    primary: false,
  },
  {
    id: 'site',
    label: 'Conheça Meu Trabalho',
    sublabel: 'Site completo com informações',
    href: '/',
    Icon: Globe,
    primary: false,
  },
];

const quotes = [
  'A autenticidade não dói porque é difícil. Dói porque é solitária.',
  'Nem tudo precisa ser resolvido hoje.',
  'A clínica continua me ensinando sobre pessoas.',
];

export default function Linktree() {
  const [quoteIdx] = React.useState(() => Math.floor(Math.random() * quotes.length));

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 40px) 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Elementos Botânicos Decorativos */}
      <div style={{ position: 'absolute', top: '0', right: '-30px', width: '130px', height: '200px', pointerEvents: 'none', opacity: 0.6 }}>
        <BotanicalBranch />
      </div>
      <div style={{ position: 'absolute', bottom: '40px', left: '-30px', width: '110px', height: '170px', pointerEvents: 'none', opacity: 0.4, transform: 'scaleX(-1)' }}>
        <BotanicalBranch />
      </div>

      {/* Conteúdo Central */}
      <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>

        {/* Avatar / Foto com moldura editorial */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px' }}
        >
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--border-color)',
              boxShadow: '0 8px 24px rgba(90,64,51,0.1)',
              marginBottom: '16px',
              backgroundColor: 'var(--beige)',
            }}
          >
            <img
              src="/images/rachel-portrait.jpg"
              alt="Rachel Castanheira - Psicóloga"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
            />
          </div>

          {/* Nome e Título */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: 'var(--brown)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              marginBottom: '4px',
              textAlign: 'center',
            }}
          >
            Rachel Castanheira
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--olive)',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '14px',
            }}
          >
            Psicóloga • Belo Horizonte & Online
          </p>

          {/* Localização */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brown-light)', fontSize: '0.84rem' }}>
            <MapPin size={13} style={{ color: 'var(--olive)' }} />
            <span>Belo Horizonte, MG</span>
          </div>
        </motion.div>

        {/* Frase Reflexiva */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            textAlign: 'center',
            marginBottom: '36px',
            padding: '18px 22px',
            backgroundColor: 'var(--beige)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--brown)',
              lineHeight: 1.5,
            }}
          >
            "{quotes[quoteIdx]}"
          </p>
        </motion.div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
          {links.map((link, idx) => {
            const Icon = link.Icon;
            return (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.href.startsWith('/') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  backgroundColor: link.primary ? 'var(--brown)' : 'var(--white)',
                  border: `1px solid ${link.primary ? 'var(--brown)' : 'var(--border-color)'}`,
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  boxShadow: link.primary ? '0 4px 16px rgba(90,64,51,0.15)' : 'var(--shadow-subtle)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {/* Ícone */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: link.primary ? 'rgba(255,253,248,0.15)' : 'var(--beige-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {link.instagram ? (
                      <InstagramIcon size={18} color={link.primary ? 'var(--white)' : 'var(--olive)'} />
                    ) : (
                      <Icon size={18} style={{ color: link.primary ? 'var(--white)' : 'var(--olive)' }} />
                    )}
                  </div>

                  {/* Texto */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: link.primary ? 'var(--white)' : 'var(--brown)',
                        letterSpacing: '0.04em',
                        marginBottom: '1px',
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: link.primary ? 'rgba(255,253,248,0.7)' : 'var(--brown-muted)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {link.sublabel}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  style={{ color: link.primary ? 'rgba(255,253,248,0.7)' : 'var(--brown-muted)', flexShrink: 0 }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Rodapé Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '6px' }}>
            <MonogramRC size={26} />
          </div>
          <p style={{ fontSize: '0.74rem', color: 'var(--brown-muted)', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} Rachel Castanheira · Psicóloga Clínica
          </p>
        </motion.div>
      </div>
    </div>
  );
}
