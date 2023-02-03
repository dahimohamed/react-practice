// import EyeIcon from './view.png';

export const UsersTable = ({ users, userId, selectUser }) => {
  return (
    <table className="table is-narrow">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
          </thead>
        
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{ user.id }</td>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td>
                {userId === user.id
                ? (
                    <button
                      type="button"
                      className="button is-link"
                      onClick={() => {
                        selectUser(0);
                      }}
                    >
                      <span className="icon">
                        -
                      </span>
                    </button> 
                  )
                : (
                   <button
                      type="button"
                      className="button"
                      onClick={() => {
                        selectUser(user.id);
                      }}
                >
                  <span className="icon">
                    +
                  </span>
                </button> 
                )} 
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  );
}
