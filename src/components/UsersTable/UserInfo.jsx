import { useEffect, useState } from "react"
import { getUser, getUserTodos } from "../../users";

export const UserInfo = ({userId}) => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  
  const loadData = async () => {
    const [currentUser, currentTodos] = await Promise.all ([
      getUser(userId),
      getUserTodos(userId)
    ])
    
    setUser(currentUser);
    setTodos(currentTodos);
  }
    
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [userId])

  if (!user) {
    return <p>Loading...</p>
  }
    
  return (
    <div className="card">
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{user?.name }</p>
                    <p className="subtitle is-6">{user?.email }</p>
                </div>
            </div>

            <div className="content">
              <p className="title is-5">Todos:</p>
              
              <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                      <label className="checkbox">
                        <input
                        type="checkbox"
                        checked={todo.completed}
                        readOnly
                        />
                        &nbsp;
                        {todo.title}
                      </label>
                    </li>
                ))}
              </ul>
            </div>
        </div>
    </div>
  );
};
