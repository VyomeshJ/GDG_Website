import React from "react"
import GongClient from "./GongClient"

export default function GongPage() {
	return (
		<main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#2c2c2c" }}>
			<GongClient />
		</main>
	)
}
