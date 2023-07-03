import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import heroVideo from '../assets/videos/Terzo AI - Contract Intelligence and Analytics.webm'

const Hero = () => {
	return (
		<>
			<div className='lg:grid lg:grid-cols-12 lg:gap-2'>
				<div className='col-span-5'>
					<h1 className='xl:mt-40 lg:mt-24 md:mt-10 max-w-2xl mx-auto lg:w-auto xl:text-7xl md:text-6xl text-4xl text-neutral-50 lg:text-left text-center font-normal leading-normal'>
						Unlock financial insights hidden in your contracts
					</h1>
					<p className='xl:mt-10 md:mt-6 mt-4 max-w-xl text-base md:text-xl font-light mx-auto lg:mx-0 lg:text-left text-center text-zinc-100'>
						Discover data across your contract ecosystem to drive savings
						and reduce risk through Terzo AI
					</p>
					<PrimaryButton className='mt-10 mx-auto lg:mx-0 flex justify-center px-24 py-3 md:px-10 md:py-5' text="Book a Demo"/>
				</div>
				<div className='col-span-7'>
					<video autoPlay muted loop>
						<source src={heroVideo} type='video/webm'/>
					</video>
				</div>
			</div>
			
			
		</>
	);
};

export default Hero;
