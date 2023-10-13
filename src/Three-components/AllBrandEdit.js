
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';

export default function AllBrandEdit({brands,index,editBrands,setBrands,brandPopUp,setBrandPopUp,brandIndex,}) {
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
      const handleOpen = () => setOpen(false);
      const handleClose = () => setOpen(true);
      const [editInputBrands, setEditInputBrands] = useState({
        brandName:'',
        brandDiscription:'',
      })

      console.log(brandIndex,"brandIndex")
      useEffect(() =>{

        if(brands){
          console.log(brands && brands[brandIndex -1]?.brands,"I am Running")
          setEditInputBrands(brands && brands[brandIndex -1].brands);
        }
      },[brands,brandIndex,brandPopUp])

      // console.log(editBrands,"editBrands &&77")

      const handleEditBrands = () =>{
        if(editInputBrands.brandName !== '' && editInputBrands.brandDiscription !== ''){
            // const updatedBrands =[...brands]
            // updatedBrands[index] = editInputBrands
            // console.log(updatedBrands,"check with the brands value")
            // setEditBrands(updatedBrands)
            // setBrands(updatedBrands)
          setBrands((prevValue)=>{ let brand = prevValue
            brand[brandIndex - 1].brands = editInputBrands
            return brand

          })
          handleClose()
          setBrandPopUp(false)
        setEditInputBrands({
            brandName:'',brandDiscription:''
        })

        }
    }
    // console.log(brands,"check brands *****")

  return (
    <div>
      <div>
        <Button onClick={handleOpen} endIcon={<SendIcon />}>Edit </Button>

        <Modal
          open={brandPopUp}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ display: 'flex',
           justifyContent: 'space-between',
           width:'50vw',flexDirection:'column',gap:'20px' }}>
          <TextField
                    label="Brands"
                    id="outlined-size-small"
                    value={editInputBrands.brandName }
                    size="small"

                    onChange={(e) => setEditInputBrands({...editInputBrands, brandName: e.target.value })}
                />

                <TextField
                    label="Brand Discsription"
                    id="outlined-size-small"
                    value={editInputBrands.brandDiscription }
                    size="small"

                    onChange={(e) => setEditInputBrands({...editInputBrands,  brandDiscription: e.target.value })}
                />
            {/* <div> */}
            <Button variant="contained"
              onClick={() => handleEditBrands(index)}>
              Edit
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}
              onClick={handleClose}>
              cancel
            </Button>
            {/* </div> */}
            

          </Box>
        </Modal>

      </div>
    </div>
  )
}
