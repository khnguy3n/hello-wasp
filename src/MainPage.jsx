import './Main.css'
import { getUsers, useQuery } from 'wasp/client/operations'

export const MainPage = () => {
  const { data: users, isLoading, error } = useQuery(getUsers)
  return (
    <div className="container">
      <h1> Home Page </h1>
      <main>
        {users && <UsersList users={users} />}

        {isLoading && 'Loading...'}
        {error && 'Error: ' + error}
      </main>
    </div>
  )
}

const UserView = ({ user }) => {
  return (
    <div>
      {user.name}
    </div>
  )
}

const UsersList = ({ users }) => {
  if (!users?.length) return <div>No Users</div>

  return (
    <div>
      {users.map((user, idx) => (
        <UserView user={user} key={idx} />
      ))}
    </div>
  )
}
