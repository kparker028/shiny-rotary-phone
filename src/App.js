import "./App.css";
import { Navbar } from "./nav/Navbar";
import { Card } from "./card/Card";
import { boxes } from "./data";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div
				className='card-grid'
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr",
					margin: "0 auto",
				}}
			>
				{boxes.map((box, index) => {
					return <Card key={index} product={box} />;
				})}
			</div>
		</div>
	);
}

export default App;
