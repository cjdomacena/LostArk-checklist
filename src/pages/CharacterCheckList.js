import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Option from "../components/Option";
import TaskItem from "../components/TaskItem";
import { AppContext } from "../utils";

function CharacterCheckList()
{
	const { charCheckList } = useContext(AppContext);
	const [currentList, setCurrentList] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	let { id } = useParams();
	let navigate = useNavigate();

	useEffect(() =>
	{
		const temp = charCheckList.filter((item) => item.info.id === id)
		if (temp.length < 1)
		{
			navigate("/checklist");
		}
		setCurrentList(temp[0]);
	}, [charCheckList, id, navigate])

	return (
		<section className="container mx-auto text-white px-4 mt-12">
			<div className="flex justify-between">
				<h1>{currentList?.info.title}'s Checklist</h1>
				<button type="button" className="bg-blue-500 px-6 py-2" onClick={() => setIsOpen(true)}>Add Todos</button>
			</div>
			{isOpen &&
				<Option isOpen={isOpen} id={id} setIsOpen={setIsOpen} />
			}
			{charCheckList && charCheckList.map((item) =>
			{
				if (item.checkList.length)
				{
					return item.checkList.map((todos, index) =>
					(<div key={index} className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
						{todos && todos.map((todo) => <TaskItem type={todo.type} label={todo.name} key={todo.name} />)}
					</div>)
					)
				}
				return ""
			})}

		</section>);
}

export default CharacterCheckList;