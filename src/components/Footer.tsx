import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-smooth mb-4 block"
            >
              &lt;YourName /&gt;
            </button>
            <p className="text-muted-foreground text-sm">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover-lift"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Made with Love */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={14} className="text-red-500 animate-pulse" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;