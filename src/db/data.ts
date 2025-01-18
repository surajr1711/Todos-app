type todo = {
	id: string | number;
	todo: string;
	completed: boolean;
	userId: string | number;
	// createdDate: string
};

export const todos: todo[] = [
	{
		id: 1,
		todo: "Do something nice for someone you care about",
		completed: false,
		userId: 152,
	},
	{
		id: 2,
		todo: "Memorize a poem",
		completed: true,
		userId: 13,
	},
	{
		id: 3,
		todo: "Watch a classic movie",
		completed: true,
		userId: 68,
	},
	{
		id: 4,
		todo: "Watch a documentary",
		completed: false,
		userId: 84,
	},
	{
		id: 5,
		todo: "Invest in cryptocurrency",
		completed: false,
		userId: 163,
	},
	{
		id: 6,
		todo: "Contribute code or a monetary donation to an open-source software project",
		completed: false,
		userId: 69,
	},
	{
		id: 7,
		todo: "Solve a Rubik's cube",
		completed: true,
		userId: 76,
	},
	{
		id: 8,
		todo: "Bake pastries for yourself and neighbor",
		completed: true,
		userId: 198,
	},
	{
		id: 9,
		todo: "Go see a Broadway production",
		completed: false,
		userId: 7,
	},
	{
		id: 10,
		todo: "Write a thank you letter to an influential person in your life",
		completed: true,
		userId: 9,
	},
];
