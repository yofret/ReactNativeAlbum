//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { AppRegistry } from 'react-native';
	import Header from './src/components/Header';
	import AlbumList from './src/components/AlbumList'

//-------------------------------
// Header Component
//-------------------------------

	const App = () => {
	    return (
	        <Header headerText={'Albums'}/>
	    );
	};

//-------------------------------
// Export Component
//-------------------------------

	AppRegistry.registerComponent('albums', () => App);
