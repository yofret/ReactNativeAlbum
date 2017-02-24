//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { ScrollView } from 'react-native';
	import axios from 'axios';
	import AlbumDetail from './AlbumDetail';

//-------------------------------
// AlbumList Component
//-------------------------------

	class AlbumList extends Component {
		//Component State
		state = {
			albums: []
		}

		//Life cycle methods
		componentWillMount() {
			axios.get('https://rallycoding.herokuapp.com/api/music_albums')
				.then(response => this.setState({ albums: response.data }));
		}

		// Render methods
		renderAlbums() {
			return this.state.albums.map(album => 
				<AlbumDetail key={album.title} album={album} />
			);
		}

		render() {
			return (
				<ScrollView>
					{this.renderAlbums()}
				</ScrollView>
			);
		}					
	}

//-------------------------------
// Export Component
//-------------------------------

	export default AlbumList;
