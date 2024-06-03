import * as React from 'react';
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {useNavigate}from "react-router-dom";
import {useDispatch} from 'react-redux';
import axios from 'axios';
import { setAllUsers, setCurrentUser } from "../Store/Actions/userActionn";
//import { Button } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import label from './label';
//import {Label}from "react";


import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';






const Login = () => {
  const dis =useDispatch (); //באמצעותה אנחנו שולחים פקודות ומידע לרידקס
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers()
},[]) //מערך ריק מציין שהuseEffect יתבצע רק כשהקומפוננטה עולה
   
 const getAllUsers = async () => {
     try{
         const {data} = await axios.get("https://dummyjson.com/users") ;
         setUsers(data.users);//מכניס את היוזרים למערך שמוגדר למעלה
        }
     catch(err){
            console.log("שגיאה", err);
         }  
 }

 
  

  let user={
     email:" ",
     password:" "
  }
let nav= useNavigate()
    const save=(e)=>{
   e.preventDefault()
        if(user.email=="admin" && user.password=="ad12min34"){
          dis(setAllUsers(users));
          dis(setCurrentUser({email:'admin', password:'ad12min34'}))
            nav('/user')
        }
        else{
         const user1 = users.filter(u => u.password === user.password);
         if(user1 != -1){
            dis(setCurrentUser(user1[0]))
         }
          nav('/ListToDo');
        }

    }
    
    
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
   }


     return ( <form onSubmit={save} >
         <div>
           <Box > 
            <div>
             <TextField
              label="Enter your Email"  sx={{ m: 1, width: '25ch' }} type="text "onChange={(e)=>user.email=e.target.value}>
                </TextField>

             </div>
             <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
               <OutlinedInput
               id="outlined-adornment-password"
               type={showPassword ? 'text' : 'password'}
               endAdornment={
              <InputAdornment position="end">

                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"  onChange={(e)=>user.password=e.target.value}/>
         </FormControl>

           </Box> 
         </div>
        
        
        <div><Button type="submit"  onClick={save} >הכנס</Button></div>
     </form>)

}
export default Login;
