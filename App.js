// React dependencies
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
// auth components
import Splash from "./src/screens/auth/Splash";
import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";
// app components
import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import ProductDetails from "./src/screens/app/ProductDetails";
import Settings from "./src/screens/app/Settings";
import CreateListing from "./src/screens/app/CreateListing";
import AsyncStorage from '@react-native-async-storage/async-storage';



// styling colors
import { colors } from "./src/utils/colors";

export const UserContext = React.createContext();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

// react navigation dependencies
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import Config from "react-native-config";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size }) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused ? require('./src/assets/nav/home_active.png') : require('./src/assets/nav/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused ? require('./src/assets/nav/favorites_active.png') : require('./src/assets/nav/favorites.png');
          } else if (route.name === 'Profile') {
            icon = focused ? require('./src/assets/nav/person_active.png') : require('./src/assets/nav/person.png');
          }

          return <Image style={{width: 24, height: 24}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGrey}
    })}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Favorites" component={Favorites}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileStack}></Tab.Screen>
    </Tab.Navigator>
  )
}

const App = () => {
  const isSignedIn = false;
  const [user, setUser] = useState();

useEffect(() => {
  (async() => {
    const accessToken = await AsyncStorage.getItem('auth_token')
    setUser({accessToken})
  })()
}, []);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: [
        'https://www.googleapis.com/auth/drive.readonly'
      ],
      webClientId: Config.WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.IOS_CLIENT_ID,
    })
  })

  const theme = {
    colors: {background: colors.white},
  }
  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="SplashScreen">
            {
              user?.accessToken
              ?
              (
                <>
                  <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                  <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}} />
                </>
              )
              :
              (
                <>
                  <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}}></Stack.Screen>
                  <Stack.Screen name="SignUpScreen" component={SignUp} options={{headerShown: false}}></Stack.Screen>
                  <Stack.Screen name="SignInScreen" component={SignIn} options={{headerShown: false}}></Stack.Screen>
                </>
              )
          }
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </SafeAreaProvider>
  )
}

export default App;