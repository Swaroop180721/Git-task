import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export default function BrandAddPop({handleAddBrands,setInputBrands,inputBrands,brands,open,setOpen}) {
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
            <Button onClick={handleOpen} variant='contained'>Add </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: "column" }}>

                    <TextField
                        label="Brands"
                        id="outlined-size-small"
                        value={inputBrands.brandName}
                        size="small"

                        onChange={(e) => setInputBrands({...inputBrands, brandName: e.target.value })}
                    />

                    <TextField
                        label="BrandDiscsription"
                        id="outlined-size-small"
                        value={inputBrands.brandDiscsription}
                        size="small"

                        onChange={(e) => setInputBrands( {...inputBrands,brandDiscription:e.target.value} )}
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
