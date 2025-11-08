import ServiceSelect from '@/components/ServiceSelect/page';
import Image from 'next/image';

export const SectionThree = () => {
	return (
		<div>
			<div className="section-two p-[15px]">
				<div className="w-full bg-(--color-light-beige) p-[20px]">
					<form className="section-two__form">
						<div className="w-full flex flex-col md:flex-row gap-[20px] text-(--color-dark-pink) border-(--color-pink)">
							<input className="flex-1" type="text" name="name" placeholder="First Name" />
							<input className="flex-1" type="text" name="phone" placeholder="Your Phone" />
							<ServiceSelect customClass="text-(--color-dark-pink) border-(--color-dark-pink)" />
						</div>
						<button className="w-full md:max-w-[250px] uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
							Make an Appointment
						</button>
					</form>
				</div>
			</div>

			<div className="section-three py-[120px] px-[20px]">
				<div className="w-full max-w-[800px] text-center m-auto">
					<h3>
						We are here for you and excited to serve you as you trust us with your look. Let’s collaborate
						on your vision to make it come alive.
					</h3>
				</div>
				<div className="w-full min-h-[1000px] flex flex-col lg:flex-row items-between md:justify-center gap-[10px] md:gap-[50px] lg:gap-[120px] py-[120px] px-0 md:px-[40px]">
					<div className="flex flex-col gap-[20px]">
						<div className="w-full flex flex-col gap-[30px] mb-[30px]">
							<h6 className="text-[11px] uppercase font-medium tracking-[2px]">A Space for You</h6>
							<h2 className="section-three__title">
								<span>Personalized beauty treatments</span>
								<span className="betterlett"> tailored </span>
								<span>to you</span>
							</h2>
						</div>
						<div className="section-three__images-1 self-end hidden lg:block">
							<Image src="/images/52-home-4.webp" width={1000} height={2000} alt="" />
						</div>
					</div>
					<div className="w-full lg:w-[40%] flex flex-col gap-[50px] lg:gap-[120px]">
						<div className="w-full flex items-center justify-center gap-[80px]">
							<div className="section-three__images-1 hidden md:block lg:hidden">
								<Image src="/images/52-home-4.webp" width={1000} height={2000} alt="" />
							</div>
							<div className="section-three__images-2 px-[10px]">
								<Image src="/images/52-home-3.webp" width={1000} height={2000} alt="" />
							</div>
						</div>
						<div className="flex flex-col gap-[30px] items-start order-first lg:order-last ">
							<p className="max-w-[425px] md:max-w-none">
								Let’s embark upon a journey of self-fulfillment and peace. You deserve to feel and look
								your best, and we’re here to cater to that with a wide range of services. From hair care
								to nail treatment and makeup, we do it all!
							</p>
							<button className="uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300 px-[30px]">
								more about us
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
