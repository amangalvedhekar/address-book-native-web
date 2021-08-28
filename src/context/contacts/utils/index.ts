import {ContactInformation} from "../../../fetcher/types";

const defaultState: {contacts: ContactInformation[]; isLoading: boolean} = {
	contacts: [],
	isLoading: false,
};

export default defaultState;
