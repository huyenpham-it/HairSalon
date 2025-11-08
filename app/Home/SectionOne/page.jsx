import { Header } from '@/components/page';
import Image from 'next/image';
import Link from 'next/link';

export const SectionOne = () => {
	return (
		<div className="section-one relative">
			<div>
				<div className="md:hidden relative">
					<Image
						src="/images/52-home-1-mobile-1.webp"
						width={1000}
						height={2000}
						className="min-h-[700px]"
						alt=""
					/>

					<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3]"></div>
				</div>
				<div className="hidden md:flex relative">
					<Image
						className="lg:!w-1/2 aspect-[8/9]"
						src="/images/52-home-1-tablet-1.webp"
						loading="eager"
						width={1000}
						height={2000}
						alt=""
					/>
					<Image
						className="!w-1/2 hidden lg:block aspect-[8/9]"
						src="/images/52-home-2.webp"
						width={1000}
						height={2000}
						alt=""
					/>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3]"></div>
				</div>
				<h1 className="w-[90%] max-w-[400px] md:max-w-[780px] lg:max-w-[800px] absolute bottom-[200px] left-[50%] translate-x-[-50%] text-white text-center leading-[60px]">
					<span>Beautiful you,</span>
					<span className="betterlett"> from </span>
					<span>head to toe</span>
				</h1>
				<div className="w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] absolute bottom-[50px] left-[50%] translate-x-[-50%] rounded-full flex items-center justify-center hover:scale-90 transform transition duration-300">
					<Link href="#" className="services-button" role="button">
						<span className="text-[12px] font-medium tracking-[3px]">our services menu</span>
					</Link>
				</div>
			</div>
			<Header />
		</div>
	);
};
