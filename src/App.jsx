import { useState } from "react";

function App() {
  const [color, setColor] = useState("aqua");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex justify-center flex-wrap bottom-12 px-2 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-slate-100 rounded-3xl">
            <button className="px-3 bg-red-600 text-white rounded-md p-1"
             onClick={()=>{setColor("red")}}>Red</button>
            <button className="px-3 bg-yellow-600 text-white rounded-md p-1"
            onClick={()=>{setColor("yellow")}}>Yellow</button>
            <button className="px-3 bg-green-600 text-white rounded-md p-2"
            onClick={()=>{setColor("green")}}>Green</button>
            <button className="px-3 bg-blue-600 text-white rounded-md p-2"
            onClick={()=>{setColor("blue")}}>Blue</button>
            <button className="px-3 bg-black text-white rounded-md p-2"
            onClick={()=>{setColor("black")}}>Black</button>
            <button className="px-3 bg-purple-600 text-white rounded-md p-2"
            onClick={()=>{setColor("purple")}}>Purple</button>
            <button className="px-3 bg-orange-700 text-white rounded-md p-2"
            onClick={()=>{setColor("orange")}}>Orange</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
