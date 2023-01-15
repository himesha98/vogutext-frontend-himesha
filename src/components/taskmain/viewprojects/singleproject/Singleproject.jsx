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
import CloseIcon from "@mui/icons-material/Close";

import EditIcon from "@mui/icons-material/Edit";
import { grey, yellow } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from "@mui/icons-material/Error";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { EditContext } from "../../../../context/Context";
import { Link } from "react-router-dom";
import Singletask from "../../viewtasks/singletask/Singletask";
function Singleproject() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [dropopen, setDropOpen] = useState(false);
  const { isFetching, dispatch } = useContext(EditContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openProject, setOpenproject] = useState(false);
  const open = Boolean(anchorEl);

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
              onClick={() => {
                setDropOpen(!dropopen);
              }}
              sx={{
                backgroundColor: grey[200],
                color: "#001eb9",
                "&:hover": {
                  backgroundColor: "#001eb9",
                  color: "white",
                  fontWeight: 700,
                },
              }}
            >
              Yes
            </Button>
            <Button
              sx={{
                backgroundColor: "#001eb9",
                color: "white",
                "&:hover": {
                  backgroundColor: grey[200],
                  color: "#001eb9",
                  fontWeight: 700,
                },
              }}
              onClick={() => {
                setDropOpen(!dropopen);
              }}
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Backdrop>
      <Box
        sx={{
          backgroundColor: grey[200],
          marginTop: 1,
          paddingTop: 1,

          borderRadius: 3,
          "&:hover": {
            backgroundColor: grey[300],
            color: "#001e4f",
            fontWeight: 700,
            cursor: "pointer",
          },
        }}
      >
        <Grid
          container
          mt={5}
          mb={2}
          sx={{
            paddingLeft: 5,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => setOpenproject(true)}
        >
          <Grid container xs={11} sm={11} md={11} lg={11}>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
            >
              {" "}
              <TextField
                label={
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: 1, marginTop: 1 }}
                  >
                    Project ID
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
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
            >
              <TextField
                label={
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: 1, marginTop: 1 }}
                  >
                    Project Name
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
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
            >
              <TextField
                label={
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: 1, marginTop: 1 }}
                  >
                    Category
                  </Typography>
                }
                id="standard-read-only-input"
                value="Project Category ID"
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
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
            >
              <TextField
                label={
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: 1, marginTop: 1 }}
                  >
                    Owner Id
                  </Typography>
                }
                id="standard-read-only-input"
                value="Project Asignee"
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
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
            >
              <TextField
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
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
            >
              <TextField
                label={
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: 1, marginTop: 1 }}
                  >
                    Status
                  </Typography>
                }
                id="standard-read-only-input"
                value="Project Status"
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
        </Grid>
        {openProject ? (
          <>
            <Grid
              container
              mt={3}
              sx={{
                backgroundColor: yellow[600],
                paddingTop: 1,
                paddingBottom: 1,
              }}
            >
              {" "}
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
                {" "}
                <Typography
                  sx={{ textAlign: "left", marginLeft: 0, fontSize: 24 }}
                >
                  Task list
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
              >
                {" "}
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                item
                xs={2}
                sm={2}
                md={2}
                lg={2}
              >
                {" "}
                <Link style={{ textDecoration: "none" }} to="/createtask">
                  <Button
                    sx={{
                      color: grey[200],
                      backgroundColor: "#001e4f",
                      paddingLeft: 3,
                      paddingRight: 3,
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: grey[200],
                        color: "#001e4f",
                        fontWeight: 700,
                      },
                    }}
                    variant="text"
                  >
                    New Task{" "}
                  </Button>
                </Link>
                <IconButton
                  variant="outlined"
                  onClick={() => {
                    setOpenproject(false);
                  }}
                >
                  <CloseIcon sx={{ color: "#001EB9" }} />
                </IconButton>
              </Grid>
            </Grid>
            <Grid
              container
              mb={2}
              sx={{ backgroundColor: yellow[600], paddingLeft: 2 }}
            >
              <Singletask />
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Box>
    </React.Fragment>
  );
}

export default Singleproject;
