import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      }, 
      body:JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.inserteId){
          alert('Users added successfullly')
          form.reset();
        }
      })
  }

  return (
    <>

      <h1>SIMPLE CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='Your Name'/>
        <br />
        <br />
        <input type="email" name="email" id="" placeholder='Your Email'/>
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <h4>go to <Link to="/users">User</Link></h4>
    </>
  )
}

export default App
