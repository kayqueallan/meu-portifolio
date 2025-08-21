import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-glow border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
            Portfolio
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/sobre"
              className={`transition-colors story-link ${
                location.pathname === '/sobre' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/experiencias"
              className={`transition-colors story-link ${
                location.pathname === '/experiencias' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Experiência
            </Link>
            <Link 
              to="/curriculo"
              className={`transition-colors story-link ${
                location.pathname === '/curriculo' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Currículo
            </Link>
            <Link 
              to="/projetos"
              className={`transition-colors story-link ${
                location.pathname === '/projetos' 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Projetos
            </Link>
          </div>

          <Link to="/contato">
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Contato
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;