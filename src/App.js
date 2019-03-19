import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import './App.css'
import image from './1.jpeg'

const App = () => {
	// Data

	const usersData = [
		{ id: 1, name: 'Udin', school: 'SMAK 2',phone: '089636173049' ,line: 'sap_25'},
		{ id: 2, name: 'Saih', school: 'SMAK 2',phone: '089636173049' ,line: 'sap_25'},
		{ id: 3, name: 'Yakob', school: 'SMAK 2',phone: '089636173049' ,line: 'sap_25'}
	]

	const initialFormState = { id: null, name: '', school: '', phone:'', line: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
					<h1 className="title">Welcome to Our Event !</h1>
					<div className="flex-row">
						<div className="flex-large add">
							{editing ? (
								<Fragment>
									<h2>Edit user</h2>
									<EditUserForm
										editing={editing}
										setEditing={setEditing}
										currentUser={currentUser}
										updateUser={updateUser}
									/>
								</Fragment>
							) : (
								<Fragment>
									<h2 className="txtInput">Input Your Data</h2>
									<AddUserForm addUser={addUser} />
								</Fragment>
							)}
						</div>
					</div>

			<div className="flex-row">
				<div className="flex-large">
					<div className="view">
						<h2 className="viewTxt">View users</h2>
						<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
