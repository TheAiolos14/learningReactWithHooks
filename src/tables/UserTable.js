import React from 'react'
import './Table.css'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>School</th>
        <th>Phone Number</th>
        <th>Line</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.school}</td>
            <td>{user.phone}</td>
            <td>{user.line}</td>

            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
