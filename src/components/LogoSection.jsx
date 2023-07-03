import React from 'react';
import PrimaryButton from './PrimaryButton';
import logo from '../assets/icons/terzo-logo.svg'

const LogoSection = () => {
	return (
		<div>
			<img className='mx-auto' alt='logo' src={logo}/>
			<h1 className='mt-10 xl:text-7xl lg:text-6xl md:text-5xl text-3xl lg:max-w-4xl flex justify-center text-center text-neutral-50 mx-auto'>
				Speed to value. Get up and running in weeks, not months or years.
			</h1>
			<PrimaryButton className='mt-10 flex justify-center mx-auto px-24 py-3 md:px-10 md:py-5' text='Book a Demo'/>
		</div>
	);
};

export default LogoSection;
