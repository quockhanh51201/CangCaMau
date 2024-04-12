import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import ProfileScreen from '../screens/profileScreen';
import HomeCBScreen from '../screens/homeCBScreen';
import ProfileCBScreen from '../screens/profileCBScreen';

const NavMenuCBComponent = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 76,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          position: 'absolute',
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name="TabHome"
        component={HomeCBScreen}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarItemStyle: {
            justifyContent: 'space-evenly',
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.Home}
              resizeMode="stretch"
              style={{
                tintColor: focused ? '#3345CB' : '#000000',
                height: 25,
                width: 25,
              }}></Image>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 14,
                color: '#3345CB',
                marginLeft: 5,
              }}>
              {focused ? 'Trang chủ' : ''}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="TabNocation"
        component={NotificationScreen}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarItemStyle: {
            justifyContent: 'space-evenly',
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.Notification}
              resizeMode="stretch"
              style={{
                tintColor: focused ? '#3345CB' : '#000000',
                height: 25,
                width: 25,
              }}></Image>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 14,
                color: '#3345CB',
                marginLeft: 5,
              }}>
              {focused ? 'Thông báo' : ''}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={ProfileCBScreen}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarItemStyle: {
            justifyContent: 'space-evenly',
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.Profile2}
              resizeMode="stretch"
              style={{
                tintColor: focused ? '#3345CB' : '#000000',
                height: 25,
                width: 25,
              }}></Image>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 14,
                color: '#3345CB',
                marginLeft: 5,
              }}>
              {focused ? 'Cá nhân' : ''}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavMenuCBComponent;
