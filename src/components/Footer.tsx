import { Button } from "@/components/ui/button";
import {
	Github,
	MessageCircle,
	Twitter,
	ArrowRight,
} from "lucide-react";

const Footer = () => {
	return (
		<footer
			className='relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8'
			style={{
				background:
					"linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%)",
				borderTop: "1px solid rgba(148, 163, 184, 0.1)",
			}}
		>
			<div className='max-w-7xl mx-auto'>
				{/* CTA Section */}
				<div className='text-center mb-12 sm:mb-16 card-enhanced relative p-6 sm:p-8 rounded-2xl'>
					<h2 className='text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-white mb-4 tracking-tight'>
						Ready to build on{" "}
						<span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
							UTXO blockchains
						</span>
						?
					</h2>
					<p className='text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-body'>
						Join the growing community of Elixir developers building the future
						of blockchain applications
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a 
							href="https://projectcatalyst.io/proposers/TxBody" 
							target="_blank" 
							rel="noopener noreferrer"
							className="inline-block"
						>
							<Button
								variant='premium'
								size='lg'
								className='group relative font-bold tracking-wide min-w-[180px] btn-mobile-optimized btn-accessible-focus'
							>
								<span className='relative z-10'>Fund 14 Proposals</span>
								<ArrowRight className='relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300' />
								<div className='absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md'></div>
							</Button>
						</a>
						<a 
							href="https://discord.gg/BpmNRaha" 
							target="_blank" 
							rel="noopener noreferrer"
							className="inline-block"
						>
							<Button
								variant='glass'
								size='lg'
								className='group relative font-medium tracking-wide min-w-[200px] btn-glass-enhanced hover:bg-white/15 transition-all duration-500 btn-mobile-optimized btn-accessible-focus glass'
							>
								<MessageCircle className='relative z-10 mr-2 h-5 w-5 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300' />
								<span className='relative z-10'>Join Discord Community</span>
							</Button>
						</a>
					</div>
				</div>

				{/* Links Section */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12'>
					{/* Main Brand Section */}
					<div className='md:col-span-1'>
						<h3 className='text-lg sm:text-xl font-display font-bold text-white mb-4 tracking-tight'>
							<span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
								SUTRA
							</span>{" "}
							SDK
						</h3>
						<p className='text-slate-400 text-sm leading-relaxed font-body'>
							Empowering Elixir developers to build on UTXO blockchains with the
							power of the BEAM virtual machine.
						</p>
					</div>


					{/* Blockchain Links */}
					<div>
						<h4 className='text-white font-display font-semibold mb-4 text-base'>
							Blockchains
						</h4>
						<ul className='space-y-3 text-slate-400 text-sm'>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block'
								>
									Cardano
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block'
								>
									Hydra
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block'
								>
									Apex Fusion
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block'
								>
									Midguard
								</a>
							</li>
						</ul>
					</div>

					{/* Community Links */}
					<div>
						<h4 className='text-white font-display font-semibold mb-4 text-base'>
							Community
						</h4>
						<ul className='space-y-3 text-slate-400 text-sm'>
							<li>
								<a
									href='https://discord.gg/BpmNRaha'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block'
								>
									Discord
								</a>
							</li>
							<li>
								<a
									href='https://github.com/txbody-org/sutra-cardano'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block'
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href='https://x.com/txbodyio?t=1XLkk-aOY2Mf2toVcemiFw&s=09'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block'
								>
									Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='border-t border-slate-700/50 pt-8 flex flex-col sm:flex-row justify-between items-center'>
					<div className='text-slate-400 text-sm mb-4 sm:mb-0 font-body'>
						© 2025 <span className='text-slate-300 font-medium'>SUTRA SDK</span>
						. Built with ❤️ for the Elixir community.
					</div>

					<div className='flex space-x-2'>
						<a 
							href='https://github.com/txbody-org/sutra-cardano' 
							target='_blank' 
							rel='noopener noreferrer'
						>
							<Button
								variant='ghost'
								size='sm'
								className='p-2 hover:bg-purple-400/10 hover:border-purple-400/20 border border-transparent transition-all duration-300 rounded-lg group'
								title='GitHub Repository'
							>
								<Github className='h-5 w-5 text-slate-400 group-hover:text-purple-400 transition-colors duration-300' />
							</Button>
						</a>
						<a 
							href='https://discord.gg/BpmNRaha' 
							target='_blank' 
							rel='noopener noreferrer'
						>
							<Button
								variant='ghost'
								size='sm'
								className='p-2 hover:bg-cyan-400/10 hover:border-cyan-400/20 border border-transparent transition-all duration-300 rounded-lg group'
								title='Discord Community'
							>
								<MessageCircle className='h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300' />
							</Button>
						</a>
						<a 
							href='https://x.com/txbodyio?t=1XLkk-aOY2Mf2toVcemiFw&s=09' 
							target='_blank' 
							rel='noopener noreferrer'
						>
							<Button
								variant='ghost'
								size='sm'
								className='p-2 hover:bg-sky-400/10 hover:border-sky-400/20 border border-transparent transition-all duration-300 rounded-lg group'
								title='Follow on Twitter'
							>
								<Twitter className='h-5 w-5 text-slate-400 group-hover:text-sky-400 transition-colors duration-300' />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
