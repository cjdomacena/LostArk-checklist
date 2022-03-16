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
	{
		tier: 1,
		dungeons: [
			"Demon Beast Canyon",
			"Necromancer's Origin",
			"Hall of the Twisted Warlord",
			"Hildebrandt Palace",
		]
	}, {
		tier: 2,
		dungeons: ["Road of Lament", "Forge of Fallen Pride", "Sea of Indolence", "Tranquil Karkosa", "Alaric's Sanctuary"]

	}, {
		tier: 3,
		dungeons: ["Aira's Oculus", "Oreha Preveza"]
	}
];

export const ghostShips = ["460", "960", "1370"];