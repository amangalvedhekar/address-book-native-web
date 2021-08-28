import React, {createContext, useContext, useReducer} from 'react';
import contactReducer from "./contactReducer";
import defaultState from "./utils";
import axios from "axios";
import {ContactAction, ContextProviderProps, GetContactProps} from "./types";
import {ContactListResponse} from "../../fetcher/types";

const ContactsContext = createContext(defaultState);
const DispatchContext = createContext<any>(null);
function ContactsProvider({children}: ContextProviderProps) {
	const [contacts, contactsDispatch] = useReducer(contactReducer, defaultState);


	return (
		<DispatchContext.Provider value={contactsDispatch}>
		<ContactsContext.Provider value={contacts}>
			{children}
		</ContactsContext.Provider>
		</DispatchContext.Provider>
	)
}

function useContacts() {
	const context = useContext(ContactsContext);
	if (context === undefined) {
		throw new Error('useContact cannot be used outside Contact Provider');
	}
	return context;
}

function useContactDispatcher() {
	const context = useContext(DispatchContext);
	if (context === undefined) {
		throw new Error('useContactDispatcher cannot be used outside Contact Provider');
	}
	return context;
}

async function getContactList({dispatch, pageNumber, count,}: GetContactProps): Promise<void> {
	dispatch({type: ContactAction.fetchRequest});
	try {
		const {data}: {data: ContactListResponse} = await axios.get(`https://randomuser.me/api/?inc=gender,name,nat,dob,phone,cell,picture,id&page=${pageNumber}&results=${count}&seed=abc`);
		const {results} = data;
		dispatch({type: ContactAction.fetchSuccess, payload: results});
	}catch(e) {
		dispatch({type: ContactAction.fetchFailure,});
	}
}
export {
	ContactsProvider,
	useContacts,
	getContactList,
	useContactDispatcher,
}
