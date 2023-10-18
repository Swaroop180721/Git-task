import React, { useState } from 'react'
import UserAddButton from './UserAddButton'
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import AllEditInputFields from './AllEditInputFields';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import UserDeleteButton from './UserDeleteButton';
import UserEditButton from './UserEditButton';
import BorderColorIcon from '@mui/icons-material/BorderColor';





export default function Products() {

    const [inputProducts, setInputProducts] = useState('')
    const [products, setProducts] = useState([])
    const [editProducts, setEditProducts] = useState(null)  
    const [open, setOpen] = React.useState(false);
    const [popupopen, setpopupopen] = useState(false);
    const [editedIndex, seteditedIndex] = useState(null);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
            align: 'left',
            headerAlign: 'left'
        },
    
        {
            field: 'products',
            headerName: 'Products ',
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
    
                <span 
                onClick={()=>handleEditBrands(params.row.id)}>
                <BorderColorIcon/></span>
              </>  
    
                
            )
        }
    
    ];

    const StaticRows =[
        { id: 1, products: 'Puma', },
        { id: 2, products: 'Nike', },
        { id: 3, products: "Jordan's", },
        { id: 4, products: 'Gucci', },
        { id: 5, products: 'USPolo',},
    ];
    const dynamicRows = [...StaticRows,...products];
    console.log(dynamicRows,"dynamicRows")
    

    const handleAddBrands = () => {

        console.log("Hitting")
        if (inputProducts !== '') {
            if (editProducts === null) {
                console.log(inputProducts,"inputProducts")
                setProducts([...products, { id: dynamicRows.length + 1 , products: inputProducts }]);
            } else {
                const updatedProducts = [...products];
                console.log(updatedProducts,"updatedProducts")
                updatedProducts[editProducts] = { ...updatedProducts[editProducts], products: inputProducts };
                
                
                console.log(updatedProducts,"updatedProductsupdatedProducts")

                setProducts(updatedProducts);
                setEditProducts(null);
            }
            setInputProducts('');
        }

        setOpen(false)
    }


    const handleEditBrands = (id, name) => {
        console.log(id, "Check with the id of row");
        seteditedIndex(id);
        // setProductName(name)
        setpopupopen(true);
    }

    console.log(products, 'data');
    console.log(inputProducts, "date2");
    


    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: "10%" }}>



                <UserAddButton handleAddBrands={handleAddBrands}
                    inputProducts={inputProducts}
                    setOpen={setOpen}
                    open={open}
                    setInputProducts={setInputProducts} />

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '10px'
            }} >

                <DataGrid className='Hello'
                    rows={dynamicRows}
                    columns={columns}
                
                />
                <AllEditInputFields
                    editedIndex={editedIndex}   
                    popupopen = {popupopen}
                    setpopupopen={setpopupopen}
                    products={dynamicRows}
                    // setEditProducts={setEditProducts}
                    // editProducts={editProducts}
                    setProducts={setProducts} 
                    />

            </div>
        </div>
    )
}