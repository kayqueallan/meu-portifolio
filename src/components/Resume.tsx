import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Globe, FileText } from "lucide-react";

const Resume = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const content = {
    pt: {
      title: "Currículo",
      subtitle: "Download do meu currículo em português",
      downloadBtn: "Baixar Currículo",
      skills: "Habilidades Técnicas",
      education: "Formação",
      languages: "Idiomas"
    },
    en: {
      title: "Resume",
      subtitle: "Download my resume in English",
      downloadBtn: "Download Resume",
      skills: "Technical Skills",
      education: "Education",
      languages: "Languages"
    }
  };

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
  ];

  const educationData = {
    pt: [
      {
        degree: "Bacharelado em Ciência da Computação",
        school: "Universidade Federal",
        year: "2015 - 2019"
      }
    ],
    en: [
      {
        degree: "Bachelor's in Computer Science",
        school: "Federal University",
        year: "2015 - 2019"
      }
    ]
  };

  const languageSkills = {
    pt: [
      { language: "Português", level: "Nativo" },
      { language: "Inglês", level: "Avançado" },
      { language: "Espanhol", level: "Intermediário" }
    ],
    en: [
      { language: "Portuguese", level: "Native" },
      { language: "English", level: "Advanced" },
      { language: "Spanish", level: "Intermediate" }
    ]
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {content[language].subtitle}
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={language === 'pt' ? 'default' : 'outline'}
              onClick={() => setLanguage('pt')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              Português
            </Button>
            <Button 
              variant={language === 'en' ? 'default' : 'outline'}
              onClick={() => setLanguage('en')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              English
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="p-6 hover:shadow-medium transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">{content[language].skills}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">{content[language].education}</h3>
            <div className="space-y-3">
              {educationData[language].map((edu, index) => (
                <div key={index}>
                  <p className="font-medium text-foreground">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                  <p className="text-muted-foreground text-xs">{edu.year}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">{content[language].languages}</h3>
            <div className="space-y-3">
              {languageSkills[language].map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-foreground">{lang.language}</span>
                  <Badge variant="outline" className="text-xs">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-medium transition-all duration-300 gap-2"
          >
            <Download className="w-5 h-5" />
            {content[language].downloadBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;