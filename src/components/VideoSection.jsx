import React from 'react';
import video from '../assets/videos/Terzo AI - Contract Intelligence and Analytics_2.webm';
import bgImage from '../assets/images/video-section-bg.png'
import PrimaryButton from './PrimaryButton';

const VideoSection = () => {
	return (
		<div>
			<div>
				<span className='flex lg:h-3 h-2 mx-auto w-fit gap-2'>
					<span className='bg-[#9966ff] w-10 rounded-xl'></span>
					<span className='bg-[#9966ff] lg:w-3 w-2 rounded-full'></span>
				</span>
				<h2 className='mt-6 xl:text-7xl md:text-5xl text-3xl text-center text-neutral-50'>
					Contract Intelligence to drive financial performance
				</h2>
				{/*<img className='w-full' src={bgImage} alt='background'/>*/}
				<div className='lg:w-3/4 mx-auto xl:mt-20 md:mt-14 mt-8'>
					<video autoPlay muted loop>
						<source src={video} type='video/webm'/>
					</video>
				</div>
				<p className='mt-10 lg:text-3xl md:text-2xl text-lg text-center mx-auto lg:max-w-2xl md:max-w-lg max-w-md text-neutral-50'>
					Terzo helps leaders
					{' '}
					<span className='font-medium bg-gradient-to-r from-[#ca6afb] to-[#9b66ff] bg-clip-text text-transparent'>
					track every dollar
					</span>
					{' '}
					coming in and going out of the organization
				</p>
				<PrimaryButton className='flex mt-10 mx-auto px-24 py-3 md:px-10 md:py-5' text='Learn More'/>
			</div>
		</div>
	);
};

export default VideoSection;
