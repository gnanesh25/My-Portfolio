import { Code, Palette, Monitor, Smartphone, Layers, Zap } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Code,
    title: "Web Development",
    description: "Modern responsive websites, single-page applications, and performance optimization for fast, scalable solutions."
  }, {
    icon: Palette,
    title: "UI/UX Design",
    description: "User research, wireframing, prototyping, and usability testing to create intuitive, beautiful interfaces."
  }, {
    icon: Monitor,
    title: "Front-end Development",
    description: "HTML, CSS, JavaScript, React, and Next.js expertise with component-driven, maintainable architecture."
  }, {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect adaptation across all devices with rigorous cross-device testing."
  }, {
    icon: Layers,
    title: "App Design",
    description: "Mobile UI design, voice interfaces, and accessibility-centered experiences for inclusive applications."
  }, {
    icon: Zap,
    title: "AI Integration",
    description: "Implementing AI-powered features, computer vision solutions, and intelligent user experiences."
  }];
  return <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        
      </div>
    </section>;
};
export default Services;