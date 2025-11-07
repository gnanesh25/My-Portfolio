import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import profilePhoto from "@/assets/profile-gnanesh.png";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Hero image background with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroWorkspace} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-gradient whitespace-nowrap">
M GNANESH</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-foreground/90">
              Web Developer & UI/UX Designer
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">Building modern, accessible web and mobile experiences — from product concept to production. Specializing in front-end development, and human-centered design.</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <Button asChild size="lg" className="text-base group">
                <a href="#portfolio">
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                
              </Button>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center text-sm">
              <a href="tel:+919538442239" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                
                
              </a>
              
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              
              {/* Profile image */}
              <img src={profilePhoto} alt="M Gnanesh - Web Developer & UI/UX Designer" className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-primary/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>;
};
export default Hero;