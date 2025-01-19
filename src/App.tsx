import Providers from "./providers";
import Todos from "./features/todos/Todos";
import Header from "./components/Header";

const App = () => {
	return (
		<Providers>
			<div className="p-2 container">
				<Header />
				<main className="mt-8">
					<Todos />
				</main>
			</div>
		</Providers>
	);
};

export default App;
