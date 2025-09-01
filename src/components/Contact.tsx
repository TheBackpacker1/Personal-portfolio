import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, Heart } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "Mohamedlouati002@gmail.com",
      href: "mailto:Mohamedlouati002@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+216 22437172",
      href: "tel:+21622437172",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bizerte, Tunisia",
      href: "#",
      color: "text-red-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      handle: "@TheBackpacker1",
      href: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      handle: "louati-mohamed-2370022215",
      href: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent font-display">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-card-gradient border-border/50 shadow-card animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Get in Touch</h3>
                </div>
                
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="flex items-center group">
                        <div className={`p-3 rounded-lg bg-background/50 mr-4 group-hover:scale-110 transition-transform ${method.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{method.title}</p>
                          <a href={method.href} className={`text-muted-foreground hover:text-primary transition-colors ${method.href === '#' ? 'cursor-default' : ''}`}>
                            {method.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a key={index} href={social.href} className={`flex items-center p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-all group ${social.color}`}>
                          <IconComponent className="w-5 h-5 mr-3" />
                          <div>
                            <p className="font-medium">{social.name}</p>
                            <p className="text-sm text-muted-foreground">{social.handle}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Message */}
            <Card className="bg-card-gradient border-border/50 shadow-card animate-slide-in-right">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Quick Message</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Looking for a skilled full-stack developer for your next project? 
                      I'm always excited to work on new challenges and innovative solutions.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      ✅ Available for freelance projects
                    </Badge>
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                      ✅ Open to collaboration
                    </Badge>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                      ✅ Remote work friendly
                    </Badge>
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      className="w-full bg-hero-gradient text-white border-0 hover:shadow-glow transition-all duration-300 font-semibold py-6"
                      size="lg"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Start a Conversation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border/50">
            <p className="text-muted-foreground flex items-center justify-center">
              Copyright © {new Date().getFullYear()} GenzDreamTeam, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;