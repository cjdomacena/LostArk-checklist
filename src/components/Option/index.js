import { useState } from "react";
import { abyssalRaids, ghostShips, guardianRaids } from "../../utils";

function Option({ items, type, setter, isOpen, setIsOpen })
{

	const [options, setOptions] = useState(null);
	const [currentOpt, setCurrentOpt] = useState("")
	const [currentList, setCurrentList] = useState({ abyss: abyssalRaids, ghost: ghostShips, guardian: guardianRaids })

	const handleSelect = (e) =>
	{
		let current = ""
		switch (e.target.value)
		{
			case "abyssalDungeon":
				setOptions(abyssalRaids);
				current = "abyss";
				break;
			case "guardianRaids":
				setOptions(guardianRaids);
				current = "guardian";
				break;
			case "ghostShip":
				setOptions(ghostShips);
				current = "ghost"
				break;
			default:
				setOptions(abyssalRaids);
				current = "abyss"
				break;
		}
		setCurrentOpt(current)
	}

	const handleChange = (e, index, option) =>
	{
		let temp = { ...currentList };
		temp[option][index].isDone = e.target.checked;
		setCurrentList([])
		setCurrentList(temp)
		console.log(currentList)
	}

	const handleSave = (e) =>
	{
		e.preventDefault();
		setter(currentList)
		setIsOpen(false);
	}

	return (isOpen &&
		<div className="w-full h-full mx-auto backdrop-blur-sm absolute left-0 top-0 grid place-items-center z-50">
			<div className="flex flex-col mt-4 xl:w-1/2 lg:w-1/2 w-4/4  h-auto p-4 bg-primary border border-secondary">
				<div className=" my-4 flex flex-col">
					<label htmlFor="column_name">Enter Column Title</label>
					<input type="text" id="column_name" className="bg-secondary text-white pl-1 h-8" placeholder="e.g. Daily, Weekly"/>
				</div>
				<div className=" my-4 flex flex-col">
					<label htmlFor="options">Select Type</label>
					<select id="options" className="bg-secondary h-8" onClick={handleSelect}>
						<option value="DEFAULT" disabled>Select Type</option>
						<option value="abyssalDungeon">Abyssal Dungeon</option>
						<option value="guardianRaids">Guardian Raid</option>
						<option value="ghostShip">Ghost Ship</option>
					</select>
				</div>
				{options && <fieldset id="option-checklist" multiple className="border-2 border-secondary text-sm p-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4" >
					<legend className="font-bold">Abyssal Raids</legend>
					{options.map((item, index) =>
					(<div key={item.name}>
						<input type="checkbox" value={item.name} name={type} id={item.name} onChange={(e) => { handleChange(e, index, currentOpt) }} key={item.name} checked={item.isDone} />
						<label className="capitalize ml-1" htmlFor={item.name}>{item.name}</label>
					</div>)
					)}
				</fieldset>}
				<div className="grid grid-cols-2 gap-x-4">
					<button type="submit" className="px-8 py-1 bg-green-500" onClick={handleSave}>Save</button>
					<button className="px-8 py-1 bg-gray-500" onClick={() => setIsOpen(false)}>Cancel</button>
				</div>
			</div>

		</div>)
}
export default Option;