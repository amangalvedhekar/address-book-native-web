import defaultState from "./utils";
import {ActionTypes, ContactAction} from "./types";
import {ContactInformation} from "../../fetcher/types";

export default function (state = defaultState, action: ActionTypes): {contacts: ContactInformation[]; isLoading: boolean;} {
	switch (action.type) {
		case ContactAction.fetchRequest:
			return {
				...state,
				isLoading: true,
			}
		case ContactAction.fetchSuccess:
			return {
				...state,
				contacts: [...state.contacts,...action.payload],
				isLoading: false
			}
		case ContactAction.fetchFailure:
			return {
				...state,
				isLoading: false
			}
		default:
			return defaultState;
	}
}