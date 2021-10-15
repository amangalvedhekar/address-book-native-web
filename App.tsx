import React from 'react';
import {ContactsProvider,} from "./src/context/contacts";
// import {SWRConfig} from "swr";
// import swrConfig from "./src/fetcher/globalConfig";
import Navigation from "./src/navigation";

export default function App() {
	return (
		<ContactsProvider>
			<Navigation/>
		</ContactsProvider>
	);
}
