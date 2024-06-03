import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( <>
     <nav>
        <ul>
          <li><Link to="users">משתמשים</Link></li>
          <li><Link to="listToDo">מטלות</Link></li>
        </ul>
      </nav>

     </>);
}
 
export default NavBar;