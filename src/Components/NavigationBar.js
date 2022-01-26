import { BiSearch } from "react-icons/bi";
import { MdOutlinePeopleOutline, MdPerson } from "react-icons/md";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";

function NavigationBar() {
	return (
		<div className="bg-violet text-white flex items-center justify-between py-2 px-2">
			<div>
				<div>Logo</div>
			</div>
			<div className="flex items-center gap-4 justify-end">
				<div className="cursor-pointer">
					<BiSearch color="#fff" size={"1.3rem"} />
				</div>

				<div className="cursor-pointer">
					<MdOutlinePeopleOutline color="#fff" size={"1.3rem"} />
				</div>

				<div className="cursor-pointer">
					<IoMdNotificationsOutline color="#fff" size={"1.3rem"} />
				</div>

				<div className="cursor-pointer">
					<IoMdSettings color="#fff" size={"1.3rem"} />
				</div>

				<div className="flex items-center gap-2 cursor-pointer">
					<div className="bg-gray-400 p-1 rounded-full">
						<MdPerson size={"1.2rem"} />
					</div>
					<div>demo@mail.com</div>
				</div>
			</div>
		</div>
	);
}

export default NavigationBar;
