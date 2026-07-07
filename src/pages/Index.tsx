import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pipeline from "@/components/Pipeline";
import CodeExample from "@/components/CodeExample";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

import "../styles/prism-theme.css";

const Index = () => {
	return (
		<div className='min-h-screen editorial-bg text-slate-200'>
			<Hero />
			<div className='page-load-item'>
				<Features />
			</div>
			<div className='page-load-item'>
				<Pipeline />
			</div>
			<div className='page-load-item'>
				<CodeExample />
			</div>
			<div className='page-load-item'>
				<Providers />
			</div>
			<div className='page-load-item'>
				<Footer />
			</div>
		</div>
	);
};

export default Index;
