import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabRoutes from './tab.routes'
import Profile from '../screens/Profile'

const Stack = createNativeStackNavigator()

export default function StackRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Profile}
      />
    </Stack.Navigator>
  )
}