import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import UserAddButton from './UserAddButton';
import AllBrandEdit from './AllBrandEdit';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import BrandAddPop from './BrandAddPop';
import SendIcon from '@mui/icons-material/Send';
import BorderColorIcon from '@mui/icons-material/BorderColor';



export default function Brands() {
    const [inputBrands, setInputBrands] = useState({
        brandName: '',
        brandDiscription: '',
    })
    const [brands, setBrands] = useState([])
    const [editBrands, setEditBrands] = useState(null)
    const [open,setOpen] = useState(false)
    const [brandPopUp,setBrandPopUp] = useState(false)
    const [brandIndex, setBrandIndex] = useState(null)

    console.log(brands, 'I am brands')


    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
            align: 'left',
            headerAlign: 'left'
        },
    
        {
            field: 'brandsname',
            headerName: 'BrandName ',
            headerAlign: 'center',
            align: 'center',
            width: 150,
            editable: true,
        },
        {
            field: 'brandsdis',
            headerName: 'BrandDiscription ',
            headerAlign: 'center',
            align: 'center',
            width: 150,
            editable: true,
        },
        {
            field: "actions",
            type: "Edit",
            headerName: "Edit",
            //   flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
              <>
    
                <span endicon={<SendIcon />}
                onClick={()=>handleEditBrands(params.row.id)}>
                <BorderColorIcon/></span>
              </>  
    
                
            )
        }
    
    ];


    const handleAddBrands = () =>{
        if(inputBrands.brandName !=='' && inputBrands.brandDiscription !==''){
            if(editBrands === null){
                setBrands([...brands, {id:brands.length + 1,brandsname:inputBrands.brandName,brandsdis:inputBrands.brandDiscription}])
                console.log(inputBrands,"HI input")
            }else{
                const updatedBrands = [...brands]
                updatedBrands[editBrands] = {...updatedBrands[editBrands],brands:inputBrands}
                setBrands(updatedBrands)
                setEditBrands(null)
            }
            setInputBrands({brandName:'',brandDiscription:''})
        }
        setOpen(false)
    }   

    const handleEditBrands = (id) =>{
        // const updatedBrands = brands[index]  
        // setInputBrands(updatedBrands)
        // setEditBrands(index)
        setBrandIndex(id)
        console.log(id,"i am id")
        setBrandPopUp(true)
    }
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: "10%" }}>
                                <BrandAddPop
                                 handleAddBrands={handleAddBrands}
                                 inputBrands={inputBrands}
                                 setInputBrands={setInputBrands}
                                 open={open}
                                 setOpen={setOpen}
                                 />

            </div>

            <div style={{display:'flex',justifyContent:'center',margin:'10px'}}>

                <div>
                <DataGrid style={{ alignItems: 'center' }} className='Hello'
                    rows={brands}
                    columns={columns}
        
                />

                {brands.length > 0 ? <AllBrandEdit
                brands={brands}
                brandPopUp={brandPopUp}
                setBrandPopUp={setBrandPopUp}    
                setBrands={setBrands}
                brandIndex={brandIndex}
               /> : null}
                {/*  */}

                </div>
            </div>
           
        </div>
    )
}
