//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { Text, View } from 'react-native';

//-------------------------------
// Album Detail Component
//-------------------------------

	const AlbumDetail = (props) => {
		return (
			<View>
				<Text>{props.album.title}</Text>
			</View>
		);
	};

//-------------------------------
// Export Component
//-------------------------------

	export default AlbumDetail;
