import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Founder & Lead Developer",
      company: "Roadless",
      location: "Bizerte",
      period: "since 2025",
      type: "Startup",
      description: "Founded Roadless, a startup in the R&D phase, developing a mobile application to centralize outdoor activities and connect travelers with activity providers, enhancing accessibility to tourism services.",
      technologies: ["React Native", "Supabase", "PostgreSQL"],
      current: true
    },
    {
      title: "Full-Stack Developer Intern",
      company: "ZedneyCreative",
      location: "Bizerte",
      period: "since 10/07/2025",
      type: "Internship",
      description: "Contributed to ZC Invoice during an internship, optimizing module structure for enhanced scalability, implementing new features, and fixing bugs to improve system reliability and functionality.",
      technologies: ["React.js", "Next.js", "Nest.js", "MySQL", "Docker"],
      current: false
    },
    {
      title: "Full-Stack Developer Intern",
      company: "ZedneyCreative",
      location: "Bizerte",
      period: "03/02/2025 - 24/05/2025",
      type: "Internship",
      description: "Upgraded Zc-invoice an Invoice System Application for an end-of-study project, integrating a Gemini-powered chatbot for enhanced support, adding dynamic templates, and fixing bugs to streamline purchase management, improve contact organization.",
      technologies: ["React.js", "Next.js", "Nest.js", "MySQL", "Docker"],
      current: false
    },
    {
      title: "Full-Stack Developer Intern",
      company: "ZedneyCreative",
      location: "Bizerte",
      period: "01/2024-07/2024",
      type: "Internship",
      description: "Developed ZC-Crypto an advanced platform delivering data-driven insights for optimized cryptocurrency trading decisions, integrating the open-source CCXT library to enable real-time market analysis and support strategic buy/sell decisions across multiple exchanges.",
      technologies: ["React.js", "Next.js", "SpringBoot", "MariaDB", "Docker"],
      current: false
    },
    {
      title: "Full-Stack Developer Intern",
      company: "UNICOM",
      location: "Bizerte",
      period: "07/2022-02/2023",
      type: "Internship",
      description: "Building impactful web experiences. Currently working on the Visite Bizerte project at Unicom Digital Agency, a tourist website designed to showcase the beautiful and historical sites of Bizerte. Collaborated with a digital marketing team to design and execute successful multi-industry campaigns.",
      technologies: ["SEO", "Social Media Strategy", "Content Creation", "CMS", "WordPress"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent font-display">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My journey through various roles and projects that shaped my expertise in full-stack development.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-background ${exp.current ? 'bg-primary animate-glow' : 'bg-muted'}`}></div>
                  
                  <Card className="ml-20 bg-card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Building2 className="w-4 h-4 mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <Badge variant={exp.current ? "default" : "secondary"} className="mb-2">
                            {exp.type}
                          </Badge>
                          {exp.current && (
                            <Badge variant="outline" className="border-primary text-primary animate-pulse">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <p className="text-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;