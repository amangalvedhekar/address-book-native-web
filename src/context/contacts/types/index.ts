import {ReactElement} from "react";
export interface ContactReducerDispatch {
	type: ContactAction;
	payload?: any;
}
export interface GetContactProps {
	dispatch: (action: ContactReducerDispatch) => void;
	pageNumber: number;
	count: number;
}

export interface ContextProviderProps {
	children: ReactElement;
}

export enum ContactAction {
	fetchRequest = 'FETCH_REQUEST',
	fetchSuccess = 'FETCH_SUCCESS',
	fetchFailure = 'FETCH_FAILURE',
	getPageNumber = 'GET_PAGE_NUMBER',
	updatePageNumber = 'UPDATE_PAGE_NUMBER',
}

export interface ActionTypes {
	type: ContactAction;
	payload: any;
}
