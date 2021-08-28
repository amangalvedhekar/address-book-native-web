import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ContactsProvider,} from "./src/context/contacts";
import {SWRConfig} from "swr";
import ContactList from "./src/components/ContactList";
import swrConfig from "./src/fetcher/globalConfig";
export default function App() {
  return (
    <View>
      <SWRConfig value={swrConfig}>
      <ContactsProvider>
        <ContactList />
      </ContactsProvider>
      </SWRConfig>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
