import Image from 'next/image';

export const SectionFive = () => {
	return (
		<div className="section-five flex flex-col lg:flex-row p-[15px]">
			<div className="hidden lg:block w-1/2">
				<Image src="/images/52-home-5.webp" width={1000} height={2000} alt="" />
			</div>
			<div className="lg:w-1/2 text-white bg-(--color-green) flex flex-col items-start gap-[30px] py-[80px] px-[30px] lg:p-[120px]">
				<h2 className="lg:w-[465px] lg:ml-[-200px]">
					<span>Exclusive all-in-one glow up beauty</span>
					<span className="betterlett !text-(--color-light-pink)">packages</span>
				</h2>
				<div>
					We created this space with you in mind, for your time with us to be calming and invigorating. It’s
					your time to rest easy in our salon home. But before you’re gone, pay our photo booth a visit and
					you’ll be so glad you did.
				</div>
				<div>
					<ul className="flex flex-col gap-[18px]">
						<li className="flex gap-[10px]">
							<span className="w-[26px] h-[26px] bg-(--color-pink) flex items-center justify-center p-[5px] rounded-[50%]">
								<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-check"></i>
							</span>
							<span>Tailored treatments for every client;</span>
						</li>
						<li className="flex gap-[10px]">
							<span className="w-[26px] h-[26px] bg-(--color-pink) flex items-center justify-center p-[5px] rounded-[50%]">
								<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-check"></i>
							</span>
							<span>A range of high-quality beauty services;</span>
						</li>
						<li className="flex gap-[10px]">
							<span className="w-[26px] h-[26px] bg-(--color-pink) flex items-center justify-center p-[5px] rounded-[50%]">
								<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-check"></i>
							</span>
							<span>Top-rated by our clients.</span>
						</li>
					</ul>
				</div>
				<button className="uppercase border border-white bg-white text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300 px-[30px]">
					Learn more
				</button>
			</div>
			<div className="lg:hidden">
				<Image src="/images/52-home-5-tablet.webp" width={2000} height={1000} alt="" />
			</div>
		</div>
	);
};
