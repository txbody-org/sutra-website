
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Moon, Mountain } from "lucide-react";
import { useSmoothScrollAnimation } from "@/hooks/useSmoothScrollAnimation";

const Blockchains = () => {
  const { ref } = useSmoothScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const blockchains = [
    {
      name: "Cardano",
      icon: Shield,
      description: "Third-generation blockchain with peer-reviewed research foundation",
      status: "Production Ready",
      color: "from-blue-500 to-cyan-500",
      features: ["Smart Contracts", "Native Tokens", "Staking"]
    },
    {
      name: "Bitcoin",
      icon: Zap,
      description: "The original and most secure cryptocurrency network",
      status: "Supported",
      color: "from-orange-500 to-yellow-500",
      features: ["Lightning Network", "Taproot", "Multi-sig"]
    },
    {
      name: "Midnight",
      icon: Moon,
      description: "Privacy-focused blockchain for confidential smart contracts",
      status: "Coming Soon",
      color: "from-purple-500 to-indigo-500",
      features: ["Zero-Knowledge", "Privacy", "Compliance"]
    },
    {
      name: "Midguard",
      icon: Mountain,
      description: "High-performance blockchain for enterprise applications",
      status: "In Development",
      color: "from-green-500 to-teal-500",
      features: ["Enterprise", "Scalability", "Interop"]
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Supported
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Blockchains</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Build applications across multiple UTXO-based blockchains with a unified API
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blockchains.map((blockchain, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll fade-up card-enhanced card-blockchain"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${blockchain.color} flex items-center justify-center mb-4 mx-auto card-icon-enhanced`}>
                  <blockchain.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-white text-center mb-2">{blockchain.name}</h3>
                
                <Badge 
                  className={`mb-4 mx-auto block w-fit ${
                    blockchain.status === 'Production Ready' ? 'bg-green-600/20 text-green-400 border-green-600/30 animate-status-pulse' :
                    blockchain.status === 'Supported' ? 'bg-blue-600/20 text-blue-400 border-blue-600/30' :
                    blockchain.status === 'Coming Soon' ? 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30 animate-status-pulse' :
                    'bg-gray-600/20 text-gray-400 border-gray-600/30'
                  }`}
                >
                  {blockchain.status}
                </Badge>
                
                <p className="text-slate-300 text-sm text-center mb-4 leading-relaxed card-content-fade">
                  {blockchain.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {blockchain.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blockchains;
