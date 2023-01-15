import { AppBar, Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { grey } from "@mui/material/colors";
function Header() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#001e4f",
        }}
      >
        <Grid container mt={2} mb={2}>
          <Grid item xs={6} sm={6} md={8} lg={8}>
            <Typography
              variant="BODY2"
              sx={{ textAlign: "left", marginLeft: 10 }}
              component="h1"
            >
              Project Manager
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
          >
            <Button
              sx={{
                color: "#ffde05",
                "&:hover": {
                  color: "white",
                  fontWeight: 700,
                },
              }}
              variant="text"
            >
              ADMIN{" "}
            </Button>
            <Avatar sx={{ marginLeft: 3, bgcolor: grey[500] }}></Avatar>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
