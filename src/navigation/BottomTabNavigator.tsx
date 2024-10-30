import {themeColors} from '../theme';
import {images} from '../assets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
const {
  streamIcon,
  classWorkIcon,
  exploreIcon,
  newsIcon,
  notificationIcon,
  userIcon,
} = images;
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
    <Tab.Navigator initialRouteName="Noticias">
      <Tab.Screen
        name="Noticias"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={newsIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          tabBarShowLabel: false,
          ...extraTabOptions,
        }}
      />

      <Tab.Screen
        name="Notificaciones"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={notificationIcon}
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
        name="Perfil"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={userIcon}
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
