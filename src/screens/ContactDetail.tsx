import React from "react";
import {SafeAreaView, View, Text, Image} from "react-native";
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
		<View>
			<Image source={{uri:item.picture.large}} style={{height: '50%', width: '80%'}} resizeMode="stretch"/>
			<Text>{item.name.first}</Text>
			<Text>{item.name.last}</Text>
			
		</View>
	);
}