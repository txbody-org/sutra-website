// Canonical external links for the Sutra landing page.
export const LINKS = {
  docs: "https://sutra-cardano.hexdocs.pm/overview.html",
  hex: "https://hex.pm/packages/sutra_cardano",
  github: "https://github.com/txbody-org/sutra-cardano",
  discord: "https://discord.gg/BpmNRaha",
  twitter: "https://x.com/txbodyio",
  cardano: "https://cardano.org/",
} as const;

// Current published version of the sutra_cardano package.
export const SUTRA_VERSION = "0.2.5";
export const INSTALL_SNIPPET = `{:sutra_cardano, "~> ${SUTRA_VERSION}"}`;
