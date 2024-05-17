import React from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [textContent, setTextContent] = React.useState("");
  const [renderContent, setRenderContent] = React.useState("");

  function handleChange(event) {
    setTextContent((prev) => event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRenderContent(textContent);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textArea}
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
      <br />
      <hr></hr>

      {renderContent && (
        <p className={styles.renderedpara}>
          <span className={styles.youtyped}>You Typed:</span>{" "}
          <span className={styles.renderedcont}>"{renderContent}"</span>
        </p>
      )}
    </div>
  );
}
