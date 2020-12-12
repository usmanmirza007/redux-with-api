import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './../screens/HomeScreen';
import InstagramScreen from './../screens/InstagramScreen';
import Phone from './../screens/Phone';

const Stack = createStackNavigator();

export const RootStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={'InstagramScreen'} headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="InstagramScreen" component={InstagramScreen} />
      <Stack.Screen name="Phone" component={Phone} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
