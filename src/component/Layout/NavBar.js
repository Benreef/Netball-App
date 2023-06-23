import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
	{ name: "About", path: "/About" },
	{ name: "Portfolio", path: "/Portfolio" },
	{ name: "SignUp", path: "/SignUp" },
	{ name: "Contact", path: "/Contact" },
];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h4'
						noWrap
						component='a'
						href='/'
						sx={{
							flexGrow: 1,
							display: { xs: "flex", lg: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".1rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Netball Stats
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "flex" },
							justifyContent: "flex-end",
						}}
					>
             <Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
              href="/"
						>
							Home
						</Button>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
              href="/About"
						>
							About
						</Button>
            <Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
              href="/SignUp"
						>
							Sign Up
						</Button>
            <Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
              href="/Login"
						>
							Log in
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;