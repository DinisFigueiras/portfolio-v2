
import { Code, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Programming Languages', value: '5+' },
    { icon: Users, label: 'Team Projects', value: '10+' },
    { icon: Award, label: 'Projects Completed', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, continuous learning, and creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a 24-year-old Junior Software Developer, I'm passionate about creating efficient, 
              user-friendly applications. My journey in programming started during my studies, and 
              I've been continuously expanding my skills ever since.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in modern web development technologies, with a strong foundation in 
              JavaScript, React, and backend development. I enjoy working on both frontend and 
              backend challenges, always striving to write clean, maintainable code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm eager to contribute to innovative projects, collaborate with experienced developers, 
              and continue growing my expertise in software development. I believe in learning by 
              doing and constantly challenging myself with new technologies and methodologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
            <p className="text-lg text-muted-foreground italic">
              "Every line of code is an opportunity to learn something new. I believe in writing code 
              that not only works but is also readable, maintainable, and makes a positive impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
