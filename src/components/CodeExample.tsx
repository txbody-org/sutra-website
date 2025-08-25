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
  use Sutra.TransactionBuilder
  
  def send_ada(from_address, to_address, amount) do
    build_transaction()
    |> add_input(from_address, amount + fee())
    |> add_output(to_address, amount)
    |> add_change(from_address)
    |> sign_transaction()
    |> submit_to_network()
  end
  
  def create_native_token(policy_id, asset_name, quantity) do
    build_transaction()
    |> add_minting_policy(policy_id)
    |> mint_token(asset_name, quantity)
    |> add_metadata(%{
         "721" => %{
           policy_id => %{
             asset_name => %{
               "name" => asset_name,
               "image" => "ipfs://..."
             }
           }
         }
       })
    |> submit_to_network()
  end
end`;

	const testExample = `defmodule MyApp.TransactionTest do
  use Sutra.TestCase
  
  test "send ADA transaction" do
    # Setup test environment
    {:ok, wallet} = create_test_wallet(1000_000_000)  # 1000 ADA
    to_address = "addr_test1..."
    
    # Execute transaction
    {:ok, tx_hash} = MyApp.Transactions.send_ada(
      wallet.address, 
      to_address, 
      100_000_000  # 100 ADA
    )
    
    # Verify results
    assert_transaction_confirmed(tx_hash)
    assert_balance(to_address, 100_000_000)
    assert_balance(wallet.address, 900_000_000 - fee())
  end
end`;

	return (
		<section ref={ref} className='py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-6 leading-tight tracking-tight'>
						Code that
						<span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
							{" "}
							just works
						</span>
					</h2>
					<p className='text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-body'>
						Write clean, readable code that your team will love. Elixir's
						functional approach makes blockchain development predictable and
						maintainable.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
					{/* Transaction Building Example */}
					<Card className='animate-on-scroll fade-left card-enhanced card-code overflow-hidden'>
						<CardHeader className='bg-slate-800/50 border-b border-slate-700'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0'>
								<div className='flex items-center space-x-2 sm:space-x-3'>
									<div className='w-8 h-8 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center card-icon-enhanced'>
										<Code2 className='h-4 w-4 text-white' />
									</div>
									<CardTitle className='text-white text-base sm:text-lg font-display font-semibold tracking-wide'>
										Transaction Building
									</CardTitle>
								</div>
								<div className='flex items-center space-x-2 self-start sm:self-auto'>
									<Badge className='bg-purple-600/20 text-purple-400 border-purple-600/30'>
										Elixir
									</Badge>
									<Button
										variant='ghost'
										size='sm'
										className={`btn-ripple ${copiedMain ? "copy-success" : ""}`}
										onClick={() => copyMain(codeExample)}
									>
										{copiedMain ? (
											<Check className='h-4 w-4 text-green-400' />
										) : (
											<Copy className='h-4 w-4' />
										)}
									</Button>
								</div>
							</div>
						</CardHeader>
						<CardContent className='p-0'>
							<div className='text-xs sm:text-sm text-slate-300 p-4 sm:p-6 overflow-x-auto'>
								<PrismCode
									language='elixir'
									// highlightLines={[4, 8, 12]}
									className='text-xs sm:text-sm'
									showLineNumbers
								>
									{codeExample}
								</PrismCode>
							</div>
						</CardContent>
					</Card>

					{/* Testing Example */}
					<Card className='animate-on-scroll fade-right card-enhanced card-code overflow-hidden'>
						<CardHeader className='bg-slate-800/50 border-b border-slate-700'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0'>
								<div className='flex items-center space-x-2 sm:space-x-3'>
									<div className='w-8 h-8 rounded bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center card-icon-enhanced'>
										<Play className='h-4 w-4 text-white' />
									</div>
									<CardTitle className='text-white text-base sm:text-lg font-display font-semibold tracking-wide'>
										E2E Testing
									</CardTitle>
								</div>
								<div className='flex items-center space-x-2 self-start sm:self-auto'>
									<Badge className='bg-green-600/20 text-green-400 border-green-600/30'>
										ExUnit
									</Badge>
									<Button
										variant='ghost'
										size='sm'
										className={`btn-ripple ${copiedTest ? "copy-success" : ""}`}
										onClick={() => copyTest(testExample)}
									>
										{copiedTest ? (
											<Check className='h-4 w-4 text-green-400' />
										) : (
											<Copy className='h-4 w-4' />
										)}
									</Button>
								</div>
							</div>
						</CardHeader>
						<CardContent className='p-0'>
							<div className='text-xs sm:text-sm text-slate-300 p-4 sm:p-6 overflow-x-auto'>
								<PrismCode
									language='elixir'
									// highlightLines={[7, 12, 16]}
									className='text-xs sm:text-sm'
								>
									{testExample}
								</PrismCode>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className='mt-8 sm:mt-12 text-center'>
					<div className='animate-on-scroll scale-in flex flex-col sm:inline-flex sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-slate-800/50 rounded-lg p-4 sm:p-5 border border-slate-700'>
						<div className='flex items-center space-x-2 sm:space-x-3'>
							<div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
							<span className='text-slate-300 text-sm sm:text-base font-medium tracking-wide'>
								Multi-Chain SDK
							</span>
						</div>
						<div className='flex items-center space-x-2 sm:space-x-3'>
							<div className='w-3 h-3 bg-blue-400 rounded-full'></div>
							<span className='text-slate-300 font-mono text-sm sm:text-base'>
								BEAM Powered
							</span>
						</div>
						<div className='flex items-center space-x-2 sm:space-x-3'>
							<div className='w-3 h-3 bg-purple-400 rounded-full'></div>
							<span className='text-slate-300 text-sm sm:text-base font-medium tracking-wide'>
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
