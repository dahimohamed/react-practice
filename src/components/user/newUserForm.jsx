import { useState } from "react";

export const NewUserForm = ({onAdd}) => {
    const [newUser, setNewUser] = useState('');

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                if (newUser) {
                    onAdd(newUser);

                }

                setNewUser('');
            }}
        >
            <input
                type="text"
                placeholder='Enter a name'
                value={newUser}
                onChange={(event) => {
                    setNewUser(event.target.value);
                }}
            />
            <button type='submit'>Add</button>
        </form>
    );
};