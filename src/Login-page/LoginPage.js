import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { shadows } from '@mui/system';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';


export default function LoginPage() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    // const userToken = 123
    // const token = Jwttoken({userToken})
    // console.log(token, "I am token")

    const handleChangeUserName = (e) => {
        const value = e.target.value
        setUserName(value)
        console.log(value, 'hi i am cmg')
        // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!value) {
            setUserError("Please Enter your username")
        } else {
            setUserError('')

        }
    }
    const handleChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value)
        console.log(value, 'i am there')
        if (!value) {
            setPasswordError('Password is requried')
        } else {
            setPasswordError('')
        }
    }
    const SubmitDetails = (e) => {
        e.preventDefault()
        if (username !== '' && password !== '') {
            const cookies = new Cookies();
            cookies.set('token', JSON.stringify({ username, password }), { path: '/' })
            navigate('/Three-components')
        } else {
            setUserError('Enter the Email')
            setPasswordError('Enter the Password')
        }

    }
    return (
        <div className='Login-Form'>
            <Container component="main" sx={{ width: '38vw', height: '50vh' }}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxShadow: 3,
                        padding: '30px',
                        borderRadius: '25px', backgroundColor: 'white'
                    }}

                >
                    <Box component="form" onSubmit={SubmitDetails} noValidate sx={{ width: '28vw', height: '50vh' }}>


                        <Typography component="h1" variant="h4" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Sign in
                        </Typography>
                        {/* <h1><label>UserName</label></h1> */}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                            label="UserName"
                            id="outlined-size-small"
                            value={username}
                            size="small"
                            type='text'
                            onChange={handleChangeUserName}
                        />
                        <strong id='Error'>{userError}</strong>

                        {/* <h1><label>Password</label></h1> */}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                            label="Password"
                            id="outlined-size-small"
                            value={password}
                            size="small"
                            type='password'
                            onChange={handleChangePassword}
                        />
                        <strong id='Error'>{passwordError}</strong>

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <Button type='submit' fullWidth variant="contained"
                            endIcon={<SendIcon />} onClick={SubmitDetails}
                            sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>

        </div>

    )
}
