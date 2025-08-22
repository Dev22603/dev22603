import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Home = () => {
	return (
		<div className="flex flex-col items-center h-screen">
			<Navbar className="mb-10" />

			<div className="w-[1200px] sm:w-[80%] md:w-[75%] md:border-2 p-4 rounded-xl">
				<div className="">
					<img
						src=""
						alt=""
						className="mb-40 rounded-md"
					/>
					<img
						src=""
						alt=""
						className="rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
