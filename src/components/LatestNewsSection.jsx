import React from 'react';
import tcLogo from '../assets/icons/logo1.svg';
import procureTechLogo from '../assets/icons/logo2.svg';
import cioLogo from '../assets/icons/logo3.svg';
import terzoLogo from '../assets/icons/logo4.svg';

const LatestNewsSection = () => {
	return (
		<>
			<h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl  text-center text-neutral-50">
				Latest News About Terzo
			</h2>
			<div
				className="xl:mt-14 mt-10 grid xl:grid-cols-4 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4
				xl:gap-10 md:gap-6 gap-5
				">
				<div className="border border-purple-500/40 rounded relative block h-full p-8 bg-gradient-to-tr from-zinc-800/60 via-purple-300/20 to-zinc-800/60">
					<article className="flex h-full flex-col">
						<h3 className="lg:text-2xl md:mb-4 mb-2 text-xl text-neutral-50">
							Terzo Announces $16M Series A Round
						</h3>
						<p className="mb-8 text-lg font-light text-zinc-100">
							Today is a big day for Terzo.
							We've raised $16M in Series A
							funding led by Align Ventures with
							participation from TYH Ventures,
							Engage Ventures, Human Capital
							and other institutional investors.
						</p>
						<div className="mt-auto flex items-center border-t border-white border-opacity-10 md:py-6 py5">
							<img src={tcLogo} loading="lazy" alt="tc logo"/>
						</div>
					</article>
				</div>
				
				<div className="border border-indigo-600/50 rounded relative block h-full p-8 bg-gradient-to-tr from-slate-900/60 via-indigo-500/20 to-slate-900/60">
					<article className="flex h-full flex-col">
						<h3 className="lg:text-2xl md:mb-4 mb-2 text-xl text-neutral-50">
							Terzo Named to 2022 ProcureTech 100 List
						</h3>
						<p className="mb-8 text-lg font-light text-zinc-100">
							Discover the 2022
							ProcureTech100, the most
							innovative, progressive and
							customer centric digital
							procurement solutions on the
							planet.
						</p>
						<div className="mt-auto flex items-center border-t border-white border-opacity-10 md:py-6 py5">
							<img src={procureTechLogo} loading="lazy" alt="tc logo"/>
						</div>
					</article>
				</div>
				
				<div className="border border-amber-300/40 rounded relative block h-full p-8 bg-gradient-to-tr from-neutral-800/70 via-amber-300/20 to-neutral-800/70">
					<article className="flex h-full flex-col">
						<h3 className="lg:text-2xl md:mb-4 mb-2 text-xl text-neutral-50">
							Terzo Named a 50 Best Companies to Watch in 2022
						</h3>
						<p className="mb-8 text-lg font-light text-zinc-100">
							Our innovative, AI-powered
							contract intelligence software
							earned us a coveted spot in this
							year's round-up, and we're
							honored to have been selected.
						</p>
						<div className="mt-auto flex items-center border-t border-white border-opacity-10 md:py-6 py5">
							<img src={cioLogo} loading="lazy" alt="tc logo"/>
						</div>
					</article>
				</div>
				
				<div className="border border-violet-500/40 rounded relative block h-full p-8 bg-gradient-to-tr from-zinc-800/60 via-violet-400/20 to-zinc-800/60">
					<article className="flex h-full flex-col">
						<h3 className="lg:text-2xl md:mb-4 mb-2 text-xl text-neutral-50">
							Terzo Announces Partnership with Prevalent
						</h3>
						<p className="mb-8 text-lg font-light text-zinc-100">
							Please join us in celebrating
							Terzo's newest strategic
							partnership with Prevalent, a
							leader in third-party risk
							management (TPRM).
						</p>
						<div className="mt-auto flex items-center border-t border-white border-opacity-10 md:py-6 py5">
							<img src={terzoLogo} loading="lazy" alt="tc logo"/>
						</div>
					</article>
				</div>
			</div>
		
		
		</>
	);
};

export default LatestNewsSection;
