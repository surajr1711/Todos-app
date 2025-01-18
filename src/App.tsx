import { Provider } from "react-redux";
import Todos from "./components/Todos";
import { store } from "./store/store";

const App = () => {
	return (
		<Provider store={store}>
			<div className="p-2 container">
				<Todos />
			</div>
		</Provider>
	);
};

export default App;
