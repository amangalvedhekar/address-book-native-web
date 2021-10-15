import React from "react";
import {View, Text, Pressable} from "react-native";

export default function ContactCard({fName, lName, onClick,}: any) {
	return (
		<Pressable
			style={
				{
					borderRadius: 20,
					height: 90,
					paddingVertical: 8
				}}
			onPress={onClick}
		>
			<View style={{display: 'flex', flexDirection: 'row',}}>
				<Text style={{textAlign: 'center', fontSize: 24}}>
					{`${fName} ${lName}`}
				</Text>
			</View>
		</Pressable>
	);
}
