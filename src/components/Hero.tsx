import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-section-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-10 mt-16">
              <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/lovable-uploads/a743fa1a-9a09-405a-b68a-9a9b1f7f92e7.png" 
                  alt="Mohamed Louati - Full-Stack Developer" 
                  className="relative w-full h-full rounded-full object-cover border-4 border-white/30 shadow-elegant group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/10 text-white border-white/20 hover:bg-white/20">
              <MapPin className="w-4 h-4 mr-2" />
              Bizerte, Tunisia
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-display drop-shadow-lg">
              Mohamed Louati
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Full-Stack Developer & Software Engineer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web solutions and mobile applications. 
              Experienced in React, Next.js, Node.js, and modern development practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm shadow-elegant">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm shadow-elegant">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm shadow-elegant">
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <a href="mailto:Mohamedlouati002@gmail.com" className="flex items-center hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                Mohamedlouati002@gmail.com
              </a>
              <a href="tel:+21622437172" className="flex items-center hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +216 22437172
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;