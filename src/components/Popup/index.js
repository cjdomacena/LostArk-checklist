import { useState } from "react";
import { getRegion } from "../../utils";

function Popup({ ...props })
{
	const [title, setTitle] = useState("");
	const [timeFormat, setTimeFormat] = useState("ET");
	const handleSubmit = (e) =>
	{
		e.preventDefault();
		if (title.length > 1)
		{
			const newItem = { title: title, timeFormat: timeFormat, region: getRegion(timeFormat) }
			props.setItems(prev => [...prev, newItem]);
			props.setIsOpen(false)
			setTimeFormat("ET")
		}
	}
	return props.isOpen ? (
		<div className="w-full h-full backdrop-blur-sm absolute left-0 top-0 grid place-items-center z-50">
			<form className="w-96 h-auto border-2 border-secondary shadow p-4 relative bg-main" onSubmit={handleSubmit}>
				<button type="button" className="absolute right-2 top-0 hover:text-red-500 transition-colors p-2" onClick={() => { props.setIsOpen(false); setTitle("") }}>x</button>
				<div className="flex flex-col p-4 gap-y-4">
					<div className="flex flex-col">
						<label htmlFor="title" className="text-sm mb-2">Enter title</label>
						<input type="text" placeholder="e.g daily, weekly, character name" id="title" className="pl-2 text-white h-8 bg-secondary" onChange={(e) => setTitle(e.target.value)} required />
					</div>
					<div className="flex flex-col">
						<label htmlFor="date" className="text-sm mb-2">Select Region</label>
						<select type="s" id="date" className="pl-2 text-white h-8 bg-secondary" onChange={(e) => {setTimeFormat(e.target.value); console.log(e.target.value)}} value={timeFormat} required>
							<option value="DEFAULT" disabled>Choose A Region</option>
							<option value="ET">US East</option>
							<option value="PT">US West</option>
							<option value="CET">EU West</option>
							<option value="GMT">EU Central</option>
						</select>
					</div>

				</div>
				<div className="px-4 w-fit mt-2">
					<button type="submit" className="text-green-400 font-bold hover:text-green-700">Save</button>
					<button className="ml-4 hover:text-red-500" onClick={() => { props.setIsOpen(false); setTitle("") }} >Cancel</button>
				</div>

			</form>
		</div>
	) : "";
}

export default Popup