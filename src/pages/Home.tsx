import profilePhoto from "@/assets/profile-photo.jpg";
import codingGif from "@/assets/coding-background.gif";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated GIF Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glow animate-float">
              <img 
                src={profilePhoto} 
                alt="Minha foto de perfil" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Introduction */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="block text-foreground mb-4">Olá!</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
                Sou Desenvolvedor
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bem-vindo ao meu portfólio digital. Aqui você encontrará informações sobre minha trajetória profissional, projetos e como entrar em contato comigo.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            <Link to="/sobre">
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Sobre Mim
              </Button>
            </Link>
            
            <Link to="/experiencias">
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Experiências
              </Button>
            </Link>
            
            <Link to="/curriculo">
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Currículo
              </Button>
            </Link>
            
            <Link to="/projetos">
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background transition-all duration-300"
              >
                Projetos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;