
import { ArrowDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const jobTitles = [
    'Software Developer',
    'Back-End Developer',
    'Software Engineer'
  ];

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced typing animation
  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];

    // Add some randomness to typing speed for more natural feel
    const baseTypeSpeed = isDeleting ? 30 : 80;
    const randomVariation = Math.random() * 40; // 0-40ms variation
    const typeSpeed = baseTypeSpeed + randomVariation;

    const pauseTime = isDeleting ? 500 : 2500; // Pause longer when fully typed

    const timer = setTimeout(() => {
      if (isTyping && !isDeleting) {
        // Typing forward
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(false);
          }, pauseTime);
        }
      } else if (isDeleting) {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isTyping, isDeleting, currentTitleIndex, jobTitles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-primary/5"></div>
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-purple-500/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
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
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" 
        style={{ 
          animationDelay: '-1.5s',
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)`
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

      {/* Moving grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-grid-pattern animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
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

          {/* Enhanced Typewriter effect */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono h-8 flex items-center justify-center">
            <span className="text-primary">{'>'}</span>
            <span className="ml-2 relative">
              <span className="inline-block min-w-0">
                {displayedText}
              </span>
              <span className="animate-blink text-primary font-bold ml-1">|</span>
            </span>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              23 years old Software Engineer from Portugal. I specialize in C#, .NET, SQL and Azure,
              with experience in Agile development environments and a passion for building scalable solutions.
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
                <a href="https://github.com/DinisFigueiras" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="group-hover:text-primary transition-colors" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
              <ArrowDown size={32} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
