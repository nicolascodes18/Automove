import React from 'react';
import { useForm } from "react-hook-form";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";

// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



async function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
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
    </>
  );
}

export default App;
