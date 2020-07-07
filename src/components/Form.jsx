import React, { useState } from "react";
import "../styles/Form.css";

const Form = () => {
  const [phrase, setPhrase] = useState("");
  const [translation, setTranslation] = useState("");
  const [translator, setTranslator] = useState("");

  const onSubmitPhrase = async (event) => {
    event.preventDefault();
    if (phrase === undefined) {
      return;
    }
    try {
      const response = await fetch(
        `https://api.funtranslations.com/translate/yoda.json?text=${phrase}`
      );
      const data = await response.json();
      if (typeof data.error !== "undefined") {
        throw data.error.message;
      } else {
        setTranslation(data.contents.translated);
        setTranslator(data.contents.translation);
        setPhrase("");
      }
    } catch (error) {
      setTranslation(error);
      setTranslator("The Server");
    }
  };

  const onPhraseChange = (event) => {
    setPhrase(event.target.value);
  };

  return (
    <>
      <div>
        <blockquote
          className={translator === "yoda" ? "result" : "error"}
          cite={translator}
        >
          {translation}
          <br />
          <cite>{translation && `- ${translator}`}</cite>
        </blockquote>
      </div>
      <form onSubmit={onSubmitPhrase}>
        <input
          autoFocus
          onChange={onPhraseChange}
          type="text"
          name="phrase"
          id="phrase"
          value={phrase}
          placeholder="Speak, what say you would?"
        />
      </form>
    </>
  );
};

export default Form;
