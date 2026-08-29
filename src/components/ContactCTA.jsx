import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Send, CheckCircle2, ArrowRight, MapPin, Mail, Clock } from 'lucide-react';
import { BotanicalBranch, MonogramRC } from './BotanicalDecor';

export default function ContactCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    modalidade: 'online',
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission / trigger WhatsApp or direct mail
    const text = encodeURIComponent(
      `Olá Rachel, meu nome é ${formData.nome}. Gostaria de informações sobre atendimento (${formData.modalidade}). Mensagem: ${formData.mensagem}`
    );
    window.open(`https://wa.me/5531984144303?text=${text}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="section-spacer"
      style={{
        backgroundColor: 'var(--beige)',
        borderTop: '1px solid var(--border-color)',
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
            alignItems: 'start',
          }}
        >
          {/* Lado Esquerdo: Informações de Atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-sub" style={{ display: 'block', marginBottom: '12px' }}>
              Próximo Passo
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                color: 'var(--brown)',
                marginBottom: '18px',
              }}
            >
              Agende sua sessão ou envie uma mensagem
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--brown)',
                marginBottom: '32px',
              }}
            >
              Você pode agendar diretamente pelo Doctoralia, selecionando o horário que melhor se adapta à sua rotina, ou entrar em contato direto por mensagem.
            </p>

            {/* Ações Rápidas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '38px' }}>
              <a
                href="https://www.doctoralia.com.br/z/sn6C4A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: 'space-between', padding: '18px 28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Calendar size={18} />
                  <span>Agendar Consulta no Doctoralia</span>
                </div>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://wa.me/5531984144303?text=Ol%C3%A1%20Rachel%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20psicol%C3%B3gico."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--border-color)',
                  padding: '16px 28px',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--brown)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MessageSquare size={18} style={{ color: 'var(--olive)' }} />
                  <span>Conversar pelo WhatsApp</span>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Informações complementares */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--brown-light)', fontSize: '0.9rem' }}>
                <MapPin size={16} style={{ color: 'var(--olive)' }} />
                <span>Belo Horizonte - MG • Atendimentos Online Globais</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--brown-light)', fontSize: '0.9rem' }}>
                <Clock size={16} style={{ color: 'var(--olive)' }} />
                <span>Segunda a Sexta-feira • Horários com agendamento prévio</span>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Formulário de Contato Delicado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              backgroundColor: 'var(--white)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(28px, 4vw, 40px)',
              boxShadow: 'var(--shadow-float)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.7rem',
                color: 'var(--brown)',
                marginBottom: '8px',
              }}
            >
              Envie uma mensagem
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--brown-light)', marginBottom: '24px' }}>
              Tire suas dúvidas diretamente. Respondo com atenção e brevidade.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  padding: '30px 20px',
                  textAlign: 'center',
                  backgroundColor: 'var(--beige-tint)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <CheckCircle2 size={36} style={{ color: 'var(--olive)', margin: '0 auto 12px' }} />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--brown)', marginBottom: '6px' }}>
                  Mensagem Enviada
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--brown-light)' }}>
                  Obrigada pelo contato. Responderei em breve!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.76rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--brown)',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--cream)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-xs)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: 'var(--brown)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--brown)',
                        fontWeight: 600,
                        marginBottom: '6px',
                      }}
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-xs)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        color: 'var(--brown)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--brown)',
                        fontWeight: 600,
                        marginBottom: '6px',
                      }}
                    >
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="(31) 98414-4303"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-xs)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        color: 'var(--brown)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.76rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--brown)',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    Modalidade de Preferência
                  </label>
                  <select
                    value={formData.modalidade}
                    onChange={(e) => setFormData({ ...formData, modalidade: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--cream)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-xs)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: 'var(--brown)',
                      outline: 'none',
                    }}
                  >
                    <option value="Online">Atendimento Online (Brasil / Exterior)</option>
                    <option value="Presencial em BH">Atendimento Presencial em Belo Horizonte</option>
                    <option value="Ainda não sei / Dúvidas">Ainda tenho dúvidas</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.76rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--brown)',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    Como posso te ajudar? (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente o que você busca na psicoterapia..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--cream)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-xs)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: 'var(--brown)',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  <Send size={15} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
