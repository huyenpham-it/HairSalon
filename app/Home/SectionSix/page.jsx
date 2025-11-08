import { HOME_FOUR_IMAGES } from '@/ultis/constants';
import Image from 'next/image';
import Link from 'next/link';

export const SectionSix = () => {
	return (
		<div className="section-six flex flex-col items-center justify-between gap-[40px] py-[80px] px-[20px] md:py-[120px] md:px-[30px]">
			<div className="w-full flex items-center justify-between gap-[40px]">
				<div className="flex flex-col gap-[20px]">
					<h6 className="text-[11px] uppercase font-medium tracking-[2px]">Meet our stylists</h6>
					<h2>
						<span className="betterlett">Creative&nbsp;</span>
						<span>
							artists unique <br className="hidden lg:block" />
							in their styling and <br className="hidden lg:block" />
							techniques
						</span>
					</h2>
				</div>
				<div className="hidden md:block w-[160px] h-[160px] flex-shrink-0 hover:scale-90 transform transition duration-300">
					<Link
						href={'#'}
						className="w-full h-full flex items-center justify-center uppercase text-center rounded-full border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300"
					>
						Meet the
						<br />
						team
					</Link>
				</div>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[30px]">
				{HOME_FOUR_IMAGES.map((image, index) => (
					<div key={index} className="w-full">
						<Link href={'#'}>
							<div className="overflow-hidden">
								<Image
									className="hover:scale-[1.05] duration-300"
									src={image.src}
									width={1000}
									height={2000}
									alt={`Image ${index}`}
								/>
							</div>
							<div className="w-full bg-(--color-light-beige) flex flex-col text-center p-[25px]">
								<p className="text-[18px] md:text-[20px] font-medium hover:text-(--color-pink) duration-300">
									{image.name}
								</p>
								<p className="text-(--color-dark-pink) text-[11px] uppercase font-semibold tracking-[2px]">
									{image.job}
								</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
