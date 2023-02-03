import { useState } from 'react';
import { UsersList } from '../quantitySelector/quantitySelector';
import { NewUserForm } from '../quantitySelector/newUserForm';
// import { UsersList } from './quantitySelector/quantitySelector';
// import { newUserForm } from './components/quantitySelector/quantitySelector';

const usersFromServer = [
  {id: 1, name: 'med'},
  {id: 2, name: 'ali'},
  {id: 3, name: 'sidi'},
  {id: 4, name: 'cad'},
  {id: 5, name: 'tara'},
]

export const Main1 = () => {
  const [users, setUsers] = useState(usersFromServer);


  const addUser = (name) => {
    setUsers(state => {
      const newUser = {
        id: state.length + 1,
        name,
      }

      return [...state, newUser];
    });
  };

  const deleteUser = (userId) => {
    setUsers(state => {
      return state.filter(({ id }) => id !== userId);
    });
  };

  const renameUser = (userId, newUserName) => {
    setUsers(state => (
      state.map(user => {
        if (userId !== user.id) {
          return user;
        }

        return {
          id: userId,
          name: newUserName,
        }
      })
    ))
  }

  return (
    <div className="App">
      <h1>Words list</h1>

      <NewUserForm onAdd={addUser} />

      <UsersList
        users={users}
        onRename={renameUser}
        onDelete={deleteUser}
      />
    </div>
 )
}
