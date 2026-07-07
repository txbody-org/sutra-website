import { Button } from "@/components/ui/button";
import {
  Github,
  MessageCircle,
  Twitter,
  ArrowRight,
  BookOpen,
  Copy,
  Check,
} from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { LINKS, INSTALL_SNIPPET } from "@/lib/links";

const linkGroups = [
  {
    title: "Documentation",
    links: [
      { label: "Overview", href: LINKS.docs },
      { label: "Hex package", href: LINKS.hex },
      { label: "GitHub", href: LINKS.github },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: LINKS.discord },
      { label: "Twitter / X", href: LINKS.twitter },
      { label: "Cardano", href: LINKS.cardano },
    ],
  },
];

const Footer = () => {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <footer
      id="get-started"
      className="editorial-bg relative overflow-hidden pt-20 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="relative surface rounded-3xl p-8 sm:p-14 text-center overflow-hidden mb-16">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[36rem] max-w-full brand-bg opacity-20 blur-3xl rounded-full" />
          <div className="relative">
            <p className="eyebrow brand-text mb-4">Get started</p>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Ship your first Cardano tx
              <span className="brand-text"> in Elixir</span> today.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed font-body">
              Add one dependency, point it at a provider, and start building.
            </p>

            {/* Install snippet */}
            <div className="mx-auto mb-8 flex items-center gap-3 rounded-xl border border-white/12 bg-black/40 px-4 py-3 max-w-md font-mono text-sm">
              <span className="text-purple-400 select-none">mix&nbsp;deps</span>
              <code className="text-slate-200 flex-1 truncate text-left">
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

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href={LINKS.docs} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto brand-bg text-white font-semibold border-0 shadow-lg shadow-purple-900/40 hover:brightness-110 transition-all duration-300 brand-ring px-7"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read the docs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
              <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300 brand-ring px-7"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join the Discord
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md brand-bg text-white font-display font-black text-sm">
                S
              </span>
              <span className="text-lg font-display font-extrabold tracking-tight text-white">
                Sutra
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-body max-w-xs">
              An offchain transaction builder framework for Cardano, written in
              Elixir. Built by TxBody.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-display font-semibold mb-4 text-sm">
                {group.title}
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm font-body">
            © 2025 <span className="text-slate-300 font-medium">Sutra</span> ·
            Built with ❤️ for the Elixir &amp; Cardano communities.
          </div>

          <div className="flex space-x-1">
            {[
              { href: LINKS.github, Icon: Github, label: "GitHub" },
              { href: LINKS.discord, Icon: MessageCircle, label: "Discord" },
              { href: LINKS.twitter, Icon: Twitter, label: "Twitter" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/8 transition-all duration-300 rounded-lg"
                  title={label}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
