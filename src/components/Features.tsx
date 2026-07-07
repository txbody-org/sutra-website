import {
  GitBranch,
  Plug,
  FileCode2,
  Blocks,
  FlaskConical,
  Cpu,
} from "lucide-react";
import { useSmoothScrollAnimation } from "@/hooks/useSmoothScrollAnimation";

const features = [
  {
    icon: GitBranch,
    title: "Fluent transaction builder",
    description:
      "Compose inputs, outputs, minting, scripts and metadata through a readable |> pipeline. The builder handles fees, change and balancing for you.",
  },
  {
    icon: Plug,
    title: "Bring your own provider",
    description:
      "Blockfrost, Maestro, Koios, Kupo + Ogmios, or Yaci DevKit for local development. Swap backends with a single line of config.",
  },
  {
    icon: FileCode2,
    title: "Scripts & minting",
    description:
      "First-class helpers for native scripts, Plutus validators, and minting or burning native assets under your own policies.",
  },
  {
    icon: Blocks,
    title: "Blueprint integration",
    description:
      "Load Aiken / Plutus blueprints and interact with your on-chain validators using structured, typed datum and redeemer values.",
  },
  {
    icon: FlaskConical,
    title: "End-to-end testing",
    description:
      "Spin up a private network with Sutra.PrivnetTest, submit real transactions in ExUnit, and assert on confirmations and balances.",
  },
  {
    icon: Cpu,
    title: "Built on the BEAM",
    description:
      "Concurrent and fault-tolerant by design. Drop Sutra into a Phoenix or LiveView app and drive on-chain flows from real Elixir processes.",
  },
];

const Features = () => {
  const { ref } = useSmoothScrollAnimation({
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14 sm:mb-16">
          <p className="eyebrow brand-text mb-4">What you get</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight tracking-tight">
            Everything you need to go from
            <span className="brand-text"> idea to on-chain</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed font-body">
            Sutra focuses on the offchain half of Cardano development — building,
            signing and submitting transactions — so you can stay in Elixir the
            whole way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll fade-up surface hairline-top rounded-2xl p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:border-purple-400/40">
                <feature.icon className="h-5 w-5 text-purple-300" />
              </div>
              <h3 className="text-white text-lg font-display font-semibold tracking-tight mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-[0.95rem] leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
