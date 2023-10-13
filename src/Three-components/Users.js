import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
// import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserAddButton from './UserAddButton';
import UserEditButton from './UserEditButton';
import UserDeleteButton from './UserDeleteButton';
import AllUserEdit from './AllUserEdit';
import { DataGrid } from '@mui/x-data-grid';
import UsersPopAdd from './UsersPopAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';



// function createData( calories) {
//     return { calories};
// }

// const getLocalstorage = () =>{
//     let userss = localStorage.getItem('userss')
//     if(userss){
//         return JSON.parse(localStorage.getItem(userss))
//     }else {
//         return[]
//     }
// }


export default function Users() {

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
            align: 'left',
            headerAlign: 'left'
        },

        {
            field: 'firstname',
            headerName: 'FirstName ',
            headerAlign: 'center',
            align: 'center',
            width: 150,
            editable: true,
        },
        {
            field: 'lastname',
            headerName: 'LastName ',
            headerAlign: 'center',
            align: 'center',
            width: 150,
            editable: true,
        },
        {
            field: 'Email',
            headerName: 'Email ',
            headerAlign: 'center',
            align: 'center',
            width: 150,
            editable: true,
        },
        {
            field: 'number',
            headerName: 'Mobile Number ',
            headerAlign: 'center',
            align: 'center',
            width: 150,
            editable: true,
        },
        {
            field: "actionEdit",
            type: "Edit",
            headerName: "Edit",
            //   flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <>

                    <span style={{}}
                        onClick={() => handleEditBrands(params.row.id)}>
                        <EditIcon/></span>
                </>


            )
        },
        {
            field: "actionDelete",
            type: "Delete",
            headerName: "Delete",
            //   flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <>

                    <span 
                        onClick={() => handleDeleteBrands(params.row.id)}>
                        <DeleteIcon/></span>
                </>


            )
        }

    ];

    const [input, setInput] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        mobileNumber: '',
    })
    const [users, setUsers] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [open, setOpen] = React.useState(false);

    // useEffect(() =>{
    //     localStorage.setItem('users', JSON.stringify(users))
    // }, [users]);
    // const [RAAA, setiInput] = useState('')
    // const [iiinput, setiiInput] = useState('')




    const handleAddBrands = () => {
        if (input.FirstName !== '' && input.LastName !== '' && input.email !== '' && input.mobileNumber !== '') {
            if (editIndex === null) {
                const newIndex = users.length + 1
                setUsers((prevUsers) => [...prevUsers,
                {
                    id: newIndex,
                    firstname: input.FirstName,
                    lastname: input.LastName,
                    Email: input.email,
                    number: input.mobileNumber
                }])
            }
             else {
                const updatedUsers = [...users];
                // updatedUsers[editIndex] = {...updatedUsers[editIndex - 1], ...input};
                const userToUpdate = updatedUsers.find((user) => user.id === editIndex);

                if (userToUpdate) {
                    userToUpdate.firstname = input.FirstName;
                    userToUpdate.lastname = input.LastName;
                    userToUpdate.Email = input.email;
                    userToUpdate.number = input.mobileNumber;
                }
                setUsers(updatedUsers)
                setEditIndex(null)
            }
                
            setInput({ FirstName: '', LastName: '', email: '', mobileNumber: '' })
        }
        setOpen(false)
    }

    const handleEditBrands = (id) => {
        setEditIndex(id);
        const userToEdit = users.find((user) => user.id === id);

        if (userToEdit) {
            setInput({
                FirstName: userToEdit.firstname,
                LastName: userToEdit.lastname,
                email: userToEdit.Email,
                mobileNumber: userToEdit.number,
            });

            setOpen(true);
        }
    };


    const handleDeleteBrands = (id) => {
        const updatedUsers = users.filter((user)=> user.id !== id);
        setUsers(updatedUsers)
        setOpen(false)
    }

  
    return (
        <>
            <div>
                <div style={{ display: 'flex',  justifyContent: 'center', gap: '10px', marginTop: "10%" }}>

                    <UsersPopAdd
                        handleAddBrands={handleAddBrands}
                        input={input}
                        setInput={setInput}
                        open={open}
                        setOpen={setOpen}
                    />

                </div>
            </div>
            <>
                <div style={{
                    display: 'flex', justifyContent: "space-around", alignItems: 'center', margin: '10px',
                }}>
                    <div style={{ fontSize: '50px' }}>
                        <DataGrid className='Hello'
                            rows={users}
                            columns={columns}
                            rowKey="id"
                        />
                        <AllUserEdit
                            handleEditBrands={handleEditBrands}
                            input={input}
                            setInput={setInput}
                            users={users}
                            setUsers={setUsers}
                            editIndex={editIndex}
                        />
                        {/* <UserEditButton
                            open={open}
                            setOpen={setOpen}
                            handleDeleteBrands={handleDeleteBrands}
                        /> */}

                    </div>
                </div>
            </>
        </>
    )
}
