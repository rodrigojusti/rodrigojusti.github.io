import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <div className="logo-placeholder">
            <span>Logo</span>
          </div>
          <span className="header__brand">Arts da Brenda</span>
        </div>

        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`header__nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('produtos')}>Produtos</button>
          <button onClick={() => scrollToSection('sobre')}>Sobre</button>
          <button onClick={() => scrollToSection('processo')}>Como Trabalho</button>
          <button onClick={() => scrollToSection('contato')}>Contato</button>
        </nav>
      </div>
    </header>
  );
}
