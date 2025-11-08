'use client';

import { HeaderButtonGreen } from '@/components/HeaderButtonGreen/page';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OUR_SPECIALISTS, SERVICE_SELECT } from '@/ultis/constants';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HairStyling() {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(null);

	return (
		<div className="hair-styling-page">
			<HeaderButtonGreen />
			<div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-[80px] p-[20px] md:p-[40px] lg:py-[80px]">
				<div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-[40px]">
					<div className="hair-styling-page__left w-full bg-(--color-green) text-white flex flex-col gap-[20px] p-[20px] md:p-[40px]">
						<h5 className="text-[18px] md:text-[20px] lg:text-[22px] text-center uppercase font-medium tracking-[2px] mb-4">
							Our Services
						</h5>
						{SERVICE_SELECT.map((service) => (
							<Link
								key={service.id}
								href={service.link}
								className="hover:text-(--color-gray) duration-300"
							>
								<div className="flex items-center justify-between">
									<span>{service.service}</span>
									<span>
										<i
											aria-hidden="true"
											className="text-[15px] cmsmsdemo-icon- cmsms-demo-icon-arrow-right"
										></i>
									</span>
								</div>
							</Link>
						))}
					</div>
					<form autoComplete="off" className="form w-full border border-(--color-beige) p-[20px] md:p-[40px]">
						<h5 className="text-[18px] md:text-[20px] lg:text-[22px] text-center uppercase font-medium tracking-[2px] mb-4">
							Book a Consultation
						</h5>
						<div className="w-full flex flex-col gap-[20px] [&>*]:!text-(--color-dark-pink) [&>*]:!text-[14px]">
							<input type="text" name="firstName" placeholder="First Name" />
							<input type="text" name="familyName" placeholder="Family Name" />
							<input type="text" name="phone" placeholder="Your Phone" />
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<div className="w-full relative">
										<input
											type="text"
											readOnly
											name="date"
											placeholder="Select Date"
											value={date ? format(date, 'dd/MM/yyyy') : ''}
											onClick={() => setOpen(true)}
											className={`${open && '!border-(--color-pink)'} w-full cursor-pointer`}
										/>
										<span className="absolute right-[13px] top-1/2 -translate-y-1/2 [&>svg]:w-[16px]">
											<ChevronDownIcon />
										</span>
									</div>
								</PopoverTrigger>

								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={date}
										onSelect={(selectedDate) => {
											setDate(selectedDate);
											setOpen(false);
										}}
                                        
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<Select>
								<SelectTrigger className="w-full [&>span]:text-[14px] [&>span]:tracking-normal border-b border-(--color-dark-pink) pl-0">
									<SelectValue placeholder="Select Hour" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map(
											(hour) => (
												<SelectItem
													key={hour}
													value={hour}
													className="text-(--color-dark-pink) data-[highlighted]:bg-(--color-green) data-[highlighted]:text-white"
												>
													{hour}
												</SelectItem>
											)
										)}
									</SelectGroup>
								</SelectContent>
							</Select>
							<Select>
								<SelectTrigger className="w-full [&>span]:text-[14px] [&>span]:tracking-normal border-b border-(--color-dark-pink) pl-0">
									<SelectValue placeholder="Select Minute" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{['00', '10', '20', '30', '40', '50'].map((minute) => (
											<SelectItem
												key={minute}
												value={minute}
												className="text-(--color-dark-pink) data-[highlighted]:bg-(--color-green) data-[highlighted]:text-white"
											>
												{minute}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<button className="w-full uppercase text-white bg-(--color-green) hover:bg-(--color-pink) duration-300 mt-[20px]">
							Book a visit
						</button>
					</form>
				</div>

				<div className="hair-styling-page__right lg:flex-1 min-w-0 flex flex-col gap-[30px] lg:gap-[40px]">
					<h2>Hair styling</h2>
					<div>
						<Image src="/images/52-service-1.webp" width={1000} height={500} alt="" />
					</div>
					<h3>About Hair Styling</h3>
					<p>
						Custom haircuts from creative to classic are achieved by five different levels of experts,
						including Stylist, Master Stylist, Salon Director, Senior Director, and Creative Director. Each
						level is determined by education, experience, and advanced skills. The stylist will take into
						account your face shape, hair texture, and lifestyle during your consultation so that you leave
						with a manageable, wearable style that suits you.
					</p>
					<h3>Frequently Asked Questions</h3>
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="items-center [&>svg]:size-6 [&>svg]:bg-(--color-green) hover:[&>svg]:bg-(--color-pink) [&>svg]:rounded-full [&[data-state=open]>svg]:bg-(--color-pink) duration-300">
								<div className="!font-(family-name:--font-figtree) font-semibold text-[18px] tracking-[2px]">
									How long should the shellac stay on the nails?
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-base">
								We guarantee our shellac service for up to one week. However, most clients are able to
								get two weeks of wear out of each shellac service. Contact our day spa today for your
								manicure.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger className="items-center [&>svg]:size-6 [&>svg]:bg-(--color-green) hover:[&>svg]:bg-(--color-pink) [&>svg]:rounded-full [&[data-state=open]>svg]:bg-(--color-pink) duration-300">
								<div className="!font-(family-name:--font-figtree) font-semibold text-[18px] tracking-[2px]">
									How do I book an appointment?
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-base">
								You can visit our website and book an appointment online or call our day spa today. We
								also have an app available to download through our website. It’s available on all major
								app stores as well.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger className="items-center [&>svg]:size-6 [&>svg]:bg-(--color-green) hover:[&>svg]:bg-(--color-pink) [&>svg]:rounded-full [&[data-state=open]>svg]:bg-(--color-pink) duration-300">
								<div className="!font-(family-name:--font-figtree) font-semibold text-[18px] tracking-[2px]">
									How often should I recolor/cut my hair?
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-base">
								In order to maintain your style, you’re looking at cutting, styling, or coloring your
								hair every four to six weeks. Schedule an appointment with us today to be pampered by
								one of the best beauty salons in the area.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger className="items-center [&>svg]:size-6 [&>svg]:bg-(--color-green) hover:[&>svg]:bg-(--color-pink) [&>svg]:rounded-full [&[data-state=open]>svg]:bg-(--color-pink) duration-300">
								<div className="!font-(family-name:--font-figtree) font-semibold text-[18px] tracking-[2px]">
									What kind of facial do I need for my age/skin type?
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-base">
								We offer a variety of different facials with our licensed and experienced estheticians.
								Prior to your appointment, we offer a consultation with our professionals to find the
								treatment and technique that’s right for you. We also offer a number of skincare
								products and at-home facial kits for continued maintenance.
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<h3>Our Specialists</h3>
					<div className="w-full relative">
						<Swiper
							modules={[Pagination, Navigation, Autoplay]}
							autoplay={{ delay: 3000 }}
							slidesPerView={1}
							spaceBetween={20}
							loop={true}
							className="overflow-hidden"
							breakpoints={{
								768: { slidesPerView: 3 },
								1024: { slidesPerView: 2 },
								1300: { slidesPerView: 3 }
							}}
						>
							{OUR_SPECIALISTS.map((slide, index) => (
								<SwiperSlide key={index}>
									<div className="w-full">
										<Link href={slide.link}>
											<div className="overflow-hidden">
												<Image
													className="hover:scale-[1.05] duration-300"
													src={slide.src}
													width={1000}
													height={2000}
													alt={`Slide ${index}`}
												/>
											</div>
											<div className="w-full bg-(--color-light-beige) flex flex-col text-center p-[25px]">
												<p className="text-[18px] md:text-[20px] font-medium hover:text-(--color-pink) duration-300">
													{slide.name}
												</p>
												<p className="text-(--color-dark-pink) hover:text-(--color-pink) text-[11px] uppercase font-semibold tracking-[2px]">
													{slide.job}
												</p>
											</div>
										</Link>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<Link
						href="#"
						className="flex items-center gap-[10px] text-(--color-dark-pink) hover:text-(--color-black) duration-300"
					>
						View Our Team
						<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
}
