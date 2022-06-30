import { Disclosure } from "@headlessui/react";
import { ReactNode } from "react";
import { TbChevronUp } from "react-icons/tb";

interface DropDownProps {
	title: string;
	children: ReactNode;
}

export const DropDown = ({ title, children }: DropDownProps) => {
	return (
		<Disclosure>
			{({ open }) => (
				<div className="flex flex-col gap-1">
					<Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-blue-700 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-100">
						<span className="font-semibold text-md">{title}</span>
						<TbChevronUp
							className={`${
								open ? "rotate-180 transform" : ""
							} h-5 w-5 text-blue-700`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className="flex justify-center items-center gap-4 bg-white px-4 pt-4 pb-2 text-sm text-gray-500">
						{children}
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
};
