import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { LINKS } from "@/lib/links";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Providers", href: "#providers" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: isScrolled ? "rgba(7, 6, 13, 0.72)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px) saturate(160%)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(148, 163, 184, 0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 flex-shrink-0 group">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md brand-bg text-white font-display font-black text-sm shadow-lg shadow-purple-900/40">
              S
            </span>
            <span className="text-lg font-display font-extrabold tracking-tight text-white">
              Sutra
            </span>
          </a>

          {/* Center links (desktop) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Sutra on GitHub"
            >
              <Button
                variant="ghost"
                size="sm"
                className="group text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-300 p-2 sm:px-3"
                title="GitHub"
              >
                <Github className="h-4 w-4 sm:mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </a>

            <a
              href={LINKS.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="sm"
                className="group brand-bg text-white font-semibold border-0 shadow-lg shadow-purple-900/30 hover:shadow-purple-800/50 hover:brightness-110 transition-all duration-300 brand-ring px-3 sm:px-4"
                title="Read the documentation"
              >
                <BookOpen className="h-4 w-4 sm:mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="hidden sm:inline">Read the docs</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress absolute bottom-0 left-0 h-0.5 brand-bg transition-transform duration-150 ease-out"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: "left",
          width: "100%",
        }}
      />
    </nav>
  );
};

export default Navigation;
