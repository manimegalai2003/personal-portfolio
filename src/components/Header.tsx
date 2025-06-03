
import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">
            Manimegalai S
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 capitalize text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button size="sm" variant="ghost" className="hover:text-purple-400 p-2">
              <Mail className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="hover:text-purple-400 p-2">
              <Github className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="hover:text-purple-400 p-2">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
