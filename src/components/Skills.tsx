
const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: "Advanced", description: "Semantic markup and accessibility" },
    { name: "CSS", level: "Advanced", description: "Responsive design and animations" },
    { name: "JavaScript", level: "Intermediate", description: "ES6+ and modern frameworks" },
    { name: "React", level: "Intermediate", description: "Component-based development" },
    { name: "Firebase", level: "Intermediate", description: "Backend services and hosting" },
    { name: "MongoDB", level: "Intermediate", description: "NoSQL database management" },
    { name: "EmailJS", level: "Intermediate", description: "Send emails directly from client-side JavaScript without a backend using EmailJS service integration." },
    { name: "AI/ML", level: "Beginner", description: "Basic understanding of machine learning concepts" }
  ];

  const softSkills = [
    { name: "Teamwork", description: "Collaborative problem-solving and group dynamics" },
    { name: "Communication", description: "Clear technical documentation and presentation" },
    { name: "Problem Solving", description: "Analytical thinking and creative solutions" },
    { name: "Leadership", description: "Project management and team coordination" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Technologies and abilities I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div>
            <h3 className="text-3xl font-playfair font-bold text-white mb-8 text-center">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-inter font-semibold text-white">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-inter text-purple-300 bg-purple-400/20 px-3 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-gray-300 font-inter text-sm">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl font-playfair font-bold text-white mb-8 text-center">
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 group">
                  <h4 className="text-xl font-inter font-semibold text-white mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-gray-300 font-inter text-sm">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
