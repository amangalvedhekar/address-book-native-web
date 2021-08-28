import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreens from "./home";

const Tabs = createBottomTabNavigator();
export default function Navigation() {
	return (
		<NavigationContainer>
			<Tabs.Navigator
				initialRouteName="home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Tabs.Screen name="home" component={HomeScreens}/>
			</Tabs.Navigator>
		</NavigationContainer>
	);
}