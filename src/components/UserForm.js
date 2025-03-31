import React from "react";
import useInput from "../hooks/useInput";
function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName()
    resetLastName()
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName: </label>
          <input
            {...bindFirstName}
            type="text"
          /> 
        </div>
        <div>
          <label>LastName: </label>
          <input
           {...bindLastName}
            type="text"
          />
        </div>
        <button type='submit' onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
