import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../components/WelcomeScreen";
import SubscribeScreen from "../components/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
