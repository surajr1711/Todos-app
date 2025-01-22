import Providers from "./providers";
import Todos from "./features/todos/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Providers>
			<div className="p-2 container min-h-screen flex flex-col">
				<Header />
				<main className="mt-8 flex-grow">
					<Todos />
				</main>
				<Footer />
			</div>
		</Providers>
	);
};

export default App;
