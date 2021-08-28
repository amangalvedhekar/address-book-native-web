import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ContactsProvider,} from "./src/context/contacts";
import {SWRConfig} from "swr";
import ContactList from "./src/components/ContactList";
import swrConfig from "./src/fetcher/globalConfig";
import Navigation from "./src/navigation";

export default function App() {
	return (

			<SWRConfig value={swrConfig}>
				<ContactsProvider>
					<Navigation />
				</ContactsProvider>
			</SWRConfig>

	);
}
