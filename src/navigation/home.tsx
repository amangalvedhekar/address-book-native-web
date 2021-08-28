import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from "../screens/ContactList";
import ContactDetailScreen from "../screens/ContactDetail";
import {Screens} from "./types";
const HomeStack = createNativeStackNavigator();
export default function HomeScreens() {
	return(
		<HomeStack.Navigator>
			<HomeStack.Screen
				name={Screens.Contacts}
				component={ContactScreen}
			/>
			<HomeStack.Screen
				name={Screens.ContactDetails}
				component={ContactDetailScreen}
				options={{headerShown: false}}
			/>
		</HomeStack.Navigator>
	);
}