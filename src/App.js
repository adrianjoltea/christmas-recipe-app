import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Snowfall from "react-snowfall";
import { FaTree } from "react-icons/fa6";

function App() {
  const [input, setInput] = useState("Christmas");
  const [info, setInfo] = useState("");
  const [mainInfo, setMainInfo] = useState("");
  console.log(input);
  console.log(mainInfo);
  return (
    <div className="main__div">
      <Snowfall style={{ zIndex: 99999 }} />
      <Popup />
      <Header FaTree={FaTree} />
      <MainBody
        input={input}
        setInput={setInput}
        info={info}
        setInfo={setInfo}
        setMainInfo={setMainInfo}
      />
      <RecipeDetails data={mainInfo} />
      <Footer />
    </div>
  );
}

export default App;
