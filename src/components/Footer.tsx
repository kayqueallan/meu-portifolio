import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-card via-background to-section-bg border-t border-border/50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Sempre aberto a novas oportunidades, projetos interessantes e colaborações incríveis.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:joao.silva@email.com">
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent/30 text-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>usando</span>
              <Code className="w-4 h-4 text-primary" />
              <span>React & TypeScript</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Coffee className="w-4 h-4 text-accent" />
              <span className="text-sm">Powered by coffee ☕</span>
            </div>
          </div>
          
          <p className="text-muted-foreground/60 text-sm text-center mt-4">
            © 2024 João Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;