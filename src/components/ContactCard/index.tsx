import React from "react";
import {Image, View, Text} from "react-native";

export default function ContactCard({fName,lName,pic}:any) {
	return (
		<View style={{borderBottomWidth: 1, borderColor: 'black', margin:4,borderRadius:20, height: 90, paddingVertical: 8}}>
			<View style={{display: 'flex', flexDirection: 'row', }}>
				<Image
					source={{uri: pic}}
					resizeMode="cover"
					style={{flex: .4,height: 60,width: 60,}}
				/>
				<Text style={{textAlign: 'center', fontSize: 32}}>
				{`${fName} ${lName}`}
				</Text>
				{/*<Card.Cover source={{uri:pic}} />*/}

			</View>
		</View>
	);
}
