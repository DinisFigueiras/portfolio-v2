
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Floating orbs with mouse parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" 
        style={{ 
          animationDelay: '-3s',
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Enhanced title with stagger animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="inline-block animate-slide-down text-foreground" style={{ animationDelay: '0.1s' }}>
                Dinis
              </span>{' '}
              <span className="inline-block animate-slide-down text-gradient" style={{ animationDelay: '0.3s' }}>
                Figueiras
              </span>
            </h1>
          </div>
          
          {/* Typing effect */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            <span className="text-primary">{'>'}</span> 
            <span className={`${isTyping ? 'typing-animation' : ''}`}>
              Junior Software Developer
            </span>
            <span className="animate-pulse">|</span>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              24 years old with a passion for web development. I enjoy creating innovative solutions, 
              learning new technologies, and building applications that solve real-world problems.
            </p>
          </div>

          {/* Enhanced buttons with hover effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group relative overflow-hidden">
              <a href="#contact" className="flex items-center space-x-2 z-10 relative">
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="lg" asChild className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <a href="https://www.linkedin.com/in/dinisfigueiras/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <a href="https://github.com/dinisfigueiras" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="group-hover:text-primary transition-colors" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
              <Sparkles size={16} className="mb-2 group-hover:animate-spin" />
              <ArrowDown size={32} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
