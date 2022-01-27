import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { IoMdFolderOpen } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { Bar, Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
export default function RightPanel() {
	return (
		<div className="px-3 pt-5 w-full flex flex-col gap-5">
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
	const data = {
		// Name of the variables on x-axies for each bar
		labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				// Label for bars
				label: "as",
				// Data or value of your each variable
				data: [
					100, 150, 120, 300, 310, 320, 150, 200, 210, 180, 170, 160,
				],
				// Color of each bar
				backgroundColor: "#5750ee",
				// Border color of each bar
				borderColor: "#5750ee",
				borderWidth: 0.5,
				borderRadius: 9999,
			},
		],
	};
	return (
		<div className="flex gap-5">
			{/* Active users Chart */}
			<div className="bg-white pt-3 w-full border shadow-md rounded-md border-gray-200 max-w-[300px]">
				<div className="flex justify-between px-6">
					<div>
						<div className="text-lg font-bold">Active Users</div>
						<div className="text-sm font-light">
							Page views per second
						</div>
					</div>
					<div className="font-bold text-lg">109</div>
				</div>

				{/* Chart will go here */}
				<div
					className="px-6"
					style={{ maxHeight: "250px", maxWidth: "300px" }}
				>
					<Bar
						options={{
							responsive: true,
							maintainAspectRatio: false,
							plugins: {
								legend: {
									position: "top",
									display: "none",
								},
								title: {
									display: false,
								},
							},
							scales: {
								yAxis: [
									{
										ticks: {
											// The y-axis value will start from zero
											beginAtZero: true,
										},
									},
								],
							},
						}}
						data={data}
						height={250}
					/>
				</div>

				{/* Information about the graph  */}
				<div className="flex flex-col">
					<div className="flex px-3 py-3 justify-between border-b border-gray-300">
						<div className="text-gray-400">/app/projects</div>
						<div>24</div>
					</div>
					<div className="flex px-3 py-3 justify-between border-b border-gray-300">
						<div className="text-gray-400">/app/chats</div>
						<div>21</div>
					</div>
					<div className="flex px-3 py-3 justify-between border-b border-gray-300">
						<div className="text-gray-400">/cart</div>
						<div>15</div>
					</div>
					<div className="flex px-3 py-3 justify-between border-b border-gray-300">
						<div className="text-gray-400">/cart/checkout</div>
						<div>8</div>
					</div>
				</div>

				{/* See all */}
				<div className="flex items-center justify-end  gap-2 text-xs py-3 px-6">
					SEE ALL <FaAngleRight />
				</div>
			</div>
			{/* Performance Over time */}
			<div className="bg-white  w-full border shadow-md shadow-gray-400 rounded-md border-gray-200 ">
				<div className="flex p-5 justify-between shadow-sm">
					<div className="text-xl font-semibold">
						Performance Over Time
					</div>
					<div>
						<FiMoreVertical size={"1.2rem"} />
					</div>
				</div>

				{/* Line graph will go here */}
				<div></div>
			</div>
		</div>
	);
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
		</div>
	);
}
