import { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
// import { ColorsList } from './components/colors/ColorsList';
import 'bulma/css/bulma.css';
import { UsersTable } from './components/UsersTable/UsersTable';
import { getUsers } from './users';
import { UserInfo } from './components/UsersTable/UserInfo';
import { LoadingError } from './components/UsersTable/LoadingError';


export const App = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoadingFailed, setIsLoadingFailed] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    setIsLoadingFailed(false);
    setIsInitialized(true);

    try {
      const loadedUsers = await getUsers();

      setUsers(loadedUsers)
    } catch (error) {
      setIsLoadingFailed(true);
      setLoading(false);
      setIsInitialized(false);
    }

  }

  const handleSelectedUserId = (id) => {
    setUserId(id);
  }


  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">
            Mate academy
          </h1>

          
          <div className="columns">
            {!isInitialized
              ? (
                <button
                  type='button'
                  className={classNames('button', {
                    'is-loading': loading,
                  })}
                  onClick={loadUsers}
                >
                  Load users
                </button>  
              )
              : (
                users.length === 0
                  ? (<p>No users found</p>)
                  : (
                    <div className="column">
                      <p className="subtitle">
                        Users table
                      </p>
                      <UsersTable
                        users={users}
                        userId={userId}
                        selectUser={handleSelectedUserId}
                      />
                    </div>
                  )
              )
            }
            
            <div className="column">
              {userId !== 0 && (
                <UserInfo
                  userId={userId}
                />
              )}
            </div>

            {isLoadingFailed && (
              <LoadingError />
            )}
          </div>
        </div>
      </section>
    </div>
 )
}

export default App;
