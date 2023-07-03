import './App.css';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ImageSection from './components/ImageSection';
import accessImage from './assets/images/access.avif';
import forecastImage from './assets/images/forecast.avif'
import intakeImage from './assets/images/intake.avif'
import visualizeImage from './assets/images/visualize.avif'
import MarkedTextSection from './components/MarkedTextSection';
import LogoSection from './components/LogoSection';
import LatestNewsSection from './components/LatestNewsSection';
import VideoSection from './components/VideoSection';
import IntegrationsSection from './components/IntegrationsSection';


function App () {
	return (
		<>
			<header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10 bg-[#100a11]">
				<TopNav/>
			</header>
			<main className='px-6 lg:px-10 bg-[#100a11]'>
				<section className="relative isolate overflow-hidden pt-20">
					<Hero/>
				</section>
				<section className='my-14' >
					<StatsSection/>
				</section>
				<section className='my-14 lg:py-14'>
					<VideoSection/>
				</section>
				<section className='my-14 lg:py-14'>
					<ImageSection
						heading='Instant access to data to drive smarter financial decisions'
						text='Find the financial insights you need to make smarter decisions. Understand what products and services you’re paying for to optimize your spend and reduce duplication.'
						image={accessImage}
					/>
				</section>
				<section className='my-14 lg:py-14'>
					<ImageSection
						heading='Forecast accurately to meet budget goals'
						text='Link actual contract commitments to your budgeting process. Pipeline and forecast views provide you the ability to see future commitments to ensure you never miss a renewal and maximize the value of each contract.'
						image={forecastImage}
						imageLeft
					/>
				</section>
				<section className='my-14 lg:py-14 md:relative'>
					<IntegrationsSection/>
				</section>
				<section className='my-14 lg:py-14'>
					<ImageSection
						heading='Speed up intake and approval processes'
						text='No-code workflow templates make this fast and easy to deploy. Automate tasks and approvals. Govern cost, risk, and get visibility into all requests.'
						image={intakeImage}
					/>
				</section>
				<section className='my-14 lg:py-14'>
					<ImageSection
						heading='Maximize your strategic relationships'
						text='Robust analytics and reporting provide critical data to strengthen negotiations and optimize relationships with customers, suppliers, and partners.'
						image={visualizeImage}
						imageLeft
					/>
				</section>
				<section className='my-14 lg:py-14'>
					<MarkedTextSection/>
				</section>
				<section className='my-14 lg:py-14'>
					<LatestNewsSection/>
				</section>
				<section className='my-14 lg:py-14'>
					<LogoSection/>
				</section>
			</main>
		</>
	);
}

export default App;
