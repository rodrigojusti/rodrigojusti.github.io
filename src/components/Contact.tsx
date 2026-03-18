import { Instagram, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`contacts ${isVisible ? 'visible' : ''}`}
      id="contato"
    >
      <div className="section-heading">
        <h2>Entre em contato comigo</h2>
        <p>Posso criar algo único e exclusivo para otimizar e customizar sua rotina</p>
      </div>
      <div className="contact-links">
        <a
          href="https://www.instagram.com/arts_da_brenda/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <Instagram className="contact-icon" size={24} />
          <div>
            <span className="contact-title">Instagram</span>
            <span className="contact-handle">@arts_da_brenda</span>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511936180906"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <MessageCircle className="contact-icon" size={24} />
          <div>
            <span className="contact-title">WhatsApp</span>
            <span className="contact-handle">(44) 93618-0906</span>
          </div>
        </a>
      </div>
    </section>
  );
}
