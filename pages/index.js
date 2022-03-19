import { useState } from "react"

import Header from "./comps/header";

export default function Home() {
  const [data, updateData] = useState("Data");

  const h1element = <h1 className="text-6xl">H1 Tag</h1>
  const description = <p>Next.js + Tailwind.css test</p>

  return (
    <div className="container mx-auto py-5">
      <Header/>
      <div className="flex items-stretch place-content-center py-5">
        {h1element}
      </div>
      <div className="flex items-stretch place-content-center">
        {description}
      </div>
    </div>
  )
}
