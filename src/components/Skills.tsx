
const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: "🌐", level: "Advanced" },
    { name: "CSS", icon: "🎨", level: "Advanced" },
    { name: "JavaScript", icon: "⚡", level: "Intermediate" },
    { name: "React", icon: "⚛️", level: "Intermediate" },
    { name: "Firebase", icon: "🔥", level: "Intermediate" },
  ];

  const softSkills = [
    { name: "Teamwork", icon: "🤝", description: "Collaborative problem-solving" },
    { name: "Communication", icon: "💬", description: "Clear and effective interaction" },
    { name: "Problem Solving", icon: "🧩", description: "Analytical thinking approach" },
    { name: "Leadership", icon: "👑", description: "Guiding teams to success" },
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
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-inter font-semibold text-white mb-2">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-inter text-purple-300 bg-purple-400/20 px-3 py-1 rounded-full">
                    {skill.level}
                  </span>
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
                  <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-inter font-semibold text-white mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-gray-300 font-inter text-sm">
                        {skill.description}
                      </p>
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

export default Skills;
