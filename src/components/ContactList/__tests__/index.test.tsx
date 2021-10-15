import {render} from "@testing-library/react-native";
import ContactList from "../index";
import MockedNavigator from "../../../utils/tests";
import React from "react";

describe(' Contact List', function () {
it('renders', () => {
	const component = render(<MockedNavigator component={ContactList} />);
	component.debug();
})
});
