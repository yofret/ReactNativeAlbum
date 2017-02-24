//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { Text, TouchableOpacity } from 'react-native';

//-------------------------------
// Name Component
//-------------------------------

	const Button = (props) => {

		return (
			<TouchableOpacity>
				<Text>Click me Dude</Text>
			</TouchableOpacity>
		);
	};

//-------------------------------
// Export Component
//-------------------------------
	export default Button;
