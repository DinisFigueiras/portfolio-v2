
import { Code, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years of Experience', value: '24+' },
    { icon: Users, label: 'Teams Led', value: '15+' },
    { icon: Award, label: 'Projects Delivered', value: '100+' },
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
            Passionate about technology, leadership, and creating solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over two decades in software development, I've witnessed and contributed to the 
              evolution of web technologies. My journey began in the early days of the internet, 
              and I've continuously adapted to new frameworks, methodologies, and challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently serving as a Technical Lead, I focus on architecting scalable solutions, 
              mentoring development teams, and bridging the gap between complex technical 
              requirements and business objectives.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans full-stack development, with particular strength in modern 
              JavaScript frameworks, cloud architectures, and agile methodologies. I believe 
              in writing clean, maintainable code and fostering collaborative team environments.
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
              "Great software is not just about code—it's about understanding people, solving real problems, 
              and creating experiences that matter. Technology should serve humanity, not the other way around."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
