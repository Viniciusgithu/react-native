import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Screens/Home";
import { Register } from "../Screens/Register";


const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
  return(
    <Navigator>
      <Screen
        name="Register"
        component={Register}
      />
      <Screen
        name="Home"
        component={Home}
      />

    </Navigator>
  )
}