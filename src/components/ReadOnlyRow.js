import React from 'react'

const ReadOnlyRow = ({ contact, clickHandle}) => {
    return (
        
            <tr>
              <td>{contact.ID}</td>
              <td>{contact.fullName}</td>
              <button onClick={(e) => 
              clickHandle(e, contact)}>Edit</button>
              <button >Close</button>
              
            </tr>
    )
}

export default ReadOnlyRow
