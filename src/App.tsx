// import { Provider } from "react-redux";
// import { store } from "./store/store";
import Providers from "./providers";
import Todos from "./features/todos/Todos";
import Header from "./components/Header";

const App = () => {
	return (
		<Providers>
			<div className="p-2 container">
				<Header />
				<Todos />
			</div>
		</Providers>
	);
};

export default App;
