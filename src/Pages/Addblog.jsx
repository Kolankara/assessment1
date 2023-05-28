import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";

export default function App() {
const { register, handleSubmit } = useForm();
  const onFormSubmit  = data => console.log(data);
  const onErrors = errors => console.error(errors);




  return (
    <div>
    <div className="bg-success">
      <Container className=" mt-3 pt-5">
        <h1 className="mt-2 text-center mb-5 bg-warning text-danger"><b>New Blog</b></h1>


<form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
  <container>
<div className="bg-warning text-center">
    <legend className='text-danger'><strong>Create a New Blog</strong></legend>
    <br/>
    <hr/>
    <br/>
  <label className="mb-4 text-danger" htmlFor=""><b>Blog Name</b></label>
  <input className="ms-3 bg-success text-light" type="text" name="Blog name" {...register('Blog name',{ required: "Blog name is required" })} id="" />
  <br/>
  <label className="text-danger " htmlFor=""><b>Description</b></label>
  <br/>  
  <textarea className="mb-3 ms-5 bg-success text-light" rows="3" cols="40" type="text" name="Description" {...register('Description',{ required: "Description is required" })} id=""></textarea>
  <br />
  <label className="mb-4 text-danger " htmlFor=""><b>Author Name</b></label>
  <input className="ms-3 bg-success text-light" type="text" name="Author name" {...register('Author name',{ required: "Author name is required" })} id="" />
  <br />
  <hr/>
   <button className="mb-2 btn btn-primary" type="submit">Submit</button>
   
   </div>
   </container>
</form>






      </Container>
    
      </div>
      <footer className="mb-5 bg-danger-subtle">like me</footer>
      </div>
  );
}
