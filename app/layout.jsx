import Footer from '@/components/Footer/page';
import { LazyShow, ScrollToTopButton } from '@/components/page';
import '@/public/fonts/icon/icon.css';
import '@/styles/_vendor.scss';
import '@/styles/home.scss';
import '@/styles/page.scss';
import { Figtree } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './globals.css';
import { DialogProvider } from './providers/DialogProvider';

const figtree = Figtree({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

export const metadata = {
	title: 'Hair Salon',
	description: 'Hair Salon'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${figtree.variable} antialiased`}>
				<DialogProvider>
					{children}

					<LazyShow>
						<Footer />
					</LazyShow>

					<ScrollToTopButton />
				</DialogProvider>
			</body>
		</html>
	);
}
