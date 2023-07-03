import React from 'react';

const PrimaryButton = ({text, onClick, className}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`${className} rounded-full transition-colors duration-200 bg-violet-500 px-10 py-5 text-base font-semibold text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
