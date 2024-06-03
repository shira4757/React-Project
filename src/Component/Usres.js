import { useEffect, useState } from "react"
import axios from 'axios'
import { useSelector } from "react-redux";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Button from '@mui/material/Button';
import { colors } from "@mui/material";

  
const Users = () => {
    const orginalusers = useSelector(state => state.userReducer.users);
    const [users, setUsers] = useState(orginalusers)
    const sort =() => {
      setUsers( [...orginalusers.sort((a, b) => a.age - b.age)]);
    }
    const filter = () => {
      setUsers(...[orginalusers.filter(u => u.gender === 'male')])  ;
    }

    return ( <>
        <Button onClick={sort} >מיין לפי גיל</Button>
        <Button onClick={filter}>סנן רק זכרים</Button>
    {
        users && users.map(u => {
            return <div  > 
             <Divider>
        <Chip label={`${u.firstName} ${u.lastName}`} size="small" variant="outlined"icon={<FaceIcon />} color="primary" />
      </Divider>
            <p>שם פרטי {u.firstName}</p>
            <p>שם משפחה{u.lastName}</p>
            <p>גיל{u.age}</p>
            <p>תאריך לידה {u.birthDate}</p>
            <p>מין{u.gender}</p>
            <p>אימייל{u.email}</p>
        </div>
        }) 
    }

    </> );
}
 
export default Users;
