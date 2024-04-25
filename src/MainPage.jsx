import './Main.css'
import { getUsers, getBoxes, useQuery } from 'wasp/client/operations'

export const MainPage = () => {
  const { data: users, isLoading, error } = useQuery(getUsers);
  const { data: boxes } = useQuery(getBoxes);
  return (
    <div className="container">
      <h1> Home Page </h1>
      <main>
        {users && <UsersList users={users} />}
        {boxes && <BoxesList boxes={boxes} />}

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
const BoxesList = ({ boxes }) => {

  return (
    <div>
      {boxes.map((box, idx) => (
        <h1> {box.name} {box.userId} </h1>
      ))}
    </div>
  )
}
