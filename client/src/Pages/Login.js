import { useForm } from "react-hook-form";
import React from 'react';
import axios from 'axios';


import { Button, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";

async function getUser() {
    const response = await axios('http://localhost:3001/')
    console.log(response.data);
}

export default function Login() {
    getUser()


    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    const email = 'nicolasgomes56@gmail.com'
    const senha = '12345'
    const onSubmit = data => {
        // console.log(data);

        console.log("Usuario Cadastrado");
        axios.post('http://localhost:3333/users', {
            email: data.email,
            senha: data.senha
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <Box component="span" width="50vw" height="40vh" m={1} display="flex" justifyContent="center" alignItems="center" border={1} >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        label="E-mail"
                        variant="outlined"
                        type="email"
                        {...register("email")}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    {/* <EmailOutlinedIcon /> */}
                                </InputAdornment>
                            )
                        }}
                    />

                    <TextField
                        label="Senha"
                        variant="outlined"
                        type="password"
                        {...register("senha")}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    {/* <LockOutlinedIcon /> */}
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button variant="contained" type="submit">Default</Button>
                </form>
            </Box>
        </>
    )
}