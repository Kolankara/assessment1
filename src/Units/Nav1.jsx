import { Link } from 'react-router-dom';


export default function Nav1()  {
 return (
    <div className="  pt-3 pb-3 bg-primary">
    <div>
 <nav>
   
   <h2 className="text-center fs-1"><i>NANDANA'S BLOG</i></h2>
   <hr/>
    
       <ul className="nav nav-pills flex-column flex-sm-row">
        
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page" to="/">Home</Link>
          </li>
      
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page" to="/add">Addblog</Link>
          </li>
       </ul>
       <hr/>

 </nav>
 </div>
 </div>
 );
};
