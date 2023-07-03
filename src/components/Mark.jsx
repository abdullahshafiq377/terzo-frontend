import React from 'react';

const Mark = ({text}) => {
	return (
		<mark className='rounded-full px-6 md:pb-2 pb-1 whitespace-nowrap font-medium bg-gradient-to-r from-[#f7e16e] to-[#f3ce10]'>
			{text}
		</mark>
	);
};

export default Mark;
