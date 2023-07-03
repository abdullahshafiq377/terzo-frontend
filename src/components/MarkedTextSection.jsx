import React from 'react';
import Mark from './Mark';

const MarkedTextSection = () => {
	return (
		<div className='container xl:max-w-7xl mx-auto'>
			<p className='relative xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl xl:leading-relaxed lg:leading-relaxed md:leading-normal sm:leading-normal leading-normal bg-gradient-to-r from-[#f4d0ff] from-30% via-[#ba7dc5] via-40% to-[#d1d3f2] to-60% bg-clip-text text-transparent'>
				Terzo gives you the power of
				{' '}
				<span >
					<Mark text='Artificial Intelligence'/>
				</span>
				{' '}
				through a unique AI-as-a-Service model. This allows you to
				{' '}
				<span>
					<Mark text='focus on strategic work'/>
				</span>
				{' '}
				instead of the operational burden and cost of reviewing contracts manually. Quickly
				{' '}
				<span>
					<Mark text='identify data'/>
				</span>
				{' '}
				that matters to your organization with dynamic analytics dashboards. Gain
				{' '}
				<span>
					<Mark text='full confidence'/>
				</span>
				{' '}
				in data quality with humans in the loop performing QA on every contract.
			</p>
		</div>
	);
};

export default MarkedTextSection;
