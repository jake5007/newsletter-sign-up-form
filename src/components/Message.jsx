import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Button from "./Button";
import Container from "./Container";
import iconSuccess from "../assets/icon-success.svg";

const Message = ({ subToggle }) => {
  const { user, dispatch } = useContext(UserContext);

  const handleClick = () => {
    subToggle();
    dispatch({ type: "SET_USER", payload: "" });
  };

  return (
    <Container>
      <div className="flex flex-col gap-7 p-5 mt-[25%] sm:mt-0 sm:max-w-[400px]">
        <img src={iconSuccess} alt="" className="w-[65px] object-fit width" />
        <h1 className="text-[38px] sm:text-[45px] font-[700] leading-[50px]">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to <strong>{user.userEmail}</strong>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <Button text="Dismiss message" onClick={handleClick} abs={true} />
      </div>
    </Container>
  );
};

export default Message;
