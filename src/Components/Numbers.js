export default function Numbers({ messages, step }) {
  return (
    <>
      {messages.map((m, i) => (
        <div className={`${step >= i ? "active" : ""}`} key={i}>
          {i + 1}
        </div>
      ))}
    </>
  );
}
