import Image from 'next/image';
import Link from 'next/link';

export const SectionEleven = () => {
	return (
		<div className="section-eleven flex flex-col lg:flex-row items-center justify-between gap-[40px] py-[70px] px-[30px] md:py-[120px]">
			<div className="w-full flex flex-col gap-[40px] md:gap-[80px] lg:max-w-[855px] m-auto">
				<div className="flex flex-col gap-[20px] text-center">
					<h6 className="text-[11px] uppercase font-medium tracking-[2px]">read our blog</h6>
					<h2>Inspiring stories</h2>
				</div>
				<div className="flex flex-col md:flex-row gap-[40px] md:gap-[30px] lg:gap-[120px]">
					<div className="w-full md:w-1/2">
						<div className="overflow-hidden">
							<Image
								className="hover:scale-[1.05] duration-300"
								src="/images/52-blog-1.webp"
								width={800}
								height={1000}
								alt=""
							/>
						</div>
						<div className="flex flex-col items-center gap-[20px] text-center mt-[20px]">
							<h6 className="text-[11px] uppercase font-medium tracking-[2px] hover:text-(--color-pink)">
								Tips & Tricks
							</h6>
							<h4 className="hover:text-(--color-pink)">
								How to Prepare for Hair Coloring at Hair Salons
							</h4>
							<Link href="#">
								<button className="w-[150px] uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
									Read more
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full md:w-1/2 md:mt-[120px]">
						<div className="overflow-hidden">
							<Image
								className="hover:scale-[1.05] duration-300"
								src="/images/52-blog-2.webp"
								width={800}
								height={1000}
								alt=""
							/>
						</div>
						<div className="flex flex-col items-center gap-[20px] text-center mt-[20px]">
							<h6 className="text-[11px] uppercase font-medium tracking-[2px] hover:text-(--color-pink)">
								News
							</h6>
							<h4 className="hover:text-(--color-pink)">
								6 Benefits of Visiting a Beauty Salon for Nail Services
							</h4>
							<Link href="#">
								<button className="w-[150px] uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
									Read more
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
