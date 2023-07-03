import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/icons/terzo-icon.svg'
import SecondaryButton from './SecondaryButton';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const navigation = [
	{ name: 'Why Terzo', href: '#' },
	{ name: 'Core Platform', href: '#' },
	{ name: 'Company', href: '#' },
	{ name: 'Resources', href: '#' },
]

export default function TopNav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	return (
		<>
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex flex-1 items-center gap-x-6">
					<button type="button" className="-m-3 p-3 lg:hidden" onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-5 w-5 text-neutral-50" aria-hidden="true" />
					</button>
					<img
						className="h-8 w-auto"
						src={logo}
						alt="Terzo Logo"
					/>
				</div>
				<nav className="hidden lg:flex lg:gap-x-11 lg:text-sm lg:font-semibold lg:leading-6 lg:text-neutral-50 opacity-90">
					{navigation.map((item, itemIdx) => (
						<a key={itemIdx} href={item.href} className='hover:text-violet-200'>
							{item.name}
						</a>
					))}
				</nav>
				<div className="hidden lg:flex lg:flex-1 items-center justify-end gap-x-8">
					<a  className='text-neutral-50 font-medium leading-none hover:text-gray-200'>
					Contact Sales
					</a>
					<SecondaryButton text='Book a Demo'/>
					
				</div>
			</div>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50 " />
				<Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-stone-950 px-4 pb-6 md:max-w-sm md:px-6 md:ring-1 md:ring-gray-900/10">
					<div className="-ml-0.5 flex h-16 items-center gap-x-6">
						<button type="button" className="-m-2.5 p-2.5 text-neutral-50" onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
						<div className="-ml-0.5">
							<a href="#" className="-m-1.5 block p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src={logo}
									alt=""
								/>
							</a>
						</div>
					</div>
					<div className="mt-2 space-y-2">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-50 hover:text-violet-200"
							>
								{item.name}
							</a>
						))}
					</div>
				</Dialog.Panel>
			</Dialog>
		</>
	)
}
