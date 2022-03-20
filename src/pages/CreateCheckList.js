import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import { AppContext, getResetTime } from "../utils";

function CreateCheckList()
{
	const { setCharCheckList, setCheckList, charCheckList } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);

	const handleDelete = (index) =>
	{
		const newItems = [...charCheckList];
		newItems.splice(index, 1);
		setCharCheckList(newItems);
	};

	return (
		<section className="container mx-auto text-white px-4 mt-12">
			<div className="flex justify-between items-center">
				<h1>Checklist</h1>
				<button className="px-6 py-2 bg-green-500" onClick={() => setIsOpen(!isOpen)}>Add New</button>
			</div>
			<Popup isOpen={isOpen} setItems={setCheckList} setIsOpen={setIsOpen} />
			<div className="grid gap-y-2 mt-4">
				{charCheckList.map((item, index) =>
				(<div className="w-full p-4 bg-secondary flex justify-between items-center" key={item.info.id}>
					<div>
						<h1 className=" font-bold text-lg">{item.info.title}</h1>
						<div className="mt-2 flex gap-x-2">
							<p className="text-xs">{item.info.region}</p>
							<p className="text-xs">Daily Reset: {getResetTime(item.info.timeFormat)} - {item.info.timeFormat}</p>
						</div>
					</div>
					<div className="space-x-4 ">
						<Link type="button" className="text-blue-500 text-sm font-medium" to={`/checklist/${item.info.id}`} state={{index:index}}>View</Link>
						<button type="button" className="text-red-500 text-sm font-medium" onClick={() => handleDelete(index)}>Delete</button>
					</div>
				</div>)
				)}
			</div>
		</section>
	)
}

export default CreateCheckList;