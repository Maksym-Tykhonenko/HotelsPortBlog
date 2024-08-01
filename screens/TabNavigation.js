import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteScreen, MainScreen} from '../screens';
import {GENERAL_COLORS} from '../constants/GeneralColors';
import SignIn from './SignIn';
import {
  favoritesHotelsTabIcon,
  hotelsTabIcon,
  userTabIcon,
} from '../components/icons/icons';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        //tabBarActiveTintColor: GENERAL_COLORS.green2,
        //tabBarInactiveTintColor: GENERAL_COLORS.black,
        tabBarStyle: {
          backgroundColor: GENERAL_COLORS.green1,
          borderRadius: 25,
          margin: 10,
          height: 90,
          padding: 10,
          position: 'absolute',
          // alignItems: 'center',
          // justifyContent: 'center',
        },
        tabBarItemStyle: {
          borderRadius: 20,
          //backgroundColor: 'transparent',
          //backgroundColor: GENERAL_COLORS.mainBg1,
          //backgroundColor: '#FFFFFF' + 90,
          // justifyContent: 'center',
          // alignItems: 'center',
          // alignContent: 'center',
          // alignSelf: 'center',
          marginHorizontal: 20,
        },
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarActiveBackgroundColor: '#800080',
          tabBarInactiveBackgroundColor: 'green',
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/icons/hotel1.png')}
                style={{width: 30, height: 30}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarActiveBackgroundColor: '#800080',
          tabBarInactiveBackgroundColor: 'green',
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/icons/heart.png')}
                style={{color: 'white', width: 30, height: 30}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SignIn}
        options={{
          tabBarActiveBackgroundColor: '#800080',
          tabBarInactiveBackgroundColor: 'green',
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/icons/user.png')}
                style={{color: 'white', width: 35, height: 35}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;
//tabBarIcon: ({color}) => favoritesHotelsTabIcon(color),
