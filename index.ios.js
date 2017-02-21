//-------------------------------
// App Dependencies 
//-------------------------------
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//-------------------------------
// Header Component
//-------------------------------

const App = () => {
    return (
        <Header />
    );
};

//-------------------------------
// Export Component
//-------------------------------
AppRegistry.registerComponent('albums', () => App);

