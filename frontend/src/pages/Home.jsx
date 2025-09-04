import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
const banner = "/banner.jpg";
const headshot = "/headshot.jpg";
const Home = () => {
	return (
		<div className="flex flex-col items-center min-h-screen">
			<Navbar className="mb-10" />

			<div className="w-[1200px] sm:w-[80%] md:w-[75%] md:border-2 p-4 rounded-xl ">
				<div className="mb-40">
					<div className="relative">
						<img
							src={banner}
							alt=""
							className="rounded-md w-full h-auto"
						/>
						<img
							src={headshot}
							alt=""
							className="rounded-full w-30 h-30 border-6 border-neutral-950 -mt-15 ml-10 inline-block"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
