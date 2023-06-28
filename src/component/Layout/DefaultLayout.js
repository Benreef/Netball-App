import React from "react";
import { Container, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const DefaultLayout = ({ children }) => {
	return (
		<Container>
			<Box
				sx={{
					margin: '100px',
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					// marginTop: '150px'
					// : "1vh", // adjust as needed
				}}
		
			>
				{children}
			</Box>
		</Container>
	);
};

export default DefaultLayout;