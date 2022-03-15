import { createContext, useState } from "react";
import Button from "./components/Button";
import TaskItem from "./components/TaskItem";
export const AppContext = createContext();
function App()
{
  const defaultValue = {
    daily: {
      completed: 0,
      unaDaily: [false, false],
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
  const [values, setValues] = useState(defaultValue)

  console.log(values)

  return (
    <AppContext.Provider value={{ values, setValues }}>
      <div className="App grid place-items-center w-full h-screen">
        <main className="2xl:container mx-auto px-4 grid grid-cols-12">
          <aside className="col-span-2">
            <h2 className="my-4 text-white text-sm">Available Tasks</h2>
            <div className=" grid grid-flow-row gap-y-4">
              <h3 className="text-white font-medium">Daily</h3>

              <TaskItem type="una-daily" label="Una&rsquo;s Daily" isCheckBox={false} />
              <TaskItem type="guild-dono" label="Guild Donations" isCheckBox={false} />

              <TaskItem type="guardian-raid" label="Guardian Raid" isCheckBox={false} />

              <TaskItem type="field-boss" label="Field Boss" isCheckBox={false} />
              <TaskItem type="rapport" label="Rapport" isCheckBox={false} />
              <TaskItem type="chaos-gate" label="Chaos Gate" isCheckBox={false} />
            </div>
            <div className="flex flex-col gap-y-4 mt-12">
              <h3 className="text-white font-medium">Weekly</h3>
              <TaskItem type="una-weekly" label="Una&rsquo;s Weekly" isCheckBox={false} />
              <TaskItem type="abyss-dungeon" label="Abyssal Dungeon" isCheckBox={false} />
              <TaskItem type="ghost-ship" label="Ghost Ship" isCheckBox={false} />
            </div>
          </aside>
          <div className=" col-start-4 col-end-13 text-white">
            <div className="flex w-full justify-between items-center">
              <h2>My Checklist</h2>
              <Button type="reset" click={() => setValues(defaultValue)} />
            </div>
            <div>
              <div className="flex justify-between items-center border-b-[1px] border-b-neutral-700 my-4">
                <h4 className="font-medium">Daily</h4>
                <div>
                  <p className="text-sm text-neutral-400">{values.daily.completed} of 7 completed</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 font-medium">

                <TaskItem type="una-daily" label="Una&rsquo;s Daily #1" isCheckBox={true} isDone={values.daily.unaDaily[0]} index={0} />
                <TaskItem type="una-daily" label="Una&rsquo;s Daily #2" isCheckBox={true} isDone={values.daily.unaDaily[1]} index={1} />

                <TaskItem type="guardian-raid" label="Guardian Raid" isCheckBox={true} isDone={values.daily.guardianRaid[0]} index={0} />
                <TaskItem type="guardian-raid" label="Guardian Raid" isCheckBox={true} isDone={values.daily.guardianRaid[1]} index={1} />

                <TaskItem type="field-boss" label="Field Boss" isCheckBox={true} isDone={values.daily.fieldBoss[0]} index={0} />
                <TaskItem type="rapport" label="Rapport" isCheckBox={true} isDone={values.daily.rapport[0]} index={0} />
                <TaskItem type="chaos-gate" label="Chaos Gate" isCheckBox={true} isDone={values.daily.chaosGate[0]} index={0}/>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center border-b-[1px] border-b-neutral-700 my-4">
                <h4 className="font-medium">Weekly</h4>
                <div>
                  <p className="text-sm text-neutral-400">{values.weekly.completed} of 3 completed</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 font-medium">
                <TaskItem type="una-weekly" label="Una&rsquo;s Weekly" isCheckBox={true} isDone={values.weekly.unaWeekly[0]} index={0} />
                <TaskItem type="abyss-dungeon" label="Abyssal Dungeon" isCheckBox={true} isDone={values.weekly.abyss[0]} index={0} />
                <TaskItem type="ghost-ship" label="Ghost Ship" isCheckBox={true} isDone={values.weekly.ghostShip[0]} index={0}  />
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
