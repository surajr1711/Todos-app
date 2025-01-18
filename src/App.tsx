import { Provider } from "react-redux";
import { store } from "./store/store";
import Todos from "./features/todos/Todos";

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
