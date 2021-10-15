import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export interface MockedNavigatorProps {
	component: React.FunctionComponent;
	params?: Record<string, any>;
}

const Stack = createStackNavigator();
const MockedNavigator = ({component, params = {},}: MockedNavigatorProps): JSX.Element => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="MockedScreen"
					component={component}
					initialParams={params}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MockedNavigator;
