import React from "react";

const EditableRow = ({ editFormData, editFormHandle}) => {
  return (
    <tr>
      <td>
        <div className="inner">
            <input 
            type="text" 
            id="first_input" 
            name="ID" 
            placeholder="ID"
            value={editFormData.ID}
            onChange={editFormHandle}
            />
        </div>
      </td>
      <td>
        <div className="inner">
          <input 
          type="text" 
          name="name" 
          value={editFormData.fullName}
          placeholder="Full Name"
          onChange={editFormHandle}
           />
        </div>
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
