import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from "@expo/vector-icons"

import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes'

const Drawer = createDrawerNavigator()

export default function DrawerRouter() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name="Inicio"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          drawerLabel: "Início"
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
          drawerLabel: "Perfil"
        }}
      />
    </Drawer.Navigator>
  )
}