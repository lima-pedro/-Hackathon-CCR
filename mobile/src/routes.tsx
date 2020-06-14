import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Event from './pages/Event'
import Hidratation from './pages/Hidratation'
import Sleep from './pages/Sleep'
import App from '../App'

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Hidratation" component={Hidratation} />
        <AppStack.Screen name="Sleep" component={Sleep} />
        <AppStack.Screen name="Event" component={Event} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes