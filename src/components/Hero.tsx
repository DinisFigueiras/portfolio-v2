
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const jobTitles = [
    'Software Developer',
    'Back-End Developer',
    'Software Engineer'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground">Dinis</span>{' '}
            <span className="text-gradient">Figueiras</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono h-8 flex items-center justify-center">
            <span className="text-primary">{'>'}</span>
            <span className="ml-2 relative">
              <span className="inline-block min-w-0">
                {displayedText}
              </span>
              <span className="animate-blink text-primary font-bold ml-1">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            23 years old Software Engineer from Portugal. I specialize in C#, .NET, SQL and Azure,
            with experience in Agile development environments and a passion for building scalable solutions.
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
                <a href="https://github.com/DinisFigueiras" target="_blank" rel="noopener noreferrer">
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
