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
import React, { useContext, useEffect, useState } from "react";

import { EditContext } from "../../../context/Context";
import Singleproject from "./singleproject/Singleproject";

function ViewProjects(props) {
  return (
    <React.Fragment>
      <Box sx={{ marginRight: 5 }}>
        <Grid container mt={5} mb={0}>
          <Singleproject />
          <Singleproject />
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default ViewProjects;
