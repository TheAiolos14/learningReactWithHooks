import React, { useState } from 'react'
import './Form.css'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', school: '', phone: '', line: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.school) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />

			<label>School</label>
			<input type="text" name="school" value={user.school} onChange={handleInputChange} />

			<label>Phone Number</label>
			<input type="text" name="phone" value={user.phone} onChange={handleInputChange} />

			<label>Line</label>
			<input type="text" name="line" value={user.line} onChange={handleInputChange} />

			<button className="btnAdd">Add new user</button>
		</form>
	)
}

export default AddUserForm
