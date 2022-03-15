function Banner() {
	return(
		<footer className="w-full bg-[#212121] text-white p-2 text-center text-sm fixed bottom-0">
			<div className="flex gap-x-2 justify-center items-center">
				<h1>Note: Checklist is saved on your local storage.</h1>
				<button className="text-sm underline px-2 py-1" onClick={() => {
					localStorage.removeItem('lostArk-todos');
					alert('Successfully removed from local storage')
					}}>Remove from local storage</button>
			</div>

		</footer>
	)
}

export default Banner;