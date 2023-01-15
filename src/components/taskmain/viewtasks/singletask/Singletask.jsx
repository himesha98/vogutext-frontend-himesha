import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { grey } from "@mui/material/colors";

import ErrorIcon from "@mui/icons-material/Error";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { EditContext } from "../../../../context/Context";
import { Navigate, useNavigate } from "react-router-dom";
function Singletask() {
  const [dropopen, setDropOpen] = useState(false);
  const { isFetching, dispatch } = useContext(EditContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const deleteItem = async (itemid) => {};
  const deleteAlert = () => {
    setDropOpen(true);
  };
  const edittask = () => {
    const task = {
      taskid: "#1234",
      name: "Frontend Web",
      desc: "developing the forntend",
      category: "1",
      handleby: "Sujeewa",
      due: "2023-11-18",
      complete: "2023-11-23",
      status: "PENDING",
    };
    dispatch({ type: "EDIT_SUCCESS", payload: task });
    navigate("/edittask");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={dropopen}
        onClick={() => {
          setDropOpen(false);
        }}
      >
        <Dialog
          open={dropopen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <ErrorIcon />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure ?
            </DialogContentText>
            <Typography variant="body5">
              You wil not be able to undo this action if you proceed?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                backgroundColor: grey[200],
                color: "#001eb9",
                "&:hover": {
                  backgroundColor: "#001eb9",
                  color: "white",
                  fontWeight: 700,
                },
              }}
              onClick={() => {
                setDropOpen(!dropopen);
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setDropOpen(!dropopen);
              }}
              autoFocus
              sx={{
                backgroundColor: "#001eb9",
                color: "white",
                "&:hover": {
                  backgroundColor: grey[200],
                  color: "#001eb9",
                  fontWeight: 700,
                },
              }}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Backdrop>

      <Grid container mt={5} mb={2}>
        <Grid container xs={11} sm={11} md={11} lg={11}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            {" "}
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Task ID
                </Typography>
              }
              id="standard-read-only-input"
              value="#1234"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Task Name
                </Typography>
              }
              id="standard-read-only-input"
              value="A Name"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
          >
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Task Desc
                </Typography>
              }
              id="standard-read-only-input"
              value="A Description about task"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Category ID
                </Typography>
              }
              id="standard-read-only-input"
              value="Task Category ID"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Handle By
                </Typography>
              }
              id="standard-read-only-input"
              value="Task Asignee"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Due Date
                </Typography>
              }
              id="standard-read-only-input"
              value="Due Date"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Complete date
                </Typography>
              }
              id="standard-read-only-input"
              value="Complete Date"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            <TextField
              fullWidth
              label={
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginTop: 1 }}
                >
                  Status
                </Typography>
              }
              id="standard-read-only-input"
              value="Task Status"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "white",
                marginRight: 1,
                borderRadius: 1,
                paddingLeft: 2,
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <IconButton
            variant="outlined"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon sx={{ color: "#001e4f" }} />
          </IconButton>
          <Menu
            id=""
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              sx={{
                "&:hover": {
                  backgroundColor: grey[200],
                  color: "#001e4f",
                  fontWeight: 700,
                },
              }}
              onClick={edittask}
            >
              Edit Task
            </MenuItem>
            <MenuItem
              sx={{
                "&:hover": {
                  backgroundColor: grey[200],
                  color: "#001e4f",
                  fontWeight: 700,
                },
              }}
              onClick={deleteAlert}
            >
              Delete Task
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Singletask;
