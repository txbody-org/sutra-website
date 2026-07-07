import { useSmoothScrollAnimation } from "@/hooks/useSmoothScrollAnimation";

const steps = [
  {
    call: "new_tx()",
    title: "Start a transaction",
    desc: "Open a fresh transaction builder to compose into.",
  },
  {
    call: "use_provider(:blockfrost)",
    title: "Pick a provider",
    desc: "Query UTXOs, protocol params and submit through your backend.",
  },
  {
    call: "pay_to_address(addr, value)",
    title: "Describe the intent",
    desc: "Add outputs, mint assets, attach scripts, datums and metadata.",
  },
  {
    call: "build_tx!(opts)",
    title: "Balance & build",
    desc: "Sutra selects inputs, computes fees and returns a balanced tx.",
  },
  {
    call: "sign_tx([key])",
    title: "Sign",
    desc: "Add the witnesses from your signing keys.",
  },
  {
    call: "submit_tx()",
    title: "Submit",
    desc: "Broadcast to the network and get back a transaction hash.",
  },
];

const Pipeline = () => {
  const { ref } = useSmoothScrollAnimation({
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section
      id="pipeline"
      ref={ref}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative border-y border-white/[0.06] bg-white/[0.015]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14 sm:mb-16">
          <p className="eyebrow brand-text mb-4">The pipeline</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight tracking-tight">
            One transaction,
            <span className="brand-text"> one pipe at a time</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed font-body">
            Every transaction is just a value flowing through <code className="font-mono text-purple-300">|&gt;</code>.
            Read it top to bottom and it says exactly what it does.
          </p>
        </div>

        <ol className="animate-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.call}
              className="animate-on-scroll fade-up surface hairline-top rounded-2xl p-6 relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg brand-bg text-white font-mono text-sm font-bold shadow-md shadow-purple-900/40">
                  {i + 1}
                </span>
                <span className="font-display font-semibold text-white tracking-tight">
                  {step.title}
                </span>
              </div>
              <code className="block font-mono text-sm text-purple-200 bg-black/30 border border-white/10 rounded-lg px-3 py-2 mb-3 overflow-x-auto">
                {step.call}
              </code>
              <p className="text-slate-400 text-sm leading-relaxed font-body">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Pipeline;
