import React,{useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';




export default function App() {

  const [todo,setTodo] =useState([]);

  const getData =async ()=> {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await data.json();
    setTodo(jsonData)
  }

  useEffect(()=>{
    getData();
  },[])
 return(
  <div className='bg-secondary'>
    <Container className='mt-5 pt-5'>
      <h1 className='text-center mb-5 bg-danger text-light'>BLOG LIST</h1>

      <Table striped bordered hover className='bg-light'>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>Title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {todo.map((item,index)=> (
          <tr key={index}>
            <td><input type="checkbox"/></td>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  </div>
 )
}


