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
			<Header />
			<Layout dotSize={1} dotSpacing={20}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Layout>
			<Footer />
			<ScrollToTop />
		</BrowserRouter>
	);
}
