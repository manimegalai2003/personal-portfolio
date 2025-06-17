
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
   {
  title: "Restaurant Website",
  description: "Developed a modern, responsive restaurant website featuring menu display, table reservations, and customer feedback system.",
  technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  link: "https://github.com/manimegalai2003/Resturant-website",
  demo: "https://resturant-website-lovat.vercel.app/index.html",
  category: "Web Design",
  image: "🍽",
  stats: { responsive: "100%", speed: "95%" }
},
{
  title: "Blood Bank Monitoring System",
  description: "Designed a comprehensive system to track blood inventory, manage donor data, and facilitate efficient blood distribution.",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  link: "https://github.com/manimegalai2003/BloodBank-Monitoring-System",
  demo: "https://resturant-website-cujv.vercel.app/", // <-- Add your live demo URL here
  category: "Healthcare Tech",
  image: "🩸",
  stats: { donors: "500+", efficiency: "90%" }
},
{
  title: "Ecommerce platform",
  description: "Designed and developed a responsive portfolio website to showcase my projects, skills, and experience using React, HTML, CSS, and JavaScript.",
  technologies: ["React", "HTML", "CSS", "JavaScript"],
  link: "https://github.com/manimegalai2003/E-commerce-website", // <-- Your GitHub repo URL
  demo: "https://e-commerce-website-jade-nu.vercel.app/", // <-- Your live portfolio URL
  category: "Web Development",
  image: "💼",
  stats: { pages: "5+", visitors: "1K+" }
},
{
  title: "Weather Prediction App",
  description: "Developed a weather prediction application using OpenWeatherMap API, providing real-time weather updates and forecasts with a clean, responsive interface.",
  technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
  link: "https://github.com/manimegalai2003/Weather-Prediction-",
  demo: "https://weather-prediction-w5qy.vercel.app/",
  category: "Web Application",
  image: "⛅",
  stats: { cities: "100+", accuracy: "Real-time" }
}
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my latest work in web development, AI/ML, and creative solutions
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* All Projects in Same Format */}
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={index} className="glass-card rounded-3xl p-8 md:p-12 hover-glow transition-all duration-500 animate-fade-in-left group">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl">{project.image}</span>
                        <div>
                          <div className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                            {project.category}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                     <div className="flex gap-4">
  <Button 
    className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
    onClick={() => window.open(project.link, '_blank')}
  >
    <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
    View Project
    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
  {project.demo && (
    <Button
      className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
      variant="outline"
      onClick={() => window.open(project.demo, '_blank')}
    >
      Live Demo
      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  )}
</div>
                      
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={key} className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20">
                          <div className="text-3xl font-bold text-purple-400 mb-2">{value}</div>
                          <div className="text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
