'use client';

import { HOME_SLIDER_SEVEN } from '@/ultis/constants';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SectionSeven = () => {
	return (
		<div className="w-full">
			<iframe
				className="w-full aspect-video"
				src="https://www.youtube.com/embed/1c_gHonRtYI?si=IJgCEi4lqsEAJI6O"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<div className="w-full flex flex-col lg:flex-row p-[15px]">
				<div className="w-full lg:w-1/2 bg-(--color-pink) px-[20px] md:px-[50px] py-[60px] md:py-[80px]">
					<Swiper
						modules={[Pagination, Navigation, Autoplay]}
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						slidesPerView={1}
						loop={true}
						className="mySwiper overflow-hidden"
						pagination={{
							type: 'progressbar'
						}}
					>
						{HOME_SLIDER_SEVEN.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className="flex flex-col items-center gap-[20px] text-white text-center">
									<div className="flex gap-1">
										<span>
											<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
										</span>
										<span>
											<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
										</span>
										<span>
											<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
										</span>
										<span>
											<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
										</span>
										<span>
											<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
										</span>
									</div>
									<h4>{slide.comment}</h4>
									<div className="flex items-center gap-[10px] pb-[50px]">
										<Image
											className="!w-[50px] !h-[50px] rounded-full"
											src={slide.src}
											width={50}
											height={50}
											alt={`Slide ${index}`}
										/>
										<div className="font-semibold">{slide.name}</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="w-full lg:w-1/2">
					<Image
						className="hidden lg:block"
						src={'/images/52-home-6-1.webp'}
						width={1000}
						height={2000}
						alt=""
					/>
					<Image
						className="lg:hidden min-h-[370px]"
						src={'/images/52-home-6-tablet.webp'}
						width={1000}
						height={2000}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
