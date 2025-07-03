
import EducationTimeline from "./EducationTimeline";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-dancing font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed font-poppins">
                Hi, I'm <span className="text-purple-400 font-semibold">Sylvia Barick</span>, a 2nd-year B.Tech student specializing in 
                <span className="text-pink-400 font-semibold"> Artificial Intelligence and Machine Learning</span> at the Institute of Engineering and Management, Salt Lake.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-poppins mt-4">
                I'm passionate about coding and love bringing ideas to life through web development using 
                <span className="text-orange-400 font-semibold"> HTML, CSS, JavaScript, and React</span>. 
                Recently, I've started diving into Data Structures and Algorithms to strengthen my problem-solving skills.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-poppins mt-4">
                What sets me apart is my curiosity and drive to grow — I've already explored hackathons and hands-on projects 
                to challenge myself and keep learning beyond the classroom.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
              <h3 className="text-2xl font-dancing font-bold text-white mb-6">Achievements & Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 font-poppins"><span className="text-purple-400 font-semibold">Smart Maker's Festival</span> – Presented 5 unique project showcases</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 font-poppins"><span className="text-pink-400 font-semibold">ICYIM</span> – Secured 1st Runners Up position</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 font-poppins"><span className="text-orange-400 font-semibold">GSSoC</span> – Active Open Source Contributor</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 font-poppins"><span className="text-green-400 font-semibold">Kshitij, IIT Kharagpur</span> – Finalist in B-Plan Event</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EducationTimeline />
      </div>
    </section>
  );
};

export default About;
