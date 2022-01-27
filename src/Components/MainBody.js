import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function MainBody() {
	return (
		<div className="flex justify-start h-full ">
			<LeftPanel />
			<RightPanel />
		</div>
	);
}
