import React, { useState } from "react";
import { BsPersonGear } from "react-icons/bs";
import "../App.css";
import Header from "../components/layout/Header";
import Tags from "../components/tags/Tag";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <main>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="m-4">
          <div className="flex flex-row">
            <BsPersonGear className="w-6 h-6 lg:w-7 lg:h-7 text-gray-800 mr-2" />
            <label className="label-title">Custom Persona</label>
          </div>
          <Tags label={"Obstetrics-Gynecology"} />
        </div>
      </div>
    </main>
  );
}

export default App;
