import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Gorjeta } from "../Screens/Gorjeta";
import { Home } from "../Screens/Home";
import { Login } from "../Screens/Login";


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Gorjeta"
        component={Gorjeta}
      />
    </Navigator>
  )
}