import React from "react";
import {Image, View, Text, Pressable} from "react-native";

export default function ContactCard({fName, lName, onClick}: any) {
	return (
		<Pressable
			style={
				{
					borderBottomWidth: 1,
					borderColor: 'black',
					margin: 4,
					borderRadius: 20,
					height: 90,
					paddingVertical: 8
				}}
			onPress={onClick}
		>
			<View style={{display: 'flex', flexDirection: 'row',}}>
				{/*<Image*/}
				{/*	source={{uri: pic}}*/}
				{/*	resizeMode="cover"*/}
				{/*	style={{flex: .4,height: 60,width: 60,}}*/}
				{/*/>*/}
				<Text style={{textAlign: 'center', fontSize: 24}}>
					{`${fName} ${lName}`}
				</Text>
			</View>
		</Pressable>
	);
}
