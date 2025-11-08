'use client';

import { HOME_SLIDER_EIGHT } from '@/ultis/constants';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SectionEight = () => {
	return (
		<div className="section-eight w-full flex flex-col items-center justify-between gap-[50px] md:gap-[100px] mt-[120px]">
			<div className="flex flex-col gap-[20px] text-center">
				<h6 className="text-[11px] uppercase font-medium tracking-[2px]">photo gallery</h6>
				<h2>Your beauty is our priority</h2>
			</div>
			<div className="w-full relative">
				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					autoplay={{ delay: 5000 }}
					slidesPerView={1}
					centeredSlides={true}
					spaceBetween={20}
					loop={true}
					className="overflow-hidden"
					navigation={{
						nextEl: '.custom-next',
						prevEl: '.custom-prev'
					}}
					breakpoints={{
						768: { slidesPerView: 2 },
						1100: { slidesPerView: 4 }
					}}
				>
					{HOME_SLIDER_EIGHT.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="relative text-white text-center">
								<Image
									className="!h-[560px] lg:!h-[500px]"
									src={slide.src}
									width={500}
									height={1000}
									alt={`Slide ${index}`}
								/>
								<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3]"></div>
								<div className="absolute bottom-[20px] left-0 right-0 font-semibold">{slide.description}</div>
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
	);
};
