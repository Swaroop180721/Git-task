import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export default function UsersPopAdd({input,setInput,open,setOpen,handleAddBrands,error}) {

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            {/* <div>

            </div> */}
            <Button onClick={handleOpen} variant='contained'>Add </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: "column" }}>

                    <TextField
                        label="FirstName"
                        id="outlined-size-small"
                        value={input.FirstName}
                        size="small"
                        type='text'

                        onChange={(e) => setInput({ ...input, FirstName: e.target.value })}
                    />
                    <TextField
                        label="LastName"
                        id="outlined-size-small"
                        value={input.LastName}
                        size="small"
                        type='text'

                        onChange={(e) => setInput({ ...input, LastName: e.target.value })}
                    />
                    <TextField
                        label="Email"
                        id="outlined-size-small"
                        value={input.email}
                        size="small"
                        type='email'
                        helperText={error}
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        
                    />
                    <strong>{error}</strong>
                    <TextField
                        label="Mobile Number"
                        id="outlined-size-small"
                        value={input.mobileNumber}
                        size="small"
                        type='number'

                        onChange={(e) => setInput({ ...input, mobileNumber: e.target.value })}
                    />

                    <Button variant="contained" endIcon={<SendIcon />}
                        onClick={handleAddBrands} sx={{ margin: "18px 0px" }}>
                        ADD
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}
                        onClick={handleClose}>
                        cancel
                    </Button>

                </Box>
            </Modal>
        </div>
    )
}
