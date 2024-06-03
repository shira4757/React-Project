import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect }from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { colors } from "@mui/material";

const ListToDo = () => {
    const dis =useDispatch ();
    const [task, setTask] = useState([]);
    useEffect(()=>{
      getAllTasks()
   },[]) 
      
   const currentUser = useSelector(state => state.userReducer.currentUser);
    const getAllTasks = async() => {
        try{
            const {data} =await axios.get("https://dummyjson.com/todo");
            console.log(15,data);
            if(currentUser.password === 'ad12min34')
                setTask([...data.todos]);
            else{
            const n = data.todos.filter(t => t.userId === currentUser.id);
            console.log(25, n);
         
                 setTask([...data.todos.filter(t => t.userId === currentUser.id)]);}
        }
        catch{

            }  
    }

    const deleteTask = (id) => {
        fetch('https://dummyjson.com/todos/'+id, {
       method: 'DELETE',
  
       })
     .then(res => res.json())
     .then(console.log);
     const copy = task.filter(task => task.id != id)
     setTask([...copy.sort((a,b) =>a.id - b.id)]);
    }

    const updateTask = (id) => {
        const index = task.findIndex(t => t.id === id);
        const tmpTask = {...task[index], completed:true};
        console.log(37, index);
        console.log((38, task));
        console.log(tmpTask);
        const tmpArr = [...task.filter(t => t.id !==id), tmpTask]
        setTask([...tmpArr.sort((a,b) =>a.id - b.id)]);
        }


        const commonStyles = {
            bgcolor: 'background.paper',
            m: 1,
            //borderColor: 'text.primary',
            //width: '95rem',
            width:'98%',
            height: '12%',
            //color:'blue'
            
          };


          const color ={color: 'Dodgerblue'} ;
        
    return ( <>
        {task.length > 0 ? task.map(t => {
            return <Box  sx={{ ...commonStyles, borderBottom: 1, borderRight: 1, borderLeft: 1 ,borderRadius: '16px',borderColor: 'primary.main'}}>
                
                <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={() => deleteTask(t.id)}>מחק משימה</Button>
               { !t.completed && <Button variant="outlined" onClick={() => updateTask(t.id)}>השלמתי את המשימה</Button>} 
                <p> {t.todo} כותרת </p>
              {t.completed &&  <p>  המשימה הושלמה </p>} 
            </Box>
        })
        :
        
        <h1 style={color}> אין משימות למשתמש</h1>
        }
    </> );
}
 
export default ListToDo;