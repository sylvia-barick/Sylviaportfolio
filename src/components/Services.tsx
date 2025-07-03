
const Services = () => {
  const services = [
    {
      title: "Responsive Website Development",
      description: "Creating modern, mobile-first websites that work seamlessly across all devices and screen sizes.",
      icon: "🌐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "React Frontend Development",
      description: "Building interactive and dynamic user interfaces using React and modern JavaScript frameworks.",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Firebase Integrations",
      description: "Implementing real-time databases, authentication systems, and cloud functions for scalable applications.",
      icon: "🔥",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Custom UI Design with Animations",
      description: "Designing beautiful user interfaces with smooth animations and micro-interactions for enhanced user experience.",
      icon: "🎨",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-dancing font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            As a Website Developer, I offer comprehensive web development solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-poppins font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 font-poppins leading-relaxed">
                {service.description}
              </p>
              
              <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
