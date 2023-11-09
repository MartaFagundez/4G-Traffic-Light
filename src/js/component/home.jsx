import React from "react";
import TrafficLight from "./traffic-light";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid min-vh-100" style={{backgroundColor: "#353839"}}>
			<TrafficLight />
		</div>
	);
};

export default Home;
