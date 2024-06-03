import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Users from './Component/Usres';
import ListToDo from './Component/ListToDo';

function App() {
  return (
    <div className="App">

     <Routes>
      <Route path='user' element={<Users/>}/>
      <Route path ='/' element={<Login/>}/>
      <Route path = 'listToDo' element={<ListToDo/>}/>
     </Routes>


    </div>
  );
}

export default App;
