import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8 fade-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-pulse-glow">
            <img 
              src={profilePhoto} 
              alt="Alanwoko Chikanma" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in fade-in-delay-1">
          <span className="text-gradient">Full Stack</span>
          <br />
          <span className="text-foreground">Developer</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in fade-in-delay-2">
          Crafting exceptional digital experiences with modern web technologies.
          Passionate about clean code, innovative solutions, and user-centered design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in fade-in-delay-3">
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect hover-lift"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 fade-in fade-in-delay-3">
          <a
            href="https://github.com/unbornmoral"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth hover-lift"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alanwoko-chikanma-ba7680325"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth hover-lift"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:calanwoko@gmail.com"
            className="text-muted-foreground hover:text-primary transition-smooth hover-lift"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;