import React from 'react';

const StatCard = ({heading, text, children}) => {
	return (
		<div className='mb-16 mx-10 md:mx-0'>
			{children}
			<h6 className='mt-4 text-gray-50 lg:text-2xl text-xl'>{heading}</h6>
			<hr className='lg:my-8 my-4 opacity-10'/>
			<p className='lg:text-lg text-base text-gray-100 font-light'>
				{text}
			</p>
		</div>
	);
};

export default StatCard;
