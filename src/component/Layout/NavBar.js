// import * as React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";

// const pages = [
// 	{ name: "About", path: "/About" },
// 	{ name: "Portfolio", path: "/Portfolio" },
// 	{ name: "SignUp", path: "/SignUp" },
// 	{ name: "Contact", path: "/Contact" },
// ];

// const NavBar = () => {
// 	const [anchorElNav, setAnchorElNav] = React.useState(null);

// 	const handleOpenNavMenu = (event) => {
// 		setAnchorElNav(event.currentTarget);
// 	};

// 	const handleCloseNavMenu = () => {
// 		setAnchorElNav(null);
// 	};

// 	return (
// 		<AppBar>
// 			<Container maxWidth='xl'>
// 				<Toolbar disableGutters>
// 					<Typography
// 						variant='h4'
// 						noWrap
// 						component='a'
// 						href='/'
// 						sx={{
// 							flexGrow: 1,
// 							display: { xs: "flex", lg: "flex" },
// 							fontFamily: "monospace",
// 							fontWeight: 700,
// 							letterSpacing: ".1rem",
// 							color: "inherit",
// 							textDecoration: "none",
// 						}}
// 					>
// 						Netball Stats
// 					</Typography>
// 					<Box
// 						sx={{
// 							flexGrow: 1,
// 							display: { xs: "none", sm: "flex" },
// 							justifyContent: "flex-end",
// 						}}
// 					>
//              <Button
// 							onClick={handleCloseNavMenu}
// 							sx={{ my: 2, color: "white", display: "block" }}
//               href="/"
// 						>
// 							Home
// 						</Button>
// 						<Button
// 							onClick={handleCloseNavMenu}
// 							sx={{ my: 2, color: "white", display: "block" }}
//               href="/About"
// 						>
// 							About
// 						</Button>
//             <Button
// 							onClick={handleCloseNavMenu}
// 							sx={{ my: 2, color: "white", display: "block" }}
//               href="/SignUp"
// 						>
// 							Sign Up
// 						</Button>
//             <Button
// 							onClick={handleCloseNavMenu}
// 							sx={{ my: 2, color: "white", display: "block" }}
//               href="/Login"
// 						>
// 							Log in
// 						</Button>
// 					</Box>
// 				</Toolbar>
// 			</Container>
// 		</AppBar>
// 	);
// };

// export default NavBar;


import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h4' noWrap component={Link} to='/' sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', color: 'inherit', textDecoration: 'none' }}>
            Netball Stats
       </Typography>
        </Box>
        <Box>
          <Button component={Link} to='/' sx={{ color: 'white', marginRight: 2 }}>Home</Button>
          <Button component={Link} to='/GamePage'sx={{ color: 'white', marginRight: 2 }}>Start A Game</Button>
          <Button component={Link} to='/Create' sx={{ color: 'white', marginRight: 2 }}>Create A Team</Button>
          <Button component={Link} to='/About' sx={{ color: 'white', marginRight: 2 }}>About</Button>
          <Button component={Link} to='/SignUp' sx={{ color: 'white', marginRight: 2 }}>Sign Up</Button>
          <Button component={Link} to='/Login' sx={{ color: 'white', marginRight: 2 }}>Log In</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
