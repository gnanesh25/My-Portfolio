import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_OFFSET = 80;

const navLinks = [
  { name: "Home", href: "/", section: "home" },
  { name: "About", href: "/#about", section: "about" },
  { name: "Project", href: "/#portfolio", section: "portfolio" },
  { name: "Skills", href: "/#services", section: "services" },
  { name: "Contact", href: "/#contact", section: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname !== "/") return;

      const scrollPos = window.scrollY + NAV_OFFSET + 20;
      const sections = ["about", "portfolio", "services", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      // bottom of page → contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        current = "contact";
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToId = useCallback((id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, section: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      // wait for home page to mount
      setTimeout(() => scrollToId(section), 100);
    } else {
      scrollToId(section);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/", "home")}
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold hidden sm:block">MGR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section && location.pathname === "/";
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.section)}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link
                to="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact", "contact")}
              >
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-card rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.section && location.pathname === "/";
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.section)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button asChild className="w-full">
                <Link
                  to="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact", "contact")}
                >
                  Let's Talk
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
