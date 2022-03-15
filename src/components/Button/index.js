function Button({...props}){
	if (props.type === 'reset'){
		return <button className="capitalize bg-blue-700 px-6 py-2" onClick={props.click}>{props.type}</button>
	}
	
	if(props.type === 'save') {
		return <button className="capitalize bg-green-700 px-6 py-2" onClick={props.click}>{props.type}</button>
	}

	return ""
}

export default Button;