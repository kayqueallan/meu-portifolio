import profilePhoto from "@/assets/profile-photo.jpg";
import codingGif from "@/assets/coding-background.gif";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, MapPin } from "lucide-react";

const Home = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "GitHub", icon: Github, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated GIF Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  Seu Nome
                </h1>
                <h2 className="text-2xl lg:text-3xl text-primary font-semibold mb-6">
                  MERN Full Stack Expert
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sou um desenvolvedor full stack especializado em MERN com paixão por transformar visões em realidade digital.
                </p>
                
                <p>
                  Como desenvolvedor de software experiente com mais de 5 anos de experiência, sirvo a indústria como especialista freelancer. 
                  Minha paixão está em aproveitar a tecnologia para resolver problemas complexos e impulsionar resultados positivos de negócios. 
                  Com expertise em várias linguagens, ferramentas e frameworks, foco em entregar resultados de alta qualidade no prazo e ajudar meus clientes a vencer.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    to={social.url}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-2xl blur-xl transform rotate-6"></div>
                
                {/* Profile Photo Container */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden border border-border/20 bg-gradient-to-br from-primary/20 to-accent/20 animate-float">
                  <img 
                    src={profilePhoto} 
                    alt="Foto de perfil profissional" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;