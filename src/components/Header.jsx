import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { MonogramRC } from './BotanicalDecor';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Psicoterapia', href: '#psicoterapia' },
    { label: 'Abordagem', href: '#abordagem' },
    { label: 'Reflexões', href: '#reflexoes' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(243, 232, 216, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        paddingTop: scrolled ? '12px' : '20px',
        paddingBottom: scrolled ? '12px' : '20px',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        {/* Logo / Monograma */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <MonogramRC size={36} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                letterSpacing: '0.06em',
                color: 'var(--brown)',
                fontWeight: 600,
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
              }}
            >
              Rachel Castanheira
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--olive)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              Psicóloga • CRP 04/65432
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'clamp(14px, 1.8vw, 26px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          <a
            href="https://www.doctoralia.com.br/z/sn6C4A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '0.76rem',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
              display: 'none',
            }}
            id="desktop-cta-btn"
          >
            <Calendar size={13} style={{ flexShrink: 0 }} />
            <span>Agendar Consulta</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: 'var(--brown)',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: 'var(--cream)',
              borderBottom: '1px solid var(--border-color)',
              overflow: 'hidden',
            }}
          >
            <div
              className="container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                paddingTop: '24px',
                paddingBottom: '32px',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ paddingTop: '10px' }}>
                <a
                  href="https://www.doctoralia.com.br/z/sn6C4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', textAlign: 'center' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar size={16} />
                  <span>Agendar no Doctoralia</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          #desktop-cta-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
