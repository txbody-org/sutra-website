import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSmoothScrollAnimation } from "@/hooks/useSmoothScrollAnimation";

type Provider = {
  name: string;
  logo?: string;
  // When the SVG is a full icon + wordmark lockup, crop to just the leftmost icon.
  crop?: boolean;
  url: string;
  desc: string;
};

const providers: Provider[] = [
  {
    name: "Blockfrost",
    logo: "/providers/blockfrost.svg",
    crop: true,
    url: "https://blockfrost.io",
    desc: "The most popular Cardano API. Point Sutra at your project key and go.",
  },
  {
    name: "Maestro",
    logo: "/providers/maestro.svg",
    crop: true,
    url: "https://www.gomaestro.org",
    desc: "Enterprise-grade Cardano infrastructure with rich query endpoints.",
  },
  {
    name: "Koios",
    logo: "/providers/koios.svg",
    url: "https://koios.rest",
    desc: "Decentralized, community-run query layer — no API key required.",
  },
  {
    name: "Kupo + Ogmios",
    logo: "/providers/ogmios.png",
    url: "https://ogmios.dev",
    desc: "Run your own indexing and node bridge for full control over your stack.",
  },
  {
    name: "Yaci DevKit",
    logo: "/providers/yaci.svg",
    crop: true,
    url: "https://devkit.yaci.xyz",
    desc: "A disposable local devnet for fast iteration and integration tests.",
  },
];

const ProviderLogo = ({ name, logo, crop }: Provider) => {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <div className="h-12 w-12 rounded-xl brand-bg flex items-center justify-center shrink-0 shadow-md shadow-purple-900/40">
        <span className="font-display font-black text-lg text-white">
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`h-12 w-12 rounded-xl border border-white/10 bg-white/[0.05] flex items-center overflow-hidden shrink-0 ${
        crop ? "justify-start" : "justify-center"
      }`}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
        className={
          crop
            ? "h-12 w-auto max-w-none object-left"
            : "h-9 w-9 object-contain"
        }
      />
    </div>
  );
};

const Providers = () => {
  const { ref } = useSmoothScrollAnimation({
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section
      id="providers"
      ref={ref}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14 sm:mb-16">
          <p className="eyebrow brand-text mb-4">Providers</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight tracking-tight">
            Talk to Cardano
            <span className="brand-text"> however you like</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed font-body">
            Sutra abstracts the backend behind a single provider interface. Start
            on a hosted API, move to your own infrastructure later — your
            transaction code never changes.
          </p>
        </div>

        <div className="animate-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {providers.map((p) => (
            <div
              key={p.name}
              className="animate-on-scroll fade-up surface hairline-top rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <ProviderLogo {...p} />
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-white text-lg font-display font-semibold tracking-tight hover:text-purple-200 transition-colors brand-ring rounded"
                >
                  {p.name}
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover/link:text-purple-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all duration-200" />
                </a>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-body">
                {p.desc}
              </p>
            </div>
          ))}

          {/* Config hint card */}
          <div className="animate-on-scroll fade-up rounded-2xl border border-dashed border-white/12 p-6 flex flex-col justify-center">
            <p className="eyebrow text-slate-500 mb-3">Switching is one line</p>
            <code className="font-mono text-sm text-purple-200 leading-relaxed block overflow-x-auto">
              <span className="text-slate-500">config</span> :sutra, :provider,
              <br />
              &nbsp;&nbsp;Sutra.Provider.Blockfrost
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Providers;
