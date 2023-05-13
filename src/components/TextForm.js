import React, { useState } from "react";
import Download from "../assets/download.mp4";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    if (text !== "") {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper Case", "success");
    }
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    if (text !== "") {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case", "success");
    }
  };

  const handleCapClick = () => {
    console.log("Capitalize each was clicked");
    if (text !== "") {
      let arrText = text.split(" ");
      // for (let index = 0; index < arrText.length; index++) {
      //     const element = arrText[index];
      //     arrText[index] = element.charAt(0).toUpperCase()+element.slice(1);
      // }
      arrText = arrText.map((item) => {
        item = item.charAt(0).toUpperCase() + item.slice(1);
        return item;
      });
      // arrText.forEach((item,index)=>{
      //     arrText[index] = item.charAt(0).toUpperCase()+item.slice(1);
      // });
      let newText = arrText.join(" ");
      setText(newText);
      props.showAlert("Capitalized the Text", "success");
    }
  };

  const handleClearClick = () => {
    console.log("Clear Text was clicked");
    if (text !== "") {
      let newText = "";
      setText(newText);
      props.showAlert("Cleared the Text", "success");
    }
  };

  //Copy to clipboard
  //   const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = async () => {
    if (text !== "") {
      try {
        await navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
        // setIsCopied(true);
        console.log("Copy to clipboard was clicked");

        // setTimeout(() => {
        //   setIsCopied(false);
        // }, 2000);
      } catch (error) {
        console.log("Failed to copy text:", error);
      }
    }
  };

  //Download
  const [isDownload, setIsDownload] = useState(false);
  const handleDownload = () => {
    if (text !== "") {
      setIsDownload(true);
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setTimeout(() => {
        setIsDownload(false);
      }, 2000);
    }
  };

  const handleOnChange = (event) => {
    //console.log('On Change');
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#3f4958" }}
      >
        <h1
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control border-dark border-2"
            id="myBox"
            value={text}
            placeholder="Enter the text here"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1 border-dark border-2"
          onClick={handleUpClick}
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-secondary mx-1 my-1 border-dark border-2"
          onClick={handleLowClick}
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-warning mx-1 my-1 border-dark border-2"
          onClick={handleCapClick}
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Capitalize
        </button>
        {/* <button className="btn btn-warning mx-1 my-1 border-dark border-2" onClick={handleBoldClick}>Bold</button> */}
        <button
          className="btn btn-danger mx-1 my-1 border-dark border-2"
          onClick={handleClearClick}
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Clear Text
        </button>
        <button
          className="btn btn-success mx-1 my-1 border-dark border-2"
          onClick={handleCopyClick}
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Copy to clipboard
        </button>

        <button
          className="btn btn-light mx-1 my-1 border-dark border-2"
          onClick={handleDownload}
          //   style={{
          //     backgroundColor: ''
          //     color: props.mode === "light" ? "black" : "white",
          //   }}
        >
          Download
          {isDownload && (
            <video
              src={Download}
              type="video/mp4"
              style={{ width: 25 }}
              autoPlay
            />
          )}
        </button>
        {/* {isCopied && <div>Text Copied!</div>} */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text === "" ? 0 : text.split(".").length} sentences,
          {text === "" ? 0 : text.split(" ").length} words, {text.length}{" "}
          characters
        </p>
        <p>{0.008 * (text === "" ? 0 : text.split(" ").length)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text === "" ? "Text appears here" : text}</p>
      </div>
    </>
  );
};

export default TextForm;
