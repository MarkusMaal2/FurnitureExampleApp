// React dependencies
import React, { useEffect, useState } from "react";
import {Image } from "react-native";
// auth components
// app components
import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Routes from './Routes'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Config from "react-native-config";



export const UserContext = React.createContext();
export const ProfileContext = React.createContext();
export const ServicesContext = React.createContext([]);
// styling colors
import { colors } from "./src/utils/colors";


const App = () => {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [services, setServices] = useState();

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

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <ProfileContext.Provider value={{profile, setProfile}}>
        <ServicesContext.Provider value={{services, setServices}}>
            <Routes/>
          </ServicesContext.Provider>
        </ProfileContext.Provider>
      </UserContext.Provider>
    </SafeAreaProvider>
  )
}

export default App;