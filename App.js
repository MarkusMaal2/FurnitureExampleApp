import { React, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";
import { colors } from "./src/utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import { GoogleSignin } from "@react-native-google-signin/google-signin";

import Config from "react-native-config";

const Stack = createNativeStackNavigator();

const App = () => {
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
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="SignUpScreen" component={SignUp} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="SignInScreen" component={SignIn} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;