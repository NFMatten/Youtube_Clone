import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";

const NavBar = (props) => {
	const { setQuery } = props;

	const { logoutUser, user } = useContext(AuthContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1, paddingBottom: "2.5rem" }}>
			<AppBar position="static" sx={{ backgroundColor: "#333" }}>
				<Toolbar>
					<Box sx={{ display: "flex", flexGrow: 1, justifyContent: "start" }}>
						<Link
							sx={{ textDecoration: "none", alignSelf: "center" }}
							component={RouterLink}
							to="/"
						>
							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{
									display: { xs: "none", sm: "block" },
									color: "white",
								}}
							>
								YouTube
							</Typography>
						</Link>
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<SearchBar setQuery={setQuery} />
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "end",
						}}
					>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={"account-menu"}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				id={"account-menu"}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={isMenuOpen}
				onClose={handleMenuClose}
			>
				{user ? (
					<MenuItem onClick={logoutUser}>Logout</MenuItem>
				) : (
					<div>
						<MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
						<MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
					</div>
				)}
			</Menu>
		</Box>
	);
};

export default NavBar;
