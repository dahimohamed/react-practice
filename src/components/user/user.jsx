import { useState } from "react";

export const User = ({ user, onRename, onDelete }) => {
    const [newUserName, setNewUserName] = useState(user.name);
  return (
    <>
      {user.name}
      
     <form
       onSubmit={(event) => {
        event.preventDefault();
        
        if (newUserName) {
          onRename(user.id, newUserName);
              
        }
        
        setNewUserName('');
       }}
     >
       
        <input
          type="text"
          value={newUserName}
          onChange={(event) => {
          setNewUserName(event.target.value);
        }}
        />
        
        <button type="submit">
          save
        </button>
        <button
            type="submit"
            onClick={() => {
                onDelete(user.id);
            }}
        >
            x
        </button>   
     </form>    
              
    </>
  )
}
