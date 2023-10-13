import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';
import Products from './Products';

export default function AllEditInputFields({ setpopupopen, editedIndex,products, index ,setProducts,popupopen}) {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);


  const handleClose = () => {
    setOpen(true);
    console.log('close')
  }

  const [editInput, setEditInput] = useState();
  useEffect(()=>{
    console.log(products[editedIndex-1]?.products,"Abhi check")
    setEditInput(products && products[editedIndex-1]?.products);

  },[products, editedIndex, popupopen])
  console.log(editInput,"products[editedIndex-1].products value")

  const handleEditBrands = () => {
    console.log(products,editInput,"onclick edit buttin");
    if(editInput !== ''){
      // const updatedProducts = [...products]
      //           updatedProducts[index] = editInput
      //           setProducts(updatedProducts)
      //               setEditProducts(null)
      setProducts((previousValue)=>{ let data =  previousValue
        data[editedIndex - 1].products = editInput
      return data})
                    handleClose()
                    setpopupopen(false);  
                setEditInput('')
    }
    
}

  return (
    <div>
      <div>
        {/* <Button onClick={handleOpen} endIcon={<SendIcon />}>edit </Button> */}

        <Modal
          open={popupopen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <Box sx={style} style={{ display: 'flex', justifyContent: 'space-around',width:'50vw' }}>
            <TextField
              label="Edit Products"
              id="outlined-size-small"
              value={editInput}
              size="small"
              type='text'

              onChange={(e) =>setEditInput(e.target.value)}
            />
            <Button variant="contained"
              onClick={() => handleEditBrands(index)}>
              Edit
              
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}
              onClick={handleClose}>
              cancel
            </Button>
          </Box>
        </Modal>

      </div>
    </div>
  )
}
