import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import { AppContext, getResetTime } from "../utils";

function CreateCheckList()
{
	const { checkList, setCheckList } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);

	const handleDelete = (index) =>
	{
		const newItems = [...checkList];
		newItems.splice(index, 1);
		setCheckList(newItems);
	};

	return (
		<section className="container mx-auto text-white px-4 mt-12">
			<div className="flex justify-between items-center">
				<h1>Checklist</h1>
				<button className="px-6 py-2 bg-green-500" onClick={() => setIsOpen(!isOpen)}>Add New</button>
			</div>
			<Popup isOpen={isOpen} setItems={setCheckList} setIsOpen={setIsOpen} />
			<div className="grid gap-y-2 mt-4">
				{checkList.map((item, index) =>
				(<div className="w-full p-4 bg-secondary flex justify-between items-center" key={item.id}>
					<div>
						<h1 className=" font-bold text-lg">{item.title}</h1>
						<div className="mt-2 flex gap-x-2">
							<p className="text-xs">{item.region}</p>
							<p className="text-xs">Daily Reset: {getResetTime(item.timeFormat)} - {item.timeFormat}</p>
						</div>
					</div>
					<div className="space-x-4 ">
						<Link type="button" className="text-blue-500 text-sm font-medium" to={`/checklist/${item.id}`}>View</Link>
						<button type="button" className="text-red-500 text-sm font-medium" onClick={() => handleDelete(index)}>Delete</button>
					</div>

				</div>)
				)}
			</div>
		</section>
	)
}

export default CreateCheckList;