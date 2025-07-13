import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const cvLink =
    "https://raw.githubusercontent.com/sylvia-barick/Sylviaportfolio/main/Sylviacv.pdf";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-dancing font-bold text-white">
            Sylvia Barick
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-300 font-poppins"
              >
                {item.name}
              </a>
            ))}

            {/* CV Button (opens in new tab) */}
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-poppins">
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-white transition-all duration-300 my-1 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-poppins py-2"
                >
                  {item.name}
                </a>
              ))}

              {/* CV Button (Mobile) */}
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-poppins mt-4">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
