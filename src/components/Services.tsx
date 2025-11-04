import { Code, Palette, Monitor, Smartphone, Layers, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern responsive websites, single-page applications, and performance optimization for fast, scalable solutions."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping, and usability testing to create intuitive, beautiful interfaces."
    },
    {
      icon: Monitor,
      title: "Front-end Development",
      description: "HTML, CSS, JavaScript, React, and Next.js expertise with component-driven, maintainable architecture."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect adaptation across all devices with rigorous cross-device testing."
    },
    {
      icon: Layers,
      title: "App Design",
      description: "Mobile UI design, voice interfaces, and accessibility-centered experiences for inclusive applications."
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Implementing AI-powered features, computer vision solutions, and intelligent user experiences."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web and design solutions tailored to bring your digital vision to life
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Engagement types */}
          <div className="mt-16 glass-card p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-6">Engagement Options</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Project Basis", "Hourly Consultation", "Full Product Design & Development", "Freelance", "Full-time"].map((type) => (
                <span
                  key={type}
                  className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
