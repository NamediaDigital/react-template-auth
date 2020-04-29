import React from "react";
import SignIn from "./shared/components/signin";
import SignUp from "./shared/components/signup";

function App() {
  return (
    <div style={{ height: "50vh" }}>
      <SignUp></SignUp>
      <SignIn></SignIn>
    </div>
  );
}

export default App;
