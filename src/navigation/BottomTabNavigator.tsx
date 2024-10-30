import {themeColors} from '../theme';
import {images} from '../assets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
const {streamIcon, classWorkIcon, exploreIcon} = images;
const extraTabOptions = {
  tabBarLabelStyle: {fontFamily: 'exo'},
  tabBarStyle: {borderTopRightRadius: 12, borderTopLeftRadius: 12},
  tabBarActiveTintColor: '#1B396A',
  tabBarInactiveTintColor: '#364356',
};
const Tab = createBottomTabNavigator();

import Home from '../screens/Home';

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Explore">
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={exploreIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Stream"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={streamIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Classwork"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={classWorkIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
    </Tab.Navigator>
  );
}
