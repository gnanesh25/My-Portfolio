import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import sootPencil from "@/assets/soot-pencil.jpg";
import virtualTryon from "@/assets/virtual-tryon.jpg";
import healthApp from "@/assets/health-app.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: "soot-pencil",
      title: "Soot Pencil",
      description: "Eco-friendly alternative to traditional graphite pencils",
      image: sootPencil,
      tags: ["Sustainability", "Product Design", "Innovation"],
      icon: Leaf,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "virtual-tryon",
      title: "AI Virtual Try-On",
      description: "AI-powered clothing visualization with realistic try-on experience",
      image: virtualTryon,
      tags: ["AI", "Computer Vision", "Mobile", "UI/UX"],
      icon: Sparkles,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "health-assistant",
      title: "AI Health Assistant",
      description: "Voice-enabled health app designed for elderly and accessibility",
      image: healthApp,
      tags: ["AI", "Healthcare", "Accessibility", "Voice UI"],
      icon: Heart,
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions that blend technology with social impact
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary font-medium">
                      <span>View Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "3+", label: "Major Projects" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "AI", label: "Technology Focus" },
              { number: "Impact", label: "Social Good" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card p-6 rounded-xl text-center animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
