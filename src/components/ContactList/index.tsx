import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Platform, SafeAreaView} from "react-native";
import {useContactDispatcher, useContacts, getContactList} from "../../context/contacts";
import ContactCard from "../ContactCard";
import {useNavigation} from "@react-navigation/native";
import {Screens} from "../../navigation/types";

export default function ContactList() {
	const value = useContactDispatcher();
	const {navigate} = useNavigation();
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

	}, [pageNumber]);
	const handlePress = () => navigate(Screens.ContactDetails);
	return (
		<FlatList
			data={contacts}
			keyExtractor={(item, index) => `${item.id.value}${item.id.name}${index}`
			}
			renderItem={({item}) => (
				<ContactCard
					fName={item.name.first}
					lName={item.name.last}
					pic={item.picture.large}
					onClick={handlePress}
				/>)}
			onEndReachedThreshold={.6}
			onEndReached={handleOnEndReached}
		/>
	)
}
