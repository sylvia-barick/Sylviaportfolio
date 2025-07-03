
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mindpal",
      description: "A VR-based mental wellness platform combining therapy with cultural narratives like Gita and Ramayana. Features include immersive environments, AI massage, real-time health monitoring, and support for stress, depression, and more.",
      techStack: ["React", "VR", "AI", "Firebase", "Node.js"],
      sdg: "SDG 3: Good Health and Well-Being",
      color: "from-purple-500 to-pink-500",
      liveUrl: "https://iemmindpal.vercel.app/",
      imageUrl: "https://i.postimg.cc/NGp1b8J9/Screenshot-1556.png",
      features: [
        "Immersive VR environments",
        "AI-powered therapy sessions",
        "Real-time health monitoring",
        "Cultural narrative integration"
      ]
    },
    {
      title: "Xencruit",
      description: "AI-powered recruitment platform with resume screening, emotional analysis in video interviews, and real-time hiring analytics. Optimized hiring efficiency and fairness.",
      techStack: ["React", "AI/ML", "Python", "Firebase", "Analytics"],
      color: "from-blue-500 to-cyan-500",
      imageUrl: "https://i.postimg.cc/V5y1XGhr/Screenshot-1557.png",
      features: [
        "Automated resume screening",
        "Emotional analysis in interviews",
        "Real-time hiring analytics",
        "Bias-free recruitment process"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Showcasing my latest work and innovations
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex items-center gap-8`}
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-playfair font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.sdg && (
                    <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-inter">
                      {project.sdg}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-inter font-semibold text-purple-300">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300 font-inter">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-inter font-semibold text-purple-300">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-inter`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-inter">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 font-inter">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className={`bg-gradient-to-r ${project.color} p-1 rounded-2xl`}>
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
