import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import profileImage from "@/assets/profile-image.jpg";
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
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Column - Content */}
          <div className="text-center md:text-left">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-gradient">
M GNANESH</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 text-foreground/90">
              Web Developer & UI/UX Designer
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Building modern, accessible web and mobile experiences — from product concept to production. 
              Specializing in front-end development, responsive interfaces, and human-centered design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button asChild size="lg" className="text-base group">
                <Link to="/#portfolio">
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                
              </Button>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center text-sm">
              <a href="tel:+919538442239" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                
                
              </a>
              <a href="mailto:gnaneshgnani5454@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                
                
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <Avatar className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 ring-4 ring-primary/20 hover-scale shadow-2xl">
              <AvatarImage src={profileImage} alt="M GNANESH - Web Developer & UI/UX Designer" />
              <AvatarFallback className="text-6xl font-bold">MG</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>;
};
export default Hero;