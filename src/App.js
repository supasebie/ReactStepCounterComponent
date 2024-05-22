import { useState } from "react";
import "./index.css";
import Main from "./Components/Main";
import { data } from "./Data/messages.js";

export default function App() {
  const messages = data.messages;
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  function prev() {
    if (step > 0) setStep((s) => --s);
  }

  function next() {
    if (step < 2) setStep((s) => ++s);
  }

  return (
    <>
      <button onClick={() => setVisible((s) => !s)} className="close">
        x
      </button>
      {visible && (
        <Main messages={messages} step={step} prev={prev} next={next} />
      )}
    </>
  );
}
