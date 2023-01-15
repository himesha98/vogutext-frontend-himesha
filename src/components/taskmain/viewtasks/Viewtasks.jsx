import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { EditContext } from "../../../context/Context";

function Viewtasks(props) {
  const [filteredlist, setFilteredlist] = useState([]);
  const { isFetching, dispatch } = useContext(EditContext);

  return (
    <React.Fragment>
      <Box>
        <Grid container mt={5} mb={2} sx={{}}></Grid>
      </Box>
    </React.Fragment>
  );
}

export default Viewtasks;
