import unaDaily from './../../assets/img/una-daily-logo.png';
import guildDono from './../../assets/img/guild-dono.png';
import guardianRaid from './../../assets/img/guardian-raid.png';
import fieldBoss from './../../assets/img/field-boss.png';
import rapport from './../../assets/img/rapport.png'
import chaosGate from './../../assets/img/chaos-gate.png'
import unaWeekly from './../../assets/img/una-weekly.png'
import abyssalDungeon from './../../assets/img/abyss-dungeon.png'
import ghostShip from './../../assets/img/ghost-ship.png'
import { useContext } from 'react';
import { AppContext } from '../../App';


function TaskItem({ type, label, isCheckBox = false, isDone = false, index = 0 })
{
	const {values,setValues} = useContext(AppContext)

	const handleChange = (t, key) => {
		let newVal = {...values};

		newVal[t][key][index] = !newVal[t][key][index]
		if (newVal[t][key][index]) 
		{ newVal[t].completed = newVal[t].completed + 1; }
		else
		{
			newVal[t].completed = newVal[t].completed - 1;
		}
		setValues(newVal);
	}


	switch (type){
		case 'una-daily':
				return (
					<div className={`flex bg-una-daily w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('daily', 'unaDaily')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={unaDaily} alt="Lost ark&rsquo;s una&rsquo;s task daily quest"/>
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);
		case 'guild-dono':
				return (
					<div className={`flex bg-guild w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('daily', 'guildDono')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={guildDono} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);
		case 'guardian-raid':
				return (
					<div className={`flex bg-guardian w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('daily', 'guardianRaid')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={guardianRaid} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);	
		case 'field-boss':

				return (
					<div className={`flex bg-field-boss w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('daily', 'fieldBoss')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={fieldBoss} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);
		case 'rapport':
				return (
					<div className={`flex bg-rapport w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('daily', 'rapport')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={rapport} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);
		case 'chaos-gate':
				return (
					<div className={`flex bg-chaos-gate w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('daily', 'chaosGate')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={chaosGate} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);

		case 'una-weekly':
				return (
					<div className={`flex bg-una-weekly w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('weekly', 'unaWeekly')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={unaWeekly} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);
		case 'abyss-dungeon':
				return (
					<div className={`flex bg-abyss w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('weekly', 'abyss')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={abyssalDungeon} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);
		case 'ghost-ship':
				return (
					<div className={`flex bg-ghost w-full p-2 gap-x-2 text-sm items-center ${ isDone && 'opacity-90' } cursor-pointer`} role="button" onClick={() => isCheckBox && handleChange('weekly', 'ghostShip')}>
						{isCheckBox && <input type="checkbox" checked={isDone} readOnly />}
						<img src={ghostShip} alt="Lost ark&rsquo;s guild donation" />
						<h4 className={`text-white ${ isDone && 'line-through'}`}>{label}</h4>
					</div>
				);
		default: 
			return "";
	}
}

export default TaskItem;