//-------------------------------
// App Dependencies 
//-------------------------------

  import React from 'react';
  import { AppRegistry, View } from 'react-native';
  import Header from './src/components/Header';
  import AlbumList from './src/components/AlbumList';

//-------------------------------
// Header Component
//-------------------------------

  const App = () => {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  };

//-------------------------------
// Export Component
//-------------------------------

  AppRegistry.registerComponent('albums', () => App);
