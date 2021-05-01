import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BlockIcon from '@material-ui/icons/Block';

import withHocs from './DirectorsDialogHoc'

class DirectorsDialog extends React.Component {

  handleDelete = () => {
    const { id, handleClose, deleteDirector } = this.props;
    deleteDirector(id);
    handleClose();
  }

  render() {
    const { open, handleClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Вы точно хотите удалить этот элемент?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Если вы нажмёте "Подтвердить", элемент будет удалён
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <BlockIcon /> Отмена
          </Button>
          <Button onClick={this.handleDelete} color="primary" autoFocus>
            <DeleteForeverIcon /> Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withHocs(DirectorsDialog);
