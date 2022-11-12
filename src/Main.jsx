import React from "react";
import { useState } from "react";

const Main = () => {
  const [message, SetMessage] = useState("");
  const [result, SetResult] = useState("");

  const inputHandler = (e) => {
    SetMessage(e.target.value);
  };

  const submitHandler = () => {
    isPalindrome();
  };

  const isPalindrome = () => {
    const revMessage = message.split("").reverse();
    if (
      message.toLowerCase().trim() === revMessage.join("").toLowerCase().trim()
    ) {
      SetResult(`Hurray😁😁 ${message} is a Palindrome word`);
    } else {
      SetResult(`Oh no😞😞 ${message} is not a Palindrome word`);
    }
    if (message === "") {
      SetResult(`Please enter a valid word`);
    }
  };

  return (
    <main>
      <h1>Is Palindrome?</h1>
      <div className="content">
        <p>
          Do you want to check if your name, initials or any fun word is a{" "}
          <span>Palindrome</span>? <br /> All you have to do is enter the word
          below.
        </p>
        <p>
          <em>Don't know what palindrome is?</em> <br />
          Read more <a href="https://en.wikipedia.org/wiki/Palindrome">here</a>.
        </p>
        <label htmlFor="word"> Enter the word:</label>
        <input
          onChange={inputHandler}
          type="text"
          id="word"
          placeholder="e.g Racecar"
        />
        <button onClick={submitHandler}>Submit</button>
        <small>
          <p>{result}</p>
        </small>
      </div>
    </main>
  );
};

export default Main;
