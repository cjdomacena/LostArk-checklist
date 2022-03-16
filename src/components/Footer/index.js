import { useContext } from "react";
import { AppContext } from "../../utils";

function Banner() {
	const {setValues} = useContext(AppContext);
	const handleUpdateTime = () =>
	{
		return new Intl.DateTimeFormat('default', { month: 'long', weekday: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(new Date())
	}
	const defaultValue = {
		lastUpdated: handleUpdateTime(),
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
	return(
		<footer className="w-full bg-[#212121] text-white p-2 text-center text-sm fixed bottom-0">
			<div className="flex gap-x-2 justify-center items-center">
				<h1>Note: Checklist is saved on your local storage.</h1>
				<button className="text-sm underline px-2 py-1" onClick={() => {
					setValues(defaultValue);
					localStorage.removeItem('lostArk-todos');
					alert('Successfully removed from local storage')
					}}>Remove from local storage</button>
			</div>

		</footer>
	)
}

export default Banner;