import React, { useState } from "react";
import "../styles/App.css";

let relations = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]
const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
const [printResult, setPrintResult] = useState(false)
  const [relationShip, setRelationShip] = useState("");
  console.log(name1, name2);

  function calculateRelationShip(e) {
    e.preventDefault();
    // for(let ch of name1){
    //     if (name2.includes(ch)) {
    //         setName1(name1.replace(ch, ""))
    //         setName2(name2.replace(ch, ""))
    //     }
    // }
    let str1 = name1;
    let str2 = name2;

    for (let ch of str1) {
      if (str2.includes(ch)) {
        str1 = str1.replace(ch, "");
        str2 = str2.replace(ch, "");
      }
    }

    console.log(str1, str2)
    setName1(str1);
    setName2(str2);
    setPrintResult(true)
    // setRelationShip(relations[(str1.length + str2.length)%6]);

  }

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        name = "name1test"
        placeholder="First Name"
        data-testid="input1"
        onChange={(e) => setName1(e.target.value)}
        value={name1}
      />
      <input
        type="text"
        name = "name2"
        placeholder="Second Name"
        data-testid="input2"
        onChange={(e) => setName2(e.target.value)}
        value={name2}
      />
      <button
        onClick={calculateRelationShip}
        data-testid="calculate_relationship"
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={()=>{
        setPrintResult(false);
        setName1("");
        setName2("");


      }}>Clear</button>
      <h3 data-testid="answer">
        {
            printResult && relations[(name1.length+name2.length)%6]
        }        
      </h3>
    </div>
  );
};

export default App;
