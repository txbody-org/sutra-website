import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Blockchains from "@/components/Blockchains";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";

import "../styles/prism-theme.css";

const Index = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900'>
			<Hero />
			<div className='page-load-item'>
				<Features />
			</div>
			<div className='page-load-item'>
				<Blockchains />
			</div>
			<div className='page-load-item'>
				<CodeExample />
			</div>
			<div className='page-load-item'>
				<Footer />
			</div>
		</div>
	);
};

export default Index;
