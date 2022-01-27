import { React, useState } from "react";
import { FaAngleDown } from 'react-icons/fa'


export default function Options({ label, data }) {

	return (
		<div>
			<div className="pl-2 my-3 text-lg font-semibold">{label}</div>

			<div className="pl-5 ">
				{data.map((dt) => {
					return (
						<div>
							<Top dt={dt} />
						</div>
					);
				})}
			</div>
		</div>
	);
}


function Top({ dt }) {
	const [show, setShow] = useState(false);
	const showCss = {
		transform: "rotate(180deg)"
	}
	return (
		<div>

			<div className="flex items-center justify-between pr-3">
				<div className="flex items-center gap-2 cursor-pointer hover:text-violet font-medium">
					<div>{dt.icon}</div>
					<div className="my-3">{dt.name}</div>

				</div>
				{
					dt.data ? <FaAngleDown style={show ? showCss : ""} onClick={() => setShow(!show)} /> : null
				}
			</div>
			<div style={show ? { display: "block" } : { display: "none" }} className="pl-10 ">
				{
					dt.data ? (

						dt.data.map(ele => {
							return (
								<div className="py-2">
									{ele}
								</div>
							)
						})

					) : null
				}
			</div>

		</div>
	)
}