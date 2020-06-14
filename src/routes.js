import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, Alert } from 'react-native';
import Main from './pages/Main';
import ListAnimals from './pages/ListAnimals';
import Register from './pages/Register';

const Stack = createStackNavigator();

function BottonNavigation() {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      tabBarOptions={{
        activeTintColor: '#5656e9',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        inactiveTintColor: '#CCC',
      }}
    >
      <Bottom.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="assignment-ind" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Listar"
        component={ListAnimals}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FehClínica">
        <Stack.Screen
          name="FehClínica"
          component={BottonNavigation}
          options={{
            headerLeftContainerStyle: {
              marginLeft: 10,
            },
            headerLeft: () => <Icon name="reorder" color="#000" size={25} />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Cadastrar" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
