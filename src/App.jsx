import Container from "./components/Container";
import mbSignUp from "./assets/illustration-sign-up-mobile.svg";
import dtSignUp from "./assets/illustration-sign-up-desktop.svg";
import { useState } from "react";
import Button from "./components/Button";
import { list } from "./constants";
import Subscribe from "./components/Subscribe";
import { UserProvider } from "./context/UserContext";
import Message from "./components/Message";

const App = () => {
  const [sub, setSub] = useState(false);

  const subToggle = () => {
    setSub((prev) => !prev);
  };

  return (
    <UserProvider>
      <div className="bg-dsGrey flex justify-center items-center h-[100vh]">
        {sub ? (
          <Message subToggle={subToggle} />
        ) : (
          <Subscribe subToggle={subToggle} />
        )}
      </div>
    </UserProvider>
  );
};

export default App;
