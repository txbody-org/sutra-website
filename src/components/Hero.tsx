import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Github, Copy, Check } from "lucide-react";
import Navigation from "./Navigation";
import PrismCode from "@/components/PrismCode";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { LINKS, INSTALL_SNIPPET } from "@/lib/links";

const heroSnippet = `defmodule Payments do
  import Sutra.Cardano.Transaction.TxBuilder

  def send_ada(from, to, lovelace) do
    new_tx()
    |> use_provider(:blockfrost)
    |> pay_to_address(to, %{lovelace: lovelace})
    |> build_tx!(wallet_address: [from])
    |> sign_tx([from])
    |> submit_tx()
  end
end`;

const PROVIDERS = ["Blockfrost", "Maestro", "Koios", "Ogmios", "Yaci DevKit"];

const Hero = () => {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <>
      <Navigation />
      <section
        id="top"
        className="editorial-bg relative min-h-[100dvh] flex items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
      >
        <div className="grid-overlay absolute inset-0 z-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#07060d] z-[1]" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">
          {/* Left: copy */}
          <div>
            <div
              className="rise inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-3.5 py-1.5 backdrop-blur-sm"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-status-pulse" />
              <span className="eyebrow text-purple-200/90">
                Elixir&nbsp;·&nbsp;Cardano
              </span>
            </div>

            <h1
              className="rise mt-6 font-display font-extrabold tracking-tight text-white text-4xl sm:text-5xl xl:text-6xl leading-[1.05]"
              style={{ animationDelay: "0.15s" }}
            >
              Build Cardano
              <br className="hidden sm:block" /> transactions in{" "}
              <span className="brand-text">Elixir</span>.
            </h1>

            <p
              className="rise mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-body"
              style={{ animationDelay: "0.25s" }}
            >
              Sutra is an offchain transaction builder framework for Cardano.
              Compose transactions with a fluent pipeline, plug in any provider,
              and test end-to-end on a local network — all on the BEAM.
            </p>

            {/* Install snippet */}
            <div
              className="rise mt-8 flex items-center gap-3 rounded-xl surface px-4 py-3 max-w-md font-mono text-sm"
              style={{ animationDelay: "0.35s" }}
            >
              <span className="text-purple-400 select-none">def&nbsp;deps&nbsp;→</span>
              <code className="text-slate-200 flex-1 truncate no-liga">
                {INSTALL_SNIPPET}
              </code>
              <button
                onClick={() => copyToClipboard(INSTALL_SNIPPET)}
                className="shrink-0 text-slate-400 hover:text-white transition-colors brand-ring rounded p-1"
                aria-label="Copy install snippet"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* CTAs */}
            <div
              className="rise mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              style={{ animationDelay: "0.45s" }}
            >
              <a href={LINKS.docs} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto brand-bg text-white font-semibold border-0 shadow-lg shadow-purple-900/40 hover:brightness-110 hover:shadow-purple-800/60 transition-all duration-300 brand-ring px-7"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read the docs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300 brand-ring px-7"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </div>

            {/* Provider trust row */}
            <div
              className="rise mt-10"
              style={{ animationDelay: "0.55s" }}
            >
              <p className="eyebrow text-slate-500 mb-3">Works with</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400 font-medium">
                {PROVIDERS.map((p) => (
                  <span key={p} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: code panel */}
          <div
            className="rise relative"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="absolute -inset-4 brand-bg opacity-20 blur-3xl rounded-full" />
            <div className="relative surface rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-2 font-mono text-xs text-slate-500">
                  payments.ex
                </span>
              </div>
              <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm">
                <PrismCode language="elixir" showLineNumbers>
                  {heroSnippet}
                </PrismCode>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
