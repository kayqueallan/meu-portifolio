import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ResumeDocument from "@/components/ResumeDocument";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <ResumeDocument />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
