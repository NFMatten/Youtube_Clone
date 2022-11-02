import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const SearchBar = (props) => {
	const { setQuery } = props;
	const [input, setInput] = useState({});
	const [user] = useAuth();

	const hanldeChange = (e) => {
		const { name, value } = e.target;
		setInput((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleOnClick = () => {
		setQuery(input.search);
	};

	return (
		<>
			{user && (
				<>
					<TextField
						type="search"
						variant="outlined"
						onChange={hanldeChange}
						name="search"
						value={input.search || ""}
						placeholder="Search..."
					/>
					<Button variant="contained" onClick={handleOnClick}>
						Search
					</Button>
				</>
			)}
		</>
	);
};

export default SearchBar;
