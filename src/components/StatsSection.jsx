import React from 'react';
import CountUp from './CountUp';
import StatCard from './StatCard';

const StatsSection = () => {
	return (
		<div className='md:grid grid-cols-3 xl:gap-60 lg:gap-20 md:gap-12'>
			<div>
				<StatCard heading='Faster Cycles' text='Stop wasting time with manual contract review and analysis. Access critical data across all contracts in just seconds.'>
					<CountUp end={3} timer={75} extraText='x'/>
				</StatCard>
			</div>
			<div>
				<StatCard heading='Cost Savings' text='Insights into both contract and spend data together enables smart, quick decisions for cost consolidation and rationalization.'>
					<CountUp end={10} timer={75} extraText='%+'/>
				</StatCard>
			</div>
			<div>
				<StatCard heading='Day Implementation' text='Get up and running quickly with no-code workflows plus out-of-the-box integrations.'>
					<CountUp end={30} timer={75}/>
				</StatCard>
			</div>
			
		</div>
	);
};

export default StatsSection;
