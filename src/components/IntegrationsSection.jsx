import React from 'react';
import terzoLogo from '../assets/icons/terzo-logo-2.svg';
import microsoftLogo from '../assets/icons/microsoft-logo.svg';
import oracleLogo from '../assets/icons/oracle-logo.svg'
import servicenowLogo from '../assets/icons/servicenow-logo.svg'
import sapLogo from '../assets/icons/sap-ariba-logo.svg'
import workdayLogo from '../assets/icons/workday-logosvg.svg'
import coupaLogo from '../assets/icons/coupa-logosvg.svg'

const IntegrationsSection = () => {
	return (
		<>
			<div className="md:absolute top-0 left-0 flex w-full flex-col items-center text-center relative ">
				<h2 className="z-20 xl:max-w-4xl lg:max-w-xl max-w-sm xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-center text-neutral-50">
					Enhance your applications with integrations
				</h2>
				<p className="relative z-20 mt-6 xl:max-w-lg lg:max-w-md max-w-xs xl:text-xl lg:text-lg md:text-base text-sm font-light text-zinc-100">
					Integrate your existing enterprise applications out of the box. Terzo connects to ERP, P2P, SSO, and
					more.
				</p>
				<img className="relative z-20 xl:mt-28 lg:mt-24 md:mt-8 xl:h-32 lg:h-28 md:h-16 hidden md:block" alt="terzo logo"
				     src={terzoLogo}/>
			</div>
			<div className="relative z-10 md:flex items-start justify-center hidden">
				<div className="flex md:flex-col flex-row justify-center lg:mt-0 -mt-4 gap-4">
					<div className="xl:h-[180px] xl:w-[180px] lg:h-[144px] lg:w-[144px] md:h-[112px] md:w-[112px] h-[98px] w-[98px] xl:-translate-x-[416px] lg:-translate-x-[352px] md:-translate-x-[248px] md:translate-y-[56px]">
						<div className="relative rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#2c203f]">
							<img alt="Microsoft Logo" src={microsoftLogo}/>
						</div>
					</div>
					<div className="mt-20 xl:h-[180px] xl:w-[180px] lg:h-[144px] lg:w-[144px] md:h-[112px] md:w-[112px] h-[98px] w-[98px] xl:-translate-x-[340px] lg:-translate-x-[280px] md:-translate-x-[200px] md:translate-y-[32px]">
						<div className="relative rounded flex h-full w-full items-center justify-center border border-indigo-500/60 bg-[#1d1e38]">
							<img alt="Microsoft Logo" src={oracleLogo}/>
						</div>
					</div>
					<div className="mt-14 xl:h-[180px] xl:w-[180px] lg:h-[144px] lg:w-[144px] md:h-[112px] md:w-[112px] h-[98px] w-[98px] xl:-translate-x-[120px] lg:-translate-x-[100px] md:-translate-x-[70px]">
							<div className="relative rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#311f3b]">
							<img alt="Microsoft Logo" src={servicenowLogo}/>
						</div>
					</div>
				</div>
				<div className="flex md:flex-col flex-row justify-center lg:mt-0 -mt-4 gap-4">
					<div className="xl:h-[180px] xl:w-[180px] lg:h-[144px] lg:w-[144px] md:h-[112px] md:w-[112px] h-[98px] w-[98px] xl:translate-x-[416px] lg:translate-x-[352px] md:translate-x-[248px] md:translate-y-[56px]">
						<div className="relative rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#2c203f]">
							<img alt="Microsoft Logo" src={sapLogo}/>
						</div>
					</div>
					<div className="mt-20 xl:h-[180px] xl:w-[180px] lg:h-[144px] lg:w-[144px] md:h-[112px] md:w-[112px] h-[98px] w-[98px] xl:translate-x-[340px] lg:translate-x-[280px] md:translate-x-[200px] md:translate-y-[32px]">
						<div className="relative rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#311f3b]">
							<img alt="Microsoft Logo" src={workdayLogo}/>
						</div>
					</div>
					<div className="mt-14 xl:h-[180px] xl:w-[180px] lg:h-[144px] lg:w-[144px] md:h-[112px] md:w-[112px] h-[98px] w-[98px] xl:translate-x-[120px] lg:translate-x-[100px] md:translate-x-[70px]">
						<div className="relative rounded flex h-full w-full items-center justify-center border border-indigo-500/60 bg-[#1d1e38]">
							<img alt="Microsoft Logo" src={coupaLogo}/>
						</div>
					</div>
				</div>
				<span className='absolute lg:block hidden border border-white/20 left-1/2 bottom-0 h-28 w-28 rounded-full -translate-x-1/2 xl:-translate-y-12 bg-[#1f1b23]'>
					<span className='md:block h-[110px] w-[110px] rounded-full bg-transparent bg-join-us-inner before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-[30px] before:-translate-y-[1px] before:-translate-x-1/2 before:bg-white after:absolute after:left-1/2 after:top-1/2 after:h-[30px] after:w-[2px] after:-translate-x-[1px] after:-translate-y-1/2 after:bg-white xl:h-[78px] xl:w-[78px] lg:before:w-[22px] lg:after:h-[22px] md:h-[54px] md:w-[54px] md:before:w-[14px] md:after:h-[14px] hidden'>
					
					</span>
				</span>
			</div>
			<div className='grid grid-cols-3 grid-rows-2 gap-8 place-content-center justify-items-center max-w-sm mx-auto mt-10 md:hidden'>
				<div className="h-[98px] w-[98px]">
					<div className="p-4 rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#2c203f]">
						<img alt="Microsoft Logo" src={microsoftLogo}/>
					</div>
				</div>
				<div className="h-[98px] w-[98px]">
					<div className="p-4 rounded flex h-full w-full items-center justify-center border border-indigo-500/60 bg-[#1d1e38]">
						<img alt="Microsoft Logo" src={oracleLogo}/>
					</div>
				</div>
				<div className="h-[98px] w-[98px]">
					<div className="p-4 rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#311f3b]">
						<img alt="Microsoft Logo" src={servicenowLogo}/>
					</div>
				</div>
				<div className="h-[98px] w-[98px]">
					<div className="p-4 rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#2c203f]">
						<img alt="Microsoft Logo" src={sapLogo}/>
					</div>
				</div>
				<div className="h-[98px] w-[98px]">
					<div className="p-4 rounded flex h-full w-full items-center justify-center border border-violet-500/60 bg-[#311f3b]">
						<img alt="Microsoft Logo" src={workdayLogo}/>
					</div>
				</div>
				<div className="h-[98px] w-[98px]">
					<div className="p-4 rounded flex h-full w-full items-center justify-center border border-indigo-500/60 bg-[#1d1e38]">
						<img alt="Microsoft Logo" src={coupaLogo}/>
					</div>
				</div>
			</div>
		</>
	)
		;
};

export default IntegrationsSection;
