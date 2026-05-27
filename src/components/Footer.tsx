import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const NAV_OFFSET = 80;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleFooterClick = (e: React.MouseEvent, href: string, section: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(section), 100);
    } else {
      scrollToId(section);
    }
  };

  const footerLinks = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Portfolio", href: "/#portfolio", section: "portfolio" },
    { name: "Services", href: "/#services", section: "services" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];
  const socialLinks = [{
    icon: Github,
    href: "https://github.com/gnanesh25",
    label: "GitHub"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mgnanesh",
    label: "LinkedIn"
  }, {
    icon: Mail,
    href: "mailto:gnaneshgnani5454@gmail.com",
    label: "Email"
  }, {
    icon: Phone,
    href: "tel:+919538442239",
    label: "Phone"
  }];
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">MGR</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full Stack with AI & UI/UX Designer crafting modern, accessible digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleFooterClick(e, link.href, link.section)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
            <p className="text-muted-foreground text-sm">
              Open for freelance & full-time opportunities
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} M GNANESH. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion and React ⚛️
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;