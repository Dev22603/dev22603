import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import { Layout } from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
	return (
		<BrowserRouter>
			<div className="h-screen flex flex-col overflow-hidden">
				<Header />
				<div className="flex-1 overflow-y-auto">
					<Layout dotSize={1} dotSpacing={20}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</Layout>
					<Footer />
					<ScrollToTop />
				</div>
			</div>
		</BrowserRouter>
	);
}
