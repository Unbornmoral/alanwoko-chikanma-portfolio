import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js/Express", level: 80 },
    { name: "Python/Django", level: 75 },
    { name: "Database Design", level: 80 },
    { name: "UI/UX Design", level: 70 },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Freelance",
      description: "Building modern web applications for various clients using React, Node.js, and cloud technologies."
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Tech Startup",
      description: "Led frontend development initiatives, improved user experience, and mentored junior developers."
    },
    {
      year: "2022",
      title: "Web Developer",
      company: "Digital Agency",
      description: "Developed responsive websites and web applications, collaborated with design and backend teams."
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Bio */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-primary p-1">
                <img 
                  src={aboutPhoto} 
                  alt="Alanwoko Chikanma" 
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">About Me</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate full-stack developer with a love for creating 
                  innovative digital solutions. With expertise in modern web technologies, 
                  I specialize in building scalable applications that deliver exceptional 
                  user experiences.
                </p>
                <p>
                  My journey in software development began with a curiosity about 
                  how things work behind the scenes. Today, I combine technical 
                  expertise with creative problem-solving to bring ideas to life.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>

              {/* Resume Download */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.docx';
                  link.download = 'Alanwoko_Chikanma_Resume.docx';
                  link.click();
                }}
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Skills and Timeline */}
          <div className="space-y-12">
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Experience
              </h3>
              <div className="space-y-6">
                {timeline.map((item) => (
                  <div key={item.year} className="relative pl-8 border-l-2 border-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="font-medium text-primary">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;