'use client';

import { useDialog } from '@/app/providers/DialogProvider';
import { OUR_PAGES, SERVICE_SELECT } from '@/ultis/constants';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '../page';

export const HeaderButtonPink = () => {
	const { openDialog } = useDialog();

	return (
		<div className="header absolute top-0 left-0 right-0 flex items-center justify-between p-[20px] md:py-[30px] md:px-[40px] text-black">
			<div className="flex items-center gap-[40px] mr-auto">
				<div className="w-[125px]">
					<Link href="/">
						<Image src="/images/logo-footer.svg" width={1000} height={2000} alt="" />
					</Link>
				</div>
				<ul className="desktop-menu items-center gap-[20px] font-medium">
					<li className="menu-1 relative flex items-center gap-2 cursor-pointer">
						<span className="font-semibold">Home</span>
						<ChevronDown className="w-[15px] h-[15px]" />
						<div className="subMenu-1 w-[90vw] absolute top-full left-[-200px] pt-5 z-10">
							<div className="flex bg-[#ebdfdc] text-black text-center gap-7 py-10 px-13">
								<div className="w-1/3 flex flex-col gap-4">
									<Image src="/images/megamenu-1.webp" width={1000} height={500} alt="" />
									<div className="subMenu-1__text text-[12px] uppercase tracking-[3px]">
										Beauty Salon
									</div>
								</div>
								<div className="w-1/3 flex flex-col gap-4">
									<Image src="/images/megamenu-2.webp" width={1000} height={500} alt="" />
									<div className="subMenu-1__text text-[12px] uppercase tracking-[3px]">Nail Bar</div>
								</div>
								<div className="w-1/3 flex flex-col gap-4">
									<Image src="/images/megamenu-3.webp" width={1000} height={500} alt="" />
									<div className="subMenu-1__text text-[12px] uppercase tracking-[3px]">
										Spa Center and Skincare
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="menu-2 relative flex items-center gap-2 cursor-pointer">
						<span className="font-semibold">Services</span>
						<ChevronDown className="w-[15px] h-[15px]" />
						<div className="subMenu-2 w-[600px] absolute top-full left-1/2 pt-5 translate-x-[-50%] z-10">
							<div className="flex bg-[#ebdfdc] text-black text-center">
								<div className="w-1/2 relative">
									<Image src="/images/megamenu-4.webp" width={500} height={1000} alt="" />
									<div className="subMenu-2__linear"></div>
									<div className="absolute left-8 right-8 bottom-8 flex flex-col items-center gap-3 text-[15px] text-white">
										<div>Not sure which service is right for you? We’re here to help!</div>
										<Link href="tel:0 800 123 1234" className="w-full">
											<button className="w-full uppercase border border-white bg-white text-(--color-green) hover:bg-transparent hover:text-white duration-300">
												Call: 0 800 123 1234
											</button>
										</Link>
									</div>
								</div>
								<div className="w-1/2 flex flex-col items-start text-left gap-10 p-10">
									<Link
										href="#"
										className="text-[15px] uppercase tracking-[3px] hover:text-(--color-pink)"
									>
										All Services
									</Link>
									<div className="flex flex-col gap-6 text-[15px]">
										{SERVICE_SELECT.map((item) => (
											<Link href={item.link} key={item.id} className="hover:text-(--color-pink)">
												{item.service}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="menu-3 relative flex items-center gap-2 cursor-pointer">
						<span className="font-semibold">Page</span>
						<ChevronDown className="w-[15px] h-[15px]" />
						<div className="subMenu-3 w-[200px] absolute top-full left-0 pt-5 z-10">
							<div className="flex flex-col gap-6 bg-[#ebdfdc] text-black text-[15px] p-10">
								{OUR_PAGES.map((item) => (
									<Link href={item.link} key={item.id} className="hover:text-(--color-pink)">
										{item.page}
									</Link>
								))}
							</div>
						</div>
					</li>
					<li className="cursor-pointer">
						<span className="font-semibold">Blog</span>
					</li>
					<li className="cursor-pointer">
						<span className="font-semibold">Contacts</span>
					</li>
				</ul>
			</div>
			<div className="hidden md:flex items-center gap-[40px]">
				<div className="flex items-center gap-[20px]">
					<span>
						<Link href="https://www.instLinkgram.com/cmsmasters/" target="_blank">
							<svg
								className="fill-black"
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
						<Link href="https://www.facebook.com/cmsmasters-133637440033420" target="_blank">
							<svg
								className="fill-black"
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
				<button
					className="w-fit uppercase border border-(--color-pink) bg-(--color-pink) text-white hover:border-black hover:bg-transparent hover:text-black duration-300 px-[30px]"
					onClick={() => openDialog()}
				>
					Book a visit
				</button>
			</div>
			<div className="hidden max-[1025px]:block ml-[20px]">
				<Menu />
			</div>
		</div>
	);
};
