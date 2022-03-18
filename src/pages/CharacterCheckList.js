import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Option from "../components/Option";
import { abyssalRaids, AppContext } from "../utils";

function CharacterCheckList()
{
	const { checkList } = useContext(AppContext);
	const [currentList, setCurrentList] = useState(null);
	const [currentOption, setCurrentOption] = useState(abyssalRaids);
	const [customCheckList, setCustom] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	let { id } = useParams();
	let navigate = useNavigate();

	useEffect(() =>
	{

		const temp = checkList.filter((item) => item.id === id)
		if (temp.length < 1)
		{

			navigate("/checklist");
		}
		setCurrentList(temp[0]);
		setCurrentOption(abyssalRaids)

	}, [checkList, id, navigate])

	return (
		<section className="container mx-auto text-white px-4 mt-12">
			<div className="flex justify-between">
				<h1>{currentList?.title}'s Checklist</h1>
				<button type="button" className="bg-blue-500 px-6 py-1" onClick={() => setIsOpen(true)}>Add Todos</button>
			</div>
			{isOpen && <form>
				<Option items={currentOption} type="abyssalRaids" setter={setCustom} isOpen={isOpen} setIsOpen={setIsOpen} />
			</form>}
			{customCheckList &&
				<div>
				</div>
			}
		</section>);
}

export default CharacterCheckList;