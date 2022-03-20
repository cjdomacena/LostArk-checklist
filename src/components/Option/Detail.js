function Detail({title, items, handleAdd}){
	return (<div className="space-y-2">
		<details>
			<summary className="text-sm font-bold mb-2 bg-main p-2 ">{title}</summary>
			<ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
				{items.map((item) => <li key={item.name} onClick={handleAdd}>
					{/* <TaskItem label={item.name} type={item.type} /> */}
					{item.name}
				</li>)}
			</ul>
		</details>
	</div>)
}

export default Detail;