import React, { useState, useRef, useEffect } from 'react';

const CountUp = ({start = 0, end, timer = 50, extraText =''}) => {
	const [state, setstate] = useState(null);
	const ref = useRef(start);
	
	const accumulator = end / 200;
	const updateCounterState = () => {
		if (ref.current < end) {
			const result = Math.ceil(ref.current + accumulator);
			if (result > end) {
				return setstate(end);
			}
			setstate(result);
			ref.current = result;
		}
		setTimeout(updateCounterState, timer);
	};
	
	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			updateCounterState();
		}
		return () => (isMounted = false);
	}, [end, start]);
	
	return <span className='xl:text-9xl lg:text-8xl text-7xl font-light bg-gradient-to-br from-[#cf82fc] from-20% to-[#3e224d] bg-clip-text text-transparent'>{state + extraText}</span>;
};
export default CountUp;
