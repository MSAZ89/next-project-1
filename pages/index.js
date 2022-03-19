import { useState } from "react"

export default function Home() {
  const [data, updateData] = useState("Data");

  return (
    <div className="container mx-auto py-10">
      <button className="bg-red-400 px-4 py-1" onClick={ () => updateData(document.getElementById("data").value)}>Update Data</button>
      <br/><br/>
      <input className="bg-red-100" id="data" type="text" />
      <br/><br/>
      <p>{data}</p>

    </div>
  )
}
