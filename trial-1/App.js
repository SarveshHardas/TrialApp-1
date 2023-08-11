import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './Nav/DrawerNav';

import Cricket from './Screen/Cricket';
import Fitness from './Screen/Fitness'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
        <DrawerNavigator/>
      </NavigationContainer>
    );
  }
}
