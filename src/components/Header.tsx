import ThemeToggle from "./ThemeToggle";

const Header = () => {
	return (
		<header className="flex justify-between p-4">
			<span className="text-lg font-semibold">Todos</span>
			<ThemeToggle />
		</header>
	);
};

export default Header;
