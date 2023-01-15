import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { grey, yellow } from "@mui/material/colors";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Addproject(props) {
  const [name, setName] = useState();

  const [id, setId] = useState();
  const [catid, setCatid] = useState("default");
  const [ownerid, setOwnerid] = useState();
  const [duedate, setDuedate] = useState();
  const [staus, setStatus] = useState("default");
  const handlesubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <Box mt={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margintRight: 2,
          }}
        >
          <Typography
            variant="BODY4"
            sx={{
              textAlign: "left",
              color: "#001e4f",
              marginLeft: 5,
              marginRight: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            component="h2"
          >
            <ArrowForwardIosIcon sx={{ color: "#001e4f" }} /> Create Project
          </Typography>
        </Box>

        <form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handlesubmit}
        >
          <Grid
            container
            mt={5}
            mb={2}
            sx={{ marginLeft: 5, paddingRight: 10 }}
          >
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              mt={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <TextField
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Project Id
                  </Typography>
                }
                id="standard-size-normal"
                value={id}
                variant="standard"
                onChange={(e) => setId(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  marginRight: 1,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              mt={1}
            >
              <TextField
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Project Name
                  </Typography>
                }
                id="standard-size-normal"
                value={name}
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  marginRight: 1,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              mt={1}
            >
              <TextField
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Owner id
                  </Typography>
                }
                id="standard-size-normal"
                value={ownerid}
                variant="standard"
                onChange={(e) => setOwnerid(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  marginRight: 1,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                marginRight: 1,
              }}
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              mt={4}
            >
              {" "}
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  fullWidth
                  displayEmpty
                  id="demo-simple-select"
                  color="primary"
                  value={catid}
                  label="Category"
                  onChange={(e) => setCatid(e.target.value)}
                >
                  {" "}
                  <MenuItem value="default">Select category</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="ENGINEERING">Engineering</MenuItem>
                  <MenuItem value="MANUFACTURER">Manufacturing</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                marginLeft: 1,
              }}
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              mt={4}
            >
              <TextField
                id="standard-size-normal"
                value={duedate}
                defaultValue="2017-05-24"
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Due Date
                  </Typography>
                }
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                onChange={(e) => setDuedate(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  marginRight: 1,
                  borderRadius: 1,
                }}
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                marginLeft: 1,
              }}
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              mt={4}
            >
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  displayEmpty
                  id="demo-simple-select"
                  color="primary"
                  value={staus}
                  label="Category"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {" "}
                  <MenuItem value="default">Set Project Status</MenuItem>
                  <MenuItem value="PENDING">Pending</MenuItem>
                  <MenuItem value="COMPLETED">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            mt={5}
            mb={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginRight: 10,
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
            >
              <Button
                sx={{
                  color: grey[200],
                  backgroundColor: "#001e4f",
                  paddingLeft: 3,
                  paddingRight: 3,
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: yellow[600],
                    color: "#001eb9",
                    fontWeight: 700,
                  },
                }}
                variant="text"
                type="submit"
              >
                Add Project{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default Addproject;
