// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState("")
  const [addFormData, setaddFormData] = useState({
    id: '',
    name: ''
  })

  const formHandler = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
  }
  return (
    <div className="container">

    <div className='app-container'>
      <h2>Todo Table</h2>
    <div className="inner">
    <form action="">

      <input id='idOne' name='id' placeholder='ID' required="required"/>
      <input type="text" name='name' placeholder='Name' required="required"/>
      <i className='fa fa-check'></i>
    </form>
    </div>
     <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>Name</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>324</td>
           <td>Usman Khan</td>
         </tr>
       </tbody>
     </table>
    </div>
    </div>
  );
}

export default App;
