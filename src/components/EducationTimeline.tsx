
const EducationTimeline = () => {
  const educationData = [
    {
      year: "2024 - 2028",
      title: "B.Tech in Computer Science (AI/ML)",
      institution: "Institute of Engineering and Management, Salt Lake",
      description: "Specializing in Artificial Intelligence and Machine Learning",
      status: "current"
    },
    {
      year: "2024",
      title: "Class 12 (Higher Secondary)",
      institution: "Gokhale Memorial Girls' School",
      description: "Completed higher secondary education with excellent grades",
      status: "completed"
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-4xl font-dancing font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Educational Journey
      </h3>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>
        
        {educationData.map((item, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform md:-translate-x-1/2 z-10">
              <div className="absolute inset-1 bg-white rounded-full"></div>
            </div>
            
            {/* Content Card */}
            <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
              <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform transition-all duration-500 hover:scale-105 ${
                item.status === 'current' ? 'ring-2 ring-purple-400/50' : ''
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-poppins text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  {item.status === 'current' && (
                    <span className="text-xs font-poppins text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-poppins font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-purple-300 font-poppins font-medium mb-2">
                  {item.institution}
                </p>
                <p className="text-gray-300 font-poppins text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
