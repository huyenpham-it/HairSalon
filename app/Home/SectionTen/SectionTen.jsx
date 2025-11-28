import Image from 'next/image';
import Link from 'next/link';

export const SectionTen = () => {
	return (
		<div className="section-ten flex flex-col lg:flex-row items-center justify-between gap-[20px] px-[20px]">
			<div className="relative w-full lg:w-1/2 flex flex-col gap-[30px]">
				<Image className="hidden lg:block" src="/images/52-home-7.webp" width={1000} height={1000} alt="" />
				<Image
					className="lg:hidden !min-h-[400px]"
					src="/images/52-home-7-tablet.webp"
					width={1000}
					height={1000}
					alt=""
				/>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3]"></div>
				<div className="absolute left-[30px] bottom-[40px] flex flex-col gap-[20px]">
					<h3 className="text-white">Salon locations</h3>
					<Link href="#">
						<button className="w-full md:w-[250px] bg-white text-black uppercase hover:bg-(--color-pink) hover:text-white duration-300">
							Plan your visit
						</button>
					</Link>
				</div>
			</div>
			<div className="relative w-full lg:w-1/2 flex flex-col gap-[30px]">
				<Image className="hidden lg:block" src="/images/52-home-8.webp" width={1000} height={1000} alt="" />
				<Image
					className="lg:hidden !min-h-[400px]"
					src="/images/52-home-8-tablet.webp"
					width={1000}
					height={1000}
					alt=""
				/>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3]"></div>
				<div className="absolute left-[30px] bottom-[40px] flex flex-col gap-[20px]">
					<h3 className="text-white">Gift cards</h3>
					<Link href="#">
						<button className="w-full md:w-[250px] bg-white text-black uppercase hover:bg-(--color-pink) hover:text-white duration-300">
							Shop now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
