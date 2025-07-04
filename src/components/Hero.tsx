
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-dancing font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Hello, I'm
              </h1>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-white">
                Sylvia Barick
              </h2>
              <p className="text-2xl md:text-3xl font-dancing text-purple-300">
                Turning Ideas into Interactive Web Experiences
              </p>
            </div>
            
            <p className="text-lg text-gray-300 font-poppins leading-relaxed max-w-lg">
              A passionate Website Developer and B.Tech student specializing in AI/ML, 
              bringing creative solutions to life through modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-poppins group"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  onClick={() => window.open('https://github.com/sylvia-barick', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  onClick={() => window.open('https://www.linkedin.com/in/sylvia-barick-081651321/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-poppins">8+</div>
                <div className="text-purple-300 font-poppins">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-poppins">5+</div>
                <div className="text-purple-300 font-poppins">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-poppins">1+</div>
                <div className="text-purple-300 font-poppins">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full animate-float">
                <img
                  src="https://i.postimg.cc/PqPkCn3f/Whats-App-Image-2025-07-01-at-15-49-06.jpg"
                  alt="Sylvia Barick"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover bg-gray-800"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float">
                1+ Years Experience
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-poppins animate-float" style={{animationDelay: '1s'}}>
                AI/ML Student
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
