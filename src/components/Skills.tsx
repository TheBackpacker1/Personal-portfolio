import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Smartphone, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "PHP"],
      color: "text-blue-400"
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "React Native", "Next.js", "Tailwind CSS", "Material UI", "Responsive Design"],
      color: "text-green-400"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Nest.js", "Spring Boot", "Express.js", "RESTful APIs", "GraphQL"],
      color: "text-purple-400"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Kotlin", "Android Development", "Cross-platform"],
      color: "text-orange-400"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MariaDB", "MongoDB", "Supabase", "Firebase"],
      color: "text-red-400"
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Docker", "Git", "GitHub", "Agile & Scrum", "Project Management", "Version Control"],
      color: "text-yellow-400"
    }
  ];

  const methodologies = [
    "Agile & Scrum (Project Management)",
    "Media & Communication",
    "Social Media Management",
    "Expert Video Editing",
    "Professional Filmmaking",
    "Storytelling",
    "Radio Broadcasting Experience"
  ];

  return (
    <section id="skills" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent font-display">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and methodologies for building robust applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg bg-background/50 mr-4 group-hover:scale-110 transition-transform ${category.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Methodologies & Soft Skills */}
          <Card className="bg-card-gradient border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">🎯</span>
                </div>
                Methodologies & Additional Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {methodologies.map((methodology, index) => (
                  <div key={index} className="flex items-center p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-medium">{methodology}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;