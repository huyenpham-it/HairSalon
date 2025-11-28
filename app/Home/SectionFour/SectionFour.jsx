'use client';

import { HOME_SLIDER_FOUR } from '@/ultis/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SectionFour = () => {
	return (
		<div className="section-four bg-[#EBDFDC] flex flex-col lg:flex-row items-center justify-between gap-[40px] py-[70px] px-[20px] md:pr-0">
			<div className="w-full lg:w-[360px] flex flex-col gap-[30px] mb-[30px]">
				<h6 className="text-[11px] uppercase font-medium tracking-[2px]">Our services</h6>
				<h2>A range of high-quality beauty services</h2>
			</div>
			<div className="w-full lg:w-[60%]">
				<div className="section_four_slider">
					<Swiper
						modules={[Navigation, Autoplay]}
						navigation={{
							nextEl: '.custom-next',
							prevEl: '.custom-prev'
						}}
						autoplay={{ delay: 5000 }}
						slidesPerView={1}
						loop={true}
						className="overflow-hidden"
						breakpoints={{
							768: { slidesPerView: 2.5 },
							1024: { slidesPerView: 1.5 },
							1120: { slidesPerView: 2.5 }
						}}
					>
						{HOME_SLIDER_FOUR.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className="relative md:mr-[20px]">
									<Image src={slide.src} width={1000} height={2000} alt={`Slide ${index}`} />
									<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3]"></div>
									<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-[30px] items-start justify-between text-white p-[25px]">
										<div className="text-[11px] uppercase font-medium tracking-[2px] bg-(--color-green) py-[5px] px-[10px] rounded-[20px]">
											From ${slide.price}
										</div>
										<div className="flex flex-col gap-[20px]">
											<h3>
												<Link href={slide.link} className="text-white">
													{slide.title}
												</Link>
											</h3>
											<p className="leading-[1.5]">{slide.description}</p>
											<button className="w-fit uppercase border border-white text-white hover:bg-white hover:text-black duration-300 px-[30px]">
												View details
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<button type="button" className="custom-arrow custom-prev">
						<i className="cmsms-demo-icon-arrow-left"></i>
					</button>
					<button type="button" className="custom-arrow custom-next">
						<i className="cmsms-demo-icon-arrow-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
};
