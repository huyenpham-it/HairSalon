'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { OUR_PAGES, SERVICE_SELECT } from '@/ultis/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Menu = () => {
	const pathname = usePathname();

	return (
		<div className="mobile-menu">
			<Sheet>
				<SheetTrigger className="p-2">
					<i
						aria-hidden="true"
						className={`cmsmsdemo-icon- cmsms-demo-icon-menu text-[32px] ${
							pathname === '/' ? 'text-white' : 'text-(--color-black)'
						}`}
					></i>
				</SheetTrigger>
				<SheetContent side="right" className="w-full md:w-[450px] bg-(--color-pink) text-white p-[20px]">
					<SheetTitle></SheetTitle>
					<SheetDescription></SheetDescription>
					<div className="w-full h-full flex flex-col items-start justify-between gap-8 overflow-y-scroll">
						<nav className="flex flex-col gap-8 mt-4">
							<Accordion type="single" collapsible>
								<AccordionItem value="item-1" className="border-none">
									<AccordionTrigger className="items-center justify-start">
										<h3>Home</h3>
									</AccordionTrigger>
									<AccordionContent>
										<div className="flex flex-col gap-6 text-[15px] font-medium">
											<Link href="#">Home 1</Link>
											<Link href="#">Home 2</Link>
											<Link href="#">Home 3</Link>
										</div>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2" className="border-none">
									<AccordionTrigger className="items-center justify-start">
										<h3>Services</h3>
									</AccordionTrigger>
									<AccordionContent>
										<div className="flex flex-col gap-6 text-[15px] font-medium">
											<Link href="#">All Services</Link>
											{SERVICE_SELECT.map((item) => (
												<Link href={item.link} key={item.id}>
													{item.service}
												</Link>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3" className="border-none">
									<AccordionTrigger className="items-center justify-start pb-0">
										<h3>Pages</h3>
									</AccordionTrigger>
									<AccordionContent className="pt-4 pb-0">
										<div className="flex flex-col gap-6 text-[15px] font-medium">
											{OUR_PAGES.map((item) => (
												<Link href={item.link} key={item.id}>
													{item.page}
												</Link>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
							<Link href="#">
								<h3>Blog</h3>
							</Link>
							<Link href="#">
								<h3>Contacts</h3>
							</Link>
						</nav>
						<div className="w-full flex flex-col items-center justify-center gap-4">
							<div>Brooklyn, NY 10036, United States</div>
							<div>Mon – Fri: 8:30 am – 5:00 pm, Sat – Sun: Closed</div>
							<div>
								<Link
									href="tel:1-800-123-1234"
									className="flex items-center justify-center md:justify-start gap-[4px] duration-300"
								>
									<span>
										<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-phone"></i>
									</span>
									1-800-123-1234
								</Link>
							</div>
							<div className="flex flex-col items-center gap-4">
								<div className="flex items-center gap-[20px]">
									<span>
										<Link href="https://www.instLinkgram.com/cmsmasters/" target="_blank">
											<svg
												className="fill-white"
												width="20"
												height="20"
												viewBox="0 0 448 512"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
											</svg>
										</Link>
									</span>
									<span>
										<Link
											href="https://www.facebook.com/cmsmasters-133637440033420"
											target="_blank"
										>
											<svg
												className="fill-white"
												width="20"
												height="20"
												viewBox="0 0 320 512"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
											</svg>
										</Link>
									</span>
								</div>
								<button className="w-fit uppercase border border-white text-white hover:bg-white hover:text-black duration-300 px-[30px]">
									Book a visit
								</button>
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
