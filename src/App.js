import React from "react";
import SignIn from "./shared/signin";
import SignUp from "./shared/signup";

function App() {
  return (
    <div style={{ height: "50vh" }}>
      <SignUp></SignUp>
      <SignIn></SignIn>
    </div>
  );
}

export default App;
