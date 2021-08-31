import React from "react";
import ContactScreen from "../screens/ContactList";
import ContactDetailScreen from "../screens/ContactDetail";
import {Screens} from "./types";
import {TransitionPresets, createStackNavigator} from "@react-navigation/stack";
const HomeStack = createStackNavigator();
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
				options={{
					...TransitionPresets.ModalPresentationIOS,
				}}
			/>
		</HomeStack.Navigator>
	);
}