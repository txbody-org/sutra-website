
import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] glass-effect transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
      style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: isScrolled ? '1px solid rgba(148, 163, 184, 0.1)' : 'none'
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SUTRA
              </span>
            </h1>
          </div>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="group text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-300 border border-transparent hover:border-purple-400/30 hover:shadow-sm hover:shadow-purple-500/20 p-2 sm:px-3"
              title="Documentation"
            >
              <BookOpen className="h-4 w-4 sm:mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">Documentation</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="group text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-300 border border-transparent hover:border-purple-400/30 hover:shadow-sm hover:shadow-purple-500/20 p-2 sm:px-3"
              title="GitHub"
            >
              <Github className="h-4 w-4 sm:mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">GitHub</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-transform duration-150 ease-out"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: 'left',
          width: '100%'
        }}
      />
    </nav>
  );
};

export default Navigation;
