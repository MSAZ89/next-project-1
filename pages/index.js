import { useState } from "react"

import Header from "./comps/header";

export default function Home() {
  const [data, updateData] = useState("Data");

  return (
    <div className="container mx-auto py-10">
      <Header/>
    </div>
  )
}
