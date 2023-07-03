import React from 'react';
import logo from '../assets/icons/logo1.svg'

const NewsCard = () => {
	
	return (
		<div className='h-96 px-8 py-6 border rounded border-purple-900/70 bg-gradient-to-tr from-purple-800/10 via-purple-950/30 to-purple-950/10'>
			<h6 className='text-2xl text-neutral-50'>
				Terzo Announces $16M Series A Round
			</h6>
			<p className='mt-4 font-light text-neutral-50'>
				Today is a big day for Terzo.
				We've raised $16M in Series A
				funding led by Align Ventures with
				participation from TYH Ventures,
				Engage Ventures, Human Capital
				and other institutional investors.
			</p>
			<hr className='mt-12 opacity-20'/>
			<img className='mt-4' alt='logo' src={logo}/>
		</div>
	);
};

export default NewsCard;
