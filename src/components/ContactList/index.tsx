import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, Platform, SafeAreaView} from "react-native";
import {Card} from "react-native-paper";
import {useContactDispatcher, useContacts, getContactList} from "../../context/contacts";
import ContactCard from "../ContactCard";

export default function ContactList() {
	const value = useContactDispatcher();
	const [pageNumber, setPageNumber] = useState(1);
	const {contacts} = useContacts();
	useEffect(() => {
		(async () => {
			await getContactList({dispatch: value, pageNumber, count: 15});

		})();
	}, [pageNumber]);
const handleOnEndReached = useCallback(() => {
	if (Platform.OS !== 'web') {
		setPageNumber(() => pageNumber + 1);
	}

},[pageNumber]);
	return (
		<SafeAreaView>
			<FlatList
				data={contacts}
				keyExtractor={(item, index) => `${item.id.value}${item.id.name}${index}`
				}
				renderItem={({item}) => (
					<ContactCard fName={item.name.first} lName={item.name.last} pic={item.picture.large}/>)}
				onEndReachedThreshold={.6}
				onEndReached={handleOnEndReached}
			/>
		</SafeAreaView>
	)
}
