import { StatusBar } from "expo-status-bar";
import LogIn from "./screen/LogIn";
import Register from "./screen/Register";
import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  // return <LogIn />;
  //return <Register/>
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LogIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
