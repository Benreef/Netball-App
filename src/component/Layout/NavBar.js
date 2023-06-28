import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";

const NavBar = ({ isLoggedIn }) => {
  return (
    <AppBar sx={{ backgroundColor: 'green' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h4' noWrap component={Link} to='/' sx={{ fontFamily: 'Arial', fontWeight: 700, letterSpacing: '.1rem', color: 'inherit', textDecoration: 'none' }}>
            Netball Stats!
          </Typography>
        </Box>
        <Box>
          <Button component={Link} to='/About' sx={{ color: 'white', marginRight: 2 }}>Home</Button>
          <Button component={Link} to='/' sx={{ color: 'white', marginRight: 2 }}>Start A Game</Button>
          <Button component={Link} to='/Create' sx={{ color: 'white', marginRight: 2 }}>Create A Team</Button>
          {/* <Button component={Link} to='/About' sx={{ color: 'white', marginRight: 2 }}>About</Button> */}
          {isLoggedIn ? (
            <Button component={Link} to='/Logout' sx={{ color: 'white', marginRight: 2 }}>Log Out</Button>
          ) : (
            <>
              <Button component={Link} to='/SignUp' sx={{ color: 'white', marginRight: 2 }}>Sign Up</Button>
              <Button component={Link} to='/Login' sx={{ color: 'white', marginRight: 2 }}>Log In</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

