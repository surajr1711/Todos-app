import ThemeToggle from "./ThemeToggle";

const Header = () => {
	return (
		<header className="flex justify-between p-4">
			<h1 className="text-lg font-semibold">Todos</h1>
			<ThemeToggle />
		</header>
	);
};

export default Header;
