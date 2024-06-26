// import { useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<User name={"Lenddy"} age={20} isMarried={false}></User>
			<User name={"juan"} age={35} isMarried={true}></User>
			<User name={"test"} age={2}></User>
		</>
	);
}

export default App;

// interface test{
//   readonly name:string;
//   age:number
// }

// interface budy{
//   email: string;
//   single:boolean;
// }

// // intersection
// type testBuddy = test & budy;

// // union
// type union = string | number

// const myTest:test = {
//   name:"lenddy",
//   age: 20
// }

// enum muy {
//   holo = shhh
// }
