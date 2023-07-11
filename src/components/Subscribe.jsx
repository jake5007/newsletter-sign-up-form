import React, { useContext } from "react";
import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import mbSignUp from "../assets/illustration-sign-up-mobile.svg";
import { list } from "../constants";
import { UserContext } from "../context/UserContext";

const Subscribe = ({ subToggle }) => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const { dispatch } = useContext(UserContext);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setInvalid(true);
    } else {
      dispatch({ type: "SET_USER", payload: email });
      subToggle();
    }
  };

  return (
    <Container>
      <div className="sm:order-2">
        <img
          src={mbSignUp}
          alt=""
          className={`object-cover sm:content-[url('./assets/illustration-sign-up-desktop.svg')]`}
        />
      </div>
      <main
        className="p-4 flex flex-col sm:order-1 sm:justify-center
        sm:max-w-[400px]"
      >
        <div>
          <h1 className="text-dsGrey text-[38px] sm:text-[45px] font-[700] mb-2">
            Stay updated!
          </h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div className="my-5">
          {list.map((l, idx) => (
            <div
              key={l.id}
              className={`flex gap-4 items-start ${
                list.length - 1 === idx ? "mb-0" : "mb-3"
              }`}
            >
              <img src={l.icon} alt="" className="object-fit" />
              <p>{l.content}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5 relative">
            <label htmlFor="email" className="text-[14px] font-[700] mb-1">
              Email address
            </label>
            {invalid && (
              <span
                className="text-[14px] font-[700] text-pTomato
                absolute top-0 right-0"
              >
                Valid email required
              </span>
            )}
            <input
              id="email"
              placeholder="email@company.com"
              className={`
                    px-4 py-3 border rounded-md 
                    ${
                      invalid
                        ? "border-pTomato outline-pTomato text-pTomato bg-red-50"
                        : "outline-dsGrey"
                    }
                `}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button text="Subscribe to monthly newsletter" />
        </form>
      </main>
    </Container>
  );
};

export default Subscribe;
