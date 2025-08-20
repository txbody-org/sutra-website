import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Layers, Cpu, Globe } from "lucide-react";
import Navigation from "./Navigation";
import GeometricBackground from "./GeometricBackground";

const Hero = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-[100dvh] flex items-center justify-center px-3 sm:px-6 lg:px-8 pt-20 pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 z-0" />

        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `
              radial-gradient(circle at 15% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 85% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 45% 10%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 35%)
            `,
            willChange: "transform",
          }}
        />

        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(168, 85, 247, 0.02) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)
            `,
            animation: "glow-pulse 12s ease-in-out infinite alternate",
          }}
        />

        <div className="geometric-bg absolute inset-0 z-10">
          <GeometricBackground />
        </div>

        <div
          className="absolute inset-0 opacity-[0.008] z-[5]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.3' opacity='0.4'%3E%3Cpath d='M30,5 L45,15 L45,35 L30,45 L15,35 L15,15 Z'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute inset-0 z-[8] pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-float-slow" />
          <div
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-400/15 rounded-full animate-float-medium"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="absolute inset-0 z-15 bg-gradient-to-br from-slate-950/10 via-transparent to-slate-950/10"></div>

        <div className="relative max-w-xs sm:max-w-4xl mx-auto text-center z-20">
          <Badge
            className="mb-6 sm:mb-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 font-medium tracking-wide text-sm px-4 py-2 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 group relative animate-scale-in opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <Zap className="mr-2 h-4 w-4 text-yellow-400 group-hover:scale-110 transition-transform" />
            Elixir SDK for Cardano
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </Badge>

          <p
            className="text-xs sm:text-sm md:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 md:mb-10 max-w-sm sm:max-w-3xl mx-auto leading-relaxed font-body font-normal tracking-wide animate-slide-up opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            A powerful Elixir SDK framework for building applications on
            Cardano. Leverage the BEAM virtual machine to create robust,
            concurrent blockchain applications.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-10 md:mb-12 animate-scale-in opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              variant="premium"
              size="lg"
              className="group relative font-bold tracking-wide min-w-[150px] sm:min-w-[180px] transition-all duration-500 btn-mobile-optimized btn-accessible-focus"
            >
              <span className="relative z-10">Fund 14 Proposals</span>

              <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></div>
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="group relative font-medium tracking-wide min-w-[130px] sm:min-w-[160px] btn-glass-enhanced hover:bg-white/15 transition-all duration-500 btn-mobile-optimized btn-accessible-focus glass"
            >
              <svg
                className="relative z-10 mr-2 h-5 w-5 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="relative z-10">Watch Demo</span>
            </Button>
          </div>

          <div
            className="mb-5 sm:mb-6 md:mb-8 animate-slide-up opacity-0"
            style={{ animationDelay: "1.0s" }}
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-lg sm:text-xl font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    90%
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  Less Boilerplate Code
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg sm:text-xl font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    5-Min
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  Setup to First TX
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg sm:text-xl font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    100+
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  Pre-built Functions
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm text-slate-300 font-medium animate-slide-up opacity-0"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="flex items-center bg-slate-800/30 px-2 sm:px-3 py-2 rounded-full border border-green-400/20 hover:border-green-400/40 transition-colors group text-xs sm:text-sm">
              <Layers className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
              Real Time Application
            </span>
            <span className="flex items-center bg-slate-800/30 px-2 sm:px-3 py-2 rounded-full border border-orange-400/20 hover:border-orange-400/40 transition-colors group text-xs sm:text-sm">
              <Globe className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
              Blueprint Integration
            </span>
            <span className="flex items-center bg-slate-800/30 px-2 sm:px-3 py-2 rounded-full border border-purple-400/20 hover:border-purple-400/40 transition-colors group text-xs sm:text-sm">
              <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
              E2E Testing Included
            </span>
            <span className="flex items-center bg-slate-800/30 px-2 sm:px-3 py-2 rounded-full border border-blue-400/20 hover:border-blue-400/40 transition-colors group touch-target-min text-xs sm:text-sm">
              <Cpu className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
              Built on BEAM VM
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
