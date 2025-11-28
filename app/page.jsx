import { LazyShow } from '@/components/index';
import { SectionEight } from './Home/SectionEight/SectionEight';
import { SectionEleven } from './Home/SectionEleven/SectionEleven';
import { SectionFive } from './Home/SectionFive/SectionFive';
import { SectionFour } from './Home/SectionFour/SectionFour';
import { SectionNine } from './Home/SectionNine/SectionNine';
import { SectionOne } from './Home/SectionOne/SectionOne';
import { SectionSeven } from './Home/SectionSeven/SectionSeven';
import { SectionSix } from './Home/SectionSix/SectionSix';
import { SectionTen } from './Home/SectionTen/SectionTen';
import { SectionThree } from './Home/SectionThree/SectionThree';

export default function Home() {
	return (
		<div>
			<LazyShow>
				<SectionOne />
			</LazyShow>

			<LazyShow>
				<SectionThree />
			</LazyShow>

			<LazyShow>
				<SectionFour />
			</LazyShow>

			<LazyShow>
				<SectionFive />
			</LazyShow>

			<LazyShow>
				<SectionSix />
			</LazyShow>

			<LazyShow>
				<SectionSeven />
			</LazyShow>

			<LazyShow>
				<SectionEight />
			</LazyShow>

			<LazyShow>
				<SectionNine />
			</LazyShow>

			<LazyShow>
				<SectionTen />
			</LazyShow>

			<LazyShow>
				<SectionEleven />
			</LazyShow>
		</div>
	);
}
