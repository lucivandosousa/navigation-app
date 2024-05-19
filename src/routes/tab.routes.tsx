import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"

import Home from "../screens/Home"
import New from "../screens/New"

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#9999FF"
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#CCCCFF"
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
          tabBarLabel: "Início"
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Feather name="plus" color={color} size={size}/>,
          tabBarLabel: "Novo"
        }}
      />
    </Tab.Navigator>
  )
}