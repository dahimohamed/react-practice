import { User } from "./user";

export const UsersList = ({ users, onRename, onDelete}) => (
    <ul>
        {users.map((user) => (
            <li key={user.id}>
              <User
                user={user}
                onRename={onRename}
                onDelete={onDelete}
              />
            </li>
        ))}
    </ul>
);
