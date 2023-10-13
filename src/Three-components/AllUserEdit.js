import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';

export default function AllUserEdit({ id, users, setUsers, editIndex, index }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [userEditField, setUserEditField] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    mobileNumber: '',
  })
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditBrands = () => {
    if (userEditField.FirstName !== '' && userEditField.LastName !== '' &&userEditField.email !== '' &&userEditField.mobileNumber !== '') {
      setUsers((previousValue) => {
        return previousValue.map((users,index) =>{
          if(index === editIndex - 1){
            return{...users, ...userEditField}
          }
          return users
        })
      })
    }
  }

  return (
    <div>
      <div>
        {/* <Button onClick={handleOpen} endIcon={<SendIcon />}>Edit </Button> */}


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50vw', flexDirection: 'column', gap: '20px'
          }}>
            <TextField
              label="FirstName"
              id="outlined-size-small"
              value={userEditField.FirstName}
              size="small"
              type='text'

              onChange={(e) => setUserEditField({ ...userEditField, FirstName: e.target.value })}
            />
            <TextField
              label="LastName"
              id="outlined-size-small"
              value={userEditField.LastName}
              size="small"
              type='text'

              onChange={(e) => setUserEditField({ ...userEditField, LastName: e.target.value })}
            />
            <TextField
              label="Email"
              id="outlined-size-small"
              value={userEditField.email}
              size="small"
              type='email'

              onChange={(e) => setUserEditField({ ...userEditField, email: e.target.value })}
            />
            <TextField
              label="Mobile Number"
              id="outlined-size-small"
              value={userEditField.mobileNumber}
              size="small"
              type='number'

              onChange={(e) => setUserEditField({ ...userEditField, mobileNumber: e.target.value })}
            />
            <div>
              <Button variant="contained"
                onClick={() => handleEditBrands(index)}>
                Edit
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}
                onClick={handleClose}>
                cancel
              </Button>
            </div>


          </Box>
        </Modal>
      </div>
    </div>
  )
}
