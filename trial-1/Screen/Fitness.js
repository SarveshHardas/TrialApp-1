import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class Fitness extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <SafeAreaView style={styles.androidSafeArea} />
        <SafeAreaProvider>
          <Header
            leftComponent={{
              icon: 'menu',
              color: '#fff',
            }}
            centerComponent={{
              text: 'App_Name',
              style: styles.heading,
            }}
          />
          <Text>Exercise Boosts Brainpower.....</Text>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontFamily: 'Time new',
    color: 'white',
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
