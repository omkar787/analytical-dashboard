import React from "react";
import { MdPerson } from "react-icons/md";
import leftPanel from "../config/leftpanel";
import Options from "./Options";

export default function LeftPanel() {
	return (
		<div className="w-fit  border-r border-gray-300 h-full bg-white shadow-sm shadow-gray-300 overflow-y-auto">
			{/* Profile div */}
			<div className="flex items-center flex-col pt-3 text-sm px-5 pb-5 border-b border-gray-300">
				{/* Profile picture */}
				<div className="flex">
					<div className="bg-gray-400 p-1 rounded-full">
						<MdPerson size={"2rem"} color="#fff" />
					</div>
				</div>
				<div className="font-semibold">demo@mail.com</div>
				<div>
					Your tier:{" "}
					<span className="text-violet text-xs">Premium</span>
				</div>
			</div>

			{/* Options div */}
			<div className="pr-5">
				{leftPanel.map((ele) => {
					return <Options label={ele.name} data={ele.data} />;
				})}
			</div>
		</div>
	);
}
