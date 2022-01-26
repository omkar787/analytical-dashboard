import React from "react";

export default function Options({ label, data }) {
	return (
		<div>
			<div className="pl-2 my-3 text-lg font-semibold">{label}</div>

			<div className="pl-5 ">
				{data.map((dt) => {
					return (
						<div className="flex items-center gap-2 cursor-pointer hover:text-violet font-medium">
							<div>{dt.icon}</div>
							<div className="my-3">{dt.name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
