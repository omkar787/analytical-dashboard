import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { IoMdFolderOpen } from "react-icons/io";

export default function RightPanel() {
	return (
		<div className="px-3 pt-5 w-full">
			{/* Top headings */}
			<TopPart />

			{/* Charts */}
			<ChartsPart />

			{/* Bottom blocks */}
			<div></div>
		</div>
	);
}


function ChartsPart() {
	return (
		<div className="flex">
			{/* Active users Chart */}
			<div className="bg-white p-6 w-full border shadow-md rounded-md border-gray-200 ">

				<div className="flex justify-between">
					<div>
						<div>
							Active Users

						</div>
						<div>
							Page views per second
						</div>
					</div>
					<div>
						109
					</div>
				</div>

				{/* Chart will go here */}
				<div></div>


				<div></div>
				<div></div>
			</div>
			{/* Performance Over time */}
			<div className="bg-white p-6 w-full border shadow-md rounded-md border-gray-200 ">

			</div>
		</div>
	)
}

function TopPart() {
	return (
		<div>
			<div className="flex justify-between">
				{/* First part of heading */}
				<div>
					<div className="flex items-center gap-2">
						<div className="font-light">Dashboard</div>
						<div>
							<FaAngleRight />
						</div>
						<div className="font-semibold">Reports</div>
					</div>
					<div className="text-2xl font-bold">
						Here's what's happening
					</div>
				</div>

				{/* second part of heading (days) */}
				<div className="flex items-center gap-2">
					<div>
						<AiOutlineCalendar />
					</div>
					<div>Last 30 Days</div>
				</div>
			</div>

			{/* Blocks */}
			<div className="flex pt-2 gap-5 items-center justify-around justify-items-stretch justify-self-stretch">
				{/* First block */}
				<div className="bg-white  w-full p-6 border shadow-md rounded-md border-gray-200  flex justify-between items-center">
					{/* Summary Block */}
					<div>
						<div>Today's Money</div>
						<div className="flex items-center gap-3">
							<div className="text-xl font-bold">$24,000</div>
							<div className="bg-[#dff2e0] text-green-500 text-xs">
								+4%
							</div>
						</div>
					</div>

					{/* Dollar sign */}
					<div className="p-3 bg-[#5750ee] rounded-full">
						<FaDollarSign color="#fff" />
					</div>
				</div>

				{/* Second Block */}
				<div className="bg-white p-6 w-full border shadow-md rounded-md border-gray-200 flex justify-between items-center">
					<div>
						<div>New Project</div>
						<div className="flex  items-center gap-3">
							<div className="text-xl font-bold">12</div>
							<div className="bg-[#fceeec] text-red-500 text-xs">
								-10%
							</div>
						</div>
					</div>

					{/* Folder icon */}
					<div className="p-3 bg-[#5750ee] rounded-full">
						<IoMdFolderOpen color="#fff" />
					</div>
				</div>

				{/* Third Block */}
				<div className="bg-white p-6 w-full border shadow-md rounded-md border-gray-200 ">
					<div>System health</div>
					<div>
						<div className="text-xl font-bold">97%</div>
						{/* Progress bar */}
						<div></div>
					</div>
				</div>

				{/* Fourth Block */}
				<div className="bg-[#5750ee] text-white p-6 w-full border shadow-md rounded-md border-gray-200 flex justify-between items-center ">
					<div>
						<div>ROI PER CUSTOMER</div>
						<div className="text-xl font-bold">$25.50</div>
					</div>

					{/* Dollar icon */}
					<div className="p-3 bg-white rounded-full">
						<FaDollarSign color="#000" />
					</div>
				</div>
			</div>
		</div>);
}
