//-------------------------------
// App Dependencies 
//-------------------------------
import React from 'react';
import { Text } from 'react-native';

//-------------------------------
// Header Component
//-------------------------------
const Header = () => {

	const { textStyle } = styles;

	return <Text style={textStyle} >Albums</Text>;
};

const styles = {
	textStyle: {
		fontSize: 20
	}
};

//-------------------------------
// Export Component
//-------------------------------
export default Header;
