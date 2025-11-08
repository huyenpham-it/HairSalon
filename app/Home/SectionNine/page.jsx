import Image from "next/image";

export const SectionNine = () => {
    return (
		<div className="section-nine flex flex-col items-center gap-[40px] text-center py-[80px] px-[20px] md:py-[120px] lg:px-[80px]">
			<h6 className="text-[11px] uppercase font-medium tracking-[2px]">As Featured In</h6>
			<div className="grid grid-cols-3 md:grid-cols-5 gap-[30px] lg:gap-[60px]">
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-1.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-2.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-3.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-4.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-5.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-6.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-7.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-8.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-9.webp"
					width={300}
					height={200}
					alt="partner"
				/>
				<Image
					className="!object-contain transform scale-80 hover:scale-70 transition duration-300"
					src="/images/52-partner-10.webp"
					width={300}
					height={200}
					alt="partner"
				/>
			</div>
		</div>
	);
};