/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable, Image, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessageScreen from '../screens/MessageScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ProfilePicture from '../components/ProfilePicture';
import NewPostScreen from '../screens/NewPostScreen';
import { getUser } from '../src/graphql/queries';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="NewPost" component={NewPostScreen} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
    alignContent: 'center',
  },
  profilePic: {
    width: 35,
    height: 35,
    alignContent: 'center',
  }
})
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {

      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true})
      if(!userInfo) return;

      try {
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        if (userData) {
          setUser(userData.data.getUser);
        }
      }catch (error) {
        console.log(error)
      }

    }
    fetchUser();
  }, [])


  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerTitle: () => <Image style={styles.logo} source={require('../assets/images/logo1x.png')} />,
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={30} />,
          headerLeft: () => (
            <ProfilePicture image={user? user.image :''} size={30} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign name="setting" color={Colors[colorScheme].tint} size={30} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" color={color} size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" color={color} size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <AntDesign name="message1" color={color} size={30} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
