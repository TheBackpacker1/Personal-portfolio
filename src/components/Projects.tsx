import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "IoT Animal Health Monitoring System",
      description: "Developed an IoT-based system to monitor and detect animal health issues using real-time data collection from sensors (pulse, temperature, accelerometer).",
      technologies: ["ESP32", "Django", "MongoDB", "MQTT", "Flutter"],
      date: "09/2024",
      status: "Completed",
      category: "IoT & Mobile",
      highlights: ["Real-time monitoring", "Multi-sensor integration", "Cross-platform mobile app"]
    },
    {
      title: "Elderly Health Management App",
      description: "Developed a mobile application to monitor and manage health conditions of elderly individuals by tracking diseases, medication schedules, and health status.",
      technologies: ["Kotlin", "Node.js"],
      date: "10/2024",
      status: "Completed", 
      category: "Mobile Development",
      highlights: ["Health tracking", "Medication reminders", "User-friendly interface"]
    },
    {
      title: "Digital Library Management System",
      description: "Developed a library management application to streamline cataloging, tracking, and book borrowing processes.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      date: "12/2023",
      status: "Completed",
      category: "Web Development",
      highlights: ["Book management", "User authentication", "Borrowing system"]
    },
    {
      title: "Real-time Weather Mobile App",
      description: "Developed a weather mobile application offering real-time forecasts, alerts, and personalized weather updates.",
      technologies: ["React Native"],
      date: "12/2023",
      status: "Completed",
      category: "Mobile Development",
      highlights: ["Real-time data", "Weather alerts", "Personalized updates"]
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a chat application enabling real-time messaging, group communication, and seamless user interaction.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      date: "12/2022",
      status: "Completed",
      category: "Web Development",
      highlights: ["Real-time messaging", "Group chat", "User management"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "IoT & Mobile": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Mobile Development": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Web Development": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent font-display">
              Personal Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative projects demonstrating my skills in full-stack development, 
              IoT solutions, and mobile applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-1 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button size="sm" variant="outline" className="flex-1 bg-background/50 hover:bg-primary/10 border-primary/20">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-background/50 hover:bg-primary/10 border-primary/20">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;