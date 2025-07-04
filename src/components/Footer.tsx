
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sylvia-barick",
      icon: Github
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sylvia-barick-081651321/",
      icon: Linkedin
    },
    {
      name: "Email",
      href: "mailto:taniabarick15@gmail.com",
      icon: Mail
    }
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Sylvia Barick
            </h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-4">
              Website Developer & AI/ML Student passionate about creating innovative solutions that blend technology with creativity.
            </p>
            <div className="flex items-center gap-2 text-gray-400 font-inter text-sm mb-2">
              <MapPin className="h-4 w-4" />
              <span>Kolkata, West Bengal, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-inter text-sm">
              <Mail className="h-4 w-4" />
              <span>taniabarick15@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-inter font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 font-inter hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-inter font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="font-inter">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-inter text-sm">
            © 2025 Sylvia Barick. All rights reserved.
          </p>
          <p className="text-gray-400 font-inter text-sm">
            Built with ❤️ by Sylvia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
