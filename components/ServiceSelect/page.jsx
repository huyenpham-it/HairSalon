'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SERVICE_SELECT } from '@/ultis/constants';
import { useState } from 'react';

export default function ServiceSelect({
	customClass = 'border-(--color-gray)',
	customHighlightedClass = 'data-[highlighted]:bg-(--color-pink)'
}) {
	const [selected, setSelected] = useState();

	return (
		<div className="relative w-full flex-1 [&>*]:!text-[14px] border-inherit">
			<Select>
				<SelectTrigger
					className={`w-full [&>span]:text-[14px] [&>span]:tracking-normal border-b pl-0 ${customClass} data-[state=open]:border-inherit`}
				>
					<SelectValue placeholder="Choose a service" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{SERVICE_SELECT.map((service) => (
							<SelectItem
								key={service.id}
								value={`${service.id}`}
								className={`text-(--color-pink) ${customHighlightedClass} data-[highlighted]:text-white`}
							>
								{service.service}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
