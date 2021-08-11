import "./App.css";
import { Navbar } from "./nav/Navbar";
import { Card } from "./card/Card";
import { boxes } from "./data";

function App() {
	return (
		<div className='App'>
			<Navbar />
			{boxes.map((box, index) => (
				<Card key={index} product={box} />
			))}
		</div>
	);
}

export default App;
