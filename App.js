import React from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import SignUp from "./src/screens/auth/SignUp";

const WEB_CLIENT_ID = "545318985288-elm8jh9d5jkqr0k8ktst5k1lhqv13627.apps.googleusercontent.com";
const IOS_CLIENT_ID = "545318985288-vq9vhqinvsjoudjf7npesdrn5i7heho0.apps.googleusercontent.com";

const App = () => {
  return (
    <SafeAreaView>
      <SignUp/>
    </SafeAreaView>
  )
}

export default App;