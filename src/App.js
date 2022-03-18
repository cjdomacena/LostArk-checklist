import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import BasicCheckList from "./pages/BasicCheckList";
import CreateCheckList from "./pages/CreateCheckList";
import CharacterCheckList from "./pages/CharacterCheckList"
import { AppContext } from "./utils";
function App()
{
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
  const [values, setValues] = useState(defaultValue)
  const [checkList, setCheckList] = useState([]);

  return (
    <AppContext.Provider value={{ values, setValues, checkList, setCheckList }}>
      <div className="App  w-full h-screen">
        <Navigation />
        <Routes >
          <Route path="/" element={<BasicCheckList />} />
          <Route path="/checklist" element={<CreateCheckList />} />
          <Route path="/checklist/:id" element={<CharacterCheckList/>}/>
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
