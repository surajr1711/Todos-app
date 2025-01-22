import ThemeToggle from "./ThemeToggle";

const Header = () => {
	return (
		<header className="flex justify-between items-baseline p-4">
			<span className="text-lg font-semibold">Planner</span>
			<span className="text-sm opacity-20">work in progress</span>
			<ThemeToggle />
		</header>
	);
};

export default Header;
