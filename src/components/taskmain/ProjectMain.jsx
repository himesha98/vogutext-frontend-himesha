import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { blue, grey, yellow } from "@mui/material/colors";

import ViewProjects from "./viewprojects/Viewprojects";
import { Link } from "react-router-dom";
function ProjectMain() {
  const [title, setTitle] = useState("Project Manager");
  const [param, setParam] = useState("");
  const [filteredlist, setFilteredlist] = useState([]);

  return (
    <React.Fragment>
      <Box mt={15}>
        <>
          <Grid container mb={2}>
            <Grid item xs={5} sm={5} md={5} lg={5}>
              {" "}
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left",
                  color: "#001e4f",

                  marginLeft: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                Current Projects
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
            ></Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
            >
              <Link style={{ textDecoration: "none" }} to="/createproject">
                <Button
                  sx={{
                    color: grey[200],
                    backgroundColor: "#001e4f",
                    paddingLeft: 3,
                    paddingRight: 3,
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: yellow[600],
                      color: "#001e4f",
                      fontWeight: 700,
                    },
                  }}
                  variant="text"
                >
                  New Project{" "}
                </Button>
              </Link>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={1}
              sm={1}
              md={1}
              lg={1}
            ></Grid>
          </Grid>

          <>
            <ViewProjects />
          </>
        </>
      </Box>
    </React.Fragment>
  );
}

export default ProjectMain;
