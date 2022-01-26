import { GrAnalytics } from "react-icons/gr";
import { MdOutlinePeopleOutline, MdOutlineReceipt } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiShareAlt } from "react-icons/bi";

const leftPanel = [
	{
		name: "Reports",
		data: [
			{
				name: "Dashboard",
				icon: <GrAnalytics />,
			},
			{
				name: "Dashboard Alternative",
				icon: <SiSimpleanalytics />,
			},
		],
	},
	{
		name: "Management",
		data: [
			{
				name: "Customers",
				icon: <MdOutlinePeopleOutline />,
			},
			{
				name: "Products",
				icon: <FiShoppingCart />,
			},
			{
				name: "Orders",
				icon: <AiOutlineFolder />,
			},
			{
				name: "Invoices",
				icon: <MdOutlineReceipt />,
			},
		],
	},
	{
		name: "Application",
		data: [
			{
				name: "Project Platform",
				icon: <RiLuggageDepositLine />,
			},
			{
				name: "Social Platform",
				icon: <BiShareAlt />,
			},
		],
	},
];

export default leftPanel;
