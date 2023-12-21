import { bool, func } from "prop-types";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const CardDeleteDialog = ({ isDialogOpen, onDelete, onChangeDialog }) => {
  return (
    <>
      <Dialog
        open={isDialogOpen}
        onClose={onChangeDialog}
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delet this project?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {" "}
            This action will completely delete the project and all its data from
            the database and it will not be possible to retrieve the card
            afterwards{" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onChangeDialog} color="error">
            Cancel
          </Button>
          <Button onClick={onDelete} color="info">
            Delete Project
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CardDeleteDialog.propTypes = {
  isDialogOpen: bool.isRequired,
  onChangeDialog: func.isRequired,
  onDelete: func.isRequired,
};

export default CardDeleteDialog;
