//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { Text } from 'react-native';
	import Card from './Card';
	import CardSection from './CardSection';

//-------------------------------
// Album Detail Component
//-------------------------------

	const AlbumDetail = (props) => {
		return (
			<Card>
				<CardSection>
					<Text>{props.album.title}</Text>
				</CardSection>
			</Card>
		);
	};

//-------------------------------
// Export Component
//-------------------------------

	export default AlbumDetail;
