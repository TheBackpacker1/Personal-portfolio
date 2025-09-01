import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Bike, Camera, Plane } from "lucide-react";

const About = () => {
  const languages = [
    { name: "Arabic", level: "Native", flag: "🇹🇳" },
    { name: "French", level: "Business proficiency", flag: "🇫🇷" },
    { name: "English", level: "Advanced", flag: "🇺🇸" },
    { name: "Spanish", level: "Beginner", flag: "🇪🇸" }
  ];

  const interests = [
    { icon: Plane, name: "Travel Content Creation", color: "text-blue-400" },
    { icon: Camera, name: "Photography & Video Editing", color: "text-green-400" },
    { icon: Bike, name: "Professional International Athlete - Cycling & Triathlon", color: "text-yellow-400" }];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent font-display">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate Full-Stack Developer with a strong foundation in modern web technologies
              and a love for creating impactful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <Card className="bg-card-gradient border-border/50 shadow-card animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Languages</h3>
                </div>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-card-gradient border-border/50 shadow-card animate-slide-in-right">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Code className="w-6 h-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Interests</h3>
                </div>
                <div className="space-y-6">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <div key={index} className="flex items-center group">
                        <div className={`p-3 rounded-lg bg-background/50 mr-4 group-hover:scale-110 transition-transform ${interest.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-medium text-lg">{interest.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <Card className="mt-12 bg-card-gradient border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">🎓</span>
                </div>
                Education
              </h3>
              <div className="border-l-2 border-primary/30 pl-6 ml-4">
                <div className="relative">
                  <div className="absolute -left-8 top-2 w-4 h-4 bg-primary rounded-full"></div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Bachelor's Degree in Software Engineering</h4>
                  <p className="text-muted-foreground mb-2">Higher Institute of Technological Studies of Bizerte (ISETB)</p>
                  <Badge variant="outline" className="text-sm">2021 - 2025</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;