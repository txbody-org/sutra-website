import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Copy, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScrollAnimation } from "@/hooks/useSmoothScrollAnimation";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import PrismCode from "@/components/PrismCode";

const CodeExample = () => {
  const { ref } = useSmoothScrollAnimation({
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const { copied: copiedMain, copyToClipboard: copyMain } =
    useCopyToClipboard();
  const { copied: copiedTest, copyToClipboard: copyTest } =
    useCopyToClipboard();

  const codeExample = `defmodule MyApp.Transactions do
  import Sutra.Cardano.Transaction.TxBuilder
  
  @script NativeScript.from_json(script_json)

  @policy_id = Script.hash_script(@script)

  def mint_native_script(wallet_address) do
      new_tx()
      |> attach_script(@script)
      |> mint_asset(@policy_id, @assets)
      |> pay_to_address(wallet_address, %{
          @policy_id => @assets
      })
      |> build_tx!(wallet_address: [wallet_address])
      |> sign_tx([signature])
      |> submit_tx()
  end

end`;

  const testExample = `defmodule MyApp.TransactionTest do
  use Sutra.PrivnetTest
  
  test "send ADA transaction" do
    # Setup test environment
    with_new_wallet(fn %{signing_key: skey, address: addr} -> 
    
      to_address = "addr_test1..."
    
      # Execute transaction
      {:ok, tx_hash} = MyApp.Transactions.send_ada(
        addr, 
        to_address, 
        skey,
        100_000_000  # 100 ADA
      )
      
      # Verify results
      assert_transaction_confirmed(tx_hash)
      assert_balance(to_address, 100_000_000)
      assert_balance(addr, 900_000_000 - fee())
    end)
  end
end`;

  return (
    <section
      id="code"
      ref={ref}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14 sm:mb-16">
          <p className="eyebrow brand-text mb-4">In practice</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight tracking-tight">
            Code that
            <span className="brand-text"> reads like a sentence</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed font-body">
            Build a transaction on the left, prove it works against a real network
            on the right. Elixir's functional style keeps both predictable and
            easy to review.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Transaction Building Example */}
          <Card className="animate-on-scroll fade-left card-enhanced card-code overflow-hidden">
            <CardHeader className="bg-slate-800/50 border-b border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center card-icon-enhanced">
                    <Code2 className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-white text-base sm:text-lg font-display font-semibold tracking-wide">
                    Transaction Building
                  </CardTitle>
                </div>
                <div className="flex items-center space-x-2 self-start sm:self-auto">
                  <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                    Elixir
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`btn-ripple ${copiedMain ? "copy-success" : ""}`}
                    onClick={() => copyMain(codeExample)}
                  >
                    {copiedMain ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-xs sm:text-sm text-slate-300 p-4 sm:p-6 overflow-x-auto">
                <PrismCode
                  language="elixir"
                  // highlightLines={[4, 8, 12]}
                  className="text-xs sm:text-sm"
                  showLineNumbers
                >
                  {codeExample}
                </PrismCode>
              </div>
            </CardContent>
          </Card>

          {/* Testing Example */}
          <Card className="animate-on-scroll fade-right card-enhanced card-code overflow-hidden">
            <CardHeader className="bg-slate-800/50 border-b border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center card-icon-enhanced">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-white text-base sm:text-lg font-display font-semibold tracking-wide">
                    E2E Testing
                  </CardTitle>
                </div>
                <div className="flex items-center space-x-2 self-start sm:self-auto">
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                    ExUnit
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`btn-ripple ${copiedTest ? "copy-success" : ""}`}
                    onClick={() => copyTest(testExample)}
                  >
                    {copiedTest ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-xs sm:text-sm text-slate-300 p-4 sm:p-6 overflow-x-auto">
                <PrismCode
                  language="elixir"
                  // highlightLines={[7, 12, 16]}
                  className="text-xs sm:text-sm"
                >
                  {testExample}
                </PrismCode>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="animate-on-scroll scale-in flex flex-col sm:inline-flex sm:flex-row items-center gap-4 sm:gap-6 surface rounded-xl p-4 sm:p-5">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm sm:text-base font-medium tracking-wide">
                Cardano-native
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>
              <span className="text-slate-300 font-mono text-sm sm:text-base">
                BEAM Powered
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
              <span className="text-slate-300 text-sm sm:text-base font-medium tracking-wide">
                Elixir Native
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
