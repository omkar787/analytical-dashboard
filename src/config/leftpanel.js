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
				data: ["List Customers", "View Customers", "Edit Customers"],
				icon: <MdOutlinePeopleOutline />,
			},
			{
				name: "Products",
				data: ["temp1", "temp2"],
				icon: <FiShoppingCart />,
			},
			{
				name: "Orders",
				data: ["temp1", "temp2"],
				icon: <AiOutlineFolder />,
			},
			{
				name: "Invoices",
				data: ["temp1", "temp2"],
				icon: <MdOutlineReceipt />,
			},
		],
	},
	{
		name: "Application",
		data: [
			{
				name: "Project Platform",
				data: ["temp1", "temp2"],
				icon: <RiLuggageDepositLine />,
			},
			{
				name: "Social Platform",
				data: ["temp1", "temp2"],
				icon: <BiShareAlt />,
			},
		],
	},
];

export default leftPanel;
