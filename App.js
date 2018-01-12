import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('Details') }
            title= "Go to details"/>
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> DetailsScreen </Text>
    <Button onPress={() => navigation.navigate('Home') }
            title= "Go Home Homie"/>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;
