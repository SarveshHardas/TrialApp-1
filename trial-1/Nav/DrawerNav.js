import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNav from "./TabNav";
import Profile from "../Screen/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={TabNav} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
