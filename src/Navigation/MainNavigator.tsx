import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet} from "react-native";
import TabBarIcon, { CustomTabBarButton, CustomTabBarIcon } from "../Components/Navigation/TabBarIcon";
import SampleScreen from "../Screens/Sample.Screen";
import globals from "../assets/constants/globals";


const Tab=createBottomTabNavigator();

const MainTabs=()=>{
  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
          position:"absolute",
          bottom:15,
          left:20,
          right:20,
          backgroundColor:"white",
          borderRadius:15,
          height:60,
          alignItems:"center",
          justifyContent:"center",
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={SampleScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon color="red" name="home" labelName="Home" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={SampleScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon color="red" name="wallet" labelName="Wallet" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="ChargeScreen"
        component={SampleScreen}
        options={{
          tabBarIcon:(focused)=>(
            <CustomTabBarIcon focused={focused}/>
          ),
        }}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SampleScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon color="red" name="bookmark-o" labelName="Saved" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={SampleScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon color="red" name="user" labelName="Profile" focused={focused}/>),
        }}
      />

    </Tab.Navigator>
  )
}

export default MainTabs


const styles =StyleSheet.create({
  shadow:{
    elevation:5,
    shadowColor: globals.primaryColor,
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 1,
    shadowRadius:2,
  }
})