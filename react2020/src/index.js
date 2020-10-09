// import React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = function () {
  return (
    <div>
      <label for="name"> Enter Name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor:'blue', color:'white'}}> Submit</button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
