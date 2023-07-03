import React from 'react';

const SecondaryButton = ({text, onClick}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="rounded-full transition-colors duration-200 bg-neutral-50 text-stone-950 px-3 py-1.5 text-sm font-semibold shadow-sm hover:bg-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{text}
		</button>
	);
};

export default SecondaryButton;
