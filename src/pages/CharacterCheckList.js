import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Option from "../components/Option";
// import TaskItem from "../components/TaskItem";
import { AppContext } from "../utils";

function CharacterCheckList()
{
	const { charCheckList, setCharCheckList } = useContext(AppContext);
	const [currentList, setCurrentList] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	// const [defaultList, setDefault] = useState([]);
	let { id } = useParams();
	let navigate = useNavigate();

	const handleIsDone = (e, index, i) =>
	{
		let temp = currentList
		temp.tasks[i].todos[index].isDone = !temp.tasks[i].todos[index].isDone;
		if (temp.tasks[i].todos[index].isDone)
		{
			e.target.classList.add("line-through");
		} else
		{
			e.target.classList.remove("line-through");
		}
		setCurrentList(temp);
		temp = charCheckList;
		temp[i] = currentList;
		setCharCheckList(temp);
		localStorage.removeItem("checklists");
		localStorage.setItem("checklists", JSON.stringify(charCheckList))
	}

	useEffect(() =>
	{

		let temp = charCheckList.findIndex((item) => item.info.id === id)
		if (temp < 0)
		{
			navigate("/checklist");
		}
		setCurrentList(charCheckList[temp]);
	}, [charCheckList, currentList, id, navigate, setCurrentList])

	return (
		<>
			<div className="bg-amber-600 w-full h-auto p-2 grid place-items-center text-sm text-white">
				<p className="text-center">This page is still in progress. Thank you for your patience!</p>
				<p className="text-center">More items will be added soon.</p>
			</div>
			<section className="container mx-auto text-white px-4 mt-12 relative">

				<Link to="/checklist" className="flex text-xs items-center mb-4 hover:text-neutral-500 w-fit transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> My Characters</Link>
				<div className="flex justify-between mb-12">
					<h1 className="text-lg font-bold">{currentList?.info.title}'s Checklist</h1>
					<div className="space-x-4">

						<button type="button" className="bg-blue-500 px-6 py-2" onClick={() => setIsOpen(true)}>Add Todos</button>
					</div>
				</div>
				{isOpen &&
					<Option isOpen={isOpen} id={id} setIsOpen={setIsOpen} />
				}
				<h2>Todos</h2>
				<hr />

				{
					<div className="space-y-4" >
						{currentList?.tasks.map((todos, i) => (
							<div key={todos.id} className="py-4">
								<h1 className="text-base font-medium my-2">{todos.name}</h1>
								<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
									{todos.todos.map((todo, index) => (
										<div tabIndex={index + 1} onClick={(e) => handleIsDone(e, index, i)} key={`${ todo.type }-${ todo.name }`}>
											{todo.isDone ? <p className="line-through">{todo.name}</p> : <p>{todo.name}</p>}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				}
			</section >
		</>);
}

export default CharacterCheckList;