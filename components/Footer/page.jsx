import Image from 'next/image';
import Link from 'next/link';
import ServiceSelect from '../ServiceSelect/page';

export default function Footer() {
	return (
		<>
			<div id="instagram" className="p-[15px]">
				<div className="w-full">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[10px] md:gap-[15px]">
						<div>
							<Image src="/images/52-instagram-1.webp" width={1000} height={2000} alt="instagram" />
						</div>
						<div>
							<Image src="/images/52-instagram-2.webp" width={1000} height={2000} alt="instagram" />
						</div>
						<div>
							<Image src="/images/52-instagram-3.webp" width={1000} height={2000} alt="instagram" />
						</div>
						<div>
							<Image src="/images/52-instagram-4.webp" width={1000} height={2000} alt="instagram" />
						</div>
						<div>
							<Image src="/images/52-instagram-5.webp" width={1000} height={2000} alt="instagram" />
						</div>
						<div>
							<Image src="/images/52-instagram-6.webp" width={1000} height={2000} alt="instagram" />
						</div>
					</div>
				</div>
			</div>
			<div className="footer" role="contentinfo">
				<div className="footer__right-container">
					<h3 className="!text-white">Book an appointment</h3>
					<form className="flex flex-col gap-[20px]">
						<div className="w-full grid grid-cols-2 gap-[20px]">
							<input
								className="!border-(--color-gray) focus:!border-white"
								type="text"
								name="name"
								placeholder="Your Name"
							/>
							<input
								className="!border-(--color-gray) focus:!border-white"
								type="text"
								name="phone"
								placeholder="Your Phone"
							/>
						</div>
						<div className="w-full border-white">
							<ServiceSelect />
						</div>
						<div className="w-full">
							<textarea
								className="!border-(--color-gray) focus:!border-white"
								type="text"
								name="comment"
								placeholder="Your Comment"
							></textarea>
						</div>
						<button className="w-full md:w-[250px] bg-white border border-white text-black uppercase hover:bg-(--color-pink) hover:text-white">
							Make an Appointment
						</button>
					</form>
				</div>
				<div className="footer__left-container">
					<div className="footer__left-content">
						<div className="m-auto md:m-0 md:mr-auto">
							<Link href="/">
								<Image
									src="/images/logo-footer.svg"
									width={1000}
									height={2000}
									alt="logo"
									className="!w-[150px] !h-auto"
								/>
							</Link>
						</div>
						<div className="footer__left-info">
							<h6>Pages</h6>
							<p>
								<Link href="#" className="hover:text-(--color-pink) duration-300">
									About Us
								</Link>
							</p>
							<p>
								<Link href="#" className="hover:text-(--color-pink) duration-300">
									Our Team
								</Link>
							</p>
							<p>
								<Link href="#" className="hover:text-(--color-pink) duration-300">
									Our Services
								</Link>
							</p>
							<p>
								<Link href="#" className="hover:text-(--color-pink) duration-300">
									Blog
								</Link>
							</p>
							<p>
								<Link href="#" className="hover:text-(--color-pink) duration-300">
									Contacts
								</Link>
							</p>
							<p>
								<Link href="#" className="hover:text-(--color-pink) duration-300">
									Image Credits
								</Link>
							</p>
						</div>
						<div className="footer__left-contact">
							<h6>Contacts</h6>
							<p className="mb-[20px]">
								511 SW 10th Ave 1206, Portland,
								<br />
								OR, United States
							</p>
							<p className="mb-[20px]">
								Mon – Fri: 8:30 am – 5:00 pm,
								<br />
								Sat – Sun: Closed
							</p>
							<p>
								<Link
									href="tel:1-800-123-1234"
									className="flex items-center justify-center md:justify-start gap-[4px] text-(--color-green) hover:text-(--color-pink) duration-300"
								>
									<span>
										<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-phone"></i>
									</span>
									1-800-123-1234
								</Link>
							</p>
							<p>
								<Link
									href="mailto:example@la-diva.com"
									className="text-(--color-green) hover:text-(--color-pink) duration-300"
								>
									example@la-diva.com
								</Link>
							</p>
						</div>
					</div>
					<div className="footer__left-copyright">
						<h4>Stay Updated</h4>
						<div className="w-full flex flex-col md:flex-row items-center text-center gap-[20px]">
							<input type="text" className="w-full" placeholder="Your email address...*" />
							<button className="w-[150px] uppercase border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Subscribe
							</button>
						</div>
						<div className="w-full flex flex-col md:flex-row items-center md:justify-between text-center gap-[20px]">
							<p>
								This is a sample website. cmsmasters <br className="md:hidden" />
								©2025 - All Rights Reserved.
							</p>
							<div className="socials">
								<span>
									<Link href="#">
										<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
											<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
										</svg>
									</Link>
								</span>
								<span>
									<Link href="#">
										<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
											<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
										</svg>
									</Link>
								</span>
								<span>
									<Link href="#">
										<svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
											<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
										</svg>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
