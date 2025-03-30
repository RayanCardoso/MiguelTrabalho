import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import QuizScreen from './src/screens/Quiz';
import QuizQuestionsScreen from './src/screens/QuizQuestions';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quiz">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="QuizQuestions" component={QuizQuestionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
