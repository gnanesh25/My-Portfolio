import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/#about"
  }, {
    name: "Project",
    href: "/#portfolio"
  }, {
    name: "Skills",
    href: "/#services"
  }, {
    name: "Contact",
    href: "/#contact"
  }];
  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">MGR</span>
            </div>
            <span className="text-xl font-bold hidden sm:block">MGR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} onClick={e => {
            if (link.href.startsWith("/#")) {
              e.preventDefault();
              scrollToSection(link.href);
            }
          }} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href ? "text-primary" : "text-foreground/80"}`}>
                {link.name}
              </Link>)}
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 glass-card rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map(link => <Link key={link.name} to={link.href} onClick={e => {
            if (link.href.startsWith("/#")) {
              e.preventDefault();
              scrollToSection(link.href);
            }
          }} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href ? "text-primary" : "text-foreground/80"}`}>
                  {link.name}
                </Link>)}
              <Button asChild className="w-full">
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Let's Talk
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;