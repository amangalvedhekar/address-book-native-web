import React from "react";
import {SafeAreaView, View, Text, Image, Platform} from "react-native";
import {useRoute} from "@react-navigation/native";
import {ContactInformation} from "../fetcher/types";

interface RouteParams {
	params: { item: ContactInformation };
	key: string;
	name: string;
}

export default function ContactDetailScreen() {
	const {params} = useRoute<RouteParams>();
	const {item} = params;
	return (
		<View style={{display: 'flex', alignItems: 'center'}}>
			<Image source={{uri: item.picture.large}}
						 style={{height: Platform.OS === 'web' ? '20rem' : '40%', width: '40%', borderRadius: 24}}
						 resizeMode="stretch"/>
			<Text>{item.name.first}</Text>
			<Text>{item.name.last}</Text>

		</View>
	);
}