
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, TestTube, Zap, Layers, Cpu, Network } from "lucide-react";
import { useSmoothScrollAnimation } from "@/hooks/useSmoothScrollAnimation";

const Features = () => {
  const { ref } = useSmoothScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const features = [
    {
      icon: Code2,
      title: "Transaction Building",
      description: "Build complex transactions in minutes, not days. Simple APIs that handle the blockchain complexity for you.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TestTube,
      title: "E2E Testing Framework",
      description: "Ship with confidence using our complete testing suite. Simulate real blockchain scenarios before deployment.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Code Generator",
      description: "Generate production-ready code automatically. From contracts to APIs, eliminate boilerplate and focus on your business logic.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Layers,
      title: "Phoenix LiveView Integration",
      description: "Build modern, real-time blockchain UIs with Phoenix LiveView. Native WebSocket support for live transaction updates.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Cpu,
      title: "BEAM Virtual Machine",
      description: "Built on battle-tested BEAM architecture. Handle millions of concurrent transactions with 99.9% uptime guarantees.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Network,
      title: "Multi-Chain Support",
      description: "One API, multiple blockchains. Deploy across Cardano, Bitcoin, Midnight, and Midguard without rewriting code.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-white mb-6 leading-tight tracking-tight">
            Everything you need to
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> ship faster</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-body">
            Production-grade tools, testing framework, and deployment pipeline. Build with confidence using Elixir's proven architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-grid">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll fade-up card-enhanced card-feature"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 card-icon-enhanced`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-base sm:text-lg font-display font-semibold tracking-wide">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base leading-relaxed font-body card-content-fade">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
