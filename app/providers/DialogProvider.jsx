'use client';

import ServiceSelect from '@/components/ServiceSelect/page';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import { createContext, useContext, useState } from 'react';

const DialogContext = createContext();

export function DialogProvider({ children }) {
    const [open, setOpen] = useState(false);
	const [date, setDate] = useState(null);
	const [openPopover, setOpenPopover] = useState(false);

	const openDialog = () => {
		setOpen(true);
	};

	const closeDialog = () => setOpen(false);

	return (
		<DialogContext.Provider value={{ openDialog, closeDialog }}>
			{children}
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent
					aria-describedby={undefined}
					className="!max-w-[90vw] lg:!max-w-[80vw] p-0 gap-0 rounded-none"
				>
					<DialogHeader>
						<DialogTitle></DialogTitle>
					</DialogHeader>
					<div className="w-full flex flex-col md:flex-row">
						<div className="hidden lg:block h-full w-1/3">
							<Image src="/images/appointment.webp" width={1000} height={2000} alt="appointment" />
						</div>
						<form autoComplete="off" className="form w-full lg:w-2/3 px-[20px] py-[30px] md:p-[40px]">
							<h3 className="text-[18px] md:text-[20px] lg:text-[22px] text-left font-medium tracking-[2px] mb-4">
								Book a appointment
							</h3>
							<div className="w-full flex flex-col gap-[20px] [&>*]:!text-(--color-dark-pink) [&>*]:!text-[14px] border-(--color-dark-pink)">
								<div className="w-full grid grid-cols-2 gap-[20px]">
									<input type="text" name="name" placeholder="Your Name" />
									<input type="text" name="phone" placeholder="Your Phone" />
								</div>
								<div className="w-full border-white">
									<ServiceSelect
										customClass="border-(--color-dark-pink)"
										customHighlightedClass="data-[highlighted]:bg-(--color-green)"
									/>
								</div>
								<div className="w-full flex flex-col md:flex-row gap-4">
									<Popover open={openPopover} onOpenChange={setOpenPopover}>
										<PopoverTrigger asChild>
											<div className="w-full relative">
												<input
													type="text"
													readOnly
													name="date"
													placeholder="Select Date"
													value={date ? format(date, 'dd/MM/yyyy') : ''}
													onClick={() => setOpenPopover(true)}
													className={`${
														openPopover && '!border-(--color-pink)'
													} w-full cursor-pointer`}
												/>
												<span className="absolute right-[13px] top-1/2 -translate-y-1/2 [&>svg]:w-[16px]">
													<ChevronDownIcon />
												</span>
											</div>
										</PopoverTrigger>

										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={date}
												onSelect={(selectedDate) => {
													setDate(selectedDate);
													setOpenPopover(false);
												}}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<Select>
										<SelectTrigger className="w-full [&>span]:text-[14px] [&>span]:tracking-normal border-b border-(--color-dark-pink) pl-0">
											<SelectValue placeholder="Select Hour" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{[
													'08',
													'09',
													'10',
													'11',
													'12',
													'13',
													'14',
													'15',
													'16',
													'17',
													'18',
													'19'
												].map((hour) => (
													<SelectItem
														key={hour}
														value={hour}
														className="text-(--color-dark-pink) data-[highlighted]:bg-(--color-green) data-[highlighted]:text-white"
													>
														{hour}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<Select>
										<SelectTrigger className="w-full [&>span]:text-[14px] [&>span]:tracking-normal border-b border-(--color-dark-pink) pl-0">
											<SelectValue placeholder="Select Minute" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{['00', '10', '20', '30', '40', '50'].map((minute) => (
													<SelectItem
														key={minute}
														value={minute}
														className="text-(--color-dark-pink) data-[highlighted]:bg-(--color-green) data-[highlighted]:text-white"
													>
														{minute}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="w-full">
									<textarea type="text" name="comment" placeholder="Your Comment"></textarea>
								</div>
							</div>
							<button className="w-full md:w-fit uppercase px-[20px] mt-[20px] border border-(--color-green) text-(--color-green) hover:bg-(--color-green) hover:text-white duration-300">
								Make an Appointment
							</button>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</DialogContext.Provider>
	);
}

export const useDialog = () => useContext(DialogContext);
