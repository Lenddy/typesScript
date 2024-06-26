import { createContext } from "react";

export interface User {
	name: string;
	age: number;
	isMarried?: boolean;
}

// creating the context type

interface UserContextType {
	users: User[] | null;
	AddUser: (user: User) => void;
	UpdateUser: (id: string) => void;
	DeleteUser: (id: string) => void;
}

// creating the context initial value(default values)d

const contextInitialValues = {};

// creating the context

const UserContext = createContext<UserContextTyped>();
