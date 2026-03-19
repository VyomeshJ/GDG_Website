import React from "react"
import GongClient from "./GongClient"

export default function GongPage() {
	return (
		<main
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#2c2c2c",
				backgroundImage: "url('/BG/WhatAreWeBG.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<GongClient />
		</main>
	)
}
