'use client'
import Image from "next/image";


export default function Home() {
  return (
    <div style={{ width: "50vw", height: "50vh" }}>
      <iframe
        src="/games/Depteavor/index.html"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}
