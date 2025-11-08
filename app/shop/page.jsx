'use client';

import { HeaderButtonPink } from '@/components/page';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

export default function Shop() {
	return (
		<div className="shop-page">
			<div className="relative h-[500px] bg-(--color-light-beige)">
				<h1 className="w-full h-full flex items-center justify-center">Shop</h1>
				<HeaderButtonPink />
			</div>
			<div className="px-[60px] py-[80px] flex flex-col gap-4">
				<div className="flex items-center justify-between gap-4">
					<div>Showing all 6 results</div>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Default sorting" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="1">Default sorting</SelectItem>
								<SelectItem value="2">Sort by popularity</SelectItem>
								<SelectItem value="3">Sort by average rating</SelectItem>
								<SelectItem value="4">Sort by latest</SelectItem>
								<SelectItem value="5">Sort by price: low to high</SelectItem>
								<SelectItem value="6">Sort by price: high to low</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[15px]">
					<div className="shop-item">
						<div className="relative overflow-hidden">
							<Image
								className="border border-[DED6CB]"
								src="/images/shop/52-shop-1-1.webp"
								width={1000}
								height={2000}
								alt="shop"
							/>
							<div className="absolute top-3 left-3 text-white text-[11px] uppercase font-medium tracking-[2px] bg-(--color-green) py-[5px] px-[10px] rounded-[20px]">
								Sale
							</div>
							<button className="absolute left-3 bottom-3 right-3 uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Add to card
							</button>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mt-2">
							<div>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
							</div>
							<div>
								<a href="https://la-diva.cmsmasters.net/main/product/gel-effect-nail-polish-680/">
									Gel Effect Nail Polish 680
								</a>
							</div>
							<div>
								<span className="text-[12px] text-(--color-pink) line-through mr-1">$14.99</span>$10.99
							</div>
						</div>
					</div>
					<div className="shop-item">
						<div className="relative overflow-hidden">
							<Image
								className="border border-[DED6CB]"
								src="/images/shop/52-shop-2-1.webp"
								width={1000}
								height={2000}
								alt="shop"
							/>
							<div className="absolute top-3 left-3 text-white text-[11px] uppercase font-medium tracking-[2px] bg-(--color-green) py-[5px] px-[10px] rounded-[20px]">
								Sale
							</div>
							<button className="absolute left-3 bottom-3 right-3 uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Add to card
							</button>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mt-2">
							<div>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
							</div>
							<div>
								<a href="https://la-diva.cmsmasters.net/main/product/gel-effect-nail-polish-680/">
									Gel Effect Nail Polish 680
								</a>
							</div>
							<div>
								<span className="text-[12px] text-(--color-pink) line-through mr-1">$14.99</span>$10.99
							</div>
						</div>
					</div>
					<div className="shop-item">
						<div className="relative overflow-hidden">
							<Image
								className="border border-[DED6CB]"
								src="/images/shop/52-shop-3-1.webp"
								width={1000}
								height={2000}
								alt="shop"
							/>
							<div className="absolute top-3 left-3 text-white text-[11px] uppercase font-medium tracking-[2px] bg-(--color-pink) py-[5px] px-[10px] rounded-[20px]">
								Out of stock
							</div>
							<button className="absolute left-3 right-3 uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Read more
							</button>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mt-2">
							<div>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
							</div>
							<div>
								<a href="https://la-diva.cmsmasters.net/main/product/gel-effect-nail-polish-680/">
									Gel Effect Nail Polish 680
								</a>
							</div>
							<div>
								<span className="text-[12px] text-(--color-pink) line-through mr-1">$14.99</span>$10.99
							</div>
						</div>
					</div>
					<div className="shop-item">
						<div className="relative overflow-hidden">
							<Image
								className="border border-[DED6CB]"
								src="/images/shop/52-shop-4-1.webp"
								width={1000}
								height={2000}
								alt="shop"
							/>
							<div className="absolute top-3 left-3 text-white text-[11px] uppercase font-medium tracking-[2px] bg-(--color-green) py-[5px] px-[10px] rounded-[20px]">
								Sale
							</div>
							<button className="absolute left-3 bottom-3 right-3 uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Add to card
							</button>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mt-2">
							<div>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
							</div>
							<div>
								<a href="https://la-diva.cmsmasters.net/main/product/gel-effect-nail-polish-680/">
									Gel Effect Nail Polish 680
								</a>
							</div>
							<div>
								<span className="text-[12px] text-(--color-pink) line-through mr-1">$14.99</span>$10.99
							</div>
						</div>
					</div>
					<div className="shop-item">
						<div className="relative overflow-hidden">
							<Image
								className="border border-[DED6CB]"
								src="/images/shop/52-shop-5-1.webp"
								width={1000}
								height={2000}
								alt="shop"
							/>
							<div className="absolute top-3 left-3 text-white text-[11px] uppercase font-medium tracking-[2px] bg-(--color-green) py-[5px] px-[10px] rounded-[20px]">
								Sale
							</div>
							<button className="absolute left-3 bottom-3 right-3 uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Add to card
							</button>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mt-2">
							<div>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
							</div>
							<div>
								<a href="https://la-diva.cmsmasters.net/main/product/gel-effect-nail-polish-680/">
									Gel Effect Nail Polish 680
								</a>
							</div>
							<div>
								<span className="text-[12px] text-(--color-pink) line-through mr-1">$14.99</span>$10.99
							</div>
						</div>
					</div>
					<div className="shop-item">
						<div className="relative overflow-hidden">
							<Image
								className="border border-[DED6CB]"
								src="/images/shop/52-shop-6-1.webp"
								width={1000}
								height={2000}
								alt="shop"
							/>
							<div className="absolute top-3 left-3 text-white text-[11px] uppercase font-medium tracking-[2px] bg-(--color-green) py-[5px] px-[10px] rounded-[20px]">
								Sale
							</div>
							<button className="absolute left-3 bottom-3 right-3 uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Add to card
							</button>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mt-2">
							<div>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-pink)"
								></i>
							</div>
							<div>
								<a href="https://la-diva.cmsmasters.net/main/product/gel-effect-nail-polish-680/">
									Gel Effect Nail Polish 680
								</a>
							</div>
							<div>
								<span className="text-[12px] text-(--color-pink) line-through mr-1">$14.99</span>$10.99
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
