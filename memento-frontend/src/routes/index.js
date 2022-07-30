import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from '../pages/Home'
import Auth from '../pages/Auth'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Home" component={Home} 
	    options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}