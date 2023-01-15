import {
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
function Addtask(props) {
  const [taskname, setTaskName] = useState();

  const [code, setCode] = useState();
  const [desc, setDesc] = useState();
  const [catid, setCatid] = useState("default");
  const [handleby, setHandleby] = useState();
  const [completedate, setCompleteby] = useState();
  const [duedate, setDuedate] = useState();
  const [staus, setStatus] = useState("default");
  const handlesubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <Box sx={{ marginRight: 2, marginTop: 12 }}>
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

              marginRight: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            component="h2"
          >
            <ArrowForwardIosIcon sx={{ color: "#001e4f" }} /> Create Task
          </Typography>
        </Box>

        <form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handlesubmit}
        >
          <Grid container mt={5} mb={2}>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <TextField
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Task Code
                  </Typography>
                }
                id="standard-size-normal"
                value={code}
                variant="standard"
                onChange={(e) => setCode(e.target.value)}
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
              xs={3}
              sm={3}
              md={3}
              lg={3}
            >
              <TextField
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Task Name
                  </Typography>
                }
                id="standard-size-normal"
                value={taskname}
                variant="standard"
                onChange={(e) => setTaskName(e.target.value)}
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
              xs={6}
              sm={6}
              md={6}
              lg={6}
            >
              <TextField
                fullWidth
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Task Description
                  </Typography>
                }
                id="standard-size-normal"
                value={desc}
                variant="standard"
                onChange={(e) => setDesc(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  marginRight: 11,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid
              sx={{
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
              mt={4}
            >
              <TextField
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Handle By
                  </Typography>
                }
                id="standard-size-normal"
                value={handleby}
                variant="standard"
                onChange={(e) => setHandleby(e.target.value)}
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
              xs={3}
              sm={3}
              md={3}
              lg={3}
              mt={4}
            >
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  displayEmpty
                  fullWidth
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
                  <MenuItem value="MANUFACTURER">Manufacturer</MenuItem>
                </Select>
              </FormControl>
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
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  color="primary"
                  value={catid}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {" "}
                  <MenuItem value="default">Select Task Status</MenuItem>
                  <MenuItem value="PENDING">Pending</MenuItem>
                  <MenuItem value="INPROGRESS">In-Progress</MenuItem>
                  <MenuItem value="COMPLETED">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              mt={4}
            >
              <TextField
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Due Date
                  </Typography>
                }
                id="standard-size-normal"
                value={duedate}
                defaultValue="2017-05-24"
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
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              mt={4}
            >
              <TextField
                id="standard-size-normal"
                value={completedate}
                defaultValue="2017-05-24"
                label={
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Complete Date
                  </Typography>
                }
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                onChange={(e) => setCompleteby(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  marginRight: 1,
                  borderRadius: 1,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            mt={4}
            mb={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
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
              xs={2}
              sm={2}
              md={2}
              lg={2}
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
                    color: "#001e4f",
                    fontWeight: 700,
                  },
                }}
                variant="text"
                type="submit"
              >
                Add Task{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default Addtask;
