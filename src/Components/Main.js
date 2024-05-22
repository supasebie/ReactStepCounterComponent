import Numbers from "./Numbers";

export default function Main({ messages, step, prev, next }) {
  return (
    <div className="steps">
      <div className="numbers">
        <Numbers messages={messages} step={step} />
      </div>

      <p className="message">{messages[step]}</p>

      <div className="buttons">
        <button
          onClick={prev}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={next}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
