import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import { Fragment } from "react/cjs/react.production.min";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    ID: "",
    fullName: "",
  });

  const [editFormData, setEditFormData] = useState({
    ID: "",
    fullName: "",
  })

  const [editContactId, setEditContactId] = useState(null);

  // This will handle the form
  const formHandle = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const editFormHandle = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const formSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      ID: addFormData.ID,
      fullName: addFormData.fullName,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault(); 

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      ID: editFormData.ID,
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContacts[index] = editedContact;


    setContacts(newContacts);
    setEditContactId(null)

  }

  const clickHandle = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);


    const formValues = {
      fullName: contact.fullName,
      ID: contact.ID,
    }

    setEditFormData(formValues)
  };

  return (
    <div className="app-container">
      <div className="center">
        <h2>Table</h2>
        <form action="" onSubmit={formSubmit}>
          <div className="inner">
            <input
              id="first_input"
              type="number"
              name="ID"
              required="required"
              placeholder="ID"
              autoFocus
              onChange={formHandle}
            />

            <input
              type="text"
              name="fullName"
              required="required"
              onChange={formHandle}
              placeholder="Full Name"
            />

            <i className="fa fa-check" type="submit" onClick={formSubmit}></i>
          </div>
        </form>
        <br />
        <form action="" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow editFormData={editFormData}
                      editFormHandle={editFormHandle}
                    />
                  ) : (
                    <ReadOnlyRow contact={contact} clickHandle={clickHandle} />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default App;
