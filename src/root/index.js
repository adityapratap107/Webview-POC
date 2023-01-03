import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Fragment} from 'react';
import {Platform, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Help from '../components/help';
import Home from '../components/home';
import HomeIcon from '../assets/images/common/home.svg';
import HomeFill from '../assets/images/common/homeFill.svg';
import HelpIcon from '../assets/images/common/help.svg';
import HelpFill from '../assets/images/common/helpFill.svg';
import useStyle from './styles';
import NormalHeader from '../components/common/header';
import Purchase from '../components/purchase';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2f5f6e',
  },
};

const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        // options={{header: props => <NormalHeader name="Home" />}}
      />
    </Stack.Navigator>
  );
};

const HelpTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HelpScreen"
        component={Help}
        // options={{header: props => <NormalHeader name="Help" />}}
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  const styles = useStyle();
  return (
    <Fragment>
      <SafeAreaView />
      <SafeAreaView style={styles.bottomTabSafeArea}>
        <StatusBar backgroundColor={'#2f5f6e'} />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 50,
              paddingBottom: 0,
            },
            tabBarLabelStyle: {
              bottom: 6,
            },
            tabBarActiveTintColor: '#000',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeTab}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tabBarAddIcon}>
                  {focused ? (
                    <HomeFill height={20} width={20} />
                  ) : (
                    <HomeIcon height={20} width={20} />
                  )}
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Purchase"
            component={Purchase}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tabBarAddIcon}>
                  {focused ? (
                    <HomeFill height={20} width={20} />
                  ) : (
                    <HomeIcon height={20} width={20} />
                  )}
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Help"
            component={HelpTab}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tabBarAddIcon}>
                  {focused ? (
                    <HelpFill height={20} width={20} />
                  ) : (
                    <HelpIcon height={20} width={20} />
                  )}
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </Fragment>
  );
};

const Root = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      {/* // <NavigationContainer> */}
      {/* <StatusBar
        backgroundColor="#2f5f6e"
        barStyle={'light-content'}
        hidden={false}
      /> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
