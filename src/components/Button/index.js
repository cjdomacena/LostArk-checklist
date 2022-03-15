function Button({...props}){
	if (props.type === 'reset'){
		return <button className="capitalize bg-blue-700 px-6 py-2" onClick={props.click}>{props.type}</button>
	}
}

export default Button;