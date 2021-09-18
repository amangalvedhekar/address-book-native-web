import React, {useCallback, useEffect, useState, useRef} from 'react';
import {FlatList, Platform, SafeAreaView} from "react-native";
import {useContactDispatcher, useContacts, getContactList} from "../../context/contacts";
import ContactCard from "../ContactCard";
import {useNavigation, useScrollToTop} from "@react-navigation/native";
import {Screens} from "../../navigation/types";
import {ContactInformation, Id} from "../../fetcher/types";

export default function ContactList() {
	const contactListRef = useRef(null);
	const value = useContactDispatcher();
	const {navigate} = useNavigation();
	const [pageNumber, setPageNumber] = useState(1);
	const {contacts} = useContacts();

	useScrollToTop(contactListRef);
	useEffect(() => {
		(async () => {
			await getContactList({dispatch: value, pageNumber, count: 15});

		})();
	}, [pageNumber]);
	const handleOnEndReached = useCallback(() => {
		setPageNumber(() => pageNumber + 1);
	}, [pageNumber]);
	// @ts-ignore
	const handlePress = (item: ContactInformation) => navigate(Screens.ContactDetails, {item});
	return (
		<FlatList
			data={contacts}
			ref={contactListRef}
			keyExtractor={(item, index) => `${item.id.value}${item.id.name}${index}`
			}
			renderItem={({item}) => (
				<ContactCard
					fName={item.name.first}
					lName={item.name.last}
					pic={item.picture.large}
					onClick={() => handlePress(item)}
				/>)}
			onEndReachedThreshold={.6}
			onEndReached={handleOnEndReached}
		/>
	)
}
