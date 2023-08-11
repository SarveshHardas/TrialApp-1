import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Cricket from '../Screen/Cricket';
import Fitness from '../Screen/Fitness';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;
            if (route.name === 'Cricket') {
              iconName = focused ? 'tennisball' : 'tennisball-outline';
            } else if (route.name === 'Fitness') {
              iconName = focused ? 'barbell' : 'barbell-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'orange',
        }}>
        <Tab.Screen name="Cricket" component={Cricket} />
        <Tab.Screen name="Fitness" component={Fitness} />
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  bottomStyle: {
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
