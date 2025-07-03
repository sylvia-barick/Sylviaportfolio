
const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 90, color: "from-orange-400 to-red-400" },
    { name: "CSS", level: 85, color: "from-blue-400 to-purple-400" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-400" },
    { name: "React", level: 75, color: "from-cyan-400 to-blue-400" },
    { name: "Firebase", level: 70, color: "from-orange-400 to-yellow-400" },
  ];

  const softSkills = [
    { name: "Teamwork", level: 95, color: "from-green-400 to-teal-400" },
    { name: "Communication", level: 90, color: "from-purple-400 to-pink-400" },
    { name: "Problem Solving", level: 85, color: "from-indigo-400 to-purple-400" },
    { name: "Leadership", level: 80, color: "from-pink-400 to-rose-400" },
  ];

  const SkillBar = ({ skill }: { skill: any }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-poppins font-medium">{skill.name}</span>
        <span className="text-purple-300 font-poppins text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div 
          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-dancing font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 font-poppins">
            Technologies and abilities I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-dancing font-bold text-white mb-8 text-center">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-dancing font-bold text-white mb-8 text-center">
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
