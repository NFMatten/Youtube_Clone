import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const CommentForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <TextField
        id="outlined-multiline-flexible"
        label="Comment"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default CommentForm;
