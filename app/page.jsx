import { LazyShow } from '@/components/page';
import { SectionEight } from './Home/SectionEight/page';
import { SectionEleven } from './Home/SectionEleven/page';
import { SectionFive } from './Home/SectionFive/page';
import { SectionFour } from './Home/SectionFour/page';
import { SectionNine } from './Home/SectionNine/page';
import { SectionOne } from './Home/SectionOne/page';
import { SectionSeven } from './Home/SectionSeven/page';
import { SectionSix } from './Home/SectionSix/page';
import { SectionTen } from './Home/SectionTen/page';
import { SectionThree } from './Home/SectionThree/page';

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
