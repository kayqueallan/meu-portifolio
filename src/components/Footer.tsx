import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato comigo!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <Button 
            variant="secondary" 
            size="lg" 
            className="gap-2 hover:scale-105 transition-transform duration-300"
            asChild
          >
            <a href="mailto:seuemail@example.com">
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-primary-foreground hover:bg-white/20 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-primary-foreground hover:bg-white/20 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-400 animate-pulse" /> usando React & TypeScript
          </p>
          <p className="text-primary-foreground/40 text-sm mt-2">
            © 2024 Seu Nome. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;