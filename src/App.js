import MainBody from "./Components/MainBody";
import NavigationBar from "./Components/NavigationBar";

function App() {
	document.title = "Dashboard";
	return (
		<div className="App  bg-gray-50	">
			<NavigationBar />
			<MainBody />
		</div>
	);
}

export default App;
