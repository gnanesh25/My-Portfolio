import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import sootPencil from "@/assets/soot-pencil.jpg";
import virtualTryon from "@/assets/virtual-tryon.jpg";
import healthApp from "@/assets/health-app.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects: Record<string, any> = {
    "soot-pencil": {
      title: "Soot Pencil",
      subtitle: "Eco-friendly Alternative to Traditional Graphite",
      image: sootPencil,
      role: "Product Designer & Researcher",
      tags: ["Sustainability", "Product Design", "Innovation", "Environmental Impact"],
      problem: "Traditional graphite pencils contribute to deforestation and have significant environmental impact. The production process involves mining and processing that releases carbon emissions and creates waste.",
      approach: "Developed an innovative solution to repurpose soot - a waste byproduct - into a functional writing instrument. The project involved material research, prototyping various binding agents, testing writing quality, and designing a sustainable manufacturing process.",
      techStack: ["Material Science", "Sustainable Design", "Prototyping", "Environmental Research"],
      features: [
        "Repurposes waste soot into functional writing material",
        "Zero deforestation impact compared to traditional pencils",
        "Biodegradable and eco-friendly components",
        "Comparable writing quality to graphite pencils",
        "Scalable manufacturing process with minimal environmental footprint"
      ],
      impact: "This project demonstrates how waste materials can be transformed into valuable products, contributing to circular economy principles. It offers a practical, sustainable alternative that could reduce the environmental impact of writing instruments.",
      lessons: "Key learnings included understanding material properties of soot, optimizing binder ratios for best writing quality, and designing for both functionality and sustainability. The project highlighted the importance of considering entire product lifecycles in design decisions.",
      nextSteps: "Plans include scaling production, exploring partnerships with eco-conscious stationery brands, conducting long-term durability testing, and researching additional applications for soot-based materials."
    },
    "virtual-tryon": {
      title: "AI Virtual Try-On for Clothing",
      subtitle: "Realistic Clothing Visualization with Computer Vision",
      image: virtualTryon,
      role: "UI/UX Designer & Front-end Developer",
      timeframe: "4 months",
      tags: ["AI", "Computer Vision", "Mobile", "UI/UX", "E-commerce"],
      problem: "Online clothing shopping suffers from high return rates due to customers' inability to visualize how garments will look on their bodies. This creates friction in the purchase decision and leads to environmental waste from returns.",
      approach: "Designed and developed an AI-powered virtual try-on application that allows users to upload full-body photos and see realistic visualizations of how different clothing items would look on them. The system uses computer vision and machine learning to accurately map clothing onto user photos while maintaining natural proportions and lighting.",
      techStack: ["React", "TensorFlow.js", "Computer Vision APIs", "Node.js", "Cloud Storage"],
      features: [
        "Upload full-body photos or use device camera",
        "AI-powered realistic garment mapping and draping",
        "Content filters to ensure appropriate image processing",
        "Privacy-first architecture with local processing options",
        "Intuitive UX for selecting and trying on multiple items",
        "Save and share try-on results",
        "Responsive design for mobile and desktop"
      ],
      impact: "The application significantly improves the online shopping experience by reducing uncertainty and increasing purchase confidence. Early testing showed increased user engagement and reduced hesitation in online clothing purchases.",
      lessons: "This project taught me the complexities of working with AI/ML models in production, the importance of user privacy in image processing applications, and how to balance computational requirements with user experience. Extensive user testing revealed the need for clear guidance on photo quality and positioning.",
      nextSteps: "Future enhancements include integrating with e-commerce platforms, improving AI model accuracy for diverse body types, adding size recommendation features, and implementing real-time try-on using device cameras."
    },
    "health-assistant": {
      title: "AI Health Assistant App",
      subtitle: "Voice-Enabled Healthcare for Elderly Users",
      image: healthApp,
      role: "UI/UX Designer & Developer",
      timeframe: "5 months",
      tags: ["AI", "Healthcare", "Accessibility", "Voice UI", "Mobile"],
      problem: "Elderly and less educated populations face significant barriers in managing their health due to complex medical information, difficulty remembering medication schedules, and challenges navigating traditional healthcare apps. There's a critical need for accessible health management tools that don't require technical literacy.",
      approach: "Designed a voice-first health assistant application specifically for elderly users, with large, clear interface elements and natural language voice interactions. The app focuses on simplicity, accessibility, and safety, with features that don't require reading or complex navigation.",
      techStack: ["React Native", "Voice Recognition APIs", "Natural Language Processing", "SQLite", "Cloud Health Records"],
      features: [
        "Voice-activated medicine reminders with natural language",
        "Secure health record storage with easy voice-based retrieval",
        "Medicine information lookup via voice or image recognition",
        "Large, high-contrast UI optimized for visual accessibility",
        "Simple navigation designed for users with limited tech experience",
        "Emergency contact quick-dial functionality",
        "Multilingual support for diverse user bases",
        "Family member notifications and monitoring features"
      ],
      impact: "The application bridges the digital divide in healthcare, enabling elderly and less literate users to better manage their health independently. User testing with senior citizens showed high satisfaction rates and improved medication adherence.",
      lessons: "This project emphasized the importance of designing for accessibility from the ground up, not as an afterthought. Key learnings included understanding cognitive load in elderly users, the power of voice interfaces for accessibility, and the need for extensive real-world testing with target users. Privacy and safety considerations were paramount.",
      nextSteps: "Plans include integrating with pharmacy systems for automatic refill reminders, adding health metric tracking (blood pressure, glucose), implementing AI-powered symptom checking, expanding language support, and conducting clinical trials to measure health outcomes."
    }
  };

  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/#portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                {project.subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project image */}
              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project details grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2">Role</h3>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>
                {project.timeframe && (
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Timeframe</h3>
                    <p className="text-muted-foreground">{project.timeframe}</p>
                  </div>
                )}
              </div>

              {/* Content sections */}
              <div className="space-y-12">
                {/* Problem */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">The Problem</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Approach & Contributions</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.approach}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Impact</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Lessons Learned */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Lessons Learned</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.lessons}
                  </p>
                </div>

                {/* Next Steps */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.nextSteps}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 glass-card p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in this project?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can bring similar innovation to your projects
                </p>
                <Button asChild size="lg">
                  <Link to="/#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
