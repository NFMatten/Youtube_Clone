import React, { useState } from "react";
import { Search, StyledInputBase } from "../SearchBar/SearchBar.styled";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
	const { setQuery } = props;
	const [input, setInput] = useState({});

	const hanldeChange = (e) => {
		const { name, value } = e.target;
		setInput((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleOnClick = () => {
		console.log("onClick", input.search);
		setQuery(input.search);
	};

	return (
		<Search>
			<StyledInputBase
				type="search"
				name="search"
				value={input.search || ""}
				placeholder="Search…"
				onChange={hanldeChange}
				InputProps={{
					endAdornment: (
						<IconButton
							sx={{ color: "#fff" }}
							size="large"
							aria-label="search"
							onClick={handleOnClick}
						>
							<SearchIcon />
						</IconButton>
					),
				}}
			/>
		</Search>
	);
};

export default SearchBar;
