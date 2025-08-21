import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e dashboard administrativo.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades colaborativas e sincronização em tempo real.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com previsões detalhadas, mapas interativos e alertas personalizados.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "OpenWeather API"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Ferramenta de análise de mídias sociais com métricas avançadas, relatórios automáticos e insights de engajamento.",
      image: "/placeholder.svg",
      technologies: ["Python", "React", "Chart.js", "API Integration"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Website portfólio responsivo com animações suaves, otimizado para SEO e performance.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Sistema completo de gerenciamento de aprendizado com cursos online, quizzes e acompanhamento de progresso.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Nextauth"],
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Projetos em Destaque</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="gap-2 flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild className="gap-2 flex-1 bg-gradient-to-r from-primary to-accent">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Outros Projetos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-lg font-bold mb-3 text-foreground">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" asChild className="gap-1 p-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="gap-1 p-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
