import { GraduationCap, Code2, Palette, Globe } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Front-end Development",
      description: "HTML, CSS, JavaScript, React, Next.js, TypeScript"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, User Research, Prototyping, Usability Testing"
    },
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Mobile-first approach, Cross-browser compatibility"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am passionate about web development and UI/UX designing. I hold a BE in Computer Science & Business Systems 
                and specialize in front-end development, responsive interfaces, and human-centered product design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've managed the official IUCEE Student National Chapter website and led projects that blend AI, sustainability, 
                and social impact. My work focuses on creating accessible, beautiful digital experiences that solve real-world problems.
              </p>
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <p className="text-muted-foreground">BE in Computer Science & Business Systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {skills.map((skill, index) => (
                <div 
                  key={skill.title}
                  className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience highlight */}
          <div className="glass-card p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Website Manager for IUCEE Student National Chapter • Multiple AI and sustainability-focused projects • 
              Combining practical engineering with social impact through innovative digital solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
