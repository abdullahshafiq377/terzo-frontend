import React from 'react';

const ImageSection = ({heading, text, image, imageLeft = false}) => {
	return (
		<div className="grid lg:grid-cols-10 lg:gap-14">
			{
				imageLeft ?
				(
					<div className="col-span-6 lg:order-first order-last">
						<img className='mx-auto lg:mr-4 lg:rounded-2xl rounded-md mt-12 lg:mt-0' alt='dashboard' src={image}/>
					</div>
				)
				:
				''
			}
			
			<div className="col-span-4 md:w-3/5 lg:w-auto w-auto lg:my-auto">
				<h2 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-neutral-50'>
					{heading}
				</h2>
				<p className='lg:text-lg text-base mt-4 font-light text-zinc-100'>
					{text}
				</p>
			</div>
			
			{
				!imageLeft ?
				(
					<div className="col-span-6">
						<img className='mx-auto lg:ml-4 lg:rounded-2xl rounded-md mt-12 lg:mt-0' alt='dashboard' src={image}/>
					</div>
				)
				          :
				''
			}
		</div>
	);
};

export default ImageSection;
