
import { useState } from 'react';
import { Code, Database, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 }
      ],
      color: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-500/20 to-purple-700/20"
    },
    {
      category: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "React.js", level: 85 }
      ],
      color: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/20 to-purple-600/20"
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 }
      ],
      color: "from-green-500 to-purple-600",
      bgGradient: "from-green-500/20 to-purple-600/20"
    },
    {
      category: "Tools & Platforms",
      icon: Settings,
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter Notebook", level: 80 }
      ],
      color: "from-orange-500 to-purple-600",
      bgGradient: "from-orange-500/20 to-purple-600/20"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expertise across modern web technologies and development tools
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={index}
                    className={`group relative glass-card rounded-2xl p-8 hover-glow transition-all duration-500 animate-scale-in transform hover:scale-105 ${
                      hoveredCategory === index ? 'bg-gradient-to-br ' + category.bgGradient : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Floating icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}></div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-colors">
                      {category.category}
                    </h3>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                          </div>
                          
                          {/* Animated progress bar */}
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                              style={{ 
                                width: hoveredCategory === index ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 0.1}s`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Hover border glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
