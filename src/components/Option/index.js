import { useContext, useState } from "react";
import { AppContext } from "../../utils";
import TaskItem from "./../TaskItem"
import { v4 as uuidv4 } from 'uuid'
function Option({ isOpen, id, setIsOpen })
{

	const { charCheckList, setCharCheckList } = useContext(AppContext);
	const i = charCheckList.findIndex((el) => el.info.id === id)
	const [currentList, setCurrentList] = useState([]);
	const [abyss, setAbyss] = useState([{ name: "Demon Beast Canyon (340)", isAdded: false, isDone: false, type: "abyss-dungeon" },
	{ name: "Necromancer's Origin (340)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Hall of the Twisted Warlord (460)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Hildebrandt Palace (460)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Road of Lament (840)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Forge of Fallen Pride (840)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Sea of Indolence (960)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Tranquil Karkosa (960)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Alaric's Sanctuary (960)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Aira's Oculus - Normal (1325)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Aira's Oculus - Hard (1370)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Oreha Preveza - Normal (1325)", isAdded: false, type: "abyss-dungeon", isDone: false, },
	{ name: "Oreha Preveza - Hard (1370)", isAdded: false, type: "abyss-dungeon", isDone: false, }]);
	const [guardian, setGuardian] = useState([{ name: "Ur'nil", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Lumerus", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Icy Legoros", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Vertus", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Chromanium", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Flame Fox Yoho", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Nacrasena", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Tytalos", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Achates", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Calventus", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Dark Legoros", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Helgaia", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Alberhastic", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Frost Helgaia", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Lava Chromanium", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Levanos", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Heavy Armor Nacrasena", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Igrexion", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Night Fox Yoho", isAdded: false, type: "guardian-raid", isDone: false },
	{ name: "Velganos", isAdded: false, type: "guardian-raid", isDone: false }]);

	const [title, setTitle] = useState("");


	const [ghost, setGhost] = useState([
		{ name: "Ghost Ship (460)", isAdded: false, isDone: false, type: "ghost-ship" },
		{ name: "Ghost Ship (960)", isAdded: false, isDone: false, type: "ghost-ship" },
		{ name: "Ghost Ship (1370)", isAdded: false, isDone: false, type: "ghost-ship" }]);

	const handleAdd = (e, item, index, type) =>
	{
		e.target.classList.toggle("line-through");
		let t;
		if (type === "abyss")
		{
			t = abyss;
			t[index].isAdded = !t[index].isAdded;
			setAbyss(t);
		} else if (type === "ghost")
		{
			t = ghost;
			t[index].isAdded = !t[index].isAdded;
			setGhost(t);
		} else
		{
			t = guardian;
			t[index].isAdded = !t[index].isAdded;
			setGuardian(t);
		}

		let tempList = currentList;
		let indexList = tempList.findIndex((el) => el.name === item.name);
		if (indexList >= 0)
		{
			tempList.splice(indexList, 1);
		} else
		{
			let temp = item;
			console.log(tempList)
			temp.isAdded = true;
			tempList.push(temp)
		}

		setCurrentList(tempList);
	}

	const handleSave = (e) =>
	{
		e.preventDefault();
		let temp = charCheckList;
		temp[i].tasks.push({ name: title, id: uuidv4(), todos: currentList });
		setCharCheckList(temp);
		setIsOpen(false);
		localStorage.setItem("checklists", JSON.stringify(charCheckList))
	}


	return (isOpen &&
		<form onSubmit={handleSave}>
			<div className="w-full h-full mx-auto backdrop-blur-sm absolute left-0 top-0 grid place-items-center z-50">
				<div className="border-2 border-main p-4 space-y-8 bg-secondary xl:w-2/4 lg:w-2/4 w-full">
					<div>
						<label htmlFor="task-title">Enter Title</label>
						<input type="text" id="task-title" onChange={(e) => setTitle(e.target.value)} required/>
					</div>
					<div className="space-y-2">
						<details>
							<summary className="text-sm font-bold mb-2 bg-main p-2 ">Abyssal Dungeon</summary>
							<ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
								{abyss.map((item) => <li key={item.name} onClick={(e) => handleAdd(e, item, i, "abyss")}>
									<TaskItem label={item.name} type={item.type} />
								</li>)}
							</ul>
						</details>
					</div>
					<div className="space-y-2">
						<details>
							<summary className="text-sm font-bold mb-2 bg-main p-2 ">Ghost Ship</summary>
							<ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
								{ghost.map((item) => <li key={item.name} onClick={(e) => handleAdd(e, item, i, "ghost")}>
									<TaskItem label={item.name} type={item.type} />
								</li>)}
							</ul>
						</details>
					</div>
					<div className="space-y-2">
						<details>
							<summary className="text-sm font-bold mb-2 bg-main p-2 ">Guardian Raid</summary>
							<ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
								{guardian.map((item) => <li key={item.name} onClick={(e) => handleAdd(e, item, i, "guardian")}>
									<TaskItem label={item.name} type={item.type} />
								</li>)}
							</ul>
						</details>
					</div>
					<div className="space-x-4 pt-6 ml-auto w-fit">
						<button type="submit" className="px-8 py-2 bg-blue-500">Save</button>
						<button onClick={() => setIsOpen(false)} className="px-8 py-2 bg-neutral-500">Close</button>
					</div>
				</div>

			</div>
		</form>)
}
export default Option;