
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Dinis</span>{' '}
            <span className="text-gradient">Figueiras</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            <span className="text-primary">></span> Senior Software Developer
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            24 years of experience crafting innovative web solutions, leading development teams, 
            and turning complex ideas into elegant, scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact" className="flex items-center space-x-2">
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/dinisfigueiras/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/dinisfigueiras" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
