import { useState } from "react"

import Header from "./comps/header";

export default function Home() {
  const [data, updateData] = useState("");

  const h1element = <h1 className="text-6xl">Tailwind CSS + Next.js</h1>
  const description = <p>Something something clever..</p>

  return (
    <div className="container mx-auto py-5">
      <Header/>
      <div className="flex items-stretch place-content-center py-5">
        {h1element}
      </div>

      <div className="flex items-stretch place-content-center">
        {description}
      </div>

      <div className="flex items-stretch place-content-center py-5">
        <input className="bg-gray-100" id="input" onChange={ () => updateData(document.getElementById("input").value)} type="text"/>
      </div>

      <div className="flex items-stretch place-content-center">
        <p>{data}</p>
      </div>

    </div>
  )
}
