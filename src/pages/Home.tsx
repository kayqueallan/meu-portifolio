import profilePhoto from "@/assets/profile-photo.jpg";
import codingGif from "@/assets/coding-background.gif";
import { Link } from "react-router-dom";

const Home = () => {
  const technologies = [
    { name: "JavaScript", years: "+5 anos" },
    { name: "React", years: "4 anos" },
    { name: "Node.js", years: "3 anos" },
    { name: "TypeScript", years: "3 anos" },
    { name: "Python", years: "2 anos" },
    { name: "PostgreSQL", years: "3 anos" },
    { name: "Docker", years: "2 anos" },
    { name: "AWS", years: "2 anos" },
    { name: "Next.js", years: "2 anos" },
    { name: "Tailwind CSS", years: "3 anos" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Animated GIF Background */}
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />
      
      {/* Left Sidebar */}
      <aside className="w-80 bg-card/30 backdrop-blur-sm border-r border-border/20 p-8 flex flex-col items-center relative z-10">
        {/* Profile Photo */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 mb-6 animate-float">
          <img 
            src={profilePhoto} 
            alt="Minha foto de perfil" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Seu Nome</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">SOFTWARE ENGINEER</p>
        </div>
        
        {/* Navigation Menu */}
        <nav className="w-full space-y-4">
          <Link 
            to="/sobre" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/10 hover:border-primary/30"
          >
            <span className="mr-3">—</span>
            <span className="text-sm uppercase tracking-wide">SOBRE</span>
          </Link>
          <Link 
            to="/experiencias" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/10 hover:border-primary/30"
          >
            <span className="mr-3">—</span>
            <span className="text-sm uppercase tracking-wide">EXPERIÊNCIA</span>
          </Link>
          <Link 
            to="/curriculo" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/10 hover:border-primary/30"
          >
            <span className="mr-3">—</span>
            <span className="text-sm uppercase tracking-wide">CURRÍCULO</span>
          </Link>
          <Link 
            to="/projetos" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/10 hover:border-primary/30"
          >
            <span className="mr-3">—</span>
            <span className="text-sm uppercase tracking-wide">PROJETOS</span>
          </Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-12 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-foreground mb-8">
              Olá! Eu sou Desenvolvedor. <span className="inline-block animate-bounce">👋</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Minha jornada no mundo digital começou há alguns anos, quando descobri minha paixão por criar soluções inovadoras e experiências digitais excepcionais. 
                Isso despertou meu interesse por tecnologia e comunidades online.
              </p>
              
              <p>
                Poucos anos depois, mergulhei no desenvolvimento web e mobile, e desde então tenho me dedicado a criar aplicações robustas e escaláveis. 
                Ao longo dos anos, construí e mantive diversos projetos, desde pequenas aplicações até <span className="text-primary font-semibold">sistemas complexos de grande escala</span>, 
                atendendo milhares de usuários ativos.
              </p>
              
              <p>
                Atualmente, estou focado em avançar minha carreira como Engenheiro de Software, especializando-me em tecnologias modernas e metodologias ágeis, 
                canalizando minhas habilidades e experiência para novos desafios e projetos empolgantes.
              </p>
            </div>
          </div>
          
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-primary/10 border border-primary/20 rounded-md px-4 py-2 hover:bg-primary/20 transition-colors duration-200"
              >
                <span className="text-primary font-medium text-sm">{tech.name}</span>
                <span className="text-muted-foreground text-xs ml-2">{tech.years}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;