import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { Link } from "react-router-dom";

// Klickbara knappar i navbaren.
const pages = ["Categories", "AddProduct", "About"];

// An appbar from Material UI
function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container className="nav-bar-container" maxWidth="xl">
        <Toolbar disableGutters>
          <SportsBasketballIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SPORTIFY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "true", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={`./pages/${page}`}
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
