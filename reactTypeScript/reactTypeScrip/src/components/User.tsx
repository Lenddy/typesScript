import React, { useState } from "react";
import type { User } from "../UserContextProvider/UserContexProvider";

const User = (props: User) => {
	// to specify the type of state variable you use useState<types> sings
	const [personBio, setPersonBio] = useState<string | null>(null);

	// the type of change event is React.ChangeEvent<HTMLInputElement>
	// ! if you were to have a form the types would be  React.FormEvent<HTMLFormElement>
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPersonBio(e.target.value);
	};
	return (
		<div>
			{/* {showInfo && ( */}
			<>
				<h1>Name: {props.name}</h1>
				<h3>Aga: {props.age}</h3>
				<p>This person is {props.isMarried ? "married" : "single"}</p>
			</>
			{/* )} */}
			{/* <button onClick={toggleInfo}>show </button> */}

			<p>
				{props.name} Bio:{!personBio ? "no Bio Available " : personBio}{" "}
			</p>
			<input type="text" onChange={handleChange} />
		</div>
	);
};

export default User;
