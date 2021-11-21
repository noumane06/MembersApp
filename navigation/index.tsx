
import * as React from 'react';
import { ColorSchemeName, View,Text } from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeSvg from '../assets/Svgs/HomeSvg';
import WalletSvg from '../assets/Svgs/WalletSvg';
import ProfileSvg from '../assets/Svgs/ProfileSvg';
import PackageSvg from '../assets/Svgs/PackageSvg';
import NotificationSvg from '../assets/Svgs/NotificationSvg';
import HomeScreen, { HomeScreenNavigationProp } from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PackageScreen from '../screens/PackageScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CameraScreen from '../screens/CameraScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#131112';

interface IHomeROute {
  navigation : HomeScreenNavigationProp,
}

const HomeRoute:React.SFC<IHomeROute> = ({navigation}) => {
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon : ({focused ,color,size})=>{
              if(route.name === "HomeScreen")
                return <HomeSvg width={20} height={20} color={color} />
              if(route.name === "Wallet")
                return <WalletSvg width={20} height={20} color={color} />
              if(route.name === "Profile")
                return <ProfileSvg width={20} height={20} color={color} />
              if(route.name === "Package")
                return <PackageSvg width={20} height={20} color={color} />
              if(route.name === "Notification")
                return <NotificationSvg width={20} height={20} color={color} />
          },
          tabBarActiveTintColor : "#FF5A45",
          tabBarInactiveTintColor : "#FFFFFF",
          tabBarActiveBackgroundColor : "#131112",
          tabBarInactiveBackgroundColor : "#131112",
          headerShown : false,
          tabBarShowLabel:  false,
          tabBarStyle : {
            borderTopColor: '#131112',
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#131112',
          }
        })}
        >        
          <Tab.Screen name="HomeScreen" 
          >
            {() => <HomeScreen navigation={navigation} />}
          </Tab.Screen>
          <Tab.Screen name="Wallet" 
            
          >
            {() => <WalletScreen/>}
          </Tab.Screen>
          <Tab.Screen name="Profile" >
            {() => <ProfileScreen />}
          </Tab.Screen>
          <Tab.Screen name="Package" >
            {() => <PackageScreen />}
          </Tab.Screen>
          <Tab.Screen name="Notification"  >
                {() => <NotificationScreen />}
          </Tab.Screen>
        </Tab.Navigator>
  );}


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  return (
    <NavigationContainer theme={navTheme} >
      <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
          >
            {({navigation}) => <HomeRoute navigation={navigation}/>}
          </Stack.Screen>
          <Stack.Screen
          options={{headerShown: false}}
          name="Camera"
          >
            {({navigation}) => <CameraScreen navigation={navigation}/>}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

