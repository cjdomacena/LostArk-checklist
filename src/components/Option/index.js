import { useContext, useState } from "react";
import { AppContext } from "../../utils";
import TaskItem from "./../TaskItem"

function Option({ isOpen, id, setIsOpen })
{

	const { charCheckList, setCharCheckList } = useContext(AppContext);
	const i = charCheckList.findIndex((el) => el.info.id === id)
	const [currentList, setCurrentList] = useState([]);
	const [abyss, setAbyss] = useState([{ name: "Demon Beast Canyon (340)", isDone: false },
	{ name: "Necromancer's Origin (340)", isDone: false, type: "abyss-dungeon" },
	{ name: "Hall of the Twisted Warlord (460)", isDone: false, type: "abyss-dungeon" },
	{ name: "Hildebrandt Palace (460)", isDone: false, type: "abyss-dungeon" },
	{ name: "Road of Lament (840)", isDone: false, type: "abyss-dungeon" },
	{ name: "Forge of Fallen Pride (840)", isDone: false, type: "abyss-dungeon" },
	{ name: "Sea of Indolence (960)", isDone: false, type: "abyss-dungeon" },
	{ name: "Tranquil Karkosa (960)", isDone: false, type: "abyss-dungeon" },
	{ name: "Alaric's Sanctuary (960)", isDone: false, type: "abyss-dungeon" },
	{ name: "Aira's Oculus - Normal (1325)", isDone: false, type: "abyss-dungeon" },
	{ name: "Aira's Oculus - Hard (1370)", isDone: false, type: "abyss-dungeon" },
	{ name: "Oreha Preveza - Normal (1325)", isDone: false, type: "abyss-dungeon" },
	{ name: "Oreha Preveza - Hard (1370)", isDone: false, type: "abyss-dungeon" }]);
	const [guardian, setGuardian] = useState([{ name: "Ur'nil", isDone: false },
	{ name: "Lumerus", isDone: false },
	{ name: "Icy Legoros", isDone: false },
	{ name: "Vertus", isDone: false },
	{ name: "Chromanium", isDone: false },
	{ name: "Flame Fox Yoho", isDone: false },
	{ name: "Nacrasena", isDone: false },
	{ name: "Tytalos", isDone: false },
	{ name: "Achates", isDone: false },
	{ name: "Calventus", isDone: false },
	{ name: "Dark Legoros", isDone: false },
	{ name: "Helgaia", isDone: false },
	{ name: "Alberhastic", isDone: false },
	{ name: "Frost Helgaia", isDone: false },
	{ name: "Lava Chromanium", isDone: false },
	{ name: "Levanos", isDone: false },
	{ name: "Heavy Armor Nacrasena", isDone: false },
	{ name: "Igrexion", isDone: false },
	{ name: "Night Fox Yoho", isDone: false },
	{ name: "Velganos", isDone: false }]);
	const [ghost, setGhost] = useState([{ name: "Ghost Ship (460)", isDone: false }, { name: "Ghost Ship (960)", isDone: false }, { name: "Ghost Ship (1370)", isDone: false }]);

	const handleAdd = (item, index, type) =>
	{
		let t;
		let setter;
		if (type === "abyss")
		{
			t = abyss;
			t[index].isDone = !t[index].isDone;
			setter = setAbyss;
		} else if (type === "ghost")
		{
			t = ghost;
			t[index].isDone = !t[index].isDone;
			setter = setGhost;
		} else
		{
			let t = guardian;
			t[index].isDone = !t[index].isDone;
			setter = setGuardian;
		}
		setter(t);


		let tempList = currentList;
		let indexList = tempList.findIndex((el) => el.name === item.name);
		if (indexList >= 0)
		{
			tempList.splice(indexList, 1);
		} else
		{
			let temp = item;
			temp.isDone = true;
			tempList.push(temp)
		}
		setCurrentList(tempList);
	}

	const handleSave = (e) =>
	{
		e.preventDefault();
		let temp = charCheckList;

		temp[i].checkList = temp[i].checkList.length > 0 ? [...temp[i].checkList, currentList] : [currentList]
		setCharCheckList(temp);
		setIsOpen(false);
	}


	return (isOpen &&
		<form>
			<div className="w-full h-full mx-auto backdrop-blur-sm absolute left-0 top-0 grid place-items-center z-50">
				<div className="border-2 border-main p-4 space-y-4 bg-secondary xl:w-2/4 lg:w-2/4 w-full">
					<div className="space-y-2">
						<h1 className="text-sm font-bold">Abyssal Dungeon</h1>
						<ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
							{abyss.map((item, index) => <li key={item.name} role="button" className={`${ item.isDone ? "opacity-60" : "hover:opacity-60" }`} onClick={() => handleAdd(item, index, "abyss")}><TaskItem label={item.name} type="abyss-dungeon" />{console.log("Renders")}</li>)}
						</ul>
					</div>
					<div className="space-y-2">
						<h1 className="text-sm font-bold">Ghost Ship</h1>
						<ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
							{ghost.map((item) => <li key={item.name} className={`${ item.isDone ? "opacity-60" : "hover:opacity-60" }`} onClick={() => handleAdd(item, i, "ghost")}><TaskItem label={item.name} type="ghost-ship" />{console.log("Render")}</li>)}
						</ul>
					</div>
				</div>
				<button onClick={handleSave}>Save</button>
				<button onClick={() => setIsOpen(false)}>Close</button>
			</div>
		</form>)
}
export default Option;