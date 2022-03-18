import { createContext } from "react";
export const AppContext = createContext();
export const handleUpdateTime = () =>
{
	return new Intl.DateTimeFormat('default', { month: 'long', weekday: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(new Date())
}

export const getRegion = (timeFormat) =>
{

	switch (timeFormat)
	{
		case 'ET':
			return 'US East';
		case 'PT':
			return 'US West';
		case 'CET':
			return 'EU West';
		case 'GMT':
			return 'EU Central'
		default:
			return "Not available";
	}
}

export const getResetTime = (timeFormat) =>
{
	switch (timeFormat)
	{
		case 'ET':
			return '5:00 AM';
		case 'PT':
			return '2:00 AM';
		case 'CET':
			return '11:00 AM';
		case 'GMT':
			return '10:00 AM'
		default:
			return "Not available";
	}
}

export const abyssalRaids = [

	{ name: "Demon Beast Canyon (340)", isDone: false },
	{ name: "Necromancer's Origin (340)", isDone: false },
	{ name: "Hall of the Twisted Warlord (460)", isDone: false },
	{ name: "Hildebrandt Palace (460)", isDone: false },
	{ name: "Road of Lament (840)", isDone: false },
	{ name: "Forge of Fallen Pride (840)", isDone: false },
	{ name: "Sea of Indolence (960)", isDone: false },
	{ name: "Tranquil Karkosa (960)", isDone: false },
	{ name: "Alaric's Sanctuary (960)", isDone: false },
	{ name: "Aira's Oculus - Normal (1325)", isDone: false },
	{ name: "Aira's Oculus - Hard (1370)", isDone: false },
	{ name: "Oreha Preveza - Normal (1325)", isDone: false },
	{ name: "Oreha Preveza - Hard (1370)", isDone: false }
];

export const ghostShips = [{name:"460", isDone:false},{name:"960", isDone:false}, {name:"1370", isDone:false}];

export const guardianRaids = [
	{ name: "Ur'nil", isDone: false },
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
	{ name: "Velganos", isDone: false }
]