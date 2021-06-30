import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts : [
			{
				_id   : '60dc74f4c35111240ef79746',
				name  : 'Ted Johnson',
				email : 'ted@gmail.com',
				phone : '333-333-3333',
				__v   : 0,
			},
			{
				_id   : '60dc74385ebd6b23ff8844a1',
				name  : 'Sarah Smith',
				email : 'ssmith@gmail.com',
				phone : '9295236682',
			},
			{
				_id   : '60dc7391688c4523dd1d1df7',
				name  : 'Sarah Smith',
				email : 'ssmith@gmail.com',
				phone : '9295236682',
			},
		],
	};

	const [
		state,
		dispatch,
	] = useReducer(contactReducer, initialState);

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contact

	// Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts : state.contacts,
			}}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
