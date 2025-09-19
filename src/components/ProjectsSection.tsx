import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DevSpring",
      description: "A comprehensive developer launchpad platform for discovering and sharing development resources, tools, and tutorials.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      role: "Full Stack Developer",
      contributions: "Built responsive UI, implemented user authentication, created content management system",
      liveUrl: "https://devspring-launchpad.lovable.app/",
      githubUrl: "#",
      image: "gradient-primary"
    },
    {
      title: "NAPSS UNILAG",
      description: "Official website for the Nigerian Association of Pharmaceutical Students (NAPSS) University of Lagos chapter.",
      technologies: ["React", "JavaScript", "CSS3", "Node.js"],
      role: "Frontend Lead",
      contributions: "Designed and developed the entire frontend, implemented responsive design, optimized performance",
      liveUrl: "https://napssunilag.lovable.app/",
      githubUrl: "#",
      image: "gradient-secondary"
    },
    {
      title: "Chatterbox-Unite",
      description: "Real-time chat application enabling seamless communication with modern messaging features and group functionality.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      role: "Full Stack Developer",
      contributions: "Implemented real-time messaging, user authentication, group chat features, and responsive UI",
      liveUrl: "https://real-time-chatterbox-unite.lovable.app/",
      githubUrl: "#",
      image: "gradient-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my recent work in web development, from concept to deployment.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-gradient rounded-xl p-6 hover-lift fade-in fade-in-delay-${index + 1}`}
            >
              {/* Project Image Placeholder */}
              <div className={`w-full h-48 bg-${project.image} rounded-lg mb-6 flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white/90">
                  {project.title}
                </span>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Role & Contributions */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">
                    Role: {project.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.contributions}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/yourusername", "_blank")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github size={20} className="mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;