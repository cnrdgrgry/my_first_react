import React from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [textContent, setTextContent] = React.useState("");

  function handleChange(event) {
    setTextContent((prev) => {
      return { ...prev, [event.target.value]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const textAreaContent = document.querySelector("#textContent").value;
    console.log(`You typed ${textAreaContent}`);
    return textAreaContent;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          id="textContent"
          name="textContent"
          placeholder="Your Text Here"
          onChange={handleChange}
          cols="34"
          rows="10"
        />
        <br />
        <button type="submit">Print to Screen</button>
      </form>
      <p>You Typed:</p>
    </>
  );
}
