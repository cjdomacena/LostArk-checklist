import { useContext } from "react";
import { AppContext, handleUpdateTime } from "../../utils";

function Button({ ...props })
{
	const { values, setValues } = useContext(AppContext);
	const defaultValue = {
		lastUpdated: "",
		daily: {
			completed: 0,
			unaDaily: [false, false, false],
			guildDono: [false],
			guardianRaid: [false, false],
			fieldBoss: [false],
			rapport: [false],
			chaosGate: [false],
		},
		weekly: {
			completed: 0,
			unaWeekly: [false],
			abyss: [false],
			ghostShip: [false]
		}
	}
	const handleSave = () =>
	{
		const newVal = { ...values }
		newVal.lastUpdated = handleUpdateTime();
		setValues(newVal)
		localStorage.setItem('lostArk-todos', JSON.stringify(values))
	}
	const handleReset = () =>
	{
		setValues(defaultValue);
		localStorage.setItem('lostArk-todos', JSON.stringify(defaultValue))
		console.log(values)
	}
	

	if (props.type === 'reset')
	{
		return <button className="capitalize bg-blue-700 px-6 py-2" onClick={handleReset}>{props.type}</button>
	}

	if (props.type === 'save')
	{
		return <button className="capitalize bg-green-500 px-6 py-2" onClick={handleSave}>{props.type}</button>
	}

	return ""
}

export default Button;