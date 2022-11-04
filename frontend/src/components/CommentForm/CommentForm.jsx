import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import useAuth from "../../hooks/useAuth";

const CommentForm = (props) => {
  const { addComment } = props;
  const [value, setValue] = useState("");
  const [user] = useAuth();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ user: user.id, text: value });
    setValue("");
  };

  return (
    <>
      {user ? (
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Comment"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      ) : (
        <div>Please sign in to comment</div>
      )}
    </>
  );
};

export default CommentForm;
