import React, { useRef } from "react";
import "./styles.css";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			action=""
			className="input"
			onSubmit={(e) => {
				handleAdd(e), inputRef.current?.blur();
			}}>
			{/* {todo} */}
			<input ref={inputRef} type="input" placeholder="Enter A task" className="input-box" value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button className="input-submit">Go</button>
		</form>
	);
};

export default InputField;
