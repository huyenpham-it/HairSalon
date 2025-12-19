import { Footer, LazyShow, ScrollToTopButton } from '@/components/index';
import '@/public/fonts/icon/icon.css';
import '@/styles/home.scss';
import '@/styles/page.scss';
import { Figtree } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './globals.css';
import { DialogProvider } from './providers/DialogProvider';

const figtree = Figtree({
	variable: '--font-figtree',
	subsets: ['latin']
});

export const metadata = {
	title: 'Hair Salon',
	description: 'Hair Salon'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
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
