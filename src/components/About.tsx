
import EducationTimeline from "./EducationTimeline";

const About = () => {
  const achievements = [
    {
      title: "Smart Maker's Festival",
      description: "Presented 5 unique project showcases",
      category: "Exhibition"
    },
    {
      title: "Hexafalls",
      description: "Active participant",
      category: "Competition"
    },
    {
      title: "ICYIM",
      description: "Secured 1st Runners Up position",
      category: "Competition"
    },
    {
      title: "IIT Tech Exhibition",
      description: "Participated as an Exhibitor",
      category: "Exhibition"
    },
    {
      title: "GSSoC",
      description: "Active Open Source Contributor",
      category: "Open Source"
    },
    {
      title: "IDE Bootcamp Ranchi",
      description: "Scored 3.9/5 in Innovation & Entrepreneurship Bootcamp",
      category: "Bootcamp"
    },
    {
      title: "Craft & Code Hackathon, IIIT Bhubaneswar",
      description: "Reached the State Level",
      category: "Hackathon"
    },
    {
      title: "Kshitij, IIT Kharagpur",
      description: "Finalist in B-Plan Event",
      category: "Competition"
    }
  ];

  const experiences = [
    {
      role: "Team Member",
      project: "Drone Development Challenge",
      type: "Technical"
    },
    {
      role: "Website Maintainer",
      project: "SSO Olympiad Portal, SMF",
      type: "Technical"
    },
    {
      role: "Website Creator",
      project: "IEM COMICVERSE",
      type: "Technical"
    },
    {
      role: "Volunteer",
      project: "Smart Maker's Festival (SMF), Mechatronica, Innovación",
      type: "Leadership"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-lg text-gray-300 leading-relaxed font-inter mb-6">
              Hi, I'm <span className="text-purple-400 font-semibold">Sylvia Barick</span>, a 2nd-year B.Tech student specializing in 
              <span className="text-pink-400 font-semibold"> Artificial Intelligence and Machine Learning</span> at the Institute of Engineering and Management, Salt Lake.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-inter mb-6">
              I'm passionate about coding and love bringing ideas to life through web development using 
              <span className="text-orange-400 font-semibold"> HTML, CSS, JavaScript, and React</span>. 
              Recently, I've started diving into Data Structures and Algorithms to strengthen my problem-solving skills.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-inter">
              What sets me apart is my curiosity and drive to grow — I've already explored hackathons and hands-on projects 
              to challenge myself and keep learning beyond the classroom.
            </p>
          </div>
        </div>

        {/* Achievements and Experience in separate boxes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Achievements Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-playfair font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-xs font-inter text-purple-300 bg-purple-400/20 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-inter font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 font-inter text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-playfair font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-xs font-inter text-orange-300 bg-orange-400/20 px-2 py-1 rounded-full">
                      {experience.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-inter font-semibold text-white mb-2">
                    {experience.role}
                  </h4>
                  <p className="text-purple-300 font-inter">
                    {experience.project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline - moved to bottom */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <EducationTimeline />
        </div>
      </div>
    </section>
  );
};

export default About;
