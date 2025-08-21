import codingGif from "@/assets/coding-background.gif";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated GIF Background */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Quem Sou</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Sou um desenvolvedor apaixonado por tecnologia e inovação. Com anos de experiência no desenvolvimento de soluções digitais, 
                dedico-me a criar experiências excepcionais que combinam funcionalidade, performance e design elegante.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Minha Paixão</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Acredito que a tecnologia tem o poder de transformar vidas e negócios. Por isso, busco constantemente me atualizar 
                com as mais recentes tendências e tecnologias do mercado, sempre com foco em entregar soluções que realmente façam a diferença.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Especialidades</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Frontend</h3>
                  <p className="text-muted-foreground">React, TypeScript, Next.js, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Backend</h3>
                  <p className="text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-accent mb-2">DevOps</h3>
                  <p className="text-muted-foreground">Docker, AWS, CI/CD, Kubernetes</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-accent mb-2">Design</h3>
                  <p className="text-muted-foreground">UI/UX, Figma, Design Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;