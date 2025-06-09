
import { Code, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years of Experience', value: '2+' },
    { icon: Users, label: 'Internships', value: '4' },
    { icon: Award, label: 'Certifications', value: '2' },
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
            Passionate about software engineering, cloud technologies, and building scalable solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a 23-year-old Software Engineer from Portugal with over 2 years of professional experience.
              I've worked mostly with C#, .NET, SQL, and Azure, gaining valuable experience in Agile
              software development environments, processes, and methodologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working at Hitachi Vantara, I specialize in enterprise software development
              and cloud technologies. I hold Microsoft Azure certifications and have experience
              working with databases, web applications, and mobile development using Android Studio and Swift.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Although I enjoy and value teamwork, working independently has allowed me to see the direct
              impact I have on projects. When I'm not coding, I'm a regular guy with a girlfriend and a cat,
              and a passion for football. I believe in continuous learning and staying current with emerging technologies.
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
              "I believe in building software that not only solves problems but is also scalable,
              maintainable, and makes a real difference in people's lives. Every project is an
              opportunity to learn and grow as a developer."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
