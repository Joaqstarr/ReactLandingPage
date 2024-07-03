import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Navbar} from "./Navbar.jsx";
import {Hero} from "./Hero.jsx";
import { CardRow } from "./CardRow.jsx";
import {BottomBar} from "./BottomBar.jsx";

const Home = () => {
	return (
			<div>
				<Navbar/>
				<div class="h-10">
				</div>	
				<div class="max-w-5xl m-auto">
					<Hero/>
					<div class="my-10">
						<CardRow/>
					</div>
				</div>
				<BottomBar/>
			</div>
		);
};

export default Home;
