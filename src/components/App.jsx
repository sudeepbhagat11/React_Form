import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [heading, setHeading] = React.useState("");

  function setChange(event) {
    setName(event.target.value);
  }

  function changeHeading(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form onSubmit={changeHeading}>
        <input
          onChange={setChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
