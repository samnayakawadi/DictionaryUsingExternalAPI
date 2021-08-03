import Voice from "./Components/Voice";
import Bar from "./Components/Bar";
import Definitions from "./Components/Definitions";

import "./styles.css";
import { React, useState } from "react";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const App = () => {
  const [input, setInput] = useState("");
  const [json, setJson] = useState(0);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const link = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + input;
    console.log(link);

    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        console.log(result[0]["word"]);
        setJson(result);
      });
  };

  return (
    <div className="App">
      <Bar />
      <Box m={1} pt={3}>
        <Box m={1} pr={1}>
          <TextField
            onChange={inputHandler}
            id="outlined-basic"
            label="Enter The Text"
            variant="outlined"
          />
        </Box>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          onClick={submitHandler}
        >
          Search
        </Button>
        <Box p={2}>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            href="http://csb-291nt.netlify.app/"
          >
            Refresh
          </Button>
        </Box>
      </Box>
      <div>
        <Voice json={json} key={1} />
        <Definitions json={json} />
      </div>
    </div>
  );
};

export default App;
