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

		let temp = charCheckList.filter((item) => item.info.id === id)
		if (temp.length < 1)
		{
			navigate("/checklist");
		}
		setCurrentList(temp[0]);
	}, [charCheckList, id, navigate])

	return (
		<section className="container mx-auto text-white px-4 mt-12">
			<div className="flex justify-between mb-12">
				<h1 className="text-lg font-bold">{currentList?.info.title}'s Checklist</h1>
				<button type="button" className="bg-blue-500 px-6 py-2" onClick={() => setIsOpen(true)}>Add Todos</button>
			</div>
			{isOpen &&
				<Option isOpen={isOpen} id={id} setIsOpen={setIsOpen} />
			}
			<h2>Todos</h2>
			<hr />
			{charCheckList && charCheckList.map((item) =>
			{
				return <div className="space-y-4" key={item.info.id}>
					{item.tasks.map((todos) => (
						<div key={todos.id} className="py-4">
							<h1 className="text-base font-medium my-2">{todos.name}</h1>
							<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
								{todos.todos.map((todo) => (
									<TaskItem type={todo.type} label={todo.name} key={todo.name}/>
								))}
							</div>
						</div>
					))}
				</div>
			})}
			{console.log(charCheckList)}
		</section>);
}

export default CharacterCheckList;