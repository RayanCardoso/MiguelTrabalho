import React, { useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from './src/screens/Quiz';
import QuizQuestionsScreen from './src/screens/QuizQuestions';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogoutScreen from './src/screens/LogoutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Quiz" >
      <Drawer.Screen name="Quiz" component={QuizScreen} />
      <Drawer.Screen name="Sair" options={{headerShown: false}} component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen  options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen  options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen  options={{headerShown: false}} name="DrawerRoutes" component={DrawerRoutes} />
        <Stack.Screen name="QuizQuestions" component={QuizQuestionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
